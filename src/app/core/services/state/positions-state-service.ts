import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, of} from 'rxjs';
import {Position} from '../../models/Position';
import {PositionsHttpService} from '../api/positions-http-service';

@Injectable({providedIn: 'root'})
export class PositionsStateService {

  private positionsSubject = new BehaviorSubject<Position[]>([]);
  readonly positions$ = this.positionsSubject.asObservable();

  constructor(private positionsHttpService: PositionsHttpService) {
  }

  loadPositions(portfolioId: number): void {
    this.positionsHttpService.getPositionsByPortfolioId(portfolioId)
      .pipe(
        catchError(err => {
          console.error('Błąd pobierania pozycji', err);
          return of([]); // fallback
        })
      )
      .subscribe(data => this.positionsSubject.next(data));
  }

  addPosition(position: Omit<Position, "id" | "currency">): void {
    this.positionsHttpService.addPosition(position)
      .pipe(
        catchError(err => {
          console.error('Błąd dodawania pozycji', err);
          return of(null);
        })
      )
      .subscribe(newPosition => {
        if (newPosition) {
          this.positionsSubject.next([...this.positionsSubject.value, newPosition]);
        }
      });
  }

  updatePosition(position: Position): void {
    this.positionsHttpService.updatePosition(position)
      .pipe(
        catchError(err => {
          console.error('Błąd aktualizacji pozycji', err);
          return of(null);
        }),
        map(res => res ?? position) // jeśli backend nie zwraca obiektu, użyj lokalnego
      )
      .subscribe(updatedPosition => {
        if (!updatedPosition) return;

        const currentPositions = this.positionsSubject.value;
        const index = this.positionsSubject.value.findIndex(position => position.id === updatedPosition.id);
        if (index !== -1) {
          const newPositions = [...currentPositions];
          newPositions[index] = updatedPosition;
          this.positionsSubject.next(newPositions);
        }
      });
  }
}

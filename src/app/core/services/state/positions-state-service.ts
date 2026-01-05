import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, EMPTY, switchMap, tap} from 'rxjs';
import {Position} from '../../models/Position';
import {PositionsHttpService} from '../api/positions-http-service';

@Injectable({providedIn: 'root'})
export class PositionsStateService {

  private readonly positionsSubject = new BehaviorSubject<Position[]>([]);
  readonly positions$ = this.positionsSubject.asObservable();

  constructor(private httpService: PositionsHttpService) {
  }

  loadPositions(portfolioId: number) {
    return this.httpService.getPositionsByPortfolioId(portfolioId).pipe(
      tap(positions => this.positionsSubject.next(positions)),
      catchError(err => {
        console.error('Błąd pobierania pozycji', err);
        this.positionsSubject.next([]);
        return EMPTY;
      })
    );
  }

  addPosition(position: Omit<Position, 'id' | 'currency'>) {
    return this.httpService.addPosition(position).pipe(
      switchMap(() => this.loadPositions(position.portfolioId)), // 🔹 pobierz wszystko ponownie
      catchError(err => {
        console.error('Błąd dodawania pozycji', err);
        return EMPTY;
      })
    )
  }

  updatePosition(position: Position) {
   return  this.httpService.updatePosition(position).pipe(
      switchMap(() => this.httpService.getPositionsByPortfolioId(position.portfolioId)), // 🔹 pobierz wszystko ponownie
      tap(positions => this.positionsSubject.next(positions)),
      catchError(err => {
        console.error('Błąd aktualizacji pozycji', err);
        return EMPTY;
      })
    )
  }
}

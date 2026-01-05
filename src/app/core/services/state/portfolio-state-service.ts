import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, EMPTY, Observable, of, switchMap, tap} from 'rxjs';
import {Portfolio} from '../../models/Portfolio';
import {PortfolioHttpService} from '../api/portfolio-http-service';

@Injectable({providedIn: 'root'})
export class PortfolioStateService {

  private readonly portfoliosSubject = new BehaviorSubject<Portfolio[]>([]);
  readonly portfolios$ = this.portfoliosSubject.asObservable();

  constructor(private portfolioHttpService: PortfolioHttpService) {
  }

  loadPortfolios(): Observable<Portfolio[]> {
    return this.portfolioHttpService.getPortfolios().pipe(
      catchError(err => {
        console.error('Błąd pobierania portfeli', err);
        return of([]);
      }),
      tap(portfolios => this.portfoliosSubject.next(portfolios))
    );
  }

  addPortfolio(portfolio: Omit<Portfolio, 'id'>): Observable<Portfolio[]> {
    return this.portfolioHttpService.addPortfolio(portfolio).pipe(
      switchMap(() => this.loadPortfolios()), // pobierz aktualną listę po dodaniu
      catchError(err => {
        console.error('Błąd dodawania portfela', err);
        return EMPTY;
      })
    );
  }

  getPortfolioById(id: number): Observable<Portfolio | undefined> {
    return this.portfolioHttpService.getPortfolioById(id).pipe(
      catchError(err => {
        console.error('Błąd pobierania portfela', err);
        return of(undefined);
      })
    );
  }
}

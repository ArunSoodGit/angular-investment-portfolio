import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, of} from 'rxjs';
import {Portfolio} from '../../models/Portfolio';
import {PortfolioHttpService} from '../api/portfolio-http-service';

@Injectable({providedIn: 'root'})
export class PortfolioStateService {

  private portfoliosSubject = new BehaviorSubject<Portfolio[]>([]);
  readonly portfolios$ = this.portfoliosSubject.asObservable();

  constructor(private portfolioHttpService: PortfolioHttpService) {
  }

  loadPortfolios(): void {
    // tu subskrypcja w serwisie jest OK, bo HttpClient kończy Observable
    this.portfolioHttpService.getPortfolios().pipe(
      catchError(err => {
        console.error('Błąd pobierania portfeli', err);
        return of([]); // fallback
      })
    ).subscribe(data => this.portfoliosSubject.next(data));
  }

  addPortfolio(portfolio: Omit<Portfolio, 'id'>): void {
    this.portfolioHttpService.addPortfolio(portfolio).pipe(
      catchError(err => {
        console.error('Błąd dodawania portfela', err);
        return of(null);
      })
    ).subscribe(newPortfolio => {
      if (newPortfolio) {
        this.portfoliosSubject.next([...this.portfoliosSubject.value, newPortfolio]);
      }
    });
  }

  getPortfolioById(id: number) {
    return this.portfolioHttpService.getPortfolioById(id).pipe(
      catchError(err => {
        console.error('Błąd pobierania portfela', err);
        return of(undefined); // fallback
      })
    );
  }
}

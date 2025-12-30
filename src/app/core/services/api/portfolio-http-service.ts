import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import {Portfolio} from '../../models/Portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioHttpService {

  private baseUrl = '/api/portfolios'

  private http = inject(HttpClient);

  getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(this.baseUrl)
      .pipe(
        catchError(err => {
          console.error('Błąd pobierania portfeli', err);
          // return throwError(() => err);
          return of([]);
        }),
      );
  }

  getPortfolioById(id: number): Observable<Portfolio> {
    return this.http.get<Portfolio>(`${this.baseUrl}/${id}`);
  }

  addPortfolio(portfolio: Omit<Portfolio, 'id'>): Observable<Portfolio> {
    return this.http.post<Portfolio>(this.baseUrl, portfolio);
  }
}

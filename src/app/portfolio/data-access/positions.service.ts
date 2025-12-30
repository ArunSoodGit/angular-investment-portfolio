import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Position} from '../position/model/Position';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  private mockPositions: Position[] = [
    // Portfolio 1
    {id: 1, symbol: 'AAPL', quantity: 10, averagePrice: 150, currency: "USD", portfolioId: 1},
    {id: 2, symbol: 'GOOGL', quantity: 5, averagePrice: 2800, currency: "USD", portfolioId: 1},
    {id: 3, symbol: 'MSFT', quantity: 12, averagePrice: 300, currency: "USD", portfolioId: 1},

    // Portfolio 2
    {id: 4, symbol: 'PZU', quantity: 8, averagePrice: 700, currency: "PLN", portfolioId: 2},
    {id: 5, symbol: 'GPW', quantity: 3, averagePrice: 3400, currency: "PLN", portfolioId: 2},
    {id: 6, symbol: 'PKN', quantity: 6, averagePrice: 550, currency: "PLN", portfolioId: 2},

    // Portfolio 3
    {id: 7, symbol: 'BTC', quantity: 0.5, averagePrice: 30000, currency: "EUR", portfolioId: 3},
    {id: 8, symbol: 'ETH', quantity: 2, averagePrice: 2000, currency: "EUR", portfolioId: 3},
    {id: 9, symbol: 'ADA', quantity: 100, averagePrice: 1.2, currency: "EUR", portfolioId: 3},
  ];

  private url = 'http://localhost:8080/positions';

  constructor(private http: HttpClient) {
  }

  getPositions(): Observable<Position[]> {
    // return this.http.get<Position[]>(this.url);
    return of(this.mockPositions);
  }

  getPositionsByPortfolioId(portfolioId: number) {
    return of(this.mockPositions.filter(p => p.portfolioId === portfolioId));
  }
}

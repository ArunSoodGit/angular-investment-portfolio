import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Position} from '../../models/Position';
import {Injectable} from '@angular/core';
import {Portfolio} from '../../models/Portfolio';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDatabaseService implements InMemoryDbService {
  createDb() {
    const portfolios: Portfolio[] = [
      {id: 1, name: 'XTB', totalAmount: 12000, profit: 289.97, currency: "USD"},
      {id: 2, name: 'BOSSA', totalAmount: 43565, profit: -1500, currency: "PLN"},
      {id: 3, name: 'SAXO', totalAmount: 1970, profit: 65, currency: "EUR"}
    ];
    const positions: Position[] = [
      {id: 1, symbol: 'AAPL', quantity: 10, averagePrice: 150, currency: "USD", portfolioId: 1},
      {id: 2, symbol: 'GOOGL', quantity: 5, averagePrice: 2800, currency: "USD", portfolioId: 1},
      {id: 3, symbol: 'MSFT', quantity: 12, averagePrice: 300, currency: "USD", portfolioId: 1},

      {id: 4, symbol: 'PZU', quantity: 8, averagePrice: 700, currency: "PLN", portfolioId: 2},
      {id: 5, symbol: 'GPW', quantity: 3, averagePrice: 3400, currency: "PLN", portfolioId: 2},
      {id: 6, symbol: 'PKN', quantity: 6, averagePrice: 550, currency: "PLN", portfolioId: 2},

      {id: 7, symbol: 'BTC', quantity: 0.5, averagePrice: 30000, currency: "EUR", portfolioId: 3},
      {id: 8, symbol: 'ETH', quantity: 2, averagePrice: 2000, currency: "EUR", portfolioId: 3},
      {id: 9, symbol: 'ADA', quantity: 100, averagePrice: 1.2, currency: "EUR", portfolioId: 3},
    ];
    return {portfolios, positions};
  }
}

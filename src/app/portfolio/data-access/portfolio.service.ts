import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Portfolio} from '../model/Portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private mockPortfolios: Portfolio[] = [
    {id: 1, name: 'XTB', totalAmount: 12000, profit: 289.97, currency: "USD"},
    {id: 2, name: 'BOSSA', totalAmount: 43565, profit: -1500, currency: "PLN"},
    {id: 3, name: 'SAXO', totalAmount: 1970, profit: 65, currency: "EUR"}
  ];

  private url = 'http://localhost:8080/portfolios';

  constructor(private http: HttpClient) {
  }

  getPortfolios(): Observable<Portfolio[]> {
    // return this.http.get<Portfolio[]>(this.url);
    return of(this.mockPortfolios);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Position} from '../position/model/Position';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  private mockPositions: Position[] = [
    { id: 1, symbol: 'AAPL', quantity: 10, averagePrice: 150 },
    { id: 2, symbol: 'GOOGL', quantity: 5, averagePrice: 2800 },
    { id: 3, symbol: 'TSLA', quantity: 8, averagePrice: 700 },
  ];

  private url = 'http://localhost:8080/positions';

  constructor(private http: HttpClient) {
  }

  getPositions(): Observable<Position[]> {
    // return this.http.get<Position[]>(this.url);
    return of(this.mockPositions);
  }
}

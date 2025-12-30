import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Position } from '../../models/Position';

@Injectable({ providedIn: 'root' })
export class PositionsHttpService {

  private url = '/api/positions';
  private http = inject(HttpClient);

  getPositionsByPortfolioId(portfolioId: number): Observable<Position[]> {
    return this.http.get<Position[]>(this.url, {
      params: { portfolioId: portfolioId.toString() }
    });
  }

  addPosition(position: Omit<Position, "id" | "currency">): Observable<Position> {
    return this.http.post<Position>(this.url, position);
  }

  updatePosition(position: Position) {
    return this.http.put<Position>(this.url, position);
  }
}

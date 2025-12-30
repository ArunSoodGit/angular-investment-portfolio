import {Component, inject} from '@angular/core';
import {
  PortfolioPositionTableComponent
} from '../positions/portfolio-position-table-component/portfolio-position-table-component';
import {filter, map, switchMap, take, tap} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {PortfolioPositionChart} from '../positions/portfolio-position-chart/portfolio-position-chart';
import {PositionsStateService} from '../../../core/services/state/positions-state-service';
import {PortfolioStateService} from '../../../core/services/state/portfolio-state-service';
import {AsyncPipe} from '@angular/common';
import {CreatePosition} from '../positions/modal/add-position-modal-component/add-position-modal-component';
import {Position} from '../../../core/models/Position';

@Component({
  selector: 'app-portfolio-details-component',
  imports: [
    PortfolioPositionTableComponent,
    PortfolioPositionChart,
    AsyncPipe
  ],
  templateUrl: './portfolio-detail-component.html',
  styleUrl: './portfolio-detail-component.css',
})
export class PortfolioDetailComponent {

  private route = inject(ActivatedRoute);
  private portfolioStateService = inject(PortfolioStateService);
  private positionsStateService = inject(PositionsStateService);

  private portfolioId$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    filter(id => !isNaN(id))
  );

  portfolio$ = this.portfolioId$.pipe(
    switchMap(id => this.portfolioStateService.getPortfolioById(id))
  );

  positions$ = this.portfolioId$.pipe(
    tap(id => this.positionsStateService.loadPositions(id)),
    switchMap(() => this.positionsStateService.positions$)
  );

  addPosition(newPositionData: CreatePosition) {
    this.portfolioId$.pipe(take(1)).subscribe(portfolioId => {
      this.positionsStateService.addPosition({
        ...newPositionData,
        portfolioId,
      });
    });
  }

  protected editPosition(updatedPosition: Position) {
    this.positionsStateService.updatePosition(updatedPosition);
  }
}

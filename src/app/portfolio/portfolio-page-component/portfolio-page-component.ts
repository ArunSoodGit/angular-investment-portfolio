import {Component, OnInit} from '@angular/core';
import {
  PortfolioPositionTableComponent
} from '../position/portfolio-position-table-component/portfolio-position-table-component';
import {PositionsService} from '../data-access/positions.service';
import {Position} from '../position/model/Position';
import {Observable, of, switchMap} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {AddPositionModalComponent} from '../position/add-position-modal-component/add-position-modal-component';
import {ActivatedRoute} from '@angular/router';
import {PortfolioPositionChart} from '../position/portfolio-position-chart/portfolio-position-chart';

@Component({
  selector: 'app-portfolio-page-component',
  imports: [
    PortfolioPositionTableComponent,
    AsyncPipe,
    AddPositionModalComponent,
    PortfolioPositionChart
  ],
  templateUrl: './portfolio-page-component.html',
  styleUrl: './portfolio-page-component.css',
})
export class PortfolioPageComponent implements OnInit {

  positions$: Observable<Position[]> = of([]);
  isModalOpen = false;

  constructor(
    private route: ActivatedRoute,
    private positionsService: PositionsService
  ) {}

  ngOnInit(): void {
    this.positions$ = this.route.paramMap.pipe(
      switchMap(params => {
        const portfolioId = Number(params.get('id'));
        return this.positionsService.getPositionsByPortfolioId(portfolioId);
      })
    );
  }

  loadPositions() {
    this.positions$ = this.positionsService.getPositions();
  }

  openModal() { this.isModalOpen = true; }
  closeModal() { this.isModalOpen = false; }

  protected addPosition($event: Position) {
    console.log($event);
  }
}

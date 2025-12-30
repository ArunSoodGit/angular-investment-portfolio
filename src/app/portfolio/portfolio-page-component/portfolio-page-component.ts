import {Component, OnInit} from '@angular/core';
import {
  PortfolioPositionTableComponent
} from '../position/portfolio-position-table-component/portfolio-position-table-component';
import {PositionsService} from '../data-access/positions.service';
import {Position} from '../position/model/Position';
import {Observable, of} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-portfolio-page-component',
  imports: [
    PortfolioPositionTableComponent,
    AsyncPipe
  ],
  templateUrl: './portfolio-page-component.html',
  styleUrl: './portfolio-page-component.css',
})
export class PortfolioPageComponent implements OnInit {

  positions$: Observable<Position[]> = of([]);

  constructor(private positionsService: PositionsService) {
  }

  ngOnInit(): void {
    this.loadPositions();
  }

  loadPositions() {
    this.positions$ = this.positionsService.getPositions();
  }
}

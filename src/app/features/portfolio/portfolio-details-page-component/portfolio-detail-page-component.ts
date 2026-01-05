import {Component, inject, OnInit} from '@angular/core';
import {distinctUntilChanged, filter, map, switchMap, take} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {PositionsStateService} from '../../../core/services/state/positions-state-service';
import {PortfolioStateService} from '../../../core/services/state/portfolio-state-service';
import {AsyncPipe} from '@angular/common';
import {Position} from '../../../core/models/Position';
import {
  PortfolioPositionsSectionComponent
} from './portfolio-positions-section-component/portfolio-positions-section-component';
import {CreatePosition} from './model/CreatePosition';

@Component({
  selector: 'app-portfolio-details-page-component',
  imports: [
    AsyncPipe,
    PortfolioPositionsSectionComponent
  ],
  templateUrl: './portfolio-detail-page-component.html',
  styleUrl: './portfolio-details-page-component.css',
  standalone: true
})
export class PortfolioDetailPage implements OnInit {

  private route = inject(ActivatedRoute);
  private portfolioStateService = inject(PortfolioStateService);
  private positionsStateService = inject(PositionsStateService);

  private readonly portfolioId$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    filter(id => !isNaN(id)),
    distinctUntilChanged()
  );

  protected readonly portfolio$ = this.portfolioId$.pipe(
    switchMap(id => this.portfolioStateService.getPortfolioById(id))
  );

  protected readonly positions$ = this.positionsStateService.positions$;

  ngOnInit(): void {
    this.portfolioId$.pipe(take(1)).pipe(
      switchMap(id => this.positionsStateService.loadPositions(id))
    ).subscribe();
  }

  addPosition(data: CreatePosition) {
    this.portfolioId$.pipe(
      take(1),
      switchMap(id => this.positionsStateService.addPosition({...data, portfolioId: id}))
    ).subscribe();
  }

  editPosition(position: Position) {
    this.positionsStateService.updatePosition(position).subscribe();
  }

  addTransaction(position: Position) {
    // TODO: Implementacja dodawania transakcji
    console.log('Dodawanie transakcji dla pozycji:', position);
  }

  removePosition(position: Position) {
    // TODO: Implementacja usuwania pozycji
    console.log('Usuwanie pozycji:', position);
  }
}

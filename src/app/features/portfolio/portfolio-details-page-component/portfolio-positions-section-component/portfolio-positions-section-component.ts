import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Position} from '../../../../core/models/Position';
import {PortfolioPositionTableComponent} from './portfolio-position-table-component/portfolio-position-table-component';
import {PortfolioPositionChartComponent} from './portfolio-position-chart-component/portfolio-position-chart-component';
import {CreatePosition} from '../model/CreatePosition';

@Component({
  selector: 'app-portfolio-positions-section',
  imports: [
    PortfolioPositionTableComponent,
    PortfolioPositionChartComponent
  ],
  templateUrl: './portfolio-positions-section-component.html',
  styleUrl: './portfolio-positions-section-component.css',
  standalone: true
})
export class PortfolioPositionsSectionComponent {

  @Input({ required: true }) positions!: Position[];

  @Output() addPositionEvent = new EventEmitter<CreatePosition>();
  @Output() editPositionEvent = new EventEmitter<Position>();
  @Output() addTransactionEvent = new EventEmitter<Position>();
  @Output() removePositionEvent = new EventEmitter<Position>();

  protected handleAddTransaction(position: Position) {
    this.addTransactionEvent.emit(position);
  }

  protected handleRemovePosition(position: Position) {
    this.removePositionEvent.emit(position);
  }
}

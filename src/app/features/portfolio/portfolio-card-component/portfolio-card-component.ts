import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Portfolio} from '../../../core/models/Portfolio';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-portfolio-card-component',
  imports: [
    DecimalPipe
  ],
  templateUrl: './portfolio-card-component.html',
  styleUrl: './portfolio-card-component.css',
})
export class PortfolioCardComponent {

  @Input({required: true}) portfolio!: Portfolio
  @Output() portfolioClicked = new EventEmitter<Number>();

  showPortfolio() {
    this.portfolioClicked.emit(this.portfolio.id);
  }
}

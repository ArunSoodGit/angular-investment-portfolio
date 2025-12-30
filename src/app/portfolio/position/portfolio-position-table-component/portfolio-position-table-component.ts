import {Component, Input} from '@angular/core';
import {Position} from '../model/Position';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-portfolio-position-table',
  imports: [
    DecimalPipe,
  ],
  templateUrl: './portfolio-position-table-component.html',
  styleUrl: './portfolio-position-table-component.css',
})
export class PortfolioPositionTableComponent {

  @Input({required: true}) positions: Position[] = [];

}

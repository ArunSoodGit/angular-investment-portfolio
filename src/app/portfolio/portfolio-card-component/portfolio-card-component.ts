import {Component, Input} from '@angular/core';
import {Portfolio} from '../model/Portfolio';
import {Router} from '@angular/router';
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

  constructor(private router: Router) {
  }

  protected openPortfolio() {
    this.router.navigate(['/portfolio', this.portfolio.id]);
  }
}

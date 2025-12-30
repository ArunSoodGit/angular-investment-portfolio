import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Portfolio} from '../model/Portfolio';
import {PortfolioService} from '../data-access/portfolio.service';
import {AsyncPipe} from '@angular/common';
import {PortfolioCardComponent} from '../portfolio-card-component/portfolio-card-component';

@Component({
  selector: 'app-portfolio-list-component',
  imports: [
    AsyncPipe,
    PortfolioCardComponent
  ],
  templateUrl: './portfolio-list-component.html',
  styleUrl: './portfolio-list-component.css',
})
export class PortfolioListComponent implements OnInit {

  portfolios$: Observable<Portfolio[]> = of([]);

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit(): void {
    this.portfolios$ = this.portfolioService.getPortfolios();
  }
}

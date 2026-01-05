import {Component, inject, OnInit, signal} from '@angular/core';
import {Portfolio} from '../../../core/models/Portfolio';
import {PortfolioCardComponent} from './portfolio-card-component/portfolio-card-component';
import {Router} from '@angular/router';
import {AddPortfolioModalComponent,} from './add-portfolio-modal-component/add-portfolio-modal-component';
import {AsyncPipe} from '@angular/common';
import {PortfolioStateService} from '../../../core/services/state/portfolio-state-service';
import {CreatePortfolio} from './add-portfolio-modal-component/model/CreatePortfolio';

@Component({
  selector: 'app-portfolio-list-page-component',
  imports: [
    PortfolioCardComponent,
    AddPortfolioModalComponent,
    AsyncPipe,
  ],
  templateUrl: './portfolio-list-page-component.html',
  styleUrl: './portfolio-list-page-component.css',
  standalone: true
})
export class PortfolioListPageComponent implements OnInit {

  isModalOpen = signal(false);

  private portfolioStateService = inject(PortfolioStateService);
  private router = inject(Router);

  portfolios$ = this.portfolioStateService.portfolios$;

  ngOnInit(): void {
    this.portfolioStateService.loadPortfolios().subscribe();
  }

  onPortfolioSelected(portfolioId: Number) {
    this.router.navigate(['/portfolio', portfolioId]).then(response => {
      if (!response) {
        console.error('No portfolio found:', portfolioId);
      }
    });
  }

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  addPortfolio($event: CreatePortfolio) {
    const newPortfolio: Omit<Portfolio, 'id'> = {
      ...$event,
      totalAmount: 0,
      profit: 0
    };
    this.portfolioStateService.addPortfolio(newPortfolio).subscribe();
    this.closeModal()
  }
}

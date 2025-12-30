import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliosSummaryComponent } from './portfolios-summary-component';

describe('PortfoliosSummaryComponent', () => {
  let component: PortfoliosSummaryComponent;
  let fixture: ComponentFixture<PortfoliosSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfoliosSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliosSummaryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

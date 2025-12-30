import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPositionChart } from './portfolio-position-chart';

describe('PortfolioPositionChart', () => {
  let component: PortfolioPositionChart;
  let fixture: ComponentFixture<PortfolioPositionChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPositionChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPositionChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

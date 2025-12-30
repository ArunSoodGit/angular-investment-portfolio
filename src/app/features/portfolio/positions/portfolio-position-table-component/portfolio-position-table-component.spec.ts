import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPositionTableComponent } from './portfolio-position-table-component';

describe('PortfolioPositionTableComponent', () => {
  let component: PortfolioPositionTableComponent;
  let fixture: ComponentFixture<PortfolioPositionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPositionTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPositionTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

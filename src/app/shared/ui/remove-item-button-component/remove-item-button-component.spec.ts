import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveItemButtonComponent } from './remove-item-button-component';

describe('RemoveItemButtonComponent', () => {
  let component: RemoveItemButtonComponent;
  let fixture: ComponentFixture<RemoveItemButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveItemButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveItemButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

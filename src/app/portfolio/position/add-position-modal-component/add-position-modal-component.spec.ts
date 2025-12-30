import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPositionModalComponent } from './add-position-modal-component';

describe('AddPositionModalComponent', () => {
  let component: AddPositionModalComponent;
  let fixture: ComponentFixture<AddPositionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPositionModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPositionModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

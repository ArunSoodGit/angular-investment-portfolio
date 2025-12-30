import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPositionModal } from './edit-position-modal';

describe('EditPositionModal', () => {
  let component: EditPositionModal;
  let fixture: ComponentFixture<EditPositionModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPositionModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPositionModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

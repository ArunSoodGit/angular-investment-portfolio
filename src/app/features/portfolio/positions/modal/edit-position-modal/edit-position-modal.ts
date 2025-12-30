import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Position} from '../../../../../core/models/Position';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-position-modal',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-position-modal.html',
  styleUrl: './edit-position-modal.css',
})
export class EditPositionModal {

  private fb = inject(FormBuilder);

  @Input() position!: Position; // wejście do wypełnienia formularza
  @Output() positionEdit = new EventEmitter<Position>();
  @Output() cancel = new EventEmitter<void>();

  form = this.fb.nonNullable.group({
    symbol: ['', Validators.required],
    quantity: [0, [Validators.required, Validators.min(1)]],
    averagePrice: [0, [Validators.required, Validators.min(0)]],
  });

  ngOnChanges() {
    if (this.position) {
      this.form.patchValue({
        symbol: this.position.symbol,
        quantity: this.position.quantity,
        averagePrice: this.position.averagePrice,
      });
    }
  }

  submitForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.positionEdit.emit({...this.position, ...this.form.getRawValue()});
  }

  cancelForm() {
    this.cancel.emit();
  }
}

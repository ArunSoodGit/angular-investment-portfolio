import {Component, EventEmitter, inject, Input, OnChanges, Output} from '@angular/core';
import {Position} from '../../../../../../../core/models/Position';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-position-modal',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-position-modal-component.html',
  styleUrl: './edit-position-modal-component.css',
  standalone: true
})
export class EditPositionModalComponent implements OnChanges{

  private formBuilder = inject(FormBuilder);

  @Input() position!: Position;
  @Output() positionEdited = new EventEmitter<Position>();
  @Output() cancel = new EventEmitter<void>();

  form = this.formBuilder.nonNullable.group({
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

    this.positionEdited.emit({...this.position, ...this.form.getRawValue()});
  }

  cancelForm() {
    this.cancel.emit();
  }
}

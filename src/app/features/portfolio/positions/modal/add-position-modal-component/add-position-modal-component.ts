import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

export interface CreatePosition {
  symbol: string;
  quantity: number;
  averagePrice: number;
}

@Component({
  selector: 'app-add-position-modal',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-position-modal-component.html',
  styleUrl: './add-position-modal-component.css',
})

export class AddPositionModalComponent {

  private formBuilder = inject(FormBuilder);

  @Output() cancel = new EventEmitter<void>();
  @Output() positionSubmit  = new EventEmitter<CreatePosition>();

  form = this.formBuilder.nonNullable.group({
    symbol: ['', Validators.required],
    quantity: [0, [Validators.required, Validators.min(1)]],
    averagePrice: [0, [Validators.required, Validators.min(0)]],
  });

  submitForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.positionSubmit.emit(this.form.getRawValue());
  }

  cancelForm() {
    this.cancel.emit();
  }
}

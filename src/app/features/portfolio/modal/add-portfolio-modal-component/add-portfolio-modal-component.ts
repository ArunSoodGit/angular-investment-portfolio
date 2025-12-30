import {Component, EventEmitter, inject, Output} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

export interface CreatePortfolio {
  name: string;
  currency: string;
}

const allowedCurrencies = ['USD', 'PLN', 'EUR'];

@Component({
  selector: 'app-add-portfolio-modal-component',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-portfolio-modal-component.html',
  styleUrl: './add-portfolio-modal-component.css',
})
export class AddPortfolioModalComponent {

  @Output() submitPortfolio = new EventEmitter<CreatePortfolio>();
  @Output() close = new EventEmitter<void>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    currency: ['', [Validators.required, this.currencyValidator()]],
  });

  currencyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;
      return allowedCurrencies.includes(value) ? null : {invalidCurrency: true};
    };
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitPortfolio.emit(this.form.getRawValue());
  }
}

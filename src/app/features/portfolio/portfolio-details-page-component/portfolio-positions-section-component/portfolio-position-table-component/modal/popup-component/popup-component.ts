import {Component, EventEmitter, Output} from '@angular/core';
import {faEdit, faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-popup-component',
  imports: [
    FaIconComponent
  ],
  templateUrl: './popup-component.html',
  styleUrl: './popup-component.css',
  standalone: true
})
export class PopupComponent {

  @Output() editEvent = new EventEmitter<void>();
  @Output() addTransactionEvent = new EventEmitter<void>();
  @Output() removePositionEvent = new EventEmitter<void>();

  protected readonly faMinus = faMinus;
  protected readonly faPlus = faPlus;
  protected readonly faEdit = faEdit;

  protected editPosition() {
    this.editEvent.emit();
  }

  protected addTransaction() {
    this.addTransactionEvent.emit();
  }

  protected removePosition() {
    this.removePositionEvent.emit();
  }
}

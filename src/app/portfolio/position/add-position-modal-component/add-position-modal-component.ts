import {Component, EventEmitter, model, Output} from '@angular/core';
import {Position} from '../model/Position';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-position-modal',
  imports: [
    FormsModule
  ],
  templateUrl: './add-position-modal-component.html',
  styleUrl: './add-position-modal-component.css',
})
export class AddPositionModalComponent {

  @Output() close = new EventEmitter<void>();
  @Output() submitPosition = new EventEmitter<Position>();

  newPosition: Partial<Position> = {};

  submit() {
    if (this.newPosition.symbol && this.newPosition.quantity != null && this.newPosition.averagePrice != null) {
      this.submitPosition.emit(this.newPosition as Position);
    }
  }
}

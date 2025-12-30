import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {Position} from '../../../../core/models/Position';
import {DecimalPipe} from '@angular/common';
import {
  AddPositionModalComponent,
  CreatePosition
} from '../modal/add-position-modal-component/add-position-modal-component';
import {FaIconComponent, FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faEdit, faEllipsisV, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {EditPositionModal} from '../modal/edit-position-modal/edit-position-modal';

@Component({
  selector: 'app-portfolio-position-table',
  imports: [
    DecimalPipe,
    AddPositionModalComponent,
    FaIconComponent,
    FontAwesomeModule,
    EditPositionModal
  ],
  templateUrl: './portfolio-position-table-component.html',
  styleUrl: './portfolio-position-table-component.css',
})
export class PortfolioPositionTableComponent {

  @Input({required: true}) positions!: Position[];
  @Output() submitAddPosition = new EventEmitter<CreatePosition>();
  @Output() submitEditPosition = new EventEmitter<Position>();

  selectedForEdit = signal<Position | null>(null);
  isAddModalOpen = signal(false);
  isEditModalOpen = signal(false);
  private popupId = signal<number | null>(null);

  faEdit = faEdit;
  faPlus = faPlus;
  faMinus = faMinus;

  constructor(library: FaIconLibrary) {
    library.addIcons(faEdit, faPlus, faMinus,);
  }

  openAddModal() {
    this.isAddModalOpen.set(true);
  }

  closeAddModal() {
    this.isAddModalOpen.set(false);
  }

  openEditModal() {
    this.isEditModalOpen.set(true);
  }

  closeEditModal() {
    this.isEditModalOpen.set(false);
  }

  protected addPosition($event: CreatePosition) {
    this.submitAddPosition.emit($event);
    this.closeAddModal();
  }

  editPosition(position: Position) {
    console.log(position)
    this.selectedForEdit.set(position);
    this.openEditModal();
    this.submitEditPosition.emit(position);
  }

  protected readonly faEllipsisV = faEllipsisV;

  popupOpen() {
    return this.popupId();
  }

  protected addTransaction(position: Position) {

  }

  protected removePosition(position: Position) {

  }

  togglePopup(positionId: number) {
    if (this.popupId() === positionId) {
      this.popupId.set(null);
    } else {
      this.popupId.set(positionId);
    }
  }
}

import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {Position} from '../../../../../core/models/Position';
import {DatePipe, DecimalPipe} from '@angular/common';
import {AddPositionModalComponent,} from './modal/add-position-modal-component/add-position-modal-component';
import {FaIconComponent, FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faEdit, faEllipsisV, faChevronDown, faMinus, faPlus, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {EditPositionModalComponent} from './modal/edit-position-modal-component/edit-position-modal-component';
import {PopupComponent} from './modal/popup-component/popup-component';
import {CreatePosition} from '../../model/CreatePosition';
import {Transaction} from '../../../../../core/models/Transaction';

@Component({
  selector: 'app-portfolio-position-table',
  imports: [
    DecimalPipe,
    AddPositionModalComponent,
    FaIconComponent,
    FontAwesomeModule,
    EditPositionModalComponent,
    PopupComponent,
    DatePipe
  ],
  templateUrl: './portfolio-position-table-component.html',
  styleUrl: './portfolio-position-table-component.css',
  standalone: true
})
export class PortfolioPositionTableComponent {

  @Input({required: true}) positions!: Position[];

  @Output() addPositionEvent = new EventEmitter<CreatePosition>();
  @Output() editPositionEvent = new EventEmitter<Position>();
  @Output() addTransactionEvent = new EventEmitter<Position>();
  @Output() removePositionEvent = new EventEmitter<Position>();

  /** Modal state */
  selectedPositionForEdit = signal<Position | null>(null);
  isAddModalOpen = signal(false);
  isEditModalOpen = signal(false);
  // isRowExpanded = signal(false);

  /** Popup state */
  activePopupId = signal<number | null>(null);
  activeRowId = signal<number | null>(null);

  readonly faEllipsisV = faEllipsisV;
  readonly faChevronDown = faChevronDown;
  private expandedRows = new Set<number>();


  constructor(library: FaIconLibrary) {
    library.addIcons(faEdit, faPlus, faMinus);
  }

  /** MODALE */
  openAddModal() {
    this.isAddModalOpen.set(true);
  }

  closeAddModal() {
    this.isAddModalOpen.set(false);
  }

  openEditModal(position: Position) {
    this.selectedPositionForEdit.set(position);
    this.isEditModalOpen.set(true);
  }

  closeEditModal() {
    this.selectedPositionForEdit.set(null);
    this.isEditModalOpen.set(false);
  }

  /** POPUP */
  togglePopup(positionId: number) {
    this.activePopupId.set(this.activePopupId() === positionId ? null : positionId);
  }

  isPopupOpen(positionId: number) {
    return this.activePopupId() === positionId;
  }

  /** Eventy */
  handleAddPosition(position: CreatePosition) {
    this.addPositionEvent.emit(position);
    this.closeAddModal();
  }

  handleEditPosition(position: Position) {
    this.editPositionEvent.emit(position);
    this.closeEditModal();
  }

  handleAddTransaction(position: Position) {
    this.addTransactionEvent.emit(position);
  }

  handleRemovePosition(position: Position) {
    this.removePositionEvent.emit(position);
  }

  protected getTransactions(position: Position): Transaction[] {
    return [
      {
        id: 1,
        type: 'BUY',
        symbol: position.symbol,
        quantity: 10,
        price: 150,
        date: new Date(),
        positionId: position.id
      },
      {
        id: 2,
        type: 'SELL',
        symbol: position.symbol,
        quantity: 5,
        price: 170,
        date: new Date(),
        positionId: position.id
      },
      {id: 3, type: 'BUY', symbol: position.symbol, quantity: 8, price: 160, date: new Date(), positionId: position.id}
    ];

  }

  protected isRowExpanded(id: number) {
    return this.expandedRows.has(id);
  }

  protected toggleRow(id: number) {
    if (this.expandedRows.has(id)) {
      this.expandedRows.delete(id);
    } else {
      this.expandedRows.add(id);
    }
  }

  protected readonly faChevronUp = faChevronUp;
}

import {Component, EventEmitter, Output} from '@angular/core';
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import {
  featherTrash2,
  featherUser,
  featherCheck,
  featherX,
} from "@ng-icons/feather-icons";
@Component({
  selector: 'app-remove-item-button',
  imports: [],
  templateUrl: './remove-item-button-component.html',
  standalone: true,
  viewProviders: [provideIcons({ featherTrash2, featherUser, featherCheck, featherX })],
  styleUrl: './remove-item-button-component.css',
})
export class RemoveItemButtonComponent {

  @Output() confirm = new EventEmitter<void>();

  removeMode = false;

}

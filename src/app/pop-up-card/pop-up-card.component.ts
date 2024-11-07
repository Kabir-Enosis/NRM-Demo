import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule, TextBoxModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from '@progress/kendo-angular-popup';

@Component({
  selector: 'app-pop-up-card',
  standalone: true,
  imports: [DropDownsModule, PopupModule, InputsModule, TextBoxModule, CommonModule, FormsModule],
  templateUrl: './pop-up-card.component.html',
  styleUrl: './pop-up-card.component.css'
})
export class PopUpCardComponent {
  @Input() filterField: string = '';
  @Input() minFilterNumber: number = 0;
  @Input() maxFilterNumber: number = 100;
  @Input() value: [number, number] = [0, 100];
  @Input() filterAnchor: any;
  @Input() showPopup: boolean = false;

  @Output() showPopupChange = new EventEmitter<boolean>();
  @Output() filterApply = new EventEmitter<void>();
  @Output() filterCancel = new EventEmitter<void>();

  onAnchorViewportLeave() {
    this.showPopup = false;
    this.showPopupChange.emit(this.showPopup);
  }

  onFilterCancel() {
    this.filterCancel.emit();
  }

  onFilterApply() {
    this.filterApply.emit();
  }
}

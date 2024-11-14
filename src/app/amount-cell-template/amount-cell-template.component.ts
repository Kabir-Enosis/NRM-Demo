import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '@progress/kendo-angular-icons';
import { chevronDownIcon, chevronUpIcon, dollarIcon, SVGIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-amount-cell-template',
  standalone: true,
  imports: [IconsModule, FormsModule, CommonModule],
  templateUrl: './amount-cell-template.component.html',
  styleUrl: './amount-cell-template.component.css'
})
export class AmountCellTemplateComponent {
  @Input() dataItem: any;

  
  dollarIcon: SVGIcon = dollarIcon;
  upArrowIcon: SVGIcon = chevronUpIcon;
  downArrowIcon: SVGIcon = chevronDownIcon;
}

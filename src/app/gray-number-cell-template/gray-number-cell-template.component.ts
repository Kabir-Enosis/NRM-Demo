import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '@progress/kendo-angular-icons';
import { dollarIcon, SVGIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-gray-number-cell-template',
  standalone: true,
  imports: [IconsModule, FormsModule, CommonModule],
  templateUrl: './gray-number-cell-template.component.html',
  styleUrl: './gray-number-cell-template.component.css'
})
export class GrayNumberCellTemplateComponent {
  @Input() dataItem: any ;
  @Input() column: any ;
  
  dollarIcon: SVGIcon = dollarIcon;
} 

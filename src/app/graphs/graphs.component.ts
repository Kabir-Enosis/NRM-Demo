import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ListBoxModule } from '@progress/kendo-angular-listbox';
import { ChartModule } from '@progress/kendo-angular-charts';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ChipModule } from '@progress/kendo-angular-buttons';
import { CommonModules } from '../commonModule';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';


@Component({
  selector: 'app-graphs',
  standalone: true,
  imports: [CommonModule, LayoutModule,ListBoxModule, ChartModule, IconsModule, ChipModule, CommonModules, ProgressBarModule],
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.scss'
})
export class GraphsComponent {
  data: any = [];
 
  constructor() {
    for (let idx = 0; idx < 500; idx++) {
      this.data.push({
        value: Math.floor(Math.random() * 100) + 1,
        category: new Date(2000, 0, idx),
      });
  }

  }
  public categoryAxis = {
    max: new Date(2000, 1, 0),
    maxDivisions: 10,
  };

  public valueAxis = {
    labels: {
      format: "#",
    },
  };
}

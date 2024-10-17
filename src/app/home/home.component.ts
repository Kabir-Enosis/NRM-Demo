import { Component } from '@angular/core';
import { ChartModule } from '@progress/kendo-angular-charts';
import { groupBarChartData } from './data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  public groupedData: any[] = groupBarChartData;
  years: any[];

  public constructor () {
    this.years = this.groupedData.map(data => data.year);
  }

  public barSeries: any[] = [
    { name: 'Product A', field: 'value', categoryField: 'year', color: '#FF5733' },
    { name: 'Product B', field: 'value', categoryField: 'year', color: '#33FF57' },
    { name: 'Product C', field: 'value', categoryField: 'year', color: '#3357FF' }
  ];
  

  public groupField = 'category';

  getDataForSeries(seriesName: string): any[] {
    return this.groupedData.filter(item => item.category === seriesName);
  }
  
}

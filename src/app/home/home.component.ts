import { Component, ViewEncapsulation } from '@angular/core';
import { ChartModule } from '@progress/kendo-angular-charts';
import { groupBarChartData } from './data';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { gridData } from './gridData';
import { arrowsSwapIcon, caretAltDownIcon, caretAltExpandIcon, caretAltUpIcon, chevronDownIcon, chevronUpIcon, dollarIcon, filterIcon, searchIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { InputsModule, TextBoxModule } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartModule, CommonModule, GridModule, IconsModule,  InputsModule, TextBoxModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  
  public groupedData: any[] = groupBarChartData;
  years: any[];
  dropdownIcon: SVGIcon = caretAltDownIcon;
  filterIcon: SVGIcon = filterIcon;
  searchIcon: SVGIcon = searchIcon;
  arrowsSwapIcon: SVGIcon = caretAltExpandIcon;
  sortedDescIcon: SVGIcon = caretAltDownIcon;
  sortedAscIcon: SVGIcon = caretAltUpIcon;
  dollarIcon: SVGIcon = dollarIcon;
  upArrowIcon: SVGIcon = chevronUpIcon;
  downArrowIcon: SVGIcon = chevronDownIcon;

  public constructor () {
    this.years = this.groupedData.map(data => data.year);
  }

  public barSeries: any[] = [
    { name: 'Product A', field: 'value', categoryField: 'year', color: '#FF5733' },
    { name: 'Product B', field: 'value', categoryField: 'year', color: '#33FF57' },
    { name: 'Product C', field: 'value', categoryField: 'year', color: '#3357FF' }
  ];
  
  gridData = gridData;
  public groupField = 'category';

  columns = [
  { field: 'check_id', title: 'Check ID', width: 100 },
  { field: 'amount', title: 'Amount', width: 100 },
  { field: 'date', title: 'Date', width: 100 },
  { field: 'producer', title: 'Producer', width: 150 },
  { field: 'gross_income', title: 'Gross Income', width: 120 },
  { field: 'bonus', title: 'Bonus', width: 100 },
  { field: 'deductions', title: 'Deductions', width: 120 },
  { field: 'net_income', title: 'Net Income', width: 120 }
];
fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  getDataForSeries(seriesName: string): any[] {
    return this.groupedData.filter(item => item.category === seriesName);
  }
  
}

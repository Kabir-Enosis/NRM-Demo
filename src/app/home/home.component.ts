import { Component, ViewEncapsulation } from '@angular/core';
import { ChartModule } from '@progress/kendo-angular-charts';
import { groupBarChartData } from './data';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { gridData } from './gridData';
import { arrowsSwapIcon, calendarIcon, caretAltDownIcon, caretAltExpandIcon, caretAltUpIcon, chevronDownIcon, chevronLeftIcon, chevronRightIcon, chevronUpIcon, dollarIcon, filterIcon, searchIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { InputsModule, TextBoxModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { PopupModule } from '@progress/kendo-angular-popup';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { CustomGridComponent } from '../custom-grid/custom-grid.component';
import { grid2Data } from './grid2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartModule, CommonModule, GridModule, IconsModule,  InputsModule, TextBoxModule, FormsModule, DropDownsModule, PopupModule, DateInputsModule, CustomGridComponent],
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
  calendarIcon: SVGIcon = calendarIcon;
  leftarrow: SVGIcon = chevronLeftIcon;
  rightarrow: SVGIcon = chevronRightIcon;
  

  public constructor () {
    this.years = this.groupedData.map(data => data.year);
  }

  public barSeries: any[] = [
    { name: 'Product A', field: 'value', categoryField: 'year', color: '#FF5733' },
    { name: 'Product B', field: 'value', categoryField: 'year', color: '#33FF57' },
    { name: 'Product C', field: 'value', categoryField: 'year', color: '#3357FF' }
  ];
  
  gridData = gridData;
  grid2data = grid2Data;
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

  filterColumns = [
    { label: 'Amount', field: 'amount' },
    { label: 'Gross amount', field: 'gross' },
    { label: 'Net income', field: 'net' },
    { label: 'Bonus', field: 'bonus' },
    { label: 'Deduction', field: 'deduction' },
  ];

  getDataForSeries(seriesName: string): any[] {
    return this.groupedData.filter(item => item.category === seriesName);
  }

  grid2Columns = [
    { field: 'Id', title: 'ID', width: 100 },
    { field: 'name', title: 'Name', width: 100 },
    { field: 'prof', title: 'Profession', width: 100 },
    { field: 'sub', title: 'Subject', width: 150 },
  ]

  grid2FilterCol = [
    { label: 'Id', field: 'Id' },
  ]
  
}

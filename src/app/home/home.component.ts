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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartModule, CommonModule, GridModule, IconsModule,  InputsModule, TextBoxModule, FormsModule, DropDownsModule, PopupModule, DateInputsModule],
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
  pageSize = 10;
  pageSizes = [5, 10, 20, 50];
  skip = 0;
  currentPage = 1;
  totalPage = 0;
  showFilterRow = false;
  filters = {
    date: '',
    field1: null,
    field2: null,
    field3: null,
    field4: null,
    field5: null
  };
  showPopup = false;
  filterField = '';
  minValue: number | null = null;
  maxValue: number | null = null;
  value: [number, number] = [100, 1000];
  min = 0;
  max = 10000;
  filterAnchor!: HTMLElement ;

  public constructor () {
    this.years = this.groupedData.map(data => data.year);
    this.totalPage = Math.ceil(this.gridData.length / this.pageSize);
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

  getDataForSeries(seriesName: string): any[] {
    return this.groupedData.filter(item => item.category === seriesName);
  }

  get totalPages() {
    return Math.ceil(this.gridData.length / this.pageSize);
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
  }

  onPageSizeChange(value: any) {
    this.skip = 0;
    this.pageSize = value;
    this.totalPage = Math.ceil(this.gridData.length / this.pageSize);
    this.currentPage = 1; 
  }

  goToPage(page: string|number) {
    if(typeof page === 'number'){
      this.currentPage = page;
      this.skip = (page - 1) * this.pageSize;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.skip -= this.pageSize
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.skip += this.pageSize
    }
  }

  get pageNumbers() {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const maxVisiblePages = 6;
  
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
  
    const pages = [];
  
    if (currentPage <= 3 || currentPage >= totalPages-2) {
      pages.push(1, 2, 3, '...', totalPages-2, totalPages-1, totalPages);
    } else {
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }
  
    return pages;
  }
  

  toggleFilterRow() {
    this.showFilterRow = !this.showFilterRow;
  }

  toggleDropdown(field: string, anchor: HTMLElement){
    this.filterField = field;
    this.filterAnchor = anchor;
    this.showPopup = !this.showPopup;
  }

  resetFilters() {
    this.filters = {
      date: '',
      field1: null,
      field2: null,
      field3: null,
      field4: null,
      field5: null
    };
  }
  
  onTogglePopup(field: string) {
    this.filterField = field;
    this.showPopup = !this.showPopup;
  }

  onCancel() {
    this.showPopup = false;
  }

  onApply() {
    this.showPopup = false;
  }
}

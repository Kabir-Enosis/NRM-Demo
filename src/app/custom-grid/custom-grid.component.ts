import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from '@progress/kendo-angular-charts';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { IconsModule } from '@progress/kendo-angular-icons';
import { InputsModule, TextBoxModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from '@progress/kendo-angular-popup';
import { calendarIcon, caretAltDownIcon, caretAltExpandIcon, caretAltUpIcon, chevronDownIcon, chevronLeftIcon, chevronRightIcon, chevronUpIcon, dollarIcon, filterIcon, searchIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { PopUpCardComponent } from '../pop-up-card/pop-up-card.component';

@Component({
  selector: 'app-custom-grid',
  standalone: true,
  imports: [ChartModule, CommonModule, GridModule, IconsModule,  InputsModule, TextBoxModule, FormsModule, DropDownsModule, PopupModule, DateInputsModule, PopUpCardComponent],
  templateUrl: './custom-grid.component.html',
  styleUrl: './custom-grid.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CustomGridComponent {

  @Input() gridData: any[] = []; 
  @Input() columns: any[] = [];
  @Input() filterColumns: any[] = [];
  
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
  minFilterNumber = 0;
  maxFilterNumber = 10000;
  filterAnchor!: HTMLElement ;

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
      this.skip = (this.currentPage - 1) * this.pageSize;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.skip = (this.currentPage - 1) * this.pageSize;
    }
  }

  get pageNumbersList() {
    const totalPages = Number(this.totalPages);
    const currentPage = Number(this.currentPage || 1);
    const maxVisiblePages = 6;
  
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
  
    const pages = [];
    pages.push(1, 2, 3);

    if(currentPage - 1 > 4)
      pages.push('...');
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 3 && i < totalPages - 2) {
          pages.push(i);
      }
    }
    if(currentPage + 1 < totalPages - 3)
      pages.push('...');
    
    pages.push(totalPages - 2, totalPages - 1, totalPages);
    return pages;
  }
  

  toggleFilterRow() {
    this.showFilterRow = !this.showFilterRow;
  }

  toggleFilterCardDropdown(field: string, anchor: HTMLElement){
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

  onFilterCancel() {
    this.showPopup = false;
  }

  onFilterApply() {
    this.showPopup = false;
  }
}

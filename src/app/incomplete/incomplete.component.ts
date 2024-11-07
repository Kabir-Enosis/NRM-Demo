import { Component } from '@angular/core';
import { pageGrid } from './pageGrid';
import { CustomGridComponent } from '../custom-grid/custom-grid.component';

@Component({
  selector: 'app-incomplete',
  standalone: true,
  imports: [CustomGridComponent],
  templateUrl: './incomplete.component.html',
  styleUrl: './incomplete.component.scss'
})
export class IncompleteComponent {
  tableData = pageGrid;
  tableColumns = [
    { field: 'Id', title: 'ID', width: 100 },
    { field: 'name', title: 'Name', width: 100 },
    { field: 'dept', title: 'Depertment', width: 100 },
    { field: 'age', title: 'Age', width: 150 },
    { field: 'location', title: 'Location', width: 120 }
  ];

  tableFilters = [
    { label: 'ID', field: 'Id' },
    { label: 'Age', field: 'age' },
  ];
}

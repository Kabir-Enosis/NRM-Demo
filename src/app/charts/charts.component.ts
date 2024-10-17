import { Component, OnInit, ViewChild } from "@angular/core";
import { DataBindingDirective, GridModule, ExcelModule, PDFModule  } from "@progress/kendo-angular-grid";
import { SVGIcon, filePdfIcon, fileExcelIcon } from "@progress/kendo-svg-icons";
import { process } from "@progress/kendo-data-query";
import { employees } from "./employees";
import { images } from "./image";
import { CommonModule } from "@angular/common";
import { ChartModule, ChartsModule } from "@progress/kendo-angular-charts";
import { CommonModules } from "../commonModule";
import { HttpClientModule } from "@angular/common/http";
import { InputsModule } from "@progress/kendo-angular-inputs";
@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    GridModule, 
    CommonModule, 
    DataBindingDirective, 
    ExcelModule, 
    ChartModule, 
    CommonModules ,
    HttpClientModule,
    GridModule,
    ChartsModule,
    InputsModule,
    PDFModule,
    ExcelModule,],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})

export class ChartsComponent implements OnInit {
    @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
    public gridData: unknown[] = employees;
    public gridView!: unknown[];

    public mySelection: string[] = [];
    public pdfSVG: SVGIcon = filePdfIcon;
    public excelSVG: SVGIcon = fileExcelIcon;

    public ngOnInit(): void {
      this.gridView = this.gridData;
    }

    public onFilter(value: Event): void {
      const inputValue = value;

      this.gridView = process(this.gridData, {
        filter: {
          logic: "or",
          filters: [
            {
              field: "full_name",
              operator: "contains",
              value: inputValue,
            },
            {
              field: "job_title",
              operator: "contains",
              value: inputValue,
            },
            {
              field: "budget",
              operator: "contains",
              value: inputValue,
            },
            {
              field: "phone",
              operator: "contains",
              value: inputValue,
            },
            {
              field: "address",
              operator: "contains",
              value: inputValue,
            },
          ],
        },
      }).data;

      this.dataBinding.skip = 0;
    }

    public photoURL(dataItem: { img_id: string; gender: string }): string {
      const code: string = dataItem.img_id + dataItem.gender;
      const image: { [Key: string]: string } = images;

      return image[code];
    }

    public flagURL(dataItem: { country: string }): string {
      const code: string = dataItem.country;
      const image: { [Key: string]: string } = images;

      return image[code];
    }
}

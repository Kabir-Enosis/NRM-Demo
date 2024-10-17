import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule, SplitterModule } from '@progress/kendo-angular-layout';
import { CalendarModule } from '@progress/kendo-angular-dateinputs';

@NgModule({
  exports: [
    ButtonsModule,
    InputsModule,
    LayoutModule,
    SplitterModule, 
    FormsModule, 
    LayoutModule,
    CalendarModule
  ]
})
export class CommonModules {}

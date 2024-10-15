import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LayoutModule, RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

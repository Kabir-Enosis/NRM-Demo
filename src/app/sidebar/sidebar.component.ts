import { Component, OnInit } from '@angular/core';
import { DrawerModule } from '@progress/kendo-angular-layout';
import { AppBarModule } from '@progress/kendo-angular-navigation';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { InputsModule, TextBoxModule } from '@progress/kendo-angular-inputs';
import { CommonModules } from '../commonModule';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectTab } from '../store/tab.action';
import { getSelectedTab } from '../store/tab.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DrawerModule, AppBarModule, ButtonModule, InputsModule, CommonModules, RouterOutlet, TextBoxModule, CommonModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit{
  tabs = ['Home', 'Analytics', 'Charts', 'Graphs'];
  selectedTab$!: Observable<string> 

  constructor(private store: Store, private router: Router) {
    this.selectedTab$ = this.store.select(getSelectedTab);
    this.store.dispatch(selectTab({tab: 'Home'}))

  }

  ngOnInit() {
    this.selectedTab$.subscribe((tab1) => {
      console.log('Current selected tab:', tab1);
    });
  }

  tabChanged(tab: string) {
    this.store.dispatch(selectTab({ tab }));
    this.router.navigate([`/dashboard/${tab.toLowerCase()}`]);
  }

}

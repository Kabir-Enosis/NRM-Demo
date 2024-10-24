import { Component, OnInit } from '@angular/core';
import { DrawerModule } from '@progress/kendo-angular-layout';
import { AppBarModule } from '@progress/kendo-angular-navigation';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { InputsModule, TextBoxModule } from '@progress/kendo-angular-inputs';
import { CommonModules } from '../commonModule';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { logout, selectTab } from '../store/tab.action';
import { getSelectedTab } from '../store/tab.selector';
import { Observable } from 'rxjs';
import { IconsModule } from "@progress/kendo-angular-icons";
import {
  homeIcon,
  graphIcon,
  userIcon,
  caretAltLeftIcon,
  caretAltRightIcon,
  dollarIcon,
  groupIcon,
  SVGIcon,
  gearIcon,
  cloudIcon,
  fileTxtIcon,
  fileReportIcon,
  imageMapEditorIcon,
  alignItemsEndAltIcon,
  userOutlineIcon, 
  caretAltDownIcon,
} from "@progress/kendo-svg-icons";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DrawerModule, AppBarModule, ButtonModule, InputsModule, CommonModules, RouterOutlet, TextBoxModule, CommonModule, IconsModule  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  generalTabs = ['Dashboard', 'Annual Income', 'Checks & Deduction'];
  analyticsTabs = ['Map', 'Production', 'Reports'];
  managementTabs = ['Upload Checks', 'Check files', 'Assets', 'User Management'];
  assetsList = ['My Counties', 'My producers', 'My wells', 'My Properties'];
  public assetsDropdownOpen: boolean = false;
  isCollapsed: boolean = false;
  selectedTab$!: Observable<string> 
  userIcon: SVGIcon = userIcon;
  leftarw: SVGIcon = caretAltLeftIcon;
  rightarw: SVGIcon = caretAltRightIcon;
  public dropdownIcon: SVGIcon = caretAltDownIcon;

  constructor(private store: Store, private router: Router) {
    this.selectedTab$ = this.store.select(getSelectedTab);
    this.store.dispatch(selectTab({tab: 'Dashboard'}))
    this.router.navigate([`/dashboard/home`]);

  }

  tabChanged(tab: string) {
    if(tab === 'Assets')
      return;
    let mappedTab: string = this.getTabShortForm(tab);
    this.store.dispatch(selectTab({ tab }));
    this.router.navigate([`/dashboard/${mappedTab}`]);
  }

  getIcon(tab: string): SVGIcon {
    switch (tab) {
      case 'Dashboard':
        return groupIcon;
      case 'Annual Income':
        return dollarIcon;
      case 'Checks & Deduction':
        return fileReportIcon;
      case 'Map':
        return imageMapEditorIcon;
      case 'Production':
        return gearIcon;
      case 'Reports':
        return graphIcon;
      case 'Upload Checks':
        return cloudIcon;
      case 'Check files':
        return fileTxtIcon;
      case 'Assets':
        return alignItemsEndAltIcon;
      case 'User Management':
        return userOutlineIcon;
      default:
        return homeIcon;
    }
  }
  
  getTabShortForm( tab: string): string {
    switch (tab) {
      case 'Dashboard':
        return 'home';
      case 'Annual Income':
        return 'analytics';
      case 'Checks & Deduction':
        return 'incomplete';
      case 'Map':
        return 'analytics';
      case 'Production':
        return 'incomplete';
      case 'Reports':
        return 'graphs';
      case 'Upload Checks':
        return 'incomplete';
      case 'Check files':
        return 'graphs';
      case 'Assets':
        return 'incomplete';
      case 'User Management':
        return 'charts';
      default:
        return tab;
    }
  }

  logOut() {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }

  collapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleAssetsDropdown(event: Event) {
    event.stopPropagation(); 
    this.assetsDropdownOpen = !this.assetsDropdownOpen;
  }

}

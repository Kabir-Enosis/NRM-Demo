import { Component } from '@angular/core';
import { CommonModules } from '../commonModule';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { IndicatorsModule } from "@progress/kendo-angular-indicators";
import { IconsModule } from "@progress/kendo-angular-icons";
import { NavigationModule } from "@progress/kendo-angular-navigation";
import {
  bellIcon,
  menuIcon,
  searchIcon,
  SVGIcon,
} from "@progress/kendo-svg-icons";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModules, IndicatorsModule, IconsModule, NavigationModule, LayoutModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public menuIcon: SVGIcon = menuIcon;
  public searchIcon: SVGIcon = searchIcon;
  public bellIcon: SVGIcon = bellIcon;
  public accountImg = '/image.png';
}

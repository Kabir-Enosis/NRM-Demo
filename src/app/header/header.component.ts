import { Component } from '@angular/core';
import { CommonModules } from '../commonModule';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModules],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutModule, SplitterModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { login } from '../store/tab.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SplitterModule, FormsModule, LayoutModule, InputsModule, ButtonsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router, private store: Store) {}
  
  onLogin() {
    if(this.username === 'admin' && this.password === '1234'){
      this.store.dispatch(login());
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password');
    }
  }
}

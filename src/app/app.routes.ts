import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChartsComponent } from './charts/charts.component';
import { GraphsComponent } from './graphs/graphs.component';
import { IncompleteComponent } from './incomplete/incomplete.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { 
      path: 'dashboard', 
      component: DashboardComponent, 
      canActivate: [authGuard] ,
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'analytics', component: AnalyticsComponent },
        { path: 'charts', component: ChartsComponent },
        { path: 'graphs', component: GraphsComponent },
        { path: 'incomplete', component: IncompleteComponent },
      ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
  ];
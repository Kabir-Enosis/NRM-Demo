import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { logInReducer, tabReducer } from './store/tab.reducer';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideStore({
    selectedTab: tabReducer,
    appState: logInReducer,
  }),
  provideAnimations(), 
  provideHttpClient(), 
  importProvidersFrom(BrowserAnimationsModule)
  ]
};

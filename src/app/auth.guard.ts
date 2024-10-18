import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from './store/tab.selector';
import { appState } from './store/tab.state';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<appState>);
  const router = inject(Router);
  let isLoggedIn: boolean = false;

  store.select(selectIsLoggedIn).subscribe((loggedIn) => {
    isLoggedIn = loggedIn;
  });

  if (isLoggedIn) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

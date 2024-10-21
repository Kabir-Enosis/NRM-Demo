import { createAction, props } from '@ngrx/store';

export const selectTab = createAction(
  '[Sidebar] Select Tab',
  props<{ tab: string }>()
);
export const login = createAction('[Auth] Login');
export const logout = createAction('[Auth] Logout');
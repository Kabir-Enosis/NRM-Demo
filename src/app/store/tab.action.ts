import { createAction, props } from '@ngrx/store';

export const selectTab = createAction(
  '[Sidebar] Select Tab',
  props<{ tab: string }>()
);

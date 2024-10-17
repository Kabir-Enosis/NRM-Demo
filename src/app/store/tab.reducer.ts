import { createReducer, on } from '@ngrx/store';
import { selectTab } from './tab.action';

export interface TabState {
    selectedTab: string;
}

const initialState: TabState = {
    selectedTab: 'Dashboard', 
};

export const tabReducer = createReducer(
  initialState,
  on(selectTab, (state, { tab }) => ({
    ...state,
    selectedTab: tab
  }))
);
 
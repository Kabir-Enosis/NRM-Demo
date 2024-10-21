import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TabState } from './tab.reducer';
import { appState } from './tab.state';

export const selectTabState = createFeatureSelector<TabState>('selectedTab');
export const selectAppState = createFeatureSelector<appState>('appState'); 

export const getSelectedTab = createSelector(
  selectTabState,
  (state: TabState) => state.selectedTab
);

export const selectIsLoggedIn = createSelector(
  selectAppState,
  (state: appState) => state.isLoggedIn
);
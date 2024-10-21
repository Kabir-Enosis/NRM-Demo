import { createReducer, on } from '@ngrx/store';
import { login, logout, selectTab } from './tab.action';
import { initialState } from './tab.state';

export interface TabState {
    selectedTab: string;
}

const initialTabState: TabState = {
    selectedTab: 'Home', 
};

export const tabReducer = createReducer(
  initialTabState,
  on(selectTab, (state, { tab }) => ({
    ...state,
    selectedTab: tab
  })),
);
 
export const logInReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, isLoggedIn: true })),
  on(logout, (state) => ({ ...state, isLoggedIn: false }))
)
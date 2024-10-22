import { TabState } from "./tab.reducer";

export interface appState {
    selectedTab: TabState;
    isLoggedIn: boolean;
}

export const initialState: appState = {
    selectedTab: {selectedTab: 'Home'},
    isLoggedIn: true, 
  };
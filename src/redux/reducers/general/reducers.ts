import { createSlice } from "@reduxjs/toolkit";

interface GeneralState {
  sidebar: {
    expanded: boolean | undefined;
  };
  loading: {
    api: boolean;
  };
}

const initialState: GeneralState = {
  sidebar: {
    expanded: true,
  },
  loading: {
    api: false,
  },
};

export const generalReducerName = "general";

export const generalReducer = createSlice({
  name: generalReducerName,
  initialState: initialState,
  reducers: {
    toggleSidebar: (state) => {
      if (state.sidebar.expanded === undefined) {
        state.sidebar.expanded = false;
      }
      state.sidebar.expanded = !state.sidebar.expanded;
    },
    openSidebar: (state) => {
      state.sidebar.expanded = true;
    },
    closeSidebar: (state) => {
      state.sidebar.expanded = false;
    },
    showApiLoading: (state) => {
      state.loading.api = true;
    },
    hideApiLoading: (state) => {
      state.loading.api = false;
    },
  },
});

export const {
  closeSidebar,
  hideApiLoading,
  openSidebar,
  showApiLoading,
  toggleSidebar,
} = generalReducer.actions;

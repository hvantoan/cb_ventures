import { createSlice } from '@reduxjs/toolkit';

export const generalReducerName = 'general';

const generalSlice = createSlice({
  name: generalReducerName,
  initialState: {
    sidebar: {
      expanded: undefined
    },
    loading: {
      api: false
    }
  } as {
    sidebar: {
      expanded: boolean | undefined;
    };
    loading: {
      api: boolean;
    };
  },
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
    }
  }
});

export const { closeSidebar, hideApiLoading, openSidebar, showApiLoading, toggleSidebar } = generalSlice.actions;

export const generalReducer = generalSlice.reducer;

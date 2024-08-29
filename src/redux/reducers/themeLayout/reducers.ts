import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface AppLayout {
  rtlData: boolean;
  topMenu: boolean;
  mode: "darkMode" | "lightMode";
  menuCollapse: boolean;
  loading: boolean;
  rtlLoading: boolean;
  menuLoading: boolean;
  mainContentLoading: boolean;
  error: null;
}

const initLayout: AppLayout = {
  rtlData: false,
  topMenu: true,
  mode: "darkMode",
  menuCollapse: false,
  loading: false,
  rtlLoading: false,
  menuLoading: false,
  mainContentLoading: false,
  error: null,
};

const layoutReducer = createSlice({
  initialState: initLayout,
  name: "layout",
  reducers: {
    changeLayoutMode(state, action: PayloadAction<string>) {
      state.mode = action.payload as "darkMode" | "lightMode";
    },

    changeDirectionMode(state, action: PayloadAction<boolean>) {
      state.rtlData = action.payload;
    },

    changeMenuMode(state, action: PayloadAction<boolean>) {
      state.topMenu = action.payload;
    },

    changeMenuCollapse(state, action: PayloadAction<boolean>) {
      state.menuCollapse = action.payload;
    },
  },
});

export const {
  changeLayoutMode,
  changeDirectionMode,
  changeMenuCollapse,
  changeMenuMode,
} = layoutReducer.actions;
export default layoutReducer;

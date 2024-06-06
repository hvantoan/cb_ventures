import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import staticData from '../../config/config'

const initialState = {
  rtlData: staticData.rtl,
  topMenu: staticData.topMenu,
  mode: staticData.mainTemplate,
  menuCollapse: staticData.menuCollapse,
  loading: false,
  rtlLoading: false,
  menuLoading: false,
  mainContentLoading: false,
  error: null,
}

const layoutReducer = createSlice({
  initialState,
  name: 'layout',
  reducers: {
    changeLayoutMode(state, action: PayloadAction<string>) {
      state.mode = action.payload
    },

    changeDirectionMode(state, action: PayloadAction<boolean>) {
      state.rtlData = action.payload
    },

    changeMenuMode(state, action: PayloadAction<boolean>) {
      state.topMenu = action.payload
    },

    changeMenuCollapse(state, action: PayloadAction<boolean>) {
      state.menuCollapse = action.payload
    },
  },
})

export const { changeLayoutMode, changeDirectionMode, changeMenuCollapse, changeMenuMode } = layoutReducer.actions
export default layoutReducer

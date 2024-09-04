import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NumberFormat } from '@/models/number-format';

const initialState = {
  numberFormat: NumberFormat.getDefault()
};

export const globalConfigReducerName = 'globalConfig';

const globalConfigSlice = createSlice({
  name: globalConfigReducerName,
  initialState,
  reducers: {
    replaceNumberFormat: (state, action: PayloadAction<NumberFormat>) => {
      state.numberFormat = action.payload;
    }
  }
});

export const globalConfigReducer = globalConfigSlice.reducer;

export const { replaceNumberFormat } = globalConfigSlice.actions;

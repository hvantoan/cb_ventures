import { type Components, CssVarsTheme } from '@mui/material/styles';
import { createElement } from 'react';

const slots = {
  openPickerIcon: () => createElement('span', { className: 'i-solar-calendar-mark-bold-duotone h-5 w-5' }),
  leftArrowIcon: () => createElement('span', { className: 'i-eva-arrow-ios-back-outline h-5 w-5' }),
  rightArrowIcon: () => createElement('span', { className: 'i-eva-arrow-ios-forward-outline h-5 w-5' }),
  switchViewIcon: () => createElement('span', { className: 'i-eva-arrow-ios-downward-outline h-5 w-5' })
};

export const MuiDatePicker: Components<CssVarsTheme>['MuiDatePicker'] = {
  defaultProps: {
    slots
  }
};

export const MuiDateTimePicker: Components<CssVarsTheme>['MuiDateTimePicker'] = {
  defaultProps: {
    slots
  }
};

export const MuiStaticDatePicker: Components<CssVarsTheme>['MuiStaticDatePicker'] = {
  defaultProps: {
    slots
  }
};

export const MuiDesktopDatePicker: Components<CssVarsTheme>['MuiDesktopDatePicker'] = {
  defaultProps: {
    slots
  }
};

export const MuiDesktopDateTimePicker: Components<CssVarsTheme>['MuiDesktopDateTimePicker'] = {
  defaultProps: {
    slots
  }
};

export const MuiMobileDatePicker: Components<CssVarsTheme>['MuiMobileDatePicker'] = {
  defaultProps: {
    slots
  }
};

export const MuiMobileDateTimePicker: Components<CssVarsTheme>['MuiMobileDateTimePicker'] = {
  defaultProps: {
    slots
  }
};

export const MuiMultiSectionDigitalClock: Components<CssVarsTheme>['MuiMultiSectionDigitalClock'] = {
  styleOverrides: {
    root: {
      '& .MuiMultiSectionDigitalClockSection-root': {
        '&::-webkit-scrollbar': {
          width: '4px'
        }
      }
    }
  }
};

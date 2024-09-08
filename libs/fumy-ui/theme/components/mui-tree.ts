import { Components, CssVarsTheme } from '@mui/material/styles';
import { createElement } from 'react';

export const MuiTreeItem: Components<CssVarsTheme>['MuiTreeItem'] = {
  styleOverrides: {
    iconContainer: {
      width: 'auto'
    }
  }
};

export const MuiRichTreeView: Components<CssVarsTheme>['MuiRichTreeView'] = {
  defaultProps: {
    slots: {
      expandIcon: () => createElement('span', { className: 'i-solar-add-square-bold-duotone w-4 h-4' }),
      collapseIcon: () => createElement('span', { className: 'i-solar-minus-square-bold-duotone w-4 h-4' })
    }
  }
};

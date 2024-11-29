import { Components, CssVarsTheme } from '@mui/material/styles';

export const MuiTableContainer: Components<CssVarsTheme>['MuiTableContainer'] = {
  styleOverrides: {
    root: {
      position: 'relative'
    }
  }
};

export const MuiTableRow: Components<CssVarsTheme>['MuiTableRow'] = {
  styleOverrides: {
    root: {
      '&.Mui-selected': {
        backgroundColor: 'rgba(0, 120, 103, 0.04)',
        '&:hover': {
          backgroundColor: 'rgba(0, 120, 103, 0.08)'
        }
      },
      '&:last-of-type': {
        '& .MuiTableCell-root': {
          borderColor: 'transparent'
        }
      }
    }
  }
};

export const MuiTableCell: Components<CssVarsTheme>['MuiTableCell'] = {
  styleOverrides: {
    root: {
      borderBottomStyle: 'dashed'
    },
    head: {
      fontSize: 14,
      color: '#637381',
      fontWeight: 600,
      backgroundColor: '#F4F6F8!important'
    },
    stickyHeader: {
      backgroundColor: '#FFFFFF',
      backgroundImage: 'linear-gradient(to bottom, #F4F6F8 0%, #F4F6F8 100%)'
    },
    paddingCheckbox: {
      paddingLeft: '8px'
    }
  }
};

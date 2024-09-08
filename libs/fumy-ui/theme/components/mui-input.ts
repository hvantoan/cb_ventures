import { ExpandMoreRounded } from '@mui/icons-material';
import { Components, CssVarsTheme } from '@mui/material/styles';

export const MuiInput: Components<CssVarsTheme>['MuiInput'] = {
  styleOverrides: {
    underline: {
      '&:before': {
        borderBottomColor: 'rgba(145, 158, 171, 0.32)'
      },
      '&:after': {
        borderBottomColor: '#212B36'
      }
    }
  }
};

export const MuiInputBase = {
  styleOverrides: {
    root: {
      '&.Mui-disabled': {
        '& svg': {
          color: '#919EAB'
        }
      }
    },
    input: {
      lineHeight: 1.5714285714285714,
      fontSize: '0.875rem',
      fontWeight: 400,
      '&::placeholder': {
        opacity: 1,
        color: '#919EAB'
      }
    }
  }
};

export const MuiOutlinedInput = {
  styleOverrides: {
    root: {
      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#212B36'
        }
      },
      '&.Mui-error': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#FF5630'
        }
      },
      '&.Mui-disabled': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(145, 158, 171, 0.24)'
        }
      }
    },
    notchedOutline: {
      borderColor: 'rgba(145, 158, 171, 0.2)',
      transition: 'border-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    }
  }
};

export const MuiFilledInput = {
  defaultProps: {
    disableUnderline: true
  },
  styleOverrides: {
    root: {
      borderRadius: 8,
      backgroundColor: 'rgba(145, 158, 171, 0.08)',
      '&:hover': {
        backgroundColor: 'rgba(145, 158, 171, 0.16)'
      },
      '&.Mui-focused': {
        backgroundColor: 'rgba(145, 158, 171, 0.16)'
      },
      '&.Mui-error': {
        backgroundColor: 'rgba(255, 86, 48, 0.08)',
        '&.Mui-focused': {
          backgroundColor: 'rgba(255, 86, 48, 0.16)'
        }
      },
      '&.Mui-disabled': {
        backgroundColor: 'rgba(145, 158, 171, 0.24)'
      }
    }
  }
};

export const MuiFormHelperText: Components['MuiFormHelperText'] = {
  defaultProps: {
    component: 'div'
  },
  styleOverrides: {
    root: {
      marginTop: '8px'
    }
  }
};

export const MuiSelect: Components<CssVarsTheme>['MuiSelect'] = {
  defaultProps: {
    IconComponent: ExpandMoreRounded
  }
};

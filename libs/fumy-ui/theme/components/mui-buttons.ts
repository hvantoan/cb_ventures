import { alpha, Components, ComponentsPropsList, CssVarsTheme } from '@mui/material/styles';

export const MuiButton: Components<CssVarsTheme>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
    variant: 'contained',
    color: 'inherit'
  },
  styleOverrides: {
    root: {
      textTransform: 'capitalize',
      whiteSpace: 'nowrap'
    }
  },
  variants: [
    {
      props: { variant: 'contained', color: 'inherit' },
      style: ({ theme }) => {
        return {
          backgroundColor: theme.vars.palette.grey['800'],
          color: '#ffffff',
          '&:hover': {
            backgroundColor: theme.vars.palette.grey['700']
          }
        };
      }
    },
    {
      props: { variant: 'soft' },
      style: (props) => {
        const { theme, ownerState } = props as { theme: CssVarsTheme; ownerState: ComponentsPropsList['MuiButton'] };
        const { color = 'inherit' } = ownerState;
        if (color === 'inherit') {
          return {
            backgroundColor: alpha(theme.palette.grey['400'], 0.16),
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: alpha(theme.palette.grey['400'], 0.24)
            }
          };
        }
        return {
          backgroundColor: alpha(theme.palette[color].light, 0.16),
          color: theme.palette[color].dark,
          '&:hover': {
            backgroundColor: alpha(theme.palette[color].light, 0.24)
          }
        };
      }
    }
  ]
};

export const MuiLoadingButton: Components<CssVarsTheme>['MuiButton'] = {
  defaultProps: {
    variant: 'contained'
  }
};

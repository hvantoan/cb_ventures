export const MuiFormLabel = {
  styleOverrides: {
    root: {
      lineHeight: 1.5714285714285714,
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#919EAB',
      '&.MuiInputLabel-shrink': {
        lineHeight: 1.5,
        fontSize: '1rem',
        fontWeight: 600,
        color: '#637381',
        '&.Mui-focused': {
          color: '#212B36'
        },
        '&.Mui-error': {
          color: '#FF5630'
        },
        '&.Mui-disabled': {
          color: '#919EAB'
        },
        '&.MuiInputLabel-filled': {
          transform: 'translate(12px, 6px) scale(0.75)'
        }
      }
    }
  }
};

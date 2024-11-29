export const MuiAccordion = {
  styleOverrides: {
    root: {
      backgroundColor: 'transparent',
      '&.Mui-expanded': {
        boxShadow: '0 8px 16px 0 rgba(145, 158, 171, 0.16)',
        borderRadius: 8,
        backgroundColor: '#FFFFFF'
      },
      '&.Mui-disabled': {
        backgroundColor: 'transparent'
      }
    }
  }
};
export const MuiAccordionSummary = {
  styleOverrides: {
    root: {
      paddingLeft: '16px',
      paddingRight: '8px',
      '&.Mui-disabled': {
        opacity: 1,
        color: 'rgba(145, 158, 171, 0.8)',
        '& .MuiTypography-root': {
          color: 'inherit'
        }
      }
    },
    expandIconWrapper: {
      color: 'inherit'
    }
  }
};

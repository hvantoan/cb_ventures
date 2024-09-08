'use client';

import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const StyledLandingTextField = styled(TextField)`
  '& label': {
    color: 'white';
  }
  ,
    '& label.mui-focused': {
    color: 'white';
  }
  ,
    '& .muiinputlabel-shrink': {
    color: 'white !important';
  }
  ,
    '& .muioutlinedinput-root': {
    '&.mui-focused fieldset': {
      bordercolor: theme.palette.primary.main;
    }
  }
  ,
    '& .muiinputbase-input': {
    color: 'white'; // This ensures the input text color is white
  }
`;

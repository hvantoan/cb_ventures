'use client';

import styled from '@emotion/styled';
import { Card } from '@mui/material';

const ChartCard = styled(Card)`
  height: 100%;
  padding: ${({ theme }) => theme.spacing(1.5)};
  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: ${({ theme }) => theme.spacing(2)};
  }
  ${({ theme }) => theme.breakpoints.up('lg')} {
    padding: ${({ theme }) => theme.spacing(3)};
  }
`;

export default ChartCard;

import styled from '@emotion/styled';
import { autoHideScrollbarStyle } from '@hvantoan/ui/styles';
import { TableContainer } from '@mui/material';

export const StyledTableContainer = styled(TableContainer)`
  border-radius: 12px;
  ${({ theme }) => theme.breakpoints.up('md')} {
    overflow-y: scroll;
    max-height: 360px;
  }
  ${autoHideScrollbarStyle}
`;

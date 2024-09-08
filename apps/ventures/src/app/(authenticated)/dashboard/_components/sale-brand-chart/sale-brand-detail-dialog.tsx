'use client';

import { DialogHeader } from '@fumy/ui/components';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

interface SaleBrandDetailDialogProps {
  data?: SaleBrandData | null;
  isOpen: boolean;
  handleClose: () => void;
}

const PRODUCT_HEADER = 'Sản phẩm';
const QUANTITY_HEADER = 'Số lượng';
const CLOSE_BUTTON_LABEL = 'Đóng';

const SaleBrandDetailDialog: React.FC<SaleBrandDetailDialogProps> = ({ data, handleClose, isOpen }) => {
  return (
    <Dialog open={isOpen} maxWidth='md' keepMounted={false} onClose={handleClose}>
      <DialogHeader title={data?.type ?? ''} onClose={handleClose} />
      <DialogContent>
        <TableContainer className='max-h-[320px] min-w-[320px] md:min-w-[720px]'>
          <Table size='small' stickyHeader>
            <TableHead>
              <TableRow className='whitespace-nowrap'>
                <TableCell>{PRODUCT_HEADER}</TableCell>
                <TableCell>{QUANTITY_HEADER}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.details?.map((detail) => (
                <TableRow key={detail.productName}>
                  <TableCell>{detail.productName}</TableCell>
                  <TableCell>{detail.quantity} bao</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{CLOSE_BUTTON_LABEL}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaleBrandDetailDialog;

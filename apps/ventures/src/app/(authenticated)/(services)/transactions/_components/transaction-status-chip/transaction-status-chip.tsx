import { ETransactionType, TransactionTypeMap } from '@modules/(services)/_enums/transaction-type';
import { Chip, ChipProps } from '@mui/material';
import React, { useMemo } from 'react';

interface TransactionStatusChipProps {
  status: ETransactionType;
  size?: ChipProps['size'];
  className?: string;
}

const TransactionStatusChip: React.FC<TransactionStatusChipProps> = ({
  className,
  size = 'medium',
  status = ETransactionType.Income
}) => {
  const { color, label } = useMemo(() => {
    const newLabel = TransactionTypeMap[status];
    let newColor: ChipProps['color'] = 'default';
    switch (Number(status)) {
      case ETransactionType.Income:
        newColor = 'primary';
        break;
      case ETransactionType.Outcome:
        newColor = 'error';
        break;
      case ETransactionType.Profit:
        newColor = 'warning';
        break;
      default:
        newColor = 'default'; // Set a default color if none match
        break;
    }
    return { label: newLabel, color: newColor };
  }, [status]);

  return <Chip label={label} color={color} variant='soft' size={size} className={className} />;
};

export default TransactionStatusChip;

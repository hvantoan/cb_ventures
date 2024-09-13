import { TransactionType, TransactionTypeMap } from '@modules/(services)/_enums/transaction-type';
import { Chip, ChipProps } from '@mui/material';
import { useMemo } from 'react';

interface TransactionStatusChipProps {
  status?: TransactionType;
  size?: ChipProps['size'];
  className?: string;
}

const TransactionStatusChip: React.FC<TransactionStatusChipProps> = ({
  className,
  size = 'medium',
  status = TransactionType.Income
}) => {
  const { color, label } = useMemo(() => {
    const newLabel = TransactionTypeMap[status];
    let newColor: ChipProps['color'] = 'info';
    switch (status) {
      case TransactionType.Outcome:
        newColor = 'error';
        break;
      case TransactionType.Income:
        newColor = 'primary';
        break;
      default:
        break;
    }
    return { label: newLabel, color: newColor };
  }, [status]);

  return <Chip label={label} color={color} variant='soft' size={size} className={className} />;
};

export default TransactionStatusChip;

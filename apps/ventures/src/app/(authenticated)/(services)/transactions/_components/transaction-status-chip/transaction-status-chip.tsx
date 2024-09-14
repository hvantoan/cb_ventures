import { TransactionType, TransactionTypeMap } from '@modules/(services)/_enums/transaction-type';
import { Chip, ChipProps } from '@mui/material';

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
  const newLabel = TransactionTypeMap[status];
  let newColor: ChipProps['color'] = 'info';
  switch (status) {
    case TransactionType.Outcome:
      newColor = 'error';
      break;
    case TransactionType.Income:
      newColor = 'info';
      break;
    default:
      break;
  }

  return <Chip label={newLabel} color={newColor} variant='soft' size={size} className={className} />;
};

export default TransactionStatusChip;

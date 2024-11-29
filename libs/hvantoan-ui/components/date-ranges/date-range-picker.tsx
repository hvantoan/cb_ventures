'use client';

import { DATE_FORMAT } from '@hvantoan/utilities/constants';
import { useToggle } from '@hvantoan/utilities/hooks';
import { IconButton, InputAdornment, Popover, TextField, TextFieldProps, useMediaQuery, Zoom } from '@mui/material';
import { clsx } from 'clsx';
import dayjs from 'dayjs';
import { useCallback, useMemo, useRef } from 'react';
import type { RangeKeyDict } from 'react-date-range';
import { DateRangePicker as BaseDateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface DateRangePickerProps extends Omit<TextFieldProps, 'value' | 'onChange'> {
  startDate: Date;
  endDate: Date;
  onChange: (range: [Date?, Date?]) => void;
  selectionKey?: string;
}

const defaultSelectionKey = 'selection';

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  className,
  endDate,
  startDate,
  onChange,
  selectionKey = defaultSelectionKey,
  ...props
}) => {
  const inputRef = useRef<HTMLDivElement | null>(null);
  const { isOpen, handleClose, handleOpen } = useToggle();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleChange = useCallback(
    (rangeDict: RangeKeyDict) => {
      const range = rangeDict[selectionKey];
      onChange([range.startDate, range.endDate]);
    },
    [selectionKey]
  );

  const value = useMemo(() => {
    if (!startDate) {
      return '-';
    }

    if (startDate && !endDate) {
      return `${dayjs(startDate).format(DATE_FORMAT)} - `;
    }
    return `${dayjs(startDate).format(DATE_FORMAT)}  ➜  ${dayjs(endDate).format(DATE_FORMAT)}`;
  }, [startDate, endDate]);

  return (
    <>
      <TextField
        {...props}
        ref={inputRef}
        value={value}
        className={clsx('!min-w-[256px]', className)}
        InputProps={{
          inputProps: {
            readOnly: true
          },
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={handleOpen} size='small'>
                <span className='i-solar-calendar-bold-duotone h-5 w-5' />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <Popover
        open={isOpen}
        anchorEl={inputRef.current}
        TransitionComponent={Zoom}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        onClose={handleClose}
      >
        <BaseDateRangePicker
          ranges={[
            {
              startDate: dayjs(startDate).toDate(),
              endDate: dayjs(endDate).toDate(),
              key: selectionKey
            }
          ]}
          staticRanges={[]}
          inputRanges={[]}
          months={isMobile ? 1 : 2}
          displayMode='dateRange'
          showMonthAndYearPickers
          direction='horizontal'
          className={clsx('[&>.rdrDefinedRangesWrapper]:hidden [&_.rdrCalendarWrapper]:bg-transparent')}
          onChange={handleChange}
        />
      </Popover>
    </>
  );
};

export default DateRangePicker;

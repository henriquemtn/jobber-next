import React from 'react';
import { format, isValid, parseISO } from 'date-fns';

interface DescriptionItemProps {
  label: string;
  value: any;
}

export default function DescriptionItem({ label, value }: DescriptionItemProps) {
  let formattedValue = value;

  if (typeof value === 'string') {
    const date = parseISO(value);
    if (isValid(date)) {
      formattedValue = format(date, 'dd/MM/yyyy, HH:mm:ss');
    }
  } else if (label === 'Tempo Estimado') {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    formattedValue = `${hours}h:${minutes.toString().padStart(2, '0')}m`;
  }

  return (
    <div className='flex flex-col'>
      <p className='text-sm font-semibold'>{label}</p>
      <p className='text-sm'>{formattedValue}</p>
    </div>
  );
}
import React from 'react';
import { format, isValid, parseISO } from 'date-fns';

interface FormatDataProps {
  value: string;
  onlyDate?: boolean;
  onlyTime?: boolean;
  isMinutes?: boolean;
}

export default function FormatData({ value, onlyDate, onlyTime, isMinutes }: FormatDataProps) {
  let formattedValue = value;

  if (isMinutes) {
    // Conversão de minutos para horas e minutos
    const numericValue = Number(value);
    const hours = Math.floor(numericValue / 60);
    const minutes = numericValue % 60;
    formattedValue = `${hours}h:${minutes.toString().padStart(2, '0')}m`;
  } else if (typeof value === 'string') {
    const date = parseISO(value);
    if (isValid(date)) {
      if (onlyDate) {
        // Mostrar apenas a data
        formattedValue = format(date, 'dd/MM/yyyy');
      } else if (onlyTime) {
        // Mostrar apenas o horário
        formattedValue = format(date, 'HH:mm:ss');
      } else {
        // Mostrar a data e o horário completos
        formattedValue = format(date, 'dd/MM/yyyy, HH:mm:ss');
      }
    }
  }

  return <span>{formattedValue}</span>;
}

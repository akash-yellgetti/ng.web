import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indianNumberFormat'
})
export class IndianNumberFormatPipe implements PipeTransform {
  transform(value: any): string {
    if (value === null || value === undefined) return '';

    // Remove non-numeric characters and convert to number
    const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value;

    // Check if the value is not a valid number
    if (isNaN(numericValue)) return '';

    // Format the number with commas
    const formattedValue = numericValue.toLocaleString('en-IN', {
      maximumFractionDigits: 2
    });

    return formattedValue;
  }
}
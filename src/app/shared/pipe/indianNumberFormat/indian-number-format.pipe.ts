import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indianNumberFormat'
})
export class IndianNumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) return '';

    // Convert number to string and format with commas
    const formattedValue = value.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    return formattedValue;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthsToYears'
})
export class MonthsToYearsPipe implements PipeTransform {

  transform(months: number): string {
    if (months < 0) {
      return 'Invalid'; // Handle negative input gracefully
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    } else if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`;
    } else {
      return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    }
  }

}

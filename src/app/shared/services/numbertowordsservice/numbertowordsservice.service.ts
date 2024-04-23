import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberToWordsService {
  private ones = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  ];

  private teens = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'
  ];

  private tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
    'seventy', 'eighty', 'ninety'
  ];

  convertToWords(num: number): string {
    if (num === 0) return 'zero';

    let words = '';

    if (num < 0) {
      words += 'minus ';
      num = Math.abs(num);
    }

    // Split the number into integer and decimal parts
    let integerPart = Math.floor(num);
    const decimalPart = Math.round((num - integerPart) * 100);

    // Convert the integer part
    if (integerPart >= 10000000) {
      words += this.convertToWords(Math.floor(integerPart / 10000000)) + ' crore ';
      integerPart %= 10000000;
    }

    if (integerPart >= 100000) {
      words += this.convertToWords(Math.floor(integerPart / 100000)) + ' lakh ';
      integerPart %= 100000;
    }

    if (integerPart >= 1000) {
      words += this.convertToWords(Math.floor(integerPart / 1000)) + ' thousand ';
      integerPart %= 1000;
    }

    if (integerPart >= 100) {
      words += this.convertToWords(Math.floor(integerPart / 100)) + ' hundred ';
      integerPart %= 100;
    }

    if (integerPart > 0) {
      if (words !== '') {
        words += 'and ';
      }

      if (integerPart < 10) {
        words += this.ones[integerPart];
      } else if (integerPart < 20) {
        words += this.teens[integerPart - 10];
      } else {
        words += this.tens[Math.floor(integerPart / 10)];
        if ((integerPart % 10) > 0) {
          words += '-' + this.ones[integerPart % 10];
        }
      }
    }

    // Convert the decimal part
    if (decimalPart > 0) {
      words += ' point ';
      if (decimalPart < 10) {
        words += this.ones[decimalPart];
      } else {
        words += this.tens[Math.floor(decimalPart / 10)];
        if ((decimalPart % 10) > 0) {
          words += '-' + this.ones[decimalPart % 10];
        }
      }
    }

    return words.trim();
  }
}

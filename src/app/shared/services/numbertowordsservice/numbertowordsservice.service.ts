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

    if (Math.floor(num / 10000000) > 0) {
      words += this.convertToWords(Math.floor(num / 10000000)) + ' crore ';
      num %= 10000000;
    }

    if (Math.floor(num / 100000) > 0) {
      words += this.convertToWords(Math.floor(num / 100000)) + ' lakh ';
      num %= 100000;
    }

    if (Math.floor(num / 1000) > 0) {
      words += this.convertToWords(Math.floor(num / 1000)) + ' thousand ';
      num %= 1000;
    }

    if (Math.floor(num / 100) > 0) {
      words += this.convertToWords(Math.floor(num / 100)) + ' hundred ';
      num %= 100;
    }

    if (num > 0) {
      if (words !== '') {
        words += 'and ';
      }

      if (num < 10) {
        words += this.ones[num];
      } else if (num < 20) {
        words += this.teens[num - 10];
      } else {
        words += this.tens[Math.floor(num / 10)];
        if ((num % 10) > 0) {
          words += '-' + this.ones[num % 10];
        }
      }
    }

    return words.trim();
  }
}

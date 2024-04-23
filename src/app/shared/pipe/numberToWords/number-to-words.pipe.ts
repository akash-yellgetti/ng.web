import { Pipe, PipeTransform } from '@angular/core';
import { NumberToWordsService } from '../../services/numbertowordsservice/numbertowordsservice.service'; // Create this service to handle number to words conversion

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {
  constructor(private numberToWordsService: NumberToWordsService) {}
 

  transform(value: any): string {
    if (value === null || value === undefined) return '';

    // Remove commas and parse the value as a number
    const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value;

    // Use a service to convert number to words
    // Get the number word in lowercase
    const numberWord = this.numberToWordsService.convertToWords(value);

    // Capitalize the first letter and return
    return this.capitalizeFirstLetter(numberWord);
  }

  private capitalizeFirstLetter(text: string): string {
    if (!text) return '';
    
    text = this.loopThroughWords(text, '-')

    // Capitalize the first letter of the sentence
    text = this.loopThroughWords(text);
    
    return text;
  }

  loopThroughWords(text: string, k: any = ' '): string {
    // Split the string into an array of words
    const words = text.split(k);
    // Capitalize the first letter of each word and make the rest lowercase
    const capitalizedWords = words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.indexOf('-') === -1 ? word.slice(1).toLowerCase() : word.slice(1);
      return firstLetter + restOfWord;
    });

    return capitalizedWords.join(k);
  }
  
}

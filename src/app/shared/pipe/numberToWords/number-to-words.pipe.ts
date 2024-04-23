import { Pipe, PipeTransform } from '@angular/core';
import { NumberToWordsService } from '../../services/numbertowordsservice/numbertowordsservice.service'; // Create this service to handle number to words conversion

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {
  constructor(private numberToWordsService: NumberToWordsService) {}

  transform(value: number): string {
    if (value === null || value === undefined) return '';

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

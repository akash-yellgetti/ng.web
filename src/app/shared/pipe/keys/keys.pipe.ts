import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: { [key: string]: any }): any[] {
    if (!value) {
      return [];
    }
    return Object.keys(value).map(key => ({ key, value: value[key] }));
  }

}

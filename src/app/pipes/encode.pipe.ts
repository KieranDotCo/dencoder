import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encode'
})
export class EncodePipe implements PipeTransform {

  transform(url: any): any {
    if (!url) {
      return '';
    }

    return encodeURIComponent(url);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decode'
})
export class DecodePipe implements PipeTransform {

  transform(url: any): any {
    if (!url) {
      return '';
    }

    return decodeURIComponent(url);
  }

}

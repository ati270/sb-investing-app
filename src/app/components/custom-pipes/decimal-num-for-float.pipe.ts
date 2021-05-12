import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'spaceForFloatDecimal'
})
export class PointReplacerForFloatPipe implements PipeTransform {


  transform(value: string): string {


    for (let i = 0; i < value.length; i++) {
      if (value.charAt(i) == ',' ) {
        value = value.replace(",", " ");
      }

    }
    return value;

  }
}

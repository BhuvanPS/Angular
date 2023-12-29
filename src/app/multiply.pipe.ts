import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply',
  standalone: true
})
export class MultiplyPipe implements PipeTransform {

  transform(value: number, multiple? :number): number {
    return multiple? value*multiple:value*3;
  }

}

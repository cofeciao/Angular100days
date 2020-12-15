import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : 'roundPipe'})

export class RoundPipe implements PipeTransform{
  transform(value: number, isTrue: boolean): number {
    if (isTrue){
      return Math.ceil(value);
    }
    return Math.floor(value);
  }
}

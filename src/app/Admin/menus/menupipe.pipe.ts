import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menupipe'
})
export class MenupipePipe implements PipeTransform {

  transform(values: any[], filter:string): any {
    if(!values || !filter){
      return values;

    }
    return values.filter((value)=> value.name.indexOf(filter)>-1
    || value.price.indexOf(filter)>-1);
  }
}

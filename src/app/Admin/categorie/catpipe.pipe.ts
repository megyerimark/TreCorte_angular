import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catpipe'
})
export class CatpipePipe implements PipeTransform {

  transform(values: any[], filter:string): any {
    if(!values || !filter){
      return values;

    }
    return values.filter((value)=> value.name.indexOf(filter)>-1
    || value.description.indexOf(filter)>-1);
  }

}

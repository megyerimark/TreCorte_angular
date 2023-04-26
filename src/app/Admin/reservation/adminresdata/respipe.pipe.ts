import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'respipe'
})
export class RespipePipe implements PipeTransform {

  transform(values: any[], filter:string): any {
    if(!values || !filter){
      return values;

    }
    return values.filter((value)=> value.first_name.indexOf(filter)>-1
    || value.email.indexOf(filter)>-1 || value.tel_number.indexOf(filter)>-1);
   
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repairImg'
})
export class RepairImgPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value) {
      return value;
  }
  return "http://projekt.dev.cymer.pl/assets" + value;
  }

}

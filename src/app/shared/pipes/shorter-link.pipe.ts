import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorterLink'
})
export class ShorterLinkPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

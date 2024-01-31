import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'album',
  standalone: true
})
export class AlbumPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {


  url: string = 'https://www.youtube.com/embed/';
  constructor(private ds: DomSanitizer) {

  }

  transform(video: string, args?: any): any {
    return this.ds.bypassSecurityTrustResourceUrl(`${this.url}${video}`);
  }

}

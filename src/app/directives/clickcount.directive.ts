import { Directive, HostListener } from '@angular/core';

@Directive({ selector: 'button[counting]' })
export class ClickcountDirective {

  numberOfClicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }
}

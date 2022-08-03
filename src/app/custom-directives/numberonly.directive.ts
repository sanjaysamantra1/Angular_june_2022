import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[numberonly]',
})
export class NumberonlyDirective {
  constructor() {
    this.myBgColor = '';
  }
  @HostBinding('style.background-color') myBgColor: string;

  @HostListener('keyup', ['$event'])
  handleKeyPress(e: any) {
    const regex = new RegExp(/^[0-9]*$/);
    const value = e.target.value;
    if (!regex.test(value)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'green';
    }
  }
}

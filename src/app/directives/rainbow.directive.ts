import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  @HostBinding('style.color') color;
  @HostBinding('style.borderColor') bc;
  constructor() { }
  getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  @HostListener('keyup') changeColor() {
    this.color = this.getRandomColor();
    this.bc = this.getRandomColor();
  }
}

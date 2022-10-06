import { Directive,ElementRef,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private ref:ElementRef) { }

  ngAfterViewInit(){
    this.ref.nativeElement.style.color = 'red';
  }
  change(changedColor: String) {
    this.ref.nativeElement.style.color = changedColor;
   }
}

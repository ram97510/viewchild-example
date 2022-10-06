import { Directive, ElementRef,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appRef]'
})
export class RefDirective {

  constructor(private el : ElementRef) { }


  ngAfterViewInit(): void{
    this.el.nativeElement.style.color = 'red'
    
  }

  one(changecolor:string){
    this.el.nativeElement.style.color = changecolor
  }
}

import { Component, OnInit } from '@angular/core';
import { ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { ColorDirective } from './color.directive';
@Component({
  selector: 'app-colorparent',
  templateUrl: './colorparent.component.html',
  styleUrls: ['./colorparent.component.css']
})
export class ColorparentComponent implements OnInit {

  
  @ViewChild(ColorDirective)
  private colorDirective = {} as ColorDirective

  @ViewChild('text')
  private eltext = {} as ElementRef 
  constructor() { }

  ngOnInit(): void {
  }



  ngAfterViewInit(){
    this.eltext.nativeElement.style.backgroundColor = 'lightblue';
    this.eltext.nativeElement.style.color = 'Blue'
  }

  changecolor(color:string){
    this.colorDirective.change(color)
  }
}

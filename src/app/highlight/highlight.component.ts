import { AfterViewInit, Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive'

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements AfterViewInit {

  @ViewChild(HighlightDirective) 
  private textHighlight = {} as HighlightDirective
  
  @ViewChild('hello') divHello!: ElementRef;
  @ViewChild('divCreateText') divCreateText! : ElementRef

  constructor(private renderer : Renderer2) { }

  ngAfterViewInit(): void {
    
    this.textHighlight.highlight();
    // this.renderer.setProperty(this.divHello.nativeElement,'innerHTML',"Hello Angular")
    this.renderer.setStyle(this.divHello.nativeElement, 'color', '');
  }

  ngOnInit(): void {
  }
  

  set(){
    this.renderer.setStyle(this.divHello.nativeElement, 'color', 'blue');
  }

  createText() {
    const text = this.renderer.createText('Example of Create Text');
    this.renderer.appendChild(this.divCreateText.nativeElement, text);
   }



  changeHighlight(){
    switch(this.textHighlight.rightColor) {
      case "red":
        this.textHighlight.rightColor = "lightcoral";
        this.textHighlight.leftColor = "lightpink";
        break;
      case "lightcoral":
        this.textHighlight.rightColor = "darkblue";
        this.textHighlight.leftColor = "darkmagenta";
        break;
      case "darkblue":
        this.textHighlight.rightColor = "green";
        this.textHighlight.leftColor = "lightgreen";
        break;
      default:
        this.textHighlight.rightColor = "red";
        this.textHighlight.leftColor = "orange";
    }

    this.textHighlight.highlight();
  }

}

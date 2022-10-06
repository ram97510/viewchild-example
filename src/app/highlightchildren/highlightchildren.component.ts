import { Component, OnInit, ViewChildren,AfterViewInit, QueryList } from '@angular/core';
import { HighlightDirective } from '../highlight/highlight.directive';

@Component({
  selector: 'app-highlightchildren',
  templateUrl: './highlightchildren.component.html',
  styleUrls: ['./highlightchildren.component.css']
})
export class HighlightchildrenComponent implements AfterViewInit {

  @ViewChildren(HighlightDirective) Highlight!: QueryList<HighlightDirective> 


  ngAfterViewInit(){
    this.Highlight.forEach((hl) => {
      hl.highlight();
    });
  }
  constructor() { }



  changeHighlight(){
    let rightColor = this.Highlight.toArray()[0].rightColor;
    let leftColor: string;
    switch(rightColor) {
      case "red":
        rightColor = "lightcoral";
        leftColor = "lightpink";
        break;
      case "lightcoral":
        rightColor = "darkblue";
        leftColor = "darkmagenta";
        break;
      case "darkblue":
        rightColor = "green";
        leftColor = "lightgreen";
        break;
      default:
        rightColor = "red";
        leftColor = "orange";
    }

     this.Highlight.forEach((hl) => {
      hl.rightColor = rightColor;
      hl.leftColor = leftColor;
      hl.highlight();
    });
  }

}

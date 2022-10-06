import { Component, OnInit, ViewChild,  } from '@angular/core';
import { RefDirective } from './ref.directive';

@Component({
  selector: 'app-ref',
  templateUrl: './ref.component.html',
  styleUrls: ['./ref.component.css']
})
export class RefComponent implements OnInit {

  @ViewChild(RefDirective)
  private refDirective = {} as RefDirective

  constructor() { }

  ngOnInit(): void {
  }

  changecolor(color:string){
    this.refDirective.one(color)
  }

}

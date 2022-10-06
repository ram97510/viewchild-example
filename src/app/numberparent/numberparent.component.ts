import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NumberComponent } from '../number/number.component';

@Component({
  selector: 'app-numberparent',
  templateUrl: './numberparent.component.html',
  styleUrls: ['./numberparent.component.css']
})
export class NumberparentComponent implements OnInit {

  @ViewChild(NumberComponent)
  private NumberComponent = {} as NumberComponent

  constructor() { }

  ngOnInit(): void {
  }
  mess = ''
  increase(){
    this.mess = this.NumberComponent.message
    this.NumberComponent.increaseByone();
  }
  degrease(){
    this.mess =this.NumberComponent.message
    this.NumberComponent.degreaseByone();
  }

  //----------------

  start(){
    this.NumberComponent.startBy();
  }
  stop(){
    this.NumberComponent.stopBy();
  }
  reset(){
    this.NumberComponent.counter = 0
    this.NumberComponent.stopBy
  }

}

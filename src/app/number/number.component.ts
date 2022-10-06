import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  }
  message : string = '';
  count : number = 0; 
  increaseByone(){
    this.count = this.count + 1;
    this.message = "counter :" + this.count;
   
  }
  degreaseByone(){
    this.count = this.count - 1;
    this.message = "Counter : " + this.count;
   
  }
  
  //------------------
  counter:number = 0;
  run : boolean = false

  startBy(){
    this.run = true
    let interval = setInterval(()=>{
      if(this.run=== false){
        clearInterval(interval)
      }
      this.counter = this.counter + 1;
    },1000)
  }
  stopBy(){
    this.run = false
  }

}

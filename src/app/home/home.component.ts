import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{



  homer= false;

  home(){
  this.homer = !this.homer;
  }
 show(){

 }




  private countDate!: number;
public day!: number;
public hour!: number;
public minute!: number;
public second!: number;

ngOnInit(): void {
  this.countDate = new Date('apr 28, 2023 00:00:00').getTime();
  setInterval(() => {
    this.countDown();
  }, 1000);
}

private countDown() {
  let now = new Date().getTime();
  let gap = this.countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  this.day = Math.floor(gap / day);
  this.hour = Math.floor((gap % day) / hour);
  this.minute = Math.floor((gap % hour) / minute);
  this.second = Math.floor((gap % minute) / second);
}

}



import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  homer= false;

  home(){
  this.homer = !this.homer;
  }
 show(){

 }
 

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showNav = false;


  homer= false;

  home(){
  this.homer = !this.homer;
  }
 show(){

 }

}

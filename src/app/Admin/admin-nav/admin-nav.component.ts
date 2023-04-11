import { Component } from '@angular/core';
import { AuthService } from '../Shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNAVComponent {

  constructor(private auth:AuthService, private toastr:ToastrService,
    private router:Router){}

  showNav = false;


  homer= false;

  home(){
  this.homer = !this.homer;
  }
 show(){

 }


 logout(){
  this.auth.logout();
  this.toastr.success('Sikeres kijelentkezés');
  this.router.navigate(['admin/login']);

}
}

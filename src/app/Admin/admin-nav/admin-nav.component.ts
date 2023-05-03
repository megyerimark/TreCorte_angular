import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNAVComponent implements OnInit {

  constructor(private auth:AuthService, private toastr:ToastrService,
    private router:Router){}
  ngOnInit(): void {
   this.isLogginin();
  }




 logout(){
  this.auth.logout();
  this.toastr.success('Sikeres kijelentkezés');
  this.router.navigate(['admin/login']);

}

 currentU :any;
isLogginin(){
  let jsonCurrentUser:any = localStorage.getItem("currentAdmin");
  let currentUser = JSON.parse(jsonCurrentUser);
  console.log(currentUser.name);
  this.currentU = currentUser.name;


 




}


}

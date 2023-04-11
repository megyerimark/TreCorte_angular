import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor( private admin:AuthService, private router:Router){}

  canActivate() {
    if(this.admin.isLoggedIn()){
      return true;
    }
    this.router.navigate(['admin/login']);
    return false;

   }


}

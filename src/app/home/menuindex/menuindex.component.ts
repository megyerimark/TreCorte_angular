import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from 'src/app/Admin/Shared/menu.service';

@Component({
  selector: 'app-menuindex',
  templateUrl: './menuindex.component.html',
  styleUrls: ['./menuindex.component.scss']
})
export class MenuindexComponent {



  form!:FormGroup;
menus: any;
  constructor(
    private menuservice: MenuService,
    private router:Router,
    private toastr: ToastrService,
    private http:HttpClient,
    private formBuild:FormBuilder){}

    ngOnInit(): void {
      this.index();
    }




  index(){

    this.menuservice.index().subscribe({
      next:res=>{
        this.menus = res;
      }
    });
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Shared/auth.service';
import { MenuService } from '../Shared/menu.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent {

  currentUser: any;

  menus!:any;
    form!:FormGroup;
    constructor(
      private auth :AuthService,
      private menuss: MenuService,
      private router:Router,
      private toastr: ToastrService,
      private http:HttpClient,
      private formBuild:FormBuilder){

        this.form = this.formBuild.group({
          file:null,
          name:['', Validators.required],
          image:['', Validators.required],
          description:['', Validators.required],
          price:['', Validators.required],
          category_id:['', Validators.required],
        });
      }

      ngOnInit(): void {
        this.index();
        this.form = this.formBuild.group({
          file:null,
          name:['', Validators.required],
          image:['', Validators.required],
          description:['', Validators.required],
          price:['', Validators.required],
          category_id:['', Validators.required],

        })
      }
      index(){
        let jsonUserData: any = localStorage.getItem('currentAdmin');
        let currentUser = JSON.parse(jsonUserData);
        this.menuss.index(currentUser.token).subscribe({
          next:res=>{
            this.menus = res;
          }
        });
      }





onFileChange(event:Event) {
  const file = (event.target as HTMLInputElement)?.files?.[0];
  this.form.patchValue({
    file:file
  })
}


uploadFile() {
  let jsonCurrentUser: any = localStorage.getItem("currentAdmin");
  let currentUser = JSON.parse(jsonCurrentUser);

  let formData = new FormData();
  formData.append('image', this.form.controls['file'].value);
  formData.append('name', this.form.value.name);
  formData.append('description', this.form.value.description);
  formData.append('price', this.form.value.price);
  formData.append('category_id', this.form.value.category_id);
  this.menuss.store(currentUser.token, formData).subscribe({
    next: res =>{
     this.toastr.success("Sikeres feltöltés");
     this.index();
    },
    error:err =>{
      this.toastr.error("Sikertelen feltöltés")

    }
})
    }


    Delete(id:any){
      let jsonUserData: any = localStorage.getItem('currentAdmin');
      let currentUser = JSON.parse(jsonUserData);
      this.menuss.Delete(id, currentUser.token).subscribe({
        next: res => {
          this.toastr.info("TÖRÖLVE");
          this.index();
        },
        error: err => {
          this.toastr.error("Sikertelen törlés");
        }
      });
    }





}
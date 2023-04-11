import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Shared/auth.service';
import { CategoryService } from '../Shared/category.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  currentUser: any;

  categories!:any;
    form!:FormGroup;
    constructor(
      private auth :AuthService,
      private category: CategoryService,
      private router:Router,
      private toastr: ToastrService,
      private http:HttpClient,
      private formBuild:FormBuilder){

        this.form = this.formBuild.group({
          file:null,
          name:['', Validators.required],
          id:['', Validators.required],
          image:['', Validators.required],
          description:['', Validators.required],
        });
      }

      ngOnInit(): void {
        this.index();

        this.form = this.formBuild.group({
          file:null,
          name:['', Validators.required],
          id:['', Validators.required],
          image:['', Validators.required],
          description:['', Validators.required]

        })
      }
      index(){
        let jsonUserData: any = localStorage.getItem('currentAdmin');
        let currentUser = JSON.parse(jsonUserData);
        this.category.index(currentUser.token).subscribe({
          next:res=>{
            this.categories = res;
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



  this.category.store(currentUser.token, formData).subscribe({


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
    this.category.Delete(id, currentUser.token).subscribe({
      next:res=>{
       this.toastr.info("TÖRÖLVE")
        this.index();
      },
      error:err =>{
        this.toastr.error("Sikertelen törlés")

      }
    })
  }

}

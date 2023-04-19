import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Shared/auth.service';
import { MenuService } from '../Shared/menu.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent {

  currentUser: any;


    form!:FormGroup;
  menus: any;
    constructor(
      private auth :AuthService,
      private menuservice: MenuService,
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
          price:['', Validators.required],
          category_id:['', Validators.required],
        });
      }

      ngOnInit(): void {
        this.index();
        this.form = this.formBuild.group({
          file:null,
          name:['', Validators.required],
          id:['', Validators.required],
          image:['', Validators.required],
          description:['', Validators.required],
          price:['', Validators.required],
          category_id:['', Validators.required],

        })
      }
      index(){
        this.menuservice.index().subscribe({
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



  this.menuservice.store(currentUser.token, formData).subscribe({


    next: res =>{
      Swal.fire('Siker!',' sikeres felvétel','success');
     this.index();
    },
    error:err =>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Sikertelen felvétel!'
      })

    }
})
    }

    Delete(id:any){
      let jsonUserData: any = localStorage.getItem('currentAdmin');
      let currentUser = JSON.parse(jsonUserData);
      this.menuservice.Destroy(id, currentUser.token).subscribe({
        next:res=>{
         this.toastr.warning("TÖRÖLVE")
          this.index();
        },
        error:err =>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sikertelen törlés!'
          })

        }
      })
    }






}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!:FormGroup;
  submitted!: boolean;



  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) { }

    ngOnInit(): void {
      this.form = this.formBuilder.group({
        email:['', Validators.required],
        password: ['', Validators.required]
      });
      }
      alogin(){
        let email = this.form.value.email;
        let password = this.form.value.password;

        this.auth.alogin(email,password).subscribe({
          next:res =>{
            if(res.success){
              localStorage.setItem('currentAdmin',
               JSON.stringify({token: res.data.token, name: res.data.name}));
              this.router.navigate(['admin/admin']);
              this.toastr.success('Üdvözöllek\n' + res.data.name)
        

            }else{
              this.toastr.error("sikertelen belépés" );
            }
          }
        });
      }

      logout(){
        this.auth.logout();
        this.toastr.success('Sikeres kijelentkezés');
        this.router.navigate(['admin/login']);


      }



}

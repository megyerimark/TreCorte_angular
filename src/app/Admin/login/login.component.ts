import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

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
              // this.toastr.success('Üdvözöllek\n' + res.data.name)
              Swal.fire({
                text: 'Sikeres Bejelentkezés.',
                imageUrl: 'https://c4.wallpaperflare.com/wallpaper/32/804/961/spirit-blossom-yasuo-yasuo-league-of-legends-league-of-legends-riot-games-hd-wallpaper-preview.jpg',
                imageWidth: 400,
                imageHeight: 200,
              })
        

            }else{
              Swal.fire({
                icon: 'error',
                title: 'Hoppá!...',
                text: 'Sikertelen Bejelentkezés!'
              })
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

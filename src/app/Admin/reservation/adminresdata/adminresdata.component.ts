import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../Shared/reservation.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-adminresdata',
  templateUrl: './adminresdata.component.html',
  styleUrls: ['./adminresdata.component.scss']
})
export class AdminresdataComponent {

currentUser: any;
actualRes!:string;

  form!:FormGroup;
reservations: any;
show = true;

  constructor(
    private reservationServ: ReservationService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient,
    private formBuild: FormBuilder
  ) {}

  ngOnInit(): void {
    this.index();

    this.form = this.formBuild.group({
      id: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      tel_number: ['', Validators.required],
      res_date: ['', Validators.required],
      guest_number: ['', Validators.required],
    });
  }

  index() {
    let jsonUserData: any = localStorage.getItem('currentAdmin');
    let currentUser = JSON.parse(jsonUserData);
    this.reservationServ.index(currentUser.token).subscribe({
      next: (res) => {
        this.reservations = res;
        console.log('Megyeri Márk Máté');
      },
    });
  }

  update(res: any) {
    this.form.patchValue({ id: res.id });
    this.form.patchValue({ first_name: res.first_name });
    this.form.patchValue({ last_name: res.last_name });
    this.form.patchValue({ email: res.email });
    this.form.patchValue({ tel_number: res.tel_number });
    this.form.patchValue({ guest_number: res.guest_number });
    this.form.patchValue({ res_date: res.res_date });
    
  }

  Update() {
    let jsonUserData: any = localStorage.getItem('currentAdmin');
    let currentUser = JSON.parse(jsonUserData);

    let res = {
      id: this.form.value.id,
      first_name: this.form.value.first_name,
      last_name: this.form.value.last_name,
      email: this.form.value.email,
      tel_number: this.form.value.tel_number,
      res_date: this.form.value.res_date,
      guest_number: this.form.value.guest_number,
    };

    this.reservationServ.update(res, currentUser.token).subscribe({
      next:res => {
        this.toastr.success('Sikeres módosítás');
        this.show = false;
        this.index();
        //$('#exampleModal').modal('hide');
      },
      error : err => {
        this.toastr.error('Sikertelen módosítás');
      }
    });
    
  }

  Delete(id: any) {
    let jsonUserData: any = localStorage.getItem('currentAdmin');
    let currentUser = JSON.parse(jsonUserData);
    this.reservationServ.Destroy(id, currentUser.token).subscribe({
      next: (res) => {
        this.toastr.warning('TÖRÖLVE');
        this.index();
      },
      error: (err) => {
        this.toastr.error('Sikertelen törlés');
      },
    });
  }
}




//   constructor(
//     private reservationServ: ReservationService,
//     private router:Router,
//     private toastr: ToastrService,
//     private http:HttpClient,
//     private formBuild:FormBuilder){}


//     ngOnInit(): void {
//       this.index();

//       this.form = this.formBuild.group({
//         id:['', Validators.required],
//         first_name:['', Validators.required],
//         last_name:['', Validators.required],
//         email:['', Validators.required],
//         tel_number:['', Validators.required],
//         res_date:['', Validators.required],
//         guest_number:['', Validators.required],

//       })


// }

// index(){
//   let jsonUserData: any = localStorage.getItem('currentAdmin');
//   let currentUser = JSON.parse(jsonUserData);
//   this.reservationServ.index(currentUser.token).subscribe({
//     next:res=>{
//       this.reservations = res;
//       console.log('Megyeri Márk Máté');
//     }
//   });


// }

// show!:any;
// update(res:any){
//   this.form.patchValue({id: res.id});
//   this.form.patchValue({first_name: res.first_name});
//   this.form.patchValue({last_name: res.last_name});
//   this.form.patchValue({email: res.email});
//   this.form.patchValue({tel_number: res.tel_number});
//   this.form.patchValue({guest_number: res.guest_number});
//   this.form.patchValue({res_date: res.res_date});
//   this.show=true;
// }


// Update() {
//   event.preventDefault(); // ezt a sort hozzá kell adni
//   let jsonUserData: any = localStorage.getItem('currentAdmin');
//   let currentUser = JSON.parse(jsonUserData);

//   let res = {
//     id: this.form.value.id,
//     first_name: this.form.value.first_name,
//     last_name: this.form.value.last_name,
//     email: this.form.value.email,
//     tel_number: this.form.value.tel_number,
//     res_date: this.form.value.res_date,
//     guest_number: this.form.value.guest_number,
//   }

//   this.reservationServ.update(res, currentUser.token).subscribe({
//     next: res => {
//       this.toastr.success('Sikeres módosítás');
//       this.show = false;
//       this.index();
//     },
//     error: err => {
//       this.toastr.error('Sikertelen módosítás');
//     }
//   });
// }



// Delete(id:any){
//   let jsonUserData: any = localStorage.getItem('currentAdmin');
//   let currentUser = JSON.parse(jsonUserData);
//   this.reservationServ.Destroy(id, currentUser.token).subscribe({
//     next:res=>{
//      this.toastr.warning("TÖRÖLVE")
//       this.index();
//     },
//     error:err =>{
//       this.toastr.error("Sikertelen törlés")

//     }
//   })
// }




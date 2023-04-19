import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../Shared/reservation.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {

  currentUser: any;


  form!:FormGroup;
reservations: any;
  constructor(
    private reservationServ: ReservationService,
    private router:Router,
    private toastr: ToastrService,
    private http:HttpClient,
    private formBuild:FormBuilder){

      // this.form = this.formBuild.group({
      //   file:null,
      //  first_name:['', Validators.required],
      //   last_name:['', Validators.required],
      //   email:['', Validators.required],
      //   tel_number:['', Validators.required],
      //   res_date:['', Validators.required],
      //   guest_number:['', Validators.required],
      // });
    }

    ngOnInit(): void {
      this.form = this.formBuild.group({
        file:null,
        first_name:['', Validators.required],
        last_name:['', Validators.required],
        email:['', Validators.required],
        tel_number:['', Validators.required],
        res_date:['', Validators.required],
        guest_number:['', Validators.required],

      })
    }




success!:any;
    reservation(){

      let  first_name = this.form.value.first_name;
      let  last_name = this.form.value.last_name;
      let  email = this.form.value.email;
      let  tel_number = this.form.value.tel_number;
      let  res_date = this.form.value.res_date;
      let  guest_number = this.form.value.guest_number;

      this.reservationServ.store(first_name,last_name,email,tel_number,
        res_date,guest_number).subscribe({
          next : data =>{
            Swal.fire(
            'Sikeres Foglalás:' , data.data.first_name +'\n' + data.data.last_name,'success');
            this.success=true;


          },
          error:err =>{
            this.toastr.error('Hiba! A foglalás sikertelen!');

          }

        });
    }




}

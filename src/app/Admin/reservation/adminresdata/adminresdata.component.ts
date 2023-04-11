import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationService } from '../../Shared/reservation.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-adminresdata',
  templateUrl: './adminresdata.component.html',
  styleUrls: ['./adminresdata.component.scss']
})
export class AdminresdataComponent {

  currentUser: any;


  form!:FormGroup;
reservations: any;
  constructor(
    private reservationServ: ReservationService,
    private router:Router,
    private toastr: ToastrService,
    private http:HttpClient,
    private formBuild:FormBuilder){}


    ngOnInit(): void {
      this.index();

}

index(){
  let jsonUserData: any = localStorage.getItem('currentAdmin');
  let currentUser = JSON.parse(jsonUserData);
  this.reservationServ.index(currentUser.token).subscribe({
    next:res=>{
      this.reservations = res;
    }
  });
}
Update(id:number){
   let jsonUserData: any = localStorage.getItem('currentAdmin');
    let currentUser = JSON.parse(jsonUserData);

    let res = {
       first_name : this.form.value.first_name,
        last_name : this.form.value.last_name,
       email : this.form.value.email,
        tel_number : this.form.value.tel_number,
       res_date : this.form.value.res_date,
      guest_number : this.form.value.guest_number,
   }
    this.reservationServ.update(res, currentUser.token).subscribe({
       next:res=>{

        this.index();
       }

       });
      }



Delete(id:any){
  let jsonUserData: any = localStorage.getItem('currentAdmin');
  let currentUser = JSON.parse(jsonUserData);
  this.reservationServ.Destroy(id, currentUser.token).subscribe({
    next:res=>{
     this.toastr.warning("TÖRÖLVE")
      this.index();
    },
    error:err =>{
      this.toastr.error("Sikertelen törlés")

    }
  })
}




}




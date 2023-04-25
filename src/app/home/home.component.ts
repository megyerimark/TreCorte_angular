import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { ReservationService } from '../Admin/Shared/reservation.service';
import { MenuService } from '../Admin/Shared/menu.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{

  currentUser: any;
  menus: any;


  form!:FormGroup;
reservations: any;
  constructor(
    private reservationServ: ReservationService,
    private router:Router,
    private toastr: ToastrService,
    private http:HttpClient,
    private menuservice: MenuService,
    private formBuild:FormBuilder){

    }

  private countDate!: number;
public day!: number;
public hour!: number;
public minute!: number;
public second!: number;

ngOnInit(): void {
  this.countDate = new Date('jun 2, 2023 00:00:00').getTime();
  setInterval(() => {
    this.countDown();
  }, 1000);

  this.index();




  this.form = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    tel_number: new FormControl(''),
    res_date: new FormControl(''),
    guest_number: new FormControl('')
  });
}




private countDown() {
  let now = new Date().getTime();
  let gap = this.countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  this.day = Math.floor(gap / day);
  this.hour = Math.floor((gap % day) / hour);
  this.minute = Math.floor((gap % hour) / minute);
  this.second = Math.floor((gap % minute) / second);
}

index(){

  this.menuservice.index().subscribe({
    next:res=>{
      this.menus = res;
      console.log('Megyeri Márk Máté');
    }
  });
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
            this.form.setValue({
              first_name: '',
              last_name: '',
              email: '',
              tel_number: '',
              res_date: '',
              guest_number: ''
            });
            
            
      
          },
          error:err =>{
            this.toastr.error('Hiba! A foglalás sikertelen!');

          }
        });

      
      
      }
}



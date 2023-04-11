import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {



  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }


  index(token: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };
    return this.http.get<any>(this.host + "reservations", httpOption);

  };

  store( first_name:string, last_name:string, email:string, tel_number:string, res_date:string,
     guest_number:string){

      let resData={
        first_name:first_name,
        last_name:last_name,
        email:email,
        res_date:res_date,
        tel_number:tel_number,
        guest_number:guest_number,
      }

  let headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  let httpOption= {
    headers:headers
  }
  let endpoint = "reservations-create";
  let url = this.host  + endpoint;
  return this.http.post<any>(url, resData,httpOption)

}
update(reservation: any, token: string) {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  });
  let httpOptions = {
    headers: headers,
    method: 'PUT'
  };
  let endpoint = "reservation/";
  let url = this.host + endpoint + reservation.id;
  return this.http.put<any>(url, reservation, httpOptions);
}




  Destroy(id:any , token:string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    })
    let httpOption = {
      headers: headers
    };

    let endpoint="destroyReservation/";
    let url = this.host + endpoint;
    return this.http.delete<any>(url +id, httpOption);
  }

}

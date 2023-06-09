import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }


  index() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let httpOption = {
      headers: headers
    };
    return this.http.get<any>(this.host + "menus", httpOption);

  };


  store(token: string, formData: FormData) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    let httpOptions = {
      headers: headers
    }
    let endpoint = "menuscreate";
    let url = this.host + endpoint;
    return this.http.post<any>(url, formData, httpOptions);
  }



  Destroy(id:any , token:string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    })
    let httpOption = {
      headers: headers
    };

    let endpoint="destroyMenus/";
    let url = this.host + endpoint;
    return this.http.delete<any>(url +id, httpOption);
  }



}

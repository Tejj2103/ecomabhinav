import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://sfh-product-service.herokuapp.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
    }

    login(username: string, password: string){
      const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
      return this.http.post<any>('https://sph-auth-service.herokuapp.com/login', { username: username, password: password}, {headers}).subscribe(data => {
        return data;
    })
    }

  }

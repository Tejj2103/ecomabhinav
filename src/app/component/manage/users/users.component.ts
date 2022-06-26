import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  retData: any;

  constructor(private _http: HttpClient,
    private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers(){
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
      this._http.get<any>('https://sph-auth-service.herokuapp.com/users', {headers}).subscribe(data => {
        this.retData = data;
    })
  }

  editUser(userid: number){
    // const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
    // this._http.post<any>('http://localhost:8080/login', { username: document.getElementById, password: this.loginForm.value.password}, {headers}).subscribe(data => {
    //   this.retData = data.role;
    //   console.log(this.retData)
    //   window.sessionStorage.setItem('login', 'true');
    //   // this.loginForm.reset();
    //   if("ADMIN" === this.retData){
    //     this.router.navigate(['/admin']);
    //   } else {
    //     this.router.navigate(['/products']);
    //   }
    // })
  }

}

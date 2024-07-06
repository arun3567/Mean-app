import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, of } from "rxjs";

const  BACKEND_URL = "http://localhost:3000/api/user/";

@Injectable({
  providedIn: 'root'
})
export class Authservice{

  auth = false;
  getUserIsAuthenticated = new BehaviorSubject<boolean>(true);

  constructor(private http : HttpClient , private router : Router){}


  getUser(form):Observable<any>{
    this.getUserIsAuthenticated.next(true);
    this.auth = true
    let val = true
    return of(val);
  }

  getIsAuth(){
    return this.auth;
  }

  setAuthentication(val){
    this.getUserIsAuthenticated.next(val);
  }
}

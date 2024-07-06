import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Authservice } from './auth/auth.service';
// import { ComponentOutlet } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isAuthenticated : any;

  constructor(private dataservice : DataService,
    private authService : Authservice
  ){}

  ngOnInit(): void {
    this.getAuth();
  }

  getAuth(){
    this.authService.getUserIsAuthenticated.subscribe(res => {
      this.isAuthenticated = res;
    })
  }



}

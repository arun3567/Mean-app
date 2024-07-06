import { Component, OnDestroy, OnInit } from '@angular/core';
import { Authservice } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authService : Authservice){}

  ngOnInit(){

  }

}

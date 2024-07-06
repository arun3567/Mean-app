import { Component, OnInit } from '@angular/core';
import { Authservice } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  form : FormGroup;

  constructor(public authService : Authservice,private fb : FormBuilder,
    private router : Router
  ){}

  ngOnInit(){
    this.initializeForm()
  }

  initializeForm(){
    this.form = this.fb.group({
      username : new FormControl(null, { validators: [Validators.required] }),
      password : new FormControl(null, { validators: [Validators.required] }),
    })
  }

  onSubmit(){
    let formValue = this.form.value;
    console.log(formValue)
    this.authService.getUser(formValue).subscribe((res : any) => {
      console.log(res)
      this.router.navigateByUrl('/user/profile')
    })
  }

}

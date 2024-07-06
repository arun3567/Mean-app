import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../shared-module/material.module";

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations : [
    SignupComponent,
    LoginComponent,
  ],
  imports : [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule
  ]
})
export class AuthModule{}

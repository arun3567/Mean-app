import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../shared-module/material.module";
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path : 'profile' , component : ProfileComponent},
]

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DragDropModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class UsersModule { }

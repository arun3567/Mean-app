import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  { path: '',redirectTo: 'auth/login',pathMatch: 'full' },
  { path : 'user' , loadChildren : () => import('./users/users.module').then(m => m.UsersModule),canActivate:[AuthGuard]},
  { path : 'form' , loadChildren : () => import('./form/form.module').then(m => m.FormModule),canActivate: [AuthGuard]},
  { path : 'auth' , loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

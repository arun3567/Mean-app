import { Injectable } from "@angular/core";
import { CanActivate,Router } from "@angular/router";
import { Authservice } from "./auth.service";

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{
  isLogin = true

  constructor(private authService : Authservice , private router : Router){}

  canActivate(): boolean {
    if (this.isLogin) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}

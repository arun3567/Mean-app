import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isSidebarVisible = true;

  constructor(private router : Router,private authService : Authservice){}

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  logout(){
    this.authService.setAuthentication(false)
    this.router.navigateByUrl('/auth/login')
  }

  onMenuAction(e){
    if(e == 'user'){
      this.router.navigateByUrl(`/${e}/profile`);
    }else{
      this.router.navigateByUrl(`/${e}/formbuilder`);
    }
  }
}

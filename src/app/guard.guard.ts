import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private cook : CookieService) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      const role  = this.cook.get('role')
      if(role == "ADMIN_USER_ROLE")
      return true;
      if(role == "STAFF_USER_ROLE")
      this.router.navigate(["sales"])
      return false;
    
    
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
  canActivateforsales(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
  }


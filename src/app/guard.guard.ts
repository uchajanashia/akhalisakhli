import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private cook: CookieService) { }

  canActivate(): boolean {
    console.log('AuthGuard#canActivate called');
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      console.log('Redirect to login: not logged in');
      return false;
    }

    const role = this.cook.get('role');
    console.log('Detected role:', role);
    switch (role) {
      case "ADMIN_USER_ROLE":
        return true;
      case "STAFF_USER_ROLE":
        this.router.navigate(["sales"]);
        console.log('Redirect to sales: staff user');
        return false;
      default:
        this.router.navigate(['/login']);
        console.log('Redirect to login: unrecognized role');
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


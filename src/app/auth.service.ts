import { Injectable } from '@angular/core';
import { HttpClient  , HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { URL,API } from './api-config';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

 jwtToken = "";
 role = "";

  constructor(private http: HttpClient,private cookieService: CookieService) {}

  authenticate(email: string, password: string) {
    const body = { email, password };
    return this.http.post(`${URL}/api/v1/auth/authenticate`, body, { responseType: 'text' }).pipe(
      catchError(this.handleError));
  }

  verifyMFA(email: string, twoFactorCode: string) {
    const body = { email, twoFactorCode };
    return this.http.post<any>(`${URL}/api/v1/auth/verify2fa`, body).pipe(
      tap(response => {

        if (response.token) {
          
          this.jwtToken = response.token;
          this.role  = response.userType;
          this.cookieService.set('jwtToken', this.jwtToken);
          this.cookieService.set('role', this.role);
        }
      }),
      catchError(this.handleError)
    );
  }
  passwordRecoveryRequest(email: string) {
    const url = `${URL}/api/v1/auth/reset_password/${email}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as const 
    };

    return this.http.put(url, {}, httpOptions).pipe(
      catchError(this.handleError)
    );
  }


  passwordreset(email:string , newPassword:string , twoFactorCode:string ){
    const body = {email , newPassword , twoFactorCode}
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as const 
    };
    return this.http.post(`${URL}/api/v1/auth/verify_reset_code`, body , httpOptions).pipe(
      catchError(this.handleError)
    )
  }

  isTokenValid(): Observable<boolean> {
    const jwtToken = this.getJwtToken();
    if (!jwtToken) {
      return of(false);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);

    return this.http.get<boolean>(`${URL}/api/v1/user-details/is-token-validate`, { headers }).pipe(
      catchError(() => of(false)) 
    );
  }

  getJwtToken(): string {
    return this.cookieService.get('jwtToken');
  }
  getRole():string{
    return this.cookieService.get('role');
  }

  logout() {
    this.cookieService.delete('jwtToken');
  }
  isLoggedIn()   {
    const role = this.cookieService.get('role');
    if(role==""){
      return false
    }
    return true
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }

  getCustomers(Token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token}`
    });
    return this.http.get<any>(`${URL}/api/v1/manage-user/get-user-list`,{ headers });
  }

  
  }


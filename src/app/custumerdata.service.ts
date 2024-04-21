import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { tap, catchError, throwError, of } from 'rxjs';
import { URL, API } from './api-config';
import { appConfig } from './app.config';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CustumerdataService {
  jwtToken = '';
  role = '';

  constructor(private http: HttpClient, private cookieService: CookieService) {}
  getJwtToken(): string {
    return this.cookieService.get('jwtToken');
  }
  custumerSendData(customerNameAndSurname : string ,customerEmail:string,customerCountry:string ,customerPhoneNumber:string ,customerMessage:string) :Observable<any> {
    const body = {customerNameAndSurname,customerEmail,customerCountry,customerPhoneNumber ,customerMessage };
    return this.http
      .post<any>(`${URL}${API.Manage_Customer.CreateCustomerOrAddMessage}`, body)
      .pipe(
        catchError(this.handleError)
      );
  }
  fetchCustomers(): Observable<any[]> {
    const jwt=this.cookieService.get('jwtToken')
    const headers = new HttpHeaders({'Authorization': `Bearer ${jwt}`});

    return this.http.get<any[]>(URL+API.Manage_Customer.GetAllCustomerModal, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }
 
  setcoment(messageId:string , comment:string ){
    const body = {messageId , comment }
  const token = this.cookieService.get('jwtToken');
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }),

  };
    return this.http.post(URL+API.Manage_Customer.WriteOrUpdateCommentOnMessage, body , httpOptions).subscribe(
      response => {
        console.log('POST request successful:', response);
      },
      error => {
        console.error('Error in POST request:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Status Text:', error.statusText);
          console.error('URL:', error.url);
          console.error('Headers:', error.headers);
          console.error('Message:', error.message);
        }
      }
    );
  }

  check(messageId:string){
    const token = this.cookieService.get('jwtToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
      responseType: 'text' as const 
    };
    this.http.post(URL+API.Manage_Customer.CheckOrUnCheckMsg+messageId ,{}, httpOptions).subscribe(
      response => {
        console.log('POST request successful:', response);
      },
      error => {
        console.error('Error in POST request:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Status Text:', error.statusText);
          console.error('URL:', error.url);
          console.error('Headers:', error.headers);
          console.error('Message:', error.message);
        }
      }
    );
  }

  deletemessage(messageId:string){
    const token = this.cookieService.get('jwtToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
      responseType: 'text' as const 
    };
    this.http.delete(URL+API.Manage_Customer.DeleteCustomerMessage+messageId ,  httpOptions).subscribe(
      response => {
        console.log('POST request successful:', response);
      },
      error => {
        console.error('Error in POST request:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Status Text:', error.statusText);
          console.error('URL:', error.url);
          console.error('Headers:', error.headers);
          console.error('Message:', error.message);
        }
      }
    );
  }
  deleteclient(customerid:string){
    const token = this.cookieService.get('jwtToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
      responseType: 'text' as const 
    };
    this.http.delete(URL+API.Manage_Customer.DeleteCustomer+customerid ,  httpOptions).subscribe(
      response => {
        console.log('POST request successful:', response);
      },
      error => {
        console.error('Error in POST request:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Status Text:', error.statusText);
          console.error('URL:', error.url);
          console.error('Headers:', error.headers);
          console.error('Message:', error.message);
        }
      }
    );
  }
rate(customerId:string, customerPoint : string){
  const data = {customerId , customerPoint}
  const token = this.cookieService.get('jwtToken');
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }),
    responseType: 'text' as const 
  };
  this.http.post(URL+API.Manage_Customer.ratecustomer, data  , httpOptions).subscribe(
    response => {
      console.log('POST request successful:', response);
    },
    error => {
      console.error('Error in POST request:', error);
      if (error instanceof HttpErrorResponse) {
        console.error('Status:', error.status);
        console.error('Status Text:', error.statusText);
        console.error('URL:', error.url);
        console.error('Headers:', error.headers);
        console.error('Message:', error.message);
      }
    }
  );

}
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

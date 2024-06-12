import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private baseUrl = 'https://bk.akhalisakhli.com';

  constructor(private http: HttpClient,  private cookiservice: CookieService) {
   }

  private getHeaders(): HttpHeaders {
    const token = this.cookiservice.get('jwtToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  updateComponent(pageComponentId: any, componentName: any, componentContent: any): Observable<any> {
    const body = {
      pageComponentId: pageComponentId,
      componentName: componentName,
      componentContent: componentContent
    };
    return this.http.put(`${this.baseUrl}/api/v1/admin-panel/update-page-component-modal`, body, { headers: this.getHeaders() });
  }
  
  
  getPageById(pageId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/v1/admin-panel/get-page-by-id/${pageId}`);
  }
  uploadUserImage(file: File , filename : string): Observable<any> {
    const url = `${this.baseUrl}/api/v1/admin-panel/upload-user-img`;
    const pageImg = new FormData();
    const newFile = new File([file], filename, { type: file.type });
    pageImg.append('pageImg', newFile, newFile.name);

    return this.http.post(url, pageImg, { headers: this.getHeaders(), responseType: 'text' });
  }
}

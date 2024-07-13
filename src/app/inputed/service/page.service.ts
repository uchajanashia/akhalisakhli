import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private baseUrl = 'https://backend.mr-morrison.duckdns.org';

  constructor(private http: HttpClient, private cookiservice: CookieService) {}

  private getHeaders(): HttpHeaders {
    const token = this.cookiservice.get('jwtToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
  }
  private getHeaders1(): HttpHeaders {
    const token = this.cookiservice.get('jwtToken');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
  }


  updateComponent(pageComponentId: any, componentName: any, componentContent: any ): Observable<any> {
    const body = {
      pageComponentId: pageComponentId,
      componentName: componentName,
      componentContent: componentContent
    };
    return this.http.put(`${this.baseUrl}/api/v1/admin-panel/update-page-component-modal`, body, { headers: this.getHeaders() });
  }
  updateComponentprt(pageComponentId: any, componentName: any, componentContent: any , priority:any): Observable<any> {
    const body = {
      pageComponentId: pageComponentId,
      componentName: componentName,
      componentContent: componentContent,
      priority:priority
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

  async deleteComponent(pageComponentIds: string[]): Promise<any> {
    const raw = JSON.stringify(pageComponentIds);
    const token = this.cookiservice.get('jwtToken');
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions: RequestInit = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow" as RequestRedirect
    };

    try {
      const response = await fetch(`${this.baseUrl}/api/v1/admin-panel/delete-page-components`, requestOptions);
      return await response.text();
    } catch (error) {
      throw new Error('Failed to delete component');
    }
  }

  addComponent(pageId: string, componentName: string, componentContent: string): Observable<any> {
    const body = {
      pageModalId: pageId,
      pageComponentModals: [
        {
          componentName: componentName,
          componentContent: componentContent
        }
      ]
    };
    return this.http.put(`${this.baseUrl}/api/v1/admin-panel/add-page-components-in-page`, body, { headers: this.getHeaders() });
  }
  getImageUrls(ids: string[]): Observable<string[]> {
    const requests = ids.map(id =>
      this.http.get<string>(`https://bk.akhalisakhli.com/api/v1/admin-panel/get-page-img/${id}.jpg`, { responseType: 'text' as 'json' })
    );
    return forkJoin(requests);
  }


  addPageComponentsInPage(): Observable<any> {
    const url = `${this.baseUrl}/api/v1/admin-panel/add-page-components-in-page`;

    const body = {
      pageModalId: "03ab07f8-ac28-4734-b019-68cc6cce9dfe",
      pageComponentModals: [
        {
          componentName: "Component 9",
          componentContent: JSON.stringify({
            name: "ინტერიერის დიზაინი",}),
          priority: 0
        }
      ]
    };

    return this.http.post<any>(url, body, { headers: this.getHeaders1() });
  }
}
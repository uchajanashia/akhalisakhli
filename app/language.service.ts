import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  private currentLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('ka');
  public currentLanguage$: Observable<string> = this.currentLanguageSubject.asObservable();

  constructor(public cook : CookieService) {      this.currentLanguageSubject.next(this.cook.get('lang'))
  }

  setLanguage(language: boolean) {
    if(language){
    this.cook.set('lang', 'ka');}
    if(!language){
      this.cook.set('lang', 'en');}

      this.currentLanguageSubject.next(this.cook.get('lang'))

  }

  getCurrentLanguage(): string {
    return this.cook.get('lang');
  }
}

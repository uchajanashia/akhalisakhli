import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  private currentLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('ka');
  public currentLanguage$: Observable<string> = this.currentLanguageSubject.asObservable();
  private languageCheckSubject = new BehaviorSubject<boolean>(false);
  constructor(public cook : CookieService) {    
      this.currentLanguageSubject.next(this.cook.get('lang'))
      this.updateLanguageCheck();

  }

  setLanguage(language: boolean) {
    if(language){
    this.cook.set('lang', 'ka');}
    if(!language){
      this.cook.set('lang', 'en');}
      this.currentLanguageSubject.next(this.cook.get('lang'))
      this.updateLanguageCheck();
  }

  getCurrentLanguage(): string {
    return this.cook.get('lang');
  }

  getBoolean(): BehaviorSubject<boolean> {
    return this.languageCheckSubject;
  }

  updateLanguageCheck() {
    var truee = this.cook.get('lang');
    if (!truee){
      truee = 'ka'
    }
    const languageCheckValue = truee === 'ka'; 
    this.languageCheckSubject.next(languageCheckValue);
  }
}

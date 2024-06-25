import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly key = 'popupShown';
  private languageCheckSubject = new BehaviorSubject<boolean>(false);
  constructor(public cook : CookieService) {    
      this.updateLanguageCheck();

  }

  setLanguage(language: boolean) {
    if(language){
    this.cook.set('lang', 'ka');}
    if(!language){
      this.cook.set('lang', 'en');}
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
  public setPopupShown(): void {
    localStorage.setItem(this.key, 'true');
  }

  public isPopupShown(): boolean {
    return localStorage.getItem(this.key) === 'true';
  }
}

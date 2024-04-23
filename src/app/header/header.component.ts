import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { LanguageService } from '../language.service';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  

  isGeorgian: boolean = true;
  isMobileMenuOpen: boolean = false;
  selectedLanguage: string= "";
  constructor(private language: LanguageService , private cook :CookieService) {}

  ngOnInit(): void {
    this.language.getBoolean().subscribe(value => {
      this.isGeorgian = value;
    });
    if(this.isGeorgian){
      this.selectedLanguage='ka';
    }else{
      this.selectedLanguage='en';

    }

  }

  toggleLanguage(): void {
    if(this.selectedLanguage=='ka'){
      this.isGeorgian=true}
    if(this.selectedLanguage=='en'){
      this.isGeorgian=false}
 this.language.setLanguage(this.isGeorgian)
}
  setGeo() {
 this.language.setLanguage(true)
  }
  setEn() {
 this.language.setLanguage(false)
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  
    const menuButton = document.getElementById('menu');
    if (menuButton) {
      menuButton.classList.toggle('open', this.isMobileMenuOpen);
    }
  
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('closing', !this.isMobileMenuOpen);
    }
  }
  
}

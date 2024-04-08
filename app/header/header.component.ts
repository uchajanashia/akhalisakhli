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
  constructor(private languageService: LanguageService , private cook :CookieService) {}

  ngOnInit(): void {
    const currentLanguage = this.languageService.getCurrentLanguage();
    this.selectedLanguage = currentLanguage || 'ka'
    if(this.selectedLanguage=='ka'){
      this.isGeorgian=true}
    if(this.selectedLanguage=='en'){
      this.isGeorgian=false}

  }

  toggleLanguage(): void {
 this.isGeorgian=!this.isGeorgian
 const newLanguage = this.isGeorgian ? 'ka' : 'en';
 this.languageService.setLanguage(this.isGeorgian)
 document.documentElement.lang = newLanguage;
  
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

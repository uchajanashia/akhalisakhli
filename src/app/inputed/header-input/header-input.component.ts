import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { LanguageService } from '../../language.service';
import {  NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-input',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterModule],
  templateUrl: './header-input.component.html',
  styleUrl: './header-input.component.scss'
})
export class HeaderInputComponent {
  constructor(private languageService: LanguageService) {}
  ngOnInit() {}
  toggleLanguage() {
    const currentLanguage = this.languageService.getCurrentLanguage();
    const newLanguage = currentLanguage === 'ka' ? 'en' : 'ka';
    document.documentElement.lang = newLanguage;
  }
  isMobileMenuOpen: boolean = false; 
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

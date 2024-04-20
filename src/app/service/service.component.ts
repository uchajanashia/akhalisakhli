import { Component, OnInit } from '@angular/core';
import { InterieriComponent } from './interieri/interieri.component';
import { LandshaftiComponent } from './landshafti/landshafti.component';
import { MsheneblobaComponent } from './mshenebloba/mshenebloba.component';
import { ProektirebaComponent } from './proektireba/proektireba.component';
import { RemontiComponent } from './remonti/remonti.component';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FloatContactComponent } from "../float-contact/float-contact.component";
import { FooterComponent } from "../footer/footer.component";
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-service',
    standalone: true,
    templateUrl: './service.component.html',
    styleUrl: './service.component.scss',
    imports: [InterieriComponent, LandshaftiComponent, MsheneblobaComponent, ProektirebaComponent, RemontiComponent, RouterLink, RouterModule, CommonModule, HeaderComponent, FloatContactComponent, FooterComponent]
})
export class ServiceComponent implements OnInit{
    isGeorgian: boolean = true; 

    constructor(private languageService: LanguageService){}
    ngOnInit(): void {
        this.languageService.currentLanguage$.subscribe(language => {
            this.isGeorgian = language === 'ka'; // Update isGeorgian based on language
          });
    }

}

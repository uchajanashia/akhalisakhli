import { Component, OnInit } from '@angular/core';
import { InterieriComponent } from './interieri/interieri.component';
import { LandshaftiComponent } from './landshafti/landshafti.component';
import { MsheneblobaComponent } from './mshenebloba/mshenebloba.component';
import { ProektirebaComponent } from './proektireba/proektireba.component';
import { RemontiComponent } from './remonti/remonti.component';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FloatContactComponent } from "../float-contact/float-contact.component";
import { FooterComponent } from "../footer/footer.component";
import { LanguageService } from '../language.service';
import { filter } from 'rxjs';

@Component({
    selector: 'app-service',
    standalone: true,
    templateUrl: './service.component.html',
    styleUrl: './service.component.scss',
    imports: [InterieriComponent, LandshaftiComponent, MsheneblobaComponent, ProektirebaComponent, RemontiComponent, RouterLink, RouterModule, CommonModule, HeaderComponent, FloatContactComponent, FooterComponent]
})
export class ServiceComponent implements OnInit{
    isGeorgian: boolean = true; 
    activeFilter='';
    constructor(private language: LanguageService,private router :Router){
         this.activeFilter = this.router.url;
         
    }
    ngOnInit(): void {
      this.language.updateLanguageCheck();
      this.language.getBoolean().subscribe(value => {
        this.isGeorgian = value;
      });
         
          
          this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
          ).subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
              this.activeFilter = event.urlAfterRedirects;

            }
          });
        }
          
    }



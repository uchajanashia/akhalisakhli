import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FloatContactComponent } from '../float-contact/float-contact.component';
import { CaruselComponent } from "../carusel/carusel.component";
import {  NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { ShesaxebComponent } from "../shesaxeb/shesaxeb.component";
import { GundiComponent } from "../gundi/gundi.component";
import { MxfComponent } from "../mxf/mxf.component";
import { PartnersComponent } from "../partners/partners.component";
import { LanguageService } from '../language.service';
import { filter } from 'rxjs';
@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [
        HeaderComponent,
        FooterComponent,
        CommonModule,
        FloatContactComponent,
        CaruselComponent, RouterLink, RouterModule,
        ShesaxebComponent,
        GundiComponent,
        MxfComponent,
        PartnersComponent
    ]
})
export class AboutComponent implements OnInit {


  isGeorgian: boolean = true; 
  activeFilter =''
  constructor(
    private languageService: LanguageService , private router : Router
  ) {
    this.activeFilter = this.router.url;
  }
    ngOnInit(): void {
      this.languageService.currentLanguage$.subscribe(language => {
        this.isGeorgian = language === 'ka';
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

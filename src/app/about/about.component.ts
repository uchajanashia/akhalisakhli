import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListService } from '../service-list.service';
import { Partniorebi } from '../services';
import Aos from 'aos';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FloatContactComponent } from '../float-contact/float-contact.component';
import { CaruselComponent } from "../carusel/carusel.component";
import { Gundi } from '../services';
import { Country } from '../services';
import { AboutCompany } from '../services';
import { Router } from 'express';
import { ActivatedRoute, NavigationEnd, RouterLink, RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ShesaxebComponent } from "../shesaxeb/shesaxeb.component";
import { GundiComponent } from "../gundi/gundi.component";
import { MxfComponent } from "../mxf/mxf.component";
import { PartnersComponent } from "../partners/partners.component";
import { filter } from 'rxjs';
import { LanguageService } from '../language.service';
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
  @Input() aboutCompany!:AboutCompany;
  @Input() partniorebi!: Partniorebi;
  @Input() gundi!:Gundi;

  aboutCompanyList:AboutCompany[]=[];
  gundiList:Gundi[]=[];
  partniorebiList: Partniorebi[] = [];
  isGeorgian: boolean = true; 
  constructor(
    private serviceService: ServiceListService,
    private languageService: LanguageService // Assuming LanguageService is imported correctly
  ) {}
    ngOnInit(): void {
      // Subscribe to language changes
      this.languageService.currentLanguage$.subscribe(language => {
        this.isGeorgian = language === 'ka'; // Update isGeorgian based on language
      });
  
      // Initialize other data
      this.partniorebiList = this.serviceService.getAllPartniorebi();
      this.gundiList = this.serviceService.getAllGroup();
      this.aboutCompanyList = this.serviceService.getAllAboutCompany();
    }
}

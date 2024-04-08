import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListService } from '../service-list.service';
import Aos from 'aos';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FloatContactComponent } from '../float-contact/float-contact.component';
import { CaruselComponent } from "../carusel/carusel.component";
import {  RouterLink, RouterModule } from '@angular/router';
import { ShesaxebComponent } from "../shesaxeb/shesaxeb.component";
import { GundiComponent } from "../gundi/gundi.component";
import { MxfComponent } from "../mxf/mxf.component";
import { PartnersComponent } from "../partners/partners.component";
import { AboutCompany, Gundi, Partniorebi, Services } from '../services';

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

  constructor(private serviceService: ServiceListService) {}

  ngOnInit() :void{
    Aos.init();
    this.partniorebiList = this.serviceService.getAllPartniorebi();
    this.gundiList = this.serviceService.getAllGroup();
    this.aboutCompanyList=this.serviceService.getAllAboutCompany();
  }
}

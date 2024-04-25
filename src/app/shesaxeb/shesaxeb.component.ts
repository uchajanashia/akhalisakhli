import { Component, Input, OnInit } from '@angular/core';
import Aos from 'aos';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FloatContactComponent } from "../float-contact/float-contact.component";
import { AboutCompany } from '../services';
import { LanguageService } from '../language.service';
import { ServiceListService } from '../service-list.service';

@Component({
    selector: 'app-shesaxeb',
    standalone: true,
    templateUrl: './shesaxeb.component.html',
    styleUrl: './shesaxeb.component.scss',
    imports: [HeaderComponent, FooterComponent, CommonModule, FloatContactComponent]
})
export class ShesaxebComponent  implements OnInit{
  isGeorgian: boolean = true; 
  aboutCompanyList:AboutCompany[]=[];
  constructor(
    private serviceService: ServiceListService,
    private languageService: LanguageService // Assuming LanguageService is imported correctly
  ) {}
  ngOnInit() {
    this.languageService.updateLanguageCheck();
    this.languageService.getBoolean().subscribe(value => {
      this.isGeorgian = value;
    });
    Aos.init();
    Aos.refresh();
    this.aboutCompanyList = this.serviceService.getAllAboutCompany();
  }
}

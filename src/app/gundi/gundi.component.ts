import { Component, Input, OnInit } from '@angular/core';
import Aos from 'aos';
import { Gundi } from '../services';
import { ServiceListService } from '../service-list.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FloatContactComponent } from "../float-contact/float-contact.component";
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-gundi',
    standalone: true,
    templateUrl: './gundi.component.html',
    styleUrl: './gundi.component.scss',
    imports: [CommonModule, HeaderComponent, FooterComponent, FloatContactComponent]
})
export class GundiComponent implements OnInit{
  @Input() gundi!:Gundi;
  gundiList:Gundi[]=[];
  gundiListEn:Gundi[]=[];
  isGeorgian: boolean = true; 
  constructor(private serviceService: ServiceListService,private languageService: LanguageService) {}

  ngOnInit(): void {
      Aos.init();
      Aos.refresh();
      this.gundiList = this.serviceService.getAllGroup();
      this.gundiListEn = this.serviceService.getAllGroupEn();
      this.languageService.currentLanguage$.subscribe(language => {
        this.isGeorgian = language === 'ka'; // Update isGeorgian based on language
      });
  }

}

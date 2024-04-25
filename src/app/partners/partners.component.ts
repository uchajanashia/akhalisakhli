import { Component, OnInit } from '@angular/core';
import { CaruselComponent } from '../carusel/carusel.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import Aos from 'aos';
import { FloatContactComponent } from "../float-contact/float-contact.component";
import { ServiceListService } from '../service-list.service';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-partners',
    standalone: true,
    templateUrl: './partners.component.html',
    styleUrl: './partners.component.scss',
    imports: [CaruselComponent, HeaderComponent, FooterComponent, FloatContactComponent]
})
export class PartnersComponent implements OnInit{
  isGeorgian: boolean = true; 
  constructor(
    private languageService: LanguageService // Assuming LanguageService is imported correctly
  ) {}
  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.languageService.updateLanguageCheck();
    this.languageService.getBoolean().subscribe(value => {
      this.isGeorgian = value;
    });
  }

}

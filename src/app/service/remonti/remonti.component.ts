import { Component, Input, OnInit } from '@angular/core';
import { CaruselPicRemontiComponent } from "../../carusel-vids-pics/carusel-pic-remonti/carusel-pic-remonti.component";
import { CaruselVidRemontiComponent } from "../../carusel-vids-pics/carusel-vid-remonti/carusel-vid-remonti.component";
import Aos from 'aos';
import { ServiceListService } from '../../service-list.service';
import { Mshenebloba } from '../../services';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
    selector: 'app-remonti',
    standalone: true,
    templateUrl: './remonti.component.html',
    styleUrl: './remonti.component.scss',
    imports: [CaruselPicRemontiComponent, CaruselVidRemontiComponent,CommonModule]
})
export class RemontiComponent implements OnInit{
  isGeorgian: boolean = true;

  @Input() remonti!:Mshenebloba;

  remontiList:Mshenebloba[]=[];

  constructor(private serviceService: ServiceListService,private languageService: LanguageService){}

  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.remontiList=this.serviceService.getAllRemonti();
    this.languageService.currentLanguage$.subscribe(language => {
      this.isGeorgian = language === 'ka'; // Update isGeorgian based on language
    });
  }

}

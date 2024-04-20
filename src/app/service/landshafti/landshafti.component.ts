import { Component, Input, OnInit } from '@angular/core';
import { CaruselPicLandshaftComponent } from "../../carusel-vids-pics/carusel-pic-landshaft/carusel-pic-landshaft.component";
import { CaruselVidLandshaftComponent } from "../../carusel-vids-pics/carusel-vid-landshaft/carusel-vid-landshaft.component";
import { CommonModule } from '@angular/common';
import { Mshenebloba } from '../../services';
import { ServiceListService } from '../../service-list.service';
import Aos from 'aos';
import { LanguageService } from '../../language.service';

@Component({
    selector: 'app-landshafti',
    standalone: true,
    templateUrl: './landshafti.component.html',
    styleUrl: './landshafti.component.scss',
    imports: [CaruselPicLandshaftComponent, CaruselVidLandshaftComponent,CommonModule]
})
export class LandshaftiComponent implements OnInit{
  isGeorgian: boolean = true;
  @Input() landshaft!:Mshenebloba;

  landshaftList:Mshenebloba[]=[];

  constructor(private serviceService: ServiceListService,private languageService: LanguageService){}

  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.landshaftList=this.serviceService.getAllLandshafti();
    this.languageService.currentLanguage$.subscribe(language => {
      this.isGeorgian = language === 'ka'; // Update isGeorgian based on language
    });
  }

}

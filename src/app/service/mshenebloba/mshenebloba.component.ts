import { Component, Input, ViewChild } from '@angular/core';
import { SliderComponent } from '../../carusel-inside/slider/slider.component';
import { CommonModule } from '@angular/common';
import { VidsliderComponent } from "../../vidcarusel/vidslider/vidslider.component";
import { SlideVId } from '../proektireba/proektireba.component';
import Aos from 'aos';
import { Mshenebloba } from '../../services';
import { ServiceListService } from '../../service-list.service';
import { CaruselPicMsheneblobaComponent } from "../../carusel-vids-pics/carusel-pic-mshenebloba/carusel-pic-mshenebloba.component";
import { LanguageService } from '../../language.service';

@Component({
    selector: 'app-mshenebloba',
    standalone: true,
    templateUrl: './mshenebloba.component.html',
    styleUrl: './mshenebloba.component.scss',
    imports: [SliderComponent, CommonModule, VidsliderComponent, CaruselPicMsheneblobaComponent]
})
export class MsheneblobaComponent {
  isGeorgian: boolean = true; 

  msheneblobaList:Mshenebloba[]=[];

  constructor(private serviceService: ServiceListService,private languageService: LanguageService){}

  


  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.languageService.updateLanguageCheck();
    this.languageService.getBoolean().subscribe(value => {
      this.isGeorgian = value;
    });
    this.msheneblobaList=this.serviceService.getAllMshenebloba();

  }

}

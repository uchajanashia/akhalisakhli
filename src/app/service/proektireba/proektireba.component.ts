import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../carusel-inside/slider/slider.component';
import { HammerModule } from '@angular/platform-browser';
import { CaruselInsideComponent } from '../../carusel-inside/carusel-inside.component';
import Aos from 'aos';
import { VidcaruselComponent } from "../../vidcarusel/vidcarusel.component";
import { Proeqtireba } from '../../services';
import { ServiceListService } from '../../service-list.service';
import { LanguageService } from '../../language.service';

export interface SlideVId {
  vidSrc: string;
}

@Component({
    selector: 'app-proektireba',
    standalone: true,
    templateUrl: './proektireba.component.html',
    styleUrl: './proektireba.component.scss',
    imports: [
        RouterModule,
        RouterLink,
        CommonModule,
        SliderComponent,
        SliderComponent,
        HammerModule,
        CaruselInsideComponent,
        VidcaruselComponent
    ]
})
export class ProektirebaComponent {



  floatcontainer=false;

  isGeorgian: boolean = true; 


  proeqtirebaList:Proeqtireba[]=[];



  constructor(private serviceService: ServiceListService,private languageService: LanguageService){}
  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.proeqtirebaList=this.serviceService.getAllProeqtireba();
    this.languageService.updateLanguageCheck();
    this.languageService.getBoolean().subscribe(value => {
      this.isGeorgian = value;
    });
  }







}

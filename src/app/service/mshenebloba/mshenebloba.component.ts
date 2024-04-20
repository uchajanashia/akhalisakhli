import { Component, Input, ViewChild } from '@angular/core';
import { SliderComponent } from '../../carusel-inside/slider/slider.component';
import { CommonModule } from '@angular/common';
import { VidsliderComponent } from "../../vidcarusel/vidslider/vidslider.component";
import { SlideVId } from '../proektireba/proektireba.component';
import Aos from 'aos';
import { Mshenebloba } from '../../services';
import { ServiceListService } from '../../service-list.service';
import { CaruselPicMsheneblobaComponent } from "../../carusel-vids-pics/carusel-pic-mshenebloba/carusel-pic-mshenebloba.component";
import { CaruselVidMsheneblobaComponent } from "../../carusel-vids-pics/carusel-vid-mshenebloba/carusel-vid-mshenebloba.component";
import { LanguageService } from '../../language.service';

@Component({
    selector: 'app-mshenebloba',
    standalone: true,
    templateUrl: './mshenebloba.component.html',
    styleUrl: './mshenebloba.component.scss',
    imports: [SliderComponent, CommonModule, VidsliderComponent, CaruselPicMsheneblobaComponent, CaruselVidMsheneblobaComponent]
})
export class MsheneblobaComponent {
  @Input() mshenebloba!:Mshenebloba;
  isGeorgian: boolean = true; 

  msheneblobaList:Mshenebloba[]=[];

  constructor(private serviceService: ServiceListService,private languageService: LanguageService){}

  slideimg=[
    {
      "imgSrc":"assets/pics/web/proeqtireba/1.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/proeqtireba/2.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/proeqtireba/3.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/proeqtireba/4.png",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/proeqtireba/5.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/proeqtireba/6.png",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/proeqtireba/7.jpg",
      "imgAlt":"",
    },
  ];

  @Input() images: SlideVId[] = [];

  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.languageService.currentLanguage$.subscribe(language => {
      this.isGeorgian = language === 'ka'; // Update isGeorgian based on language
    });
    this.msheneblobaList=this.serviceService.getAllMshenebloba();
    this.slidevid = [
      {
        vidSrc: 'assets/vids/rgoli_mshenebloba/1. Mukhadgverdi.mp4',
      },
      {
        vidSrc: 'assets/vids/rgoli_mshenebloba/2..mp4',
      },
      {
        vidSrc: 'assets/vids/rgoli_mshenebloba/3wavs.mp4',
      },
      {
        vidSrc: 'assets/vids/rgoli_mshenebloba/4.mp4',
      },
      {
        vidSrc: 'assets/vids/rgoli_mshenebloba/5 Sairme.mp4',
      },
      {
        vidSrc: 'assets/vids/rgoli_mshenebloba/6 Tskneti.mp4',
      },
      {
        vidSrc: 'assets/vids/rgoli_mshenebloba/7 Vani Clip.mp4',
      }
    ];
  }
  selectedPicIndex = 0;
  slidevid: { vidSrc: string }[] = [];

}

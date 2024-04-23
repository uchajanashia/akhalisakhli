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

  @Input() images: SlideVId[] = [];
  @Input() proeqtireba!:Proeqtireba;

  proeqtirebaList:Proeqtireba[]=[];

  fullscreenImage: string | null = null;
  fullscreenVideo: string | null = null;
  isFullScreen = false;

  constructor(private serviceService: ServiceListService,private languageService: LanguageService){}
  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.proeqtirebaList=this.serviceService.getAllProeqtireba();
    this.languageService.currentLanguage$.subscribe(language => {
      this.isGeorgian = language === 'ka'; 
    });
  }
  selectedPicIndex = 0;
  showPrev(): void {
    if (this.selectedPicIndex > 0) {
      this.selectedPicIndex--;
    }
  }

  showNext(): void {
    if (this.selectedPicIndex < this.images.length - 1) {
      this.selectedPicIndex++;
    }
  }

  toggleFullScreen(imageSrc: string): void {
    if (this.fullscreenImage === imageSrc) {
      // If the same image is clicked again, toggle fullscreen mode
      this.isFullScreen = !this.isFullScreen;
    } else {
      // Display the clicked image in fullscreen mode
      this.isFullScreen = true;
      this.fullscreenImage = imageSrc;
    }
  }
  toggleFullScree(videoSrc: string): void {
    if (this.fullscreenVideo === videoSrc) {
      // If the same video is clicked again, toggle fullscreen mode
      this.isFullScreen = !this.isFullScreen;
    } else {
      // Display the clicked video in fullscreen mode
      this.isFullScreen = true;
      this.fullscreenVideo = videoSrc;
    }
  }
  @ViewChild(SliderComponent) sliderComponent!: SliderComponent;
  slidevid = [
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
    },
  ];


}

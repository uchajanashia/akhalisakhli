import { Component, Input, ViewChild } from '@angular/core';
import { VidsliderComponent } from '../../vidcarusel/vidslider/vidslider.component';
import { SlideVId } from '../../service/proektireba/proektireba.component';
import Aos from 'aos';
import { SliderComponent } from '../../carusel-inside/slider/slider.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-carusel-vid-remonti',
    standalone: true,
    templateUrl: './carusel-vid-remonti.component.html',
    styleUrl: './carusel-vid-remonti.component.scss',
    imports: [VidsliderComponent,CommonModule],
})
export class CaruselVidRemontiComponent {
  @ViewChild(VidsliderComponent) vidcarusel!: VidsliderComponent;
  @Input() images: SlideVId[] = [];
  fullscreenVideo: string | null = null;
  isFullScreen = false;

  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.slidevid = [
      // {
      //   vidSrc: '',
      // },
    ];
  }
  selectedPicIndex = 0;
  showPrev(): void {
    this.vidcarusel.showPrev();
  }

  showNext(): void {
    this.vidcarusel.showNext();
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
  slidevid: { vidSrc: string }[] = [];
}

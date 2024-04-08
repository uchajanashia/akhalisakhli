import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { SlideVId } from '../../service/proektireba/proektireba.component';
import Aos from 'aos';
import { SliderComponent } from '../../carusel-inside/slider/slider.component';

@Component({
  selector: 'app-vidslider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vidslider.component.html',
  styleUrl: './vidslider.component.scss'
})
export class VidsliderComponent {
  @Input() images: SlideVId[] = [];
  fullscreenImage: string | null = null;
  fullscreenVideo: string | null = null;
  isFullScreen = false;

  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
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
  slidevid: { vidSrc: string }[] = [];
}

import { Component, ViewChild } from '@angular/core';
import { SliderComponent } from '../../carusel-inside/slider/slider.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-carusel-pic-remonti',
    standalone: true,
    templateUrl: './carusel-pic-remonti.component.html',
    styleUrl: './carusel-pic-remonti.component.scss',
    imports: [CommonModule, SliderComponent]
})
export class CaruselPicRemontiComponent {
  fullscreenImage: string | null = null;
  fullscreenVideo: string | null = null;
  isFullScreen = false;

  toggleFullScreen(imageSrc: string): void {
    if (this.fullscreenImage === imageSrc) {
      this.isFullScreen = !this.isFullScreen;
    } else {
      this.isFullScreen = true;
      this.fullscreenImage = imageSrc;
    }
  }

  @ViewChild(SliderComponent) sliderComponent!: SliderComponent;

  slideimg=[
    {
      "imgSrc":"assets/pics/web/remonti/cover.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/remonti/Sairme-3.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/remonti/Sairme-5.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/remonti/shindisi-5.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/remonti/shindisi-6.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/remonti/shindisi-7.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/remonti/shindisi-8.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/remonti/shindisi-9.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/remonti/shindisi-10.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/remonti/shindisi-11.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/remonti/shindisi-12.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/remonti/Tskneti-3.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/remonti/Tskneti-4.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/remonti/Tskneti-5.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/remonti/Tskneti-9.jpg",
      "imgAlt":"",
    },
  ];

  showPrev(): void {
    this.sliderComponent.showPrev();
  }

  showNext(): void {
    this.sliderComponent.showNext();
  }

}

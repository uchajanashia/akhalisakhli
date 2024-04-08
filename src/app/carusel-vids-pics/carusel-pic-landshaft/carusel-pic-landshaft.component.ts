import { Component, ViewChild } from '@angular/core';
import { SliderComponent } from '../../carusel-inside/slider/slider.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-carusel-pic-landshaft',
    standalone: true,
    templateUrl: './carusel-pic-landshaft.component.html',
    styleUrl: './carusel-pic-landshaft.component.scss',
    imports: [SliderComponent,CommonModule]
})
export class CaruselPicLandshaftComponent {
  fullscreenImage: string | null = null;
  fullscreenVideo: string | null = null;
  isFullScreen = false;

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

  @ViewChild(SliderComponent) sliderComponent!: SliderComponent;

  slideimg=[
    {
      "imgSrc":"assets/pics/web/landshapti/1.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/landshapti/2.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/landshapti/3.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/landshapti/4.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/landshapti/5.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/landshapti/6.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/landshapti/7.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/landshapti/8.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/landshapti/9.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/landshapti/10.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/landshapti/cover.jpg",
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

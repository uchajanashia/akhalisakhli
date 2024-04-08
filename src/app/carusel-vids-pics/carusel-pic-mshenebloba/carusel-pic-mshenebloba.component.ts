import { Component, ViewChild } from '@angular/core';
import { SliderComponent } from '../../carusel-inside/slider/slider.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-carusel-pic-mshenebloba',
    standalone: true,
    templateUrl: './carusel-pic-mshenebloba.component.html',
    styleUrl: './carusel-pic-mshenebloba.component.scss',
    imports: [SliderComponent,CommonModule]
})
export class CaruselPicMsheneblobaComponent {
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
      "imgSrc":"assets/pics/web/mshenebloba/cover.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/mshenebloba/DSC09505-HDR.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/mshenebloba/DSC09527-HDR.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/mshenebloba/Qoshigora-2.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/mshenebloba/Qoshigora.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/mshenebloba/Tskneti-13.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/mshenebloba/Tskneti-15.jpg",
      "imgAlt":"",
    },
    {
      "imgSrc":"assets/pics/web/mshenebloba/Tskneti-16.jpg",
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

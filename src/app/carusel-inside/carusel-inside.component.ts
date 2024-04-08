import { Component, ViewChild } from '@angular/core';
import { SliderComponent } from "./slider/slider.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-carusel-inside',
    standalone: true,
    templateUrl: './carusel-inside.component.html',
    styleUrl: './carusel-inside.component.scss',
    imports: [SliderComponent,CommonModule]
})
export class CaruselInsideComponent {
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

  showPrev(): void {
    this.sliderComponent.showPrev();
  }

  showNext(): void {
    this.sliderComponent.showNext();
  }
}

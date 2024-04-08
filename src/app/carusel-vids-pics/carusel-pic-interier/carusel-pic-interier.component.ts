import { Component, ViewChild } from '@angular/core';
import { SliderComponent } from '../../carusel-inside/slider/slider.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-carusel-pic-interier',
    standalone: true,
    templateUrl: './carusel-pic-interier.component.html',
    styleUrl: './carusel-pic-interier.component.scss',
    imports: [SliderComponent,CommonModule]
})
export class CaruselPicInterierComponent {
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

  private _slideimg = [
    {
      "imgSrc": "assets/pics/web/interieri/1.png",
      "imgAlt": "",
    },
    {
      "imgSrc": "assets/pics/web/interieri/2.jpg",
      "imgAlt": "",
    },
    {
      "imgSrc": "assets/pics/web/interieri/7.jpg",
      "imgAlt": "",
    },
    {
      "imgSrc": "assets/pics/web/interieri/10.jpg",
      "imgAlt": "",
    },
    {
      "imgSrc": "assets/pics/web/interieri/33.jpg",
      "imgAlt": "",
    },
    {
      "imgSrc": "assets/pics/web/interieri/cover.jpg",
      "imgAlt": "",
    },
  ];
  public get slideimg() {
    return this._slideimg;
  }
  public set slideimg(value) {
    this._slideimg = value;
  }

  showPrev(): void {
    this.sliderComponent.showPrev();
  }

  showNext(): void {
    this.sliderComponent.showNext();
  }
}

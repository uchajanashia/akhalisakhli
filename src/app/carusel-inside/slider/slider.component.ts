import { Component, Input } from '@angular/core';
import Aos from 'aos';
import { Services, Slide } from '../../services';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input() images: Slide[] = [];
  fullscreenImage: string | null = null;
  isFullScreen = false;


  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
  }
  selectedPicIndex=0;
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
      this.isFullScreen = !this.isFullScreen;
    } else {
      this.isFullScreen = true;
      this.fullscreenImage = imageSrc;
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-float-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './float-contact.component.html',
  styleUrl: './float-contact.component.scss'
})
export class FloatContactComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    let element = document.querySelector('.floatingmess') as HTMLElement;
    let element1 = document.querySelector('.floating') as HTMLElement;

    if (element && element1) {
      let scrollPosition = window.pageYOffset;
      let windowHeight = window.innerHeight;
      let bodyHeight = document.body.clientHeight;
      
      let scrollPercentage = (scrollPosition / (bodyHeight - windowHeight)) * 100;
  
      if (scrollPercentage < 95) {
        element.style.top = '55%';
        element1.style.top = '55%'
      } else {
        element.style.top = '40%';
        element1.style.top = '40%';

      }
    }
  }
  
  
}

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
    if (element) {
      let scrollPosition = window.pageYOffset;
      let windowHeight = window.innerHeight;
      let bodyHeight = document.body.clientHeight;
  
      // Calculate the scroll percentage
      let scrollPercentage = (scrollPosition / (bodyHeight - windowHeight)) * 100;
  
      // Adjust the top property based on the scroll percentage
      element.style.top = Math.min(scrollPercentage, 90) + '%';
    }
  }
  
}

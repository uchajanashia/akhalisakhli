import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Partniorebi } from '../services';

@Component({
    selector: 'app-carusel',
    standalone: true,
    templateUrl: './carusel.component.html',
    styleUrl: './carusel.component.scss',
    imports: [CommonModule, ]
})
export class CaruselComponent implements OnInit {
  @Input() partniorebi!: Partniorebi;
  partniorebiList: Partniorebi[] = [];

  constructor() {}

  ngOnInit(): void {
  
    const splide = new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      pauseOnFocus:true,
      perPage: 3,
    });
  
    // Add AutoScroll extension
    splide.mount({ AutoScroll });
  
    // Additional configuration for AutoScroll
    splide.options = {
      ...splide.options,
      autoScroll: {
        speed: 2,
        pauseOnHover: true, // Optional: Pause on hover
      },
      pagination: false, // Disable pagination
      arrows: false, // Disable navigation arrows
    };
  
    splide.mount();
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { ServiceListService } from '../service-list.service';
import { CaruselInputComponent } from "../inputed/carusel-input/carusel-input.component";
import { Partniorebi, Services } from '../services';

@Component({
    selector: 'app-carusel',
    standalone: true,
    templateUrl: './carusel.component.html',
    styleUrl: './carusel.component.scss',
    imports: [CommonModule, CaruselInputComponent]
})
export class CaruselComponent implements OnInit {
  @Input() partniorebi!: Partniorebi;
  partniorebiList: Partniorebi[] = [];

  constructor(private serviceService: ServiceListService) {}

  ngOnInit(): void {
    this.partniorebiList = this.serviceService.getAllPartniorebi();
  
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

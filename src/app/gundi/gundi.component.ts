import { Component, Input, OnInit } from '@angular/core';
import Aos from 'aos';
import { ServiceListService } from '../service-list.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FloatContactComponent } from "../float-contact/float-contact.component";
import { Gundi, Services } from '../services';

@Component({
    selector: 'app-gundi',
    standalone: true,
    templateUrl: './gundi.component.html',
    styleUrl: './gundi.component.scss',
    imports: [CommonModule, HeaderComponent, FooterComponent, FloatContactComponent]
})
export class GundiComponent implements OnInit{
  @Input() gundi!:Gundi;
  gundiList:Gundi[]=[];

  constructor(private serviceService: ServiceListService) {}

  ngOnInit(): void {
      Aos.init();
      Aos.refresh();
      this.gundiList = this.serviceService.getAllGroup();
  }

}

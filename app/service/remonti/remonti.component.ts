import { Component, Input, OnInit } from '@angular/core';
import { CaruselPicRemontiComponent } from "../../carusel-vids-pics/carusel-pic-remonti/carusel-pic-remonti.component";
import { CaruselVidRemontiComponent } from "../../carusel-vids-pics/carusel-vid-remonti/carusel-vid-remonti.component";
import Aos from 'aos';
import { ServiceListService } from '../../service-list.service';
import { Mshenebloba, Services } from '../../services';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-remonti',
    standalone: true,
    templateUrl: './remonti.component.html',
    styleUrl: './remonti.component.scss',
    imports: [CaruselPicRemontiComponent, CaruselVidRemontiComponent,CommonModule]
})
export class RemontiComponent implements OnInit{
  @Input() remonti!:Mshenebloba;

  remontiList:Mshenebloba[]=[];

  constructor(private serviceService: ServiceListService){}

  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.remontiList=this.serviceService.getAllRemonti();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { CaruselPicLandshaftComponent } from "../../carusel-vids-pics/carusel-pic-landshaft/carusel-pic-landshaft.component";
import { CaruselVidLandshaftComponent } from "../../carusel-vids-pics/carusel-vid-landshaft/carusel-vid-landshaft.component";
import { CommonModule } from '@angular/common';
import { ServiceListService } from '../../service-list.service';
import { Mshenebloba, Services } from '../../services';
import Aos from 'aos';

@Component({
    selector: 'app-landshafti',
    standalone: true,
    templateUrl: './landshafti.component.html',
    styleUrl: './landshafti.component.scss',
    imports: [CaruselPicLandshaftComponent, CaruselVidLandshaftComponent,CommonModule]
})
export class LandshaftiComponent implements OnInit{
landshaft!:Mshenebloba;

  landshaftList:Mshenebloba[]=[];

  constructor(private serviceService: ServiceListService){}

  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.landshaftList=this.serviceService.getAllLandshafti();
  }

}

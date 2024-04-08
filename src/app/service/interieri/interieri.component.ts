import { Component, Input, OnInit } from '@angular/core';
import { CaruselPicInterierComponent } from "../../carusel-vids-pics/carusel-pic-interier/carusel-pic-interier.component";
import { CaruselVidInterierComponent } from "../../carusel-vids-pics/carusel-vid-interier/carusel-vid-interier.component";
import { ServiceListService } from '../../service-list.service';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { Mshenebloba, Services } from '../../services';


@Component({
    selector: 'app-interieri',
    standalone: true,
    templateUrl: './interieri.component.html',
    styleUrl: './interieri.component.scss',
    imports: [CaruselPicInterierComponent, CaruselVidInterierComponent,CommonModule]
})
export class InterieriComponent implements OnInit{
  @Input() interieri!:Mshenebloba;

  interieriList:Mshenebloba[]=[];

  constructor(private serviceService: ServiceListService){}

  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.interieriList=this.serviceService.getAllInterieri();
  }
}

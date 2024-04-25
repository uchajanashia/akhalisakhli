import { Component, Input, OnInit } from '@angular/core';
import { CaruselPicInterierComponent } from "../../carusel-vids-pics/carusel-pic-interier/carusel-pic-interier.component";
import { Mshenebloba } from '../../services';
import { ServiceListService } from '../../service-list.service';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
    selector: 'app-interieri',
    standalone: true,
    templateUrl: './interieri.component.html',
    styleUrl: './interieri.component.scss',
    imports: [CaruselPicInterierComponent,CommonModule]
})
export class InterieriComponent implements OnInit{
  isGeorgian: boolean = true;

  interieriList:Mshenebloba[]=[];

  constructor(private serviceService: ServiceListService,private languageService: LanguageService){}

  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.interieriList=this.serviceService.getAllInterieri();
    this.languageService.updateLanguageCheck();
    this.languageService.getBoolean().subscribe(value => {
      this.isGeorgian = value;
    });
  }
}

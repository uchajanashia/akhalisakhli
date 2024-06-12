import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideVId } from '../proektireba/proektireba.component';
import Aos from 'aos';
import { Mshenebloba } from '../../services';
import { ServiceListService } from '../../service-list.service';
import { LanguageService } from '../../language.service';

@Component({
    selector: 'app-mshenebloba',
    standalone: true,
    templateUrl: './mshenebloba.component.html',
    styleUrl: './mshenebloba.component.scss',
    imports: [ CommonModule, ]
})
export class MsheneblobaComponent {
  isGeorgian: boolean = true; 

  msheneblobaList:Mshenebloba[]=[];

  constructor(private serviceService: ServiceListService,private languageService: LanguageService){}

  


  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.languageService.updateLanguageCheck();
    this.languageService.getBoolean().subscribe(value => {
      this.isGeorgian = value;
    });
    this.msheneblobaList=this.serviceService.getAllMshenebloba();

  }

}

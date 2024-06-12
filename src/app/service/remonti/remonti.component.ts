import { Component, Input, OnInit } from '@angular/core';
import Aos from 'aos';
import { ServiceListService } from '../../service-list.service';
import { Mshenebloba } from '../../services';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
    selector: 'app-remonti',
    standalone: true,
    templateUrl: './remonti.component.html',
    styleUrl: './remonti.component.scss',
    imports: [CommonModule]
})
export class RemontiComponent implements OnInit{
  isGeorgian: boolean = true;
  remontiList:Mshenebloba[]=[];

  constructor(private serviceService: ServiceListService,private languageService: LanguageService){}

  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.remontiList=this.serviceService.getAllRemonti();
    this.languageService.updateLanguageCheck();
    this.languageService.getBoolean().subscribe(value => {
      this.isGeorgian = value;
    });
  }

}

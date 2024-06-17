import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import Aos from 'aos';
import { Proeqtireba, iService } from '../../services';
import { ServiceListService } from '../../service-list.service';
import { LanguageService } from '../../language.service';
import { PageService } from '../../inputed/service/page.service';

export interface SlideVId {
  vidSrc: string;
}

@Component({
    selector: 'app-proektireba',
    standalone: true,
    templateUrl: './proektireba.component.html',
    styleUrl: './proektireba.component.scss',
    imports: [
        RouterModule,
        RouterLink,
        CommonModule,
        HammerModule,
    ]
})
export class ProektirebaComponent {
  isGeorgian: boolean = true;
  iService: iService = { // Set a default empty object
    id: '',
    title: '',
    text: '',
    listservice: [],
    titleEn: '',
    textEn: '',
    listserviceEn: []
  };
  pageId : string = '38e5b29e-1757-4c55-960c-790ed0c230ea';
  constructor(private serviceService: ServiceListService, private languageService: LanguageService, private pageService: PageService) {}

  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    this.languageService.updateLanguageCheck();
    this.languageService.getBoolean().subscribe(value => {
      this.isGeorgian = value;
    });
    this.getServiceData(this.pageId); // Replace 'your-page-id' with the actual ID
  }

  getServiceData(id: string): void {
    this.pageService.getPageById(id).subscribe(data => {
      const pageComponent = data.pageComponentModals[0];
      const parsedContent = JSON.parse(pageComponent.componentContent);
      this.iService = {
        id: pageComponent.pageComponentId,
        title: parsedContent.title,
        text: parsedContent.text,
        listservice: parsedContent.listservice,
        titleEn: parsedContent.titleEn,
        textEn: parsedContent.textEn,
        listserviceEn: parsedContent.listserviceEn
      };
    });
  }


}

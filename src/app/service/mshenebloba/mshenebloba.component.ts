import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideVId } from '../proektireba/proektireba.component';
import Aos from 'aos';
import { Mshenebloba, iService } from '../../services';
import { ServiceListService } from '../../service-list.service';
import { LanguageService } from '../../language.service';
import { PageService } from '../../inputed/service/page.service';

@Component({
    selector: 'app-mshenebloba',
    standalone: true,
    templateUrl: './mshenebloba.component.html',
    styleUrl: './mshenebloba.component.scss',
    imports: [ CommonModule, ]
})
export class MsheneblobaComponent {
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
  pageId : string = 'f3aee0d3-586b-4e8a-9845-5b7c46026c7e';
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

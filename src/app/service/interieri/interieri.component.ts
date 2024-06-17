import { Component, Input, OnInit } from '@angular/core';
import { Mshenebloba, iService } from '../../services';
import { ServiceListService } from '../../service-list.service';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { PageService } from '../../inputed/service/page.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-interieri',
    standalone: true,
    templateUrl: './interieri.component.html',
    styleUrl: './interieri.component.scss',
    imports: [CommonModule ,FormsModule]
})
export class InterieriComponent implements OnInit{
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
  pageId : string = 'db2d9c74-e9d2-4734-9826-be1d836bb181';
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

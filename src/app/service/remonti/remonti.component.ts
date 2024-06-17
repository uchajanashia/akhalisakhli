import { Component, Input, OnInit } from '@angular/core';
import Aos from 'aos';
import { ServiceListService } from '../../service-list.service';
import { Mshenebloba, iService } from '../../services';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { PageService } from '../../inputed/service/page.service';

@Component({
    selector: 'app-remonti',
    standalone: true,
    templateUrl: './remonti.component.html',
    styleUrl: './remonti.component.scss',
    imports: [CommonModule]
})
export class RemontiComponent implements OnInit{
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
  pageId : string = '780795cc-4a9c-4547-8cc0-17dd4090b19f';
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

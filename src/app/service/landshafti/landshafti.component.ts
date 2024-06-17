import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mshenebloba, iService } from '../../services';
import { ServiceListService } from '../../service-list.service';
import Aos from 'aos';
import { LanguageService } from '../../language.service';
import { PageService } from '../../inputed/service/page.service';

@Component({
    selector: 'app-landshafti',
    standalone: true,
    templateUrl: './landshafti.component.html',
    styleUrl: './landshafti.component.scss',
    imports: [CommonModule]
})
export class LandshaftiComponent implements OnInit{
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
  pageId : string = 'a5b694f0-7ea8-4848-aee3-0a934c7ded55';
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

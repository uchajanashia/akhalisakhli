import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { PageService } from '../inputed/service/page.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  pageId = '485d2121-be16-4e58-86a6-8b4b0e6a7399';
  componentId = '';
  contactInfo = {
    phone1: '',
    phone2: '',
    email: '',
    address: '',
    addressEn: ''
  };
  languagecheck = true;
  constructor(private language : LanguageService, private pageService :PageService ){

  }
  ngOnInit(): void {
    this.language.getBoolean().subscribe(value => {
      this.languagecheck = value;
    });
    this.getContactInfo();

  }
  getContactInfo(): void {
    this.pageService.getPageById(this.pageId).subscribe(data => {
      const pageComponent = data.pageComponentModals[0];
      this.componentId = pageComponent.pageComponentId;
      const parsedContent = JSON.parse(pageComponent.componentContent);
      this.contactInfo = {
        phone1: parsedContent.phone1 || '',
        phone2: parsedContent.phone2 || '',
        email: parsedContent.email || '',
        address: parsedContent.address || '',
        addressEn: parsedContent.addressEn || ''
      };
    });
  }
}

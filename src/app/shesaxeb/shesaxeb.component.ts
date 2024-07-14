import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FloatContactComponent } from "../float-contact/float-contact.component";
import { AboutCompany } from '../services';
import { LanguageService } from '../language.service';
import { PageService } from '../inputed/service/page.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { imgurl } from '../api-config';

@Component({
    selector: 'app-shesaxeb',
    standalone: true,
    templateUrl: './shesaxeb.component.html',
    styleUrl: './shesaxeb.component.scss',
    imports: [HeaderComponent, FooterComponent, CommonModule, FloatContactComponent]
})
export class ShesaxebComponent  implements OnInit{
  imgurl = imgurl;
  isGeorgian: boolean = true; 
  aboutCompanyList:AboutCompany[]=[];
  imageUrls: SafeUrl[] = [];
  constructor(
    private pageService: PageService,
    private languageService: LanguageService, // Assuming LanguageService is imported correctly
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.languageService.updateLanguageCheck();
    this.languageService.getBoolean().subscribe(value => {
      this.isGeorgian = value;
    });
    Aos.init();
    Aos.refresh();

    this.pageService.getPageById('554e912f-c38f-42aa-865d-fdf01e4a70ad').subscribe(data => {
      this.aboutCompanyList = data.pageComponentModals.map((item: any) => {
        const parsedContent = JSON.parse(item.componentContent);
        return {
          id: item.pageComponentId,
          name: item.pageComponentId,
          ...parsedContent
        };
      });

      // გამოსახულებების ჩატვირთვა პარალელურად
      const imageIds = ['info1', 'info2', 'info3', 'info4', 'info5', 'info6'];
      this.pageService.getImageUrls(imageIds).subscribe(urls => {
        this.imageUrls = urls.map(url => this.getSafeUrl(url));
      });
    });
  }

  getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}

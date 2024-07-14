import { Component, Input, OnInit } from '@angular/core';
import Aos from 'aos';
import { Gundi } from '../services';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FloatContactComponent } from "../float-contact/float-contact.component";
import { LanguageService } from '../language.service';
import { PageService } from '../inputed/service/page.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { imgurl } from '../api-config';

@Component({
    selector: 'app-gundi',
    standalone: true,
    templateUrl: './gundi.component.html',
    styleUrl: './gundi.component.scss',
    imports: [CommonModule, HeaderComponent, FooterComponent, FloatContactComponent]
})
export class GundiComponent implements OnInit{
  imgurl = imgurl;
  gundiList:Gundi[]=[];
  isGeorgian: boolean = true; 
  constructor(private pageService: PageService,private languageService: LanguageService,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
      Aos.init();
      Aos.refresh();
      this.languageService.updateLanguageCheck();
      this.languageService.getBoolean().subscribe(value => {
        this.isGeorgian = value;
      });
      this.pageService
      .getPageById('03ab07f8-ac28-4734-b019-68cc6cce9dfe')
      .subscribe((data) => {
        this.gundiList = data.pageComponentModals.map((item: any) => {
          const parsedContent = JSON.parse(item.componentContent);
          return {
            id: item.pageComponentId,
            ...parsedContent,
          };
        });
      });
  }
  getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}

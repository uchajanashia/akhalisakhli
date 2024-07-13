import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import Aos from 'aos';
import { News, Services } from '../services';
import { LanguageService } from '../language.service';
import { Router } from '@angular/router';
import { PageService } from '../inputed/service/page.service';

@Component({
    selector: 'app-news',
    standalone: true,
    templateUrl: './news.component.html',
    styleUrl: './news.component.scss',
    imports: [HeaderComponent, FooterComponent,CommonModule]
})
export class NewsComponent implements OnInit{
  fullscreenImage: string | null = null;
  isFullScreen = false;
  news: News[] = [];
  languagecheck = true;
  pageId: string = 'db768e3a-cc02-46cb-8506-e0b4d3543732'; // ფეიჯის აიდი

  constructor( private language: LanguageService, private router: Router, private pageService: PageService) { }

  ngOnInit(): void {
    this.language.getBoolean().subscribe(value => {
      this.languagecheck = value;
    });
    this.loadNews();
    Aos.init();
    Aos.refresh();
  }

  viewMore(item: any) {
    this.router.navigate(['/newsview'], { state: item });
  }

  loadNews(): void {
    this.pageService.getPageById(this.pageId).subscribe(data => {
      this.news = data.pageComponentModals.map((item: any) => {
        const parsedContent = JSON.parse(item.componentContent);
        return {
          id: item.pageComponentId,
          title: parsedContent.title,
          titleEn: parsedContent.titleEn,
          shortText: parsedContent.shortText,
          shortTextEn: parsedContent.shortTextEn,
          text: parsedContent.text,
          textEn: parsedContent.textEn,
          image: parsedContent.image
        };
      });
    });
  }

  toggleFullScreen(imageSrc: string): void {
    if (this.fullscreenImage === imageSrc) {
      this.isFullScreen = !this.isFullScreen;
    } else {
      this.isFullScreen = true;
      this.fullscreenImage = imageSrc;
    }
  }
}

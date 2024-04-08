import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ServiceListService } from '../service-list.service';
import { CommonModule } from '@angular/common';
import Aos from 'aos';
import { News, Services } from '../services';

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


  toggleFullScreen(imageSrc: string): void {
      if (this.fullscreenImage === imageSrc) {
          this.isFullScreen = !this.isFullScreen;
      } else {
          this.isFullScreen = true;
          this.fullscreenImage = imageSrc;
      }
  }

  news: News[] = [];
  currentPage = 1;
  itemsPerPage = 5;

  constructor(private serviceService: ServiceListService) { }

  ngOnInit(): void {
    this.loadNews();
    Aos.init();
    Aos.refresh();
  }

  loadNews(): void {
    this.serviceService.getNews().subscribe(news => {
      this.news = news;
    });
  }



  getPaginatedNews(): News[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.news.slice(startIndex, startIndex + this.itemsPerPage);
  }
  
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.scrollToTop();
  }
  scrollToTop(): void {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getPageNumbers(): number[] {
    const pageCount = Math.ceil(this.news.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }
}

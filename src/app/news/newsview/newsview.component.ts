import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { imgurl } from '../../api-config';

@Component({
    selector: 'app-newsview',
    standalone: true,
    templateUrl: './newsview.component.html',
    styleUrl: './newsview.component.scss',
    imports: [HeaderComponent, FooterComponent ,CommonModule]
})
export class NewsviewComponent  implements OnInit{
imgurl=imgurl;
  news: any;
  languagecheck = true;
  fullscreenImage: string | null = null;
  isFullScreen = false;

  constructor(private language: LanguageService) {
    this.news = history.state;
  }

  ngOnInit(): void {
    this.language.updateLanguageCheck();
    this.language.getBoolean().subscribe(value => {
      this.languagecheck = value;
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
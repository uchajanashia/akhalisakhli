import { Component, OnInit } from '@angular/core';
import { PageService } from '../../inputed/service/page.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderInputComponent } from '../header-input/header-input.component';
import { News } from '../../services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-news',
  standalone: true,
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.scss'],
  imports: [CommonModule, FormsModule, HeaderInputComponent]
})
export class AdminNewsComponent implements OnInit {
  pageId: string = 'd49e2a44-7c13-4e13-a9b8-8ad550485b7f'; // ფეიჯის აიდი
  newsList: News[] = [];
  selectedNewsId: string | null = null;
  selectedNews: News | null = null;
  newNewsTitle: string = '';
  newNewsContent: News = {
    id: '',
    title: '',
    titleEn: '',
    shortText: '',
    shortTextEn: '',
    text: '',
    textEn: '',
    image: ''
  };

  constructor(private pageService: PageService , private toastr : ToastrService) {}

  ngOnInit(): void {
    this.getNewsList();
  }

  getNewsList(): void {
    this.pageService.getPageById(this.pageId).subscribe(data => {
      this.newsList = data.pageComponentModals.map((item: any) => {
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

  onNewsSelect(event: Event): void {
    const selectedId = (event.target as HTMLSelectElement).value;
    this.selectedNews = this.newsList.find(news => news.id === selectedId) || null;
    this.selectedNewsId = selectedId;
  }

  updateNews(): void {
    if (this.selectedNews) {
      const updatedNews = {
        pageComponentId: this.selectedNews.id,
        componentName: this.selectedNews.title, // Use title as componentName
        componentContent: JSON.stringify({
          title: this.selectedNews.title,
          titleEn: this.selectedNews.titleEn,
          shortText: this.selectedNews.shortText,
          shortTextEn: this.selectedNews.shortTextEn,
          text: this.selectedNews.text,
          textEn: this.selectedNews.textEn,
          image: this.selectedNews.image
        })
      };
      this.pageService.updateComponent(updatedNews.pageComponentId, updatedNews.componentName, updatedNews.componentContent)
        .subscribe({
          next: () => this.toastr.info('სიახლე წარმატებით დაემატა'),
          error: () => alert('დაფიქსირდა შეცდომა განახლებისას.')
        });
    }
  }

  async deleteNews(newsId: string): Promise<void> {
    try {
      await this.pageService.deleteComponent([newsId]);
      this.newsList = this.newsList.filter(news => news.id !== newsId);
      this.selectedNews = null;
      this.toastr.info('სიახლე წარმატებით დაემატა');

    } catch (error) {
      alert('დაფიქსირდა შეცდომა წაშლისას.');
    }
  }

  addNewNews(): void {
    const newNews = {
      componentName: this.newNewsTitle,
      componentContent: JSON.stringify(this.newNewsContent)
    };

    this.pageService.addComponent(this.pageId, newNews.componentName, newNews.componentContent)
      .subscribe({
        next: (response) => {
          const newNewsId = response.pageComponentModals[0].pageComponentId;
          this.newsList.push({
            id: newNewsId,
            title: this.newNewsContent.title,
            titleEn: this.newNewsContent.titleEn,
            shortText: this.newNewsContent.shortText,
            shortTextEn: this.newNewsContent.shortTextEn,
            text: this.newNewsContent.text,
            textEn: this.newNewsContent.textEn,
            image: this.newNewsContent.image
          });
          this.selectedNewsId = newNewsId;
          this.selectedNews = this.newsList.find(news => news.id === newNewsId) || null;
          this.newNewsTitle = '';
          this.newNewsContent = {
            id: '',
            title: '',
            titleEn: '',
            shortText: '',
            shortTextEn: '',
            text: '',
            textEn: '',
            image: ''
          };
          this.toastr.info('სიახლე წარმატებით დაემატა');

        },
        error: () => alert('დაფიქსირდა შეცდომა დამატებისას.')
      });
  }
  onImageUpload(event: Event, newsId: string): void {
    const file: File = (event.target as HTMLInputElement).files![0];
    if (file) {
        this.pageService.uploadUserImage(file, newsId).subscribe({
            next: (response) => {
                if (this.selectedNews) {
                    this.selectedNews.image = response; // Assuming response contains the image URL
                }
                this.toastr.info('ფოტო წარმატებით ატვირთულია');
            },
            error: (error) => this.toastr.error('ფოტოს ატვირთვა ვერ მოხერხდა', error)
        });
    }
}

}
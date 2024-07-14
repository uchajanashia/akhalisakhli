import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderInputComponent } from '../header-input/header-input.component';
import { imgurl } from '../../api-config';
interface Gallery {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  text: string;
  textEn: string;
  image: string[];
  video: string;
  priority: number;
}
@Component({
  selector: 'app-admin-galeria',
  standalone: true,
  imports: [FormsModule , CommonModule , HeaderInputComponent],
  templateUrl: './admin-galeria.component.html',
  styleUrl: './admin-galeria.component.scss'
})
export class AdminGaleriaComponent  implements OnInit{
  imgurl = imgurl;
  pageId: string = '370cb96d-7cd2-4957-a7be-784b7670bd23'; // ფეიჯის აიდი
  galleryList: Gallery[] = [];
  selectedGalleryId: string | null = null;
  selectedGallery: Gallery | null = null;
  newGalleryTitle: string = '';
  newGalleryContent: Gallery = {
    id: '',
    title: '',
    titleEn: '',
    category: '',
    categoryEn: '',
    text: '',
    textEn: '',
    image: [],
    video: '',
    priority: 0
  };
  constructor(private pageService: PageService, private toastr: ToastrService) {}
  ngOnInit(): void {
    this.getGalleryList();
  }
  getGalleryList(): void {
    this.pageService.getPageById(this.pageId).subscribe(data => {
      this.galleryList = data.pageComponentModals.map((item: any) => {
        const parsedContent = JSON.parse(item.componentContent);
        return {
          id: item.pageComponentId,
          title: parsedContent.title,
          titleEn: parsedContent.titleEn,
          category: parsedContent.category,
          categoryEn: parsedContent.categoryEn,
          text: parsedContent.text,
          textEn: parsedContent.textEn,
          image: parsedContent.image,
          video: parsedContent.video,
          priority: item.priority,
        };
      });
    });
  }
  onGallerySelect(event: Event): void {
    const selectedId = (event.target as HTMLSelectElement).value;
    this.selectedGallery = this.galleryList.find(gallery => gallery.id === selectedId) || null;
    this.selectedGalleryId = selectedId;
  }
  updateGallery(): void {
    if (this.selectedGallery) {
      const updatedGallery = {
        pageComponentId: this.selectedGallery.id,
        componentName: this.selectedGallery.title,
        componentContent: JSON.stringify({
          title: this.selectedGallery.title,
          titleEn: this.selectedGallery.titleEn,
          category: this.selectedGallery.category,
          categoryEn: this.selectedGallery.categoryEn,
          text: this.selectedGallery.text,
          textEn: this.selectedGallery.textEn,
          image: this.selectedGallery.image,
          video: this.selectedGallery.video,
        }),
        priority: this.selectedGallery.priority,
      };
      this.pageService.updateComponentprt(updatedGallery.pageComponentId, updatedGallery.componentName, updatedGallery.componentContent, updatedGallery.priority)
        .subscribe({
          next: () => this.toastr.info('გალერეა წარმატებით განახლდა'),
          error: () => alert('დაფიქსირდა შეცდომა განახლებისას.')
        });
    }
  }
  async deleteGallery(galleryId: string): Promise<void> {
    try {
      await this.pageService.deleteComponent([galleryId]);
      this.galleryList = this.galleryList.filter(gallery => gallery.id !== galleryId);
      this.selectedGallery = null;
      this.toastr.info('გალერეა წარმატებით წაშლილია');
    } catch (error) {
      alert('დაფიქსირდა შეცდომა წაშლისას.');
    }
  }

  addNewGallery(): void {
    const newGallery = {
      componentName: this.newGalleryTitle,
      componentContent: JSON.stringify(this.newGalleryContent)
    };
    this.pageService.addComponent(this.pageId, newGallery.componentName, newGallery.componentContent)
      .subscribe({
        next: (response) => {
          const newGalleryId = response.pageComponentModals[0].pageComponentId;
          this.galleryList.push({
            id: newGalleryId,
            title: this.newGalleryContent.title,
            titleEn: this.newGalleryContent.titleEn,
            category: this.newGalleryContent.category,
            categoryEn: this.newGalleryContent.categoryEn,
            text: this.newGalleryContent.text,
            textEn: this.newGalleryContent.textEn,
            image: this.newGalleryContent.image,
            video: this.newGalleryContent.video,
            priority: this.newGalleryContent.priority
          });
          this.selectedGalleryId = newGalleryId;
          this.selectedGallery = this.galleryList.find(gallery => gallery.id === newGalleryId) || null;
          this.newGalleryTitle = '';
          this.newGalleryContent = {
            id: '',
            title: '',
            titleEn: '',
            category: '',
            categoryEn: '',
            text: '',
            textEn: '',
            image: [],
            video: '',
            priority: 0
          };
          this.toastr.info('გალერეა წარმატებით დაემატა');
        },
        error: () => alert('დაფიქსირდა შეცდომა დამატებისას.')
      });
  }

  onImageUpload(event: Event, galleryId: string): void {
    const file: File = (event.target as HTMLInputElement).files![0];
    if (file && this.selectedGallery) {
      // Ensure selectedGallery.image is defined and initialized as an array
      if (!this.selectedGallery.image) {
        this.selectedGallery.image = [];
      }
      const imageId = `${galleryId}_${this.selectedGallery.image.length + 1}.jpg`;
      console.log('Uploading image with ID:', imageId); // Debug log
      this.pageService.uploadUserImage(file, imageId).subscribe({
        next: (response) => {
          console.log('Image upload response:', response); // Debug log
          if (this.selectedGallery) {
            this.selectedGallery.image.push(imageId); // Assuming response contains the image URL
          }
          this.toastr.info('ფოტო წარმატებით ატვირთულია');
        },
        error: (error) => {
          console.error('Image upload error:', error); // Debug log
          this.toastr.error('ფოტოს ატვირთვა ვერ მოხერხდა', error.message);
        }
      });
    }
  }
  deleteImage(index: number): void {
    if (this.selectedGallery) {
      this.selectedGallery.image.splice(index, 1);
    }
  }
}
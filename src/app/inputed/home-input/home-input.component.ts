import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Country, Partniorebi, Services } from '../../services';
import { ServiceListService } from '../../service-list.service';
import { LanguageService } from '../../language.service';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { HeaderInputComponent } from '../header-input/header-input.component';
import { FooterInputComponent } from '../footer-input/footer-input.component';
import { FloatContactComponent } from '../../float-contact/float-contact.component';
import { MapComponent } from '../../map/map.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { PageService } from '../service/page.service';

@Component({
  selector: 'app-home-input',
  standalone: true,
  imports: [HeaderInputComponent,
    FooterInputComponent,
    MapComponent,
    FloatContactComponent,
    FormsModule,
    CommonModule],
  templateUrl: './home-input.component.html',
  styleUrl: './home-input.component.scss'
})
export class HomeInputComponent implements OnInit ,AfterViewInit{
  //just for autoplay :)))))))
  serviceList: Services[] = [];
  constructor(
    private pageService :PageService,
  ) {}
  loading = true;
  ngOnInit() {
    Aos.init();
    Aos.refresh();
    this.pageService.getPageById('e45033b4-8c93-4b52-8a84-0e526b7932da').subscribe(data => {
      this.serviceList = data.pageComponentModals.map((item: any) => ({
        id: item.pageComponentId,
        name: item.componentName,
        description: item.componentContent
      }));
    });
  }
  ngAfterViewInit() {

    Aos.refresh();
  }
  onImageUpload(event: any , filename:any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.pageService.uploadUserImage(file , filename).subscribe({
        next: (response) => console.log('Upload successful', response),
        error: (error) => console.error('Upload failed', error)
      });
    }
  }



  updateService(service: any): void {
    this.pageService.updateComponent(service.id, service.name, service.description).subscribe({
      next: (response) => {
        console.log('Update successful', response);
      },
      error: (error) => {
        console.error('Error updating service', error);
      }
    });
  }

}

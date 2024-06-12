import { AfterViewInit, Component,OnInit} from '@angular/core';
import { Services } from '../../services';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderInputComponent } from '../header-input/header-input.component';
import { FooterInputComponent } from '../footer-input/footer-input.component';
import { FloatContactComponent } from '../../float-contact/float-contact.component';
import { MapComponent } from '../../map/map.component';
import { PageService } from '../service/page.service';

@Component({
  selector: 'app-home-input',
  standalone: true,
  imports: 
  [
    HeaderInputComponent,
    FooterInputComponent,
    MapComponent,
    FloatContactComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './home-input.component.html',
  styleUrl: './home-input.component.scss'
})
export class HomeInputComponent implements OnInit ,AfterViewInit{
  serviceList: Services[] = [];
  constructor(private pageService :PageService,) {}
  loading = true;
  ngOnInit() {
    Aos.init();
    Aos.refresh();
    this.pageService.getPageById('e45033b4-8c93-4b52-8a84-0e526b7932da').subscribe(data => {
      this.serviceList = data.pageComponentModals.map((item: any) => {
        const parsedContent = JSON.parse(item.componentContent);
        return {
          id: item.pageComponentId,
          ...parsedContent 
        };
      });
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
    const updatedService = {
        id: service.id,
        name: service.id,
        description: JSON.stringify(service)
    };

    this.pageService.updateComponent(updatedService.id, updatedService.name, updatedService.description).subscribe({
        next: (response) => {
            console.log('Update successful', response);
        },
        error: (error) => {
            console.error('Error updating service', error);
        }
    });
  }
}

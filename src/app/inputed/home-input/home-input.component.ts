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
import { ToastrService } from 'ngx-toastr';

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
  constructor(private pageService :PageService, private tostera :ToastrService) {}
  loading = true;
  ngOnInit() {
    Aos.init();
    Aos.refresh();
    this.pageService.getPageById('cb15ac1c-ef72-4cfe-a694-531f3dcf4485').subscribe(data => {
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
        description: JSON.stringify(service),
        priority:service.priority
    };
    alert(updatedService.id)
    this.pageService.updateComponentprt(updatedService.id, updatedService.name, updatedService.description , updatedService.priority).subscribe({
        next: (response) => {
          this.tostera.info('წარმატებით დანახლდა')
        },
        error: (error) => {
          console.log(error)
          this.tostera.error('უჩას დაურეკეთ ')

        }
    });
  }
}

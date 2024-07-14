import { Component, OnInit } from '@angular/core';
import { HeaderInputComponent } from "../../header-input/header-input.component";
import { FormsModule } from '@angular/forms';
import { AboutCompany } from '../../../services';
import { CommonModule } from '@angular/common';
import { PageService } from '../../service/page.service';
import { ToastrService } from 'ngx-toastr';
import { imgurl } from '../../../api-config';

@Component({
    selector: 'app-company-info',
    standalone: true,
    templateUrl: './company-info.component.html',
    styleUrl: './company-info.component.scss',
    imports: [HeaderInputComponent , FormsModule,CommonModule]
})

export class CompanyInfoComponent implements OnInit {
    imgurl = imgurl;
    service: AboutCompany[] = [];
    constructor(private pageService: PageService, private toastr : ToastrService){}
     ngOnInit() {
    this.pageService.getPageById('554e912f-c38f-42aa-865d-fdf01e4a70ad').subscribe(data => {
      this.service = data.pageComponentModals.map((item: any) => {
        const parsedContent = JSON.parse(item.componentContent);
        return {
          id: item.pageComponentId,
          name: item.pageComponentId,
          ...parsedContent // Spread the parsed JSON content into the main object
        };
      });
    });
    console.log(this.service);
       }

       updateService(service: any): void {
        const updatedService = {
          id: service.id,
          name: service.id, // Assuming service.id should be used for both name and id
          description: JSON.stringify(service), // Convert the service object to a JSON string
          priority: service.priority =1,
        };
        alert(updatedService.id)
        this.pageService
          .updateComponentprt(
            updatedService.id,
            updatedService.name,
            updatedService.description,
            updatedService.priority
    
          )
          .subscribe({
            next: (response) => this.toastr.info('წარმატებით შეიცვალა'),
            error: (error) => {this.toastr.error('Upload failed', error); console.log(error)},
          });
      }
      onImageUpload(event: any , filename:any): void {
        const file: File = event.target.files[0];
        if (file) {
          this.pageService.uploadUserImage(file , filename).subscribe({
            next: (response) => {this.toastr.info('ფოტო წარმატებით შეიცვალა')}
            ,
            error: (error) => {this.toastr.error('უჩას დაურეკეთ '); console.log(error) }
          });
        }
      }
}
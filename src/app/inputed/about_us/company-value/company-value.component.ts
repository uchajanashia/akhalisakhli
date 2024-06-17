import { Component } from '@angular/core';
import { HeaderInputComponent } from "../../header-input/header-input.component";
import { MisionValueVision } from '../../../services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageService } from '../../service/page.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-company-value',
    standalone: true,
    templateUrl: './company-value.component.html',
    styleUrl: './company-value.component.scss',
    imports: [HeaderInputComponent , CommonModule , FormsModule]
})
export class CompanyValueComponent {
    service: MisionValueVision[] = [];
    constructor(private pageService: PageService , private toastr : ToastrService){}
     ngOnInit() {
    this.pageService.getPageById('6b77d7a2-d6d2-4386-87d1-00f4e156fa98').subscribe(data => {
      this.service = data.pageComponentModals.map((item: any) => {
        const parsedContent = JSON.parse(item.componentContent);
        return {
          id: item.pageComponentId,
          name: item.pageComponentId,
          ...parsedContent 
        }; });});
        console.log(this.service);}
        updateService(service: any): void {
          const updatedService = {
            id: service.id,
            name: service.id, // Assuming service.id should be used for both name and id
            description: JSON.stringify(service), // Convert the service object to a JSON string
          };
      
          this.pageService
            .updateComponent(
              updatedService.id,
              updatedService.name,
              updatedService.description
            )
            .subscribe({
              next: (response) => this.toastr.info('წარმატებით შეიცვალა'),
              error: (error) => this.toastr.error('Upload failed', error),
            });
        }
        onImageUpload(event: any, filename: any): void {
          const file: File = event.target.files[0];
          if (file) {
            this.pageService.uploadUserImage(file, filename).subscribe({
              next: (response) => this.toastr.info('წარმატებით შეიცვალა'),
              error: (error) => this.toastr.error('Upload failed', error),
            });
          }
        }
}

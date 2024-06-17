import { Component } from '@angular/core';
import { HeaderInputComponent } from '../../header-input/header-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Gundi } from '../../../services';
import { PageService } from '../../service/page.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company-team',
  standalone: true,
  templateUrl: './company-team.component.html',
  styleUrl: './company-team.component.scss',
  imports: [HeaderInputComponent, CommonModule, FormsModule],
})
export class CompanyTeamComponent {
  gundiList: Gundi[] = [];
  constructor(
    private pageService: PageService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.pageService
      .getPageById('c764fa44-6349-4922-87c0-a91fa512bda1')
      .subscribe((data) => {
        this.gundiList = data.pageComponentModals.map((item: any) => {
          const parsedContent = JSON.parse(item.componentContent);
          return {
            id: item.pageComponentId,
            ...parsedContent,
          };
        });
      });
  }
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

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { iService } from '../../../services';
import { PageService } from '../../service/page.service';

@Component({
  selector: 'app-admin-remonti',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-remonti.component.html',
  styleUrl: './admin-remonti.component.scss'
})
export class AdminRemontiComponent implements OnInit {
  iService: iService | null = null;
  newService: string = '';
  newServiceEn: string = '';
  pageId: string = '780795cc-4a9c-4547-8cc0-17dd4090b19f'; // შეცვალეთ შესაბამისი ID

  constructor(private pageService: PageService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getServiceData(this.pageId);
  }

  addService(isEnglish: boolean) {
    if (this.iService) {
      if (isEnglish) {
        if (this.newServiceEn.trim()) {
          this.iService.listserviceEn.push(this.newServiceEn.trim());
          this.newServiceEn = '';
        }
      } else {
        if (this.newService.trim()) {
          this.iService.listservice.push(this.newService.trim());
          this.newService = '';
        }
      }
    }
  }

  deleteService(index: number, isEnglish: boolean) {
    if (this.iService) {
      if (isEnglish) {
        this.iService.listserviceEn.splice(index, 1);
      } else {
        this.iService.listservice.splice(index, 1);
      }
    }
  }

  submitChanges(): void {
    if (this.iService) {
      const updatedService = {
        pageComponentId: this.iService.id,
        componentName: "Component",
        componentContent: JSON.stringify(this.iService)
      };

      this.pageService
        .updateComponent(
          updatedService.pageComponentId,
          updatedService.componentName,
          updatedService.componentContent
        )
        .subscribe({
          next: (response) => this.toastr.info('წარმატებით შეიცვალა'),
          error: (error) => this.toastr.error('Upload failed', error)
        });
    }
  }

  getServiceData(id: string): void {
    this.pageService.getPageById(id).subscribe(data => {
      const pageComponent = data.pageComponentModals[0];
      const parsedContent = JSON.parse(pageComponent.componentContent);
      this.iService = {
        id: pageComponent.pageComponentId,
        title: parsedContent.title,
        text: parsedContent.text,
        listservice: parsedContent.listservice,
        titleEn: parsedContent.titleEn,
        textEn: parsedContent.textEn,
        listserviceEn: parsedContent.listserviceEn
      };
    });
  }
}

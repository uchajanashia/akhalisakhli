import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PageService } from '../../service/page.service';
import {  FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { iService } from '../../../services';

@Component({
  selector: 'app-admin-proeqtireba',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-proeqtireba.component.html',
  styleUrl: './admin-proeqtireba.component.scss'
})
export class AdminProeqtirebaComponent {
  mshenebloba: iService | null = null;
  newService: string = '';
  newServiceEn: string = '';

  constructor(private pageService: PageService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getServiceData('38e5b29e-1757-4c55-960c-790ed0c230ea');
  }

  addService(isEnglish: boolean) {
    if (this.mshenebloba) {
      if (isEnglish) {
        if (this.newServiceEn.trim()) {
          this.mshenebloba.listserviceEn.push(this.newServiceEn.trim());
          this.newServiceEn = '';
        }
      } else {
        if (this.newService.trim()) {
          this.mshenebloba.listservice.push(this.newService.trim());
          this.newService = '';
        }
      }
    }
  }

  deleteService(index: number, isEnglish: boolean) {
    if (this.mshenebloba) {
      if (isEnglish) {
        this.mshenebloba.listserviceEn.splice(index, 1);
      } else {
        this.mshenebloba.listservice.splice(index, 1);
      }
    }
  }

  submitChanges(): void {
    if (this.mshenebloba) {
      const updatedService = {
        pageComponentId: this.mshenebloba.id,
        componentName: "Component",
        componentContent: JSON.stringify(this.mshenebloba)
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
      this.mshenebloba = {
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

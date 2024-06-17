import { Component } from '@angular/core';
import { HeaderInputComponent } from "../header-input/header-input.component";
import { ToastrService } from 'ngx-toastr';
import { PageService } from '../service/page.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-input',
    standalone: true,
    templateUrl: './footer-input.component.html',
    styleUrl: './footer-input.component.scss',
    imports: [HeaderInputComponent,FormsModule,CommonModule]
})
export class FooterInputComponent {
  pageId = '485d2121-be16-4e58-86a6-8b4b0e6a7399';
  componentId = '';
  contactInfo = {
    phone1: '',
    phone2: '',
    email: '',
    address: '',
    addressEn: ''
  };

  constructor(private pageService: PageService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getContactInfo();
  }

  getContactInfo(): void {
    this.pageService.getPageById(this.pageId).subscribe(data => {
      const pageComponent = data.pageComponentModals[0];
      this.componentId = pageComponent.pageComponentId;
      const parsedContent = JSON.parse(pageComponent.componentContent);
      this.contactInfo = {
        phone1: parsedContent.phone1 || '',
        phone2: parsedContent.phone2 || '',
        email: parsedContent.email || '',
        address: parsedContent.address || '',
        addressEn: parsedContent.addressEn || ''
      };
    });
  }

  updateContact(): void {
    const updatedContent = JSON.stringify(this.contactInfo);
    this.pageService.updateComponent(this.componentId, this.pageId, updatedContent).subscribe({
      next: () => this.toastr.info('Contact information updated successfully'),
      error: (error) => this.toastr.error('Failed to update contact information', error)
    });
  }}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactformComponent } from "../../contactform/contactform.component";
import { SharedcontactService } from '../sharedcontact.service';

@Component({
    selector: 'app-viewproject',
    standalone: true,
    templateUrl: './viewproject.component.html',
    styleUrl: './viewproject.component.scss',
    imports: [CommonModule, ContactformComponent]
})
export class ViewprojectComponent {
  activeImageUrl: string;
  productImages: string[];
  

  toggleContactForm(): void {
    this.sharedService.showContactForm = !this.sharedService.showContactForm;
  }

  closeContactForm(): void {
    this.sharedService.showContactForm = false;
  }
  constructor(public sharedService : SharedcontactService) {
    this.activeImageUrl = "https://source.unsplash.com/W1yjvf5idqA"; // Set default active image URL
    this.productImages = [
      "https://source.unsplash.com/W1yjvf5idqA",
      "https://source.unsplash.com/VgbUxvW3gS4",
      "https://source.unsplash.com/5WbYFH0kf_8"
    ];
  }
  
  changeImage(event: MouseEvent): void {
    const target = event.target as HTMLImageElement;
    this.activeImageUrl = target.src;

}
}

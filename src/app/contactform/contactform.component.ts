import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { SharedcontactService } from '../projects/sharedcontact.service';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl: './style.css'
})
export class ContactformComponent {

  constructor(public sharedService: SharedcontactService) {}

  closeContactForm(): void {
    this.sharedService.showContactForm = false;
  }
  }
  

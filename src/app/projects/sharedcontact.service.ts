import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedcontactService {
  showContactForm: boolean = false;

  constructor() { }
}

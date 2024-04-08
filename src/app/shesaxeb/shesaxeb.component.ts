import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FloatContactComponent } from "../float-contact/float-contact.component";

@Component({
    selector: 'app-shesaxeb',
    standalone: true,
    templateUrl: './shesaxeb.component.html',
    styleUrl: './shesaxeb.component.scss',
    imports: [HeaderComponent, FooterComponent, CommonModule, FloatContactComponent]
})
export class ShesaxebComponent  implements OnInit{
  ngOnInit() {
    Aos.init();
    Aos.refresh();
  }
}

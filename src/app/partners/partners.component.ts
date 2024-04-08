import { Component, OnInit } from '@angular/core';
import { CaruselComponent } from '../carusel/carusel.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import Aos from 'aos';
import { FloatContactComponent } from "../float-contact/float-contact.component";

@Component({
    selector: 'app-partners',
    standalone: true,
    templateUrl: './partners.component.html',
    styleUrl: './partners.component.scss',
    imports: [CaruselComponent, HeaderComponent, FooterComponent, FloatContactComponent]
})
export class PartnersComponent implements OnInit{
  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
  }

}

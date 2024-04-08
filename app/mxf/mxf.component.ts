import { Component, OnInit } from '@angular/core';
import { FloatContactComponent } from "../float-contact/float-contact.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import Aos from 'aos';

@Component({
    selector: 'app-mxf',
    standalone: true,
    templateUrl: './mxf.component.html',
    styleUrl: './mxf.component.scss',
    imports: [FloatContactComponent, HeaderComponent, FooterComponent]
})
export class MxfComponent implements OnInit{
    ngOnInit(): void {
        Aos.init();
        Aos.refresh();
    }

}

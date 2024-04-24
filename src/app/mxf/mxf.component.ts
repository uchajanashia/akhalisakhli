import { Component, OnInit } from '@angular/core';
import { FloatContactComponent } from "../float-contact/float-contact.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import Aos from 'aos';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-mxf',
    standalone: true,
    templateUrl: './mxf.component.html',
    styleUrl: './mxf.component.scss',
    imports: [FloatContactComponent, HeaderComponent, FooterComponent]
})
export class MxfComponent implements OnInit{
    languagecheck = true;
    constructor(private language : LanguageService){}
    ngOnInit(): void {
        Aos.init();
        Aos.refresh();
        this.language.updateLanguageCheck();
        this.language.getBoolean().subscribe(value => {
          this.languagecheck = value;
        });
    }

}

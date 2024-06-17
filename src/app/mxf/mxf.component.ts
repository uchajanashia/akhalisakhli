import { Component, OnInit } from '@angular/core';
import { FloatContactComponent } from "../float-contact/float-contact.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import Aos from 'aos';
import { LanguageService } from '../language.service';
import { MisionValueVision } from '../services';
import { PageService } from '../inputed/service/page.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-mxf',
    standalone: true,
    templateUrl: './mxf.component.html',
    styleUrl: './mxf.component.scss',
    imports: [FloatContactComponent, HeaderComponent, FooterComponent , CommonModule]
})
export class MxfComponent implements OnInit{
    service: MisionValueVision[] = [];

    languagecheck = true;
    constructor(private language : LanguageService , private pageService : PageService){}
    ngOnInit(): void {
        Aos.init();
        Aos.refresh();
        this.language.updateLanguageCheck();
        this.language.getBoolean().subscribe(value => {
          this.languagecheck = value;
        });
        this.pageService.getPageById('6b77d7a2-d6d2-4386-87d1-00f4e156fa98').subscribe(data => {
            this.service = data.pageComponentModals.map((item: any) => {
              const parsedContent = JSON.parse(item.componentContent);
              return {
                id: item.pageComponentId,
                name: item.pageComponentId,
                ...parsedContent 
              }; });});
    }

}

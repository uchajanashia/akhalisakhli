import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
    selector: 'app-newsview',
    standalone: true,
    templateUrl: './newsview.component.html',
    styleUrl: './newsview.component.scss',
    imports: [HeaderComponent, FooterComponent ,CommonModule]
})
export class NewsviewComponent  implements OnInit{
toggleFullScreen(arg0: any) {
throw new Error('Method not implemented.');
}
  news : any;
  languagecheck = true;
 constructor(private language : LanguageService){
  this.news = history.state;
 }
  ngOnInit(): void {
    this.language.updateLanguageCheck();
    this.language.getBoolean().subscribe(value => {
      this.languagecheck = value;
    });
  }
}

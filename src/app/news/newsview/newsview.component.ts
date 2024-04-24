import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-newsview',
    standalone: true,
    templateUrl: './newsview.component.html',
    styleUrl: './newsview.component.scss',
    imports: [HeaderComponent, FooterComponent ,CommonModule]
})
export class NewsviewComponent {
toggleFullScreen(arg0: any) {
throw new Error('Method not implemented.');
}
  news : any;
  languagecheck = true;
 constructor(){
  this.news = history.state;
  console.log(this.news)
 }
}

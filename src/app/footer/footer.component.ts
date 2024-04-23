import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  languagecheck = true;
  constructor(private language : LanguageService){

  }
  ngOnInit(): void {
    this.language.getBoolean().subscribe(value => {
      this.languagecheck = value;
    });
  }
  
}

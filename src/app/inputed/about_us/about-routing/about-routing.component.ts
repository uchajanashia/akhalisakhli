import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageService } from '../../../language.service';
import { HeaderInputComponent } from "../../header-input/header-input.component";

@Component({
    selector: 'app-about-routing',
    standalone: true,
    templateUrl: './about-routing.component.html',
    styleUrl: './about-routing.component.scss',
    imports: [RouterLink, CommonModule, RouterModule, HeaderInputComponent]
})
export class AboutRoutingComponent {
  isGeorgian: boolean = true; 
  activeFilter =''
  constructor(
    private languageService: LanguageService , private router : Router
  ) {
    this.activeFilter = this.router.url;
  }
    ngOnInit(): void {
      this.languageService.updateLanguageCheck();
      this.languageService.getBoolean().subscribe(value => {
        this.isGeorgian = value;
      });

      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          this.activeFilter = event.urlAfterRedirects;

        }
      });

    }
}

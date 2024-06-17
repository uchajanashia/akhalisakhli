import { Component } from '@angular/core';
import { HeaderInputComponent } from "../../header-input/header-input.component";
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-admin-servicerouting',
    standalone: true,
    templateUrl: './admin-servicerouting.component.html',
    styleUrl: './admin-servicerouting.component.scss',
    imports: [HeaderInputComponent,RouterLink, CommonModule, RouterModule,]
})
export class AdminServiceroutingComponent {
  activeFilter =''
  constructor(
   private router : Router
  ) {
    this.activeFilter = this.router.url;
  }
    ngOnInit(): void {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          this.activeFilter = event.urlAfterRedirects;

        }
      });

    }
}

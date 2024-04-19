import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FloatContactComponent } from "../float-contact/float-contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-service',
    standalone: true,
    templateUrl: './service.component.html',
    styleUrl: './service.component.scss',
    imports: [ RouterLink, RouterModule, HeaderComponent, FloatContactComponent, FooterComponent]
})
export class ServiceComponent {

}

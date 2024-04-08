import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { RouterModule } from '@angular/router';
import { HeaderInputComponent } from "../header-input/header-input.component";
import { FooterInputComponent } from "../footer-input/footer-input.component";

@Component({
    selector: 'app-about-input',
    standalone: true,
    templateUrl: './about-input.component.html',
    styleUrl: './about-input.component.scss',
    imports: [HeaderComponent, FooterComponent, RouterModule, HeaderInputComponent, FooterInputComponent]
})
export class AboutInputComponent {

}

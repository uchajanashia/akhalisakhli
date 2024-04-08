import { Component } from '@angular/core';
import { CaruselInputComponent } from "../carusel-input/carusel-input.component";

@Component({
    selector: 'app-partners-input',
    standalone: true,
    templateUrl: './partners-input.component.html',
    styleUrl: './partners-input.component.scss',
    imports: [CaruselInputComponent]
})
export class PartnersInputComponent {

}

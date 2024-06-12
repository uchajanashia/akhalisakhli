import { Component } from '@angular/core';
import { HeaderInputComponent } from "../../header-input/header-input.component";

@Component({
    selector: 'app-company-value',
    standalone: true,
    templateUrl: './company-value.component.html',
    styleUrl: './company-value.component.scss',
    imports: [HeaderInputComponent]
})
export class CompanyValueComponent {

}

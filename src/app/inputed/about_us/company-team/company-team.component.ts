import { Component } from '@angular/core';
import { HeaderInputComponent } from "../../header-input/header-input.component";

@Component({
    selector: 'app-company-team',
    standalone: true,
    templateUrl: './company-team.component.html',
    styleUrl: './company-team.component.scss',
    imports: [HeaderInputComponent]
})
export class CompanyTeamComponent {

}

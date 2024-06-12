import { Component } from '@angular/core';
import { HeaderInputComponent } from "../../header-input/header-input.component";
import { CommonModule } from '@angular/common';
import { MisionValueVision } from '../../../services';

@Component({
    selector: 'app-company-partners',
    standalone: true,
    templateUrl: './company-partners.component.html',
    styleUrl: './company-partners.component.scss',
    imports: [HeaderInputComponent , CommonModule]
})
export class CompanyPartnersComponent {



}

import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-otxsotx',
    standalone: true,
    templateUrl: './otxsotx.component.html',
    styleUrl: './otxsotx.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class OtxsotxComponent {

}

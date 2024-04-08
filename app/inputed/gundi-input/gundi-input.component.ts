import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Gundi, Services } from '../../services';

import { ServiceListService } from '../../service-list.service';

@Component({
  selector: 'app-gundi-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gundi-input.component.html',
  styleUrl: './gundi-input.component.scss'
})
export class GundiInputComponent {
  @Input() gundi!:Gundi;
  gundiList:Gundi[]=[];

  constructor(private serviceService: ServiceListService) {}

  ngOnInit(): void {
      this.gundiList = this.serviceService.getAllGroup();
  }
}

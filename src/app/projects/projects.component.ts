import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { ViewprojectComponent } from "./viewproject/viewproject.component";
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { project } from '../services';
import { ServiceListService } from '../service-list.service';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    imports: [ FooterComponent, HeaderComponent , CommonModule]
})
export class ProjectsComponent implements OnInit{
    languagecheck = true;
    projects : project[]=[]
    activeFilter= "" ;
    filteredProjects :project[] = [];
    
    

      constructor(private router: Router , private service: ServiceListService, private language : LanguageService) {
        this.projects =service.getproject();
        console.log(this.projects)
      }
  ngOnInit(): void {
    this.filteredProjects = this.projects; 
    this.language.updateLanguageCheck();
    this.language.getBoolean().subscribe(value => {
      this.languagecheck = value;
    });

  }

      viewMore(project: any): void {
        this.router.navigate(['/projectview'], { state: project });

      }
      filterByTitle(title: string) {
        this.activeFilter = title;
  
          this.filteredProjects = this.projects.filter(project => project.category === title);
        }
      
      dontdo() {
          this.filteredProjects = this.projects;
          this.activeFilter ='';
        }
}

import { Component, OnInit , ChangeDetectionStrategy } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { project } from '../services';
import { LanguageService } from '../language.service';
import { ProjectsService } from './projects.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    imports: [ FooterComponent, HeaderComponent , CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProjectsComponent implements OnInit{
    languagecheck = true;
    projects : project[]=[]
    activeFilter= "" ;
    filteredProjects :project[] = [];
    currentPage = 1;
    itemsPerPage = 5;
    

      constructor(private router: Router , private service: ProjectsService, private language : LanguageService) {
        this.projects =service.getproject();
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
  
          this.filteredProjects = this.projects.filter(project => project.category == title);
        }
      
      dontdo() {
          this.filteredProjects = this.projects;
          this.activeFilter ='';
        }
        paginateProjects() {
          this.filteredProjects = this.service.getproject2(this.currentPage, this.itemsPerPage);
        }
      
        goToPage(page: number) {
          this.currentPage = page;
          this.paginateProjects();
        }

        trackByProjectId(index: number, project: any): any {
          return project.id; // Assuming each project has a unique identifier 'id'
        }
}

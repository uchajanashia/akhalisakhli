import { Component, OnInit , ChangeDetectionStrategy } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { project } from '../services';
import { LanguageService } from '../language.service';
import { PageService } from '../inputed/service/page.service';

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
      constructor(private router: Router , private language : LanguageService, private pageService : PageService) {
        
      }
  ngOnInit(): void {
    this.pageService.getPageById('370cb96d-7cd2-4957-a7be-784b7670bd23').subscribe(data => {
      this.projects = data.pageComponentModals.map((item: any) => {
        const parsedContent = JSON.parse(item.componentContent);
        return {
          id: item.pageComponentId,
          ...parsedContent 
        };
      });
    });
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

        trackByProjectId(index: number, project: any): any {
          return project.id; // Assuming each project has a unique identifier 'id'
        }
}

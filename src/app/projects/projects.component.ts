import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { project } from '../services';
import { LanguageService } from '../language.service';
import { PageService } from '../inputed/service/page.service';
import { imgurl } from '../api-config';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [FooterComponent, HeaderComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  imgurl = imgurl;
  languagecheck = true;
  projects: project[] = [];
  activeFilter = "";
  filteredProjects: project[] = [];

  constructor(private router: Router, private language: LanguageService, private pageService: PageService, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.dontdo();
  }

  ngOnInit(): void {
    this.pageService.getPageById('370cb96d-7cd2-4957-a7be-784b7670bd23').subscribe(data => {
      this.projects = data.pageComponentModals.map((item: any) => {
        const parsedContent = JSON.parse(item.componentContent);
        return {
          id: item.pageComponentId,
          ...parsedContent,
        } as project;
      });

      this.filteredProjects = this.projects; // Initialize filteredProjects after loading projects
      this.cdr.detectChanges(); // Force change detection
      console.log("Projects:", this.projects);
      console.log("Filtered Projects:", this.filteredProjects);
    });

    this.language.updateLanguageCheck();
    this.language.getBoolean().subscribe(value => {
      this.languagecheck = value;
    });
  }

  viewMore(project: project): void {
    this.router.navigate(['/projectview'], { state: project });
  }

  filterByTitle(title: string) {
    this.activeFilter = title;
    this.filteredProjects = this.projects.filter(project => project.category == title);
    this.cdr.detectChanges(); // Force change detection
  }

  dontdo() {
    this.filteredProjects = this.projects;
    this.activeFilter = '';
    this.cdr.detectChanges(); // Force change detection
  }

  onImageError(imageUrl: string): void {
    console.log("Image failed to load:", imageUrl);
  }
}

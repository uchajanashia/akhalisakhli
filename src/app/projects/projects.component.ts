import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { ViewprojectComponent } from "./viewproject/viewproject.component";
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    imports: [ FooterComponent, HeaderComponent , CommonModule]
})
export class ProjectsComponent {
 

    projects = [
        { image: 'assets/galerea/interieris dizaini/1/1.jpg', category: 'interieris dizaini', title: 'ინდივიდუალური საცხოვრებელი სახლი  ბათუმში' , text: 'შევასრულეთ  2 სართულიანი ინდივიდუალური საცხოვრებელი სახლის ინტერიერის დიზაინის პროექტი.<br> სახლის ფართობი: 400 კვ.მ. I სართულზე განთავსებულია: <strong>სტუდიოს ტიპის მისაღები ოთახი</strong>, კაბინეტი, საძინებელი, სველი წერტილი, ტექნიკური ოთახი. II სართულზე განთავსებულია: <strong>მისაღები ოთახი</strong>, 3 საძინებელი, 2 აივანი.'    },
        { image: 'assets/galerea/landshapti/1/10.jpg', image2 :'assets/galerea/landshapti/1/cover.jpg', category: 'landshapti', title: 'ინდივიდუალური საცხოვრებელი სახლი საგურამოში' , text:"შევასრულეთ ლანდშაფტის დიზაინის პროექტი.ეზოს ფართობი: 2100 კვ.მ."},
        { image: 'assets/galerea/landshapti/2/1.jpg', image2 :'assets/galerea/landshapti/2/9.jpg', category: 'landshapti', title: 'ინდივიდუალური საცხოვრებელი სახლი  დიდ-დიღომში' , text:"შევასრულეთ ლანდშაფტის დიზაინის პროექტი. ეზოს ფართობი: 1800 კვ.მ."},
        { image: 'assets/galerea/landshapti/3/7.jpg', image2 :'assets/galerea/landshapti/3/8.jpg', category: 'landshapti', title: 'ინდივიდუალური საცხოვრებელი სახლი ლისზე' ,text:'შევასრულეთ ლანდშაფტის დიზაინის პროექტი.ეზოს ფართობი: 800 კვ.მ.' }, 
        { image: 'assets/galerea/landshapti/4/5.jpg', image2 :'assets/galerea/landshapti/4/6.jpg', category: 'landshapti', title: 'ინდივიდუალური საცხოვრებელი სახლი საგურამოში' ,text:'შევასრულეთ ლანდშაფტის დიზაინის პროექტი.ეზოს ფართობი: 900 კვ.მ.' }, 
        { image: 'assets/galerea/landshapti/5/3.jpg', image2 :'assets/galerea/landshapti/5/4.jpg', category: 'landshapti', title: 'ინდივიდუალური საცხოვრებელი სახლი  წოდორეთში' ,text:' შევასრულეთ ლანდშაფტის დიზაინის პროექტი.ეზოს ფართობი: 22 000  კვ.მ.' }, 
        { image: 'assets/galerea/landshapti/6/2.jpg', category: 'landshapti', title: 'ინდივიდუალური საცხოვრებელი სახლი ნაფეტვრებში', text:'შევასრულეთ ლანდშაფტის დიზაინის პროექტი.ეზოს ფართობი: 2000  კვ.მ.' },
     
    ];
    activeFilter= "" ;


    
      filteredProjects = this.projects; // Initialize filteredProjects with all projects
    
      filterByTitle(title: string) {
      this.activeFilter = title;

        this.filteredProjects = this.projects.filter(project => project.category === title);
      }
      dontdo() {
        this.filteredProjects = this.projects;
        this.activeFilter ='';
      }
      constructor(private router: Router) {}

      viewMore(project: any): void {
        this.router.navigate(['/projectview'], { state: { project: { ...project, text: project.text, image2: project.image2 } } });

      }
}

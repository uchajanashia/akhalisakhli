import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServiceComponent } from './service/service.component';
import { PartnersComponent } from './partners/partners.component';
import { GundiComponent } from './gundi/gundi.component';
import { ShesaxebComponent } from './shesaxeb/shesaxeb.component';
import { LoginComponent } from './login/login.component';
import { MxfComponent } from './mxf/mxf.component';
import { InterieriComponent } from './service/interieri/interieri.component';
import { LandshaftiComponent } from './service/landshafti/landshafti.component';
import { MsheneblobaComponent } from './service/mshenebloba/mshenebloba.component';
import { ProektirebaComponent } from './service/proektireba/proektireba.component';
import { RemontiComponent } from './service/remonti/remonti.component';
import { OtxsotxComponent } from './otxsotx/otxsotx.component';
import { MessComponent } from './usr/mess/mess.component';
import { AdminComponent } from './inputed/admin.component';
import { AuthGuard } from './guard.guard';
import { ViewprojectComponent } from './projects/viewproject/viewproject.component';
import { NewsviewComponent } from './news/newsview/newsview.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HomeInputComponent } from './inputed/home-input/home-input.component';
import { CompanyInfoComponent } from './inputed/about_us/company-info/company-info.component';
import { CompanyValueComponent } from './inputed/about_us/company-value/company-value.component';
import { CompanyTeamComponent } from './inputed/about_us/company-team/company-team.component';
import { CompanyPartnersComponent } from './inputed/about_us/company-partners/company-partners.component';
import { AboutRoutingComponent } from './inputed/about_us/about-routing/about-routing.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'ახალი სახლი',
  },
    {
      path: 'home',
      component: HomeComponent,
    },

    {
      path:"about_us",
      component: AboutComponent,
      children: [
        {
          path: 'company_info',
          component: ShesaxebComponent,
          data: { title: 'კომპანიის შესახებ' },
        },
        {
          path: 'company_value',
          component: MxfComponent,
          data: { title: 'მისია, ხედვა, ფასეულობები' },
        },
        {
          path: 'company_team',
          component: GundiComponent,
          data: { title: 'ჩვენი გუნდი' },
        },
        {
          path: 'company_partners',
          component: PartnersComponent,
          data: { title: 'პარტნიორები' },
        },
      ],
    },
    {
      path: 'contact_page',
      component: ContactComponent,
      title: 'კონტაქტი',
    },
    {
      path: 'news',
      component: NewsComponent,
      title: 'სიახლეები',
    },
    {
      path: 'projects',
      component: ProjectsComponent,
      title: 'პროექტები',
    },
    {
      path: 'service',
      component: ServiceComponent,
      title: 'სერვისები',
      children: [
        {
          path: 'project_design',
          component: InterieriComponent,
          data: { title: 'ინტერიერი' },
        },
        {
          path: 'construction',
          component: LandshaftiComponent,
          data: { title: 'ლადნშაფტის დიზაინი' },
        },
        {
          path: 'interior_Design',
          component: MsheneblobaComponent,
          data: { title: 'მშენებლობა' },
        },
        {
          path: 'renovation',
          component: ProektirebaComponent,
          data: { title: 'პროექტირება' },
        },
        {
          path: 'landscape_design',
          component: RemontiComponent,
          data: { title: 'რემონტი' },
        },
      ]
    },
    {
      path: 'login',
      component: LoginComponent,
      title: 'login',
    },
    {
      path: 'error',
      component: OtxsotxComponent,
      title: 'error 404',
    },
    {
      path: "admin",
      component: AdminComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: 'home',
          component: HomeInputComponent,
          canActivate: [AuthGuard],
        },
        {
          path: 'about_us',
          component: AboutRoutingComponent,
          canActivate: [AuthGuard],
          children: [
            {
              path: 'company_info',
              component: CompanyInfoComponent,
              canActivate: [AuthGuard],
            },
            {
              path: 'company_value',
              component: CompanyValueComponent,
              canActivate: [AuthGuard],
            },
            {
              path: 'company_team',
              component: CompanyTeamComponent,
              canActivate: [AuthGuard],
            },
            {
              path: 'company_partners',
              component: CompanyPartnersComponent,
              canActivate: [AuthGuard],
            },
          ]
        },
        {
          path: 'service',
          component: HomeInputComponent,
          canActivate: [AuthGuard],
          children: [
            {
              path: 'project_design',
              component: HomeInputComponent,
              canActivate: [AuthGuard],
            },
            {
              path: 'construction',
              component: HomeInputComponent,
              canActivate: [AuthGuard],
            },
            {
              path: 'interior_Design',
              component: HomeInputComponent,
              canActivate: [AuthGuard],
            },
            {
              path: 'renovation',
              component: HomeInputComponent,
              canActivate: [AuthGuard],
            },
            {
              path: 'landscape_design',
              component: HomeInputComponent,
              canActivate: [AuthGuard],
            }
          ]
        },
        {
          path: 'news',
          component: HomeInputComponent,
          canActivate: [AuthGuard],
        },
        {
          path: 'contact_page',
          component: HomeInputComponent,
          canActivate: [AuthGuard],
        }
      
      ]
    },
    {
      path: "sales",
      component: MessComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'projectview',
      component: ViewprojectComponent
    },
    {
      path: 'newsview',
      component: NewsviewComponent
    },
    {
      path: 'privacy',
      component: PrivacyComponent
    },
    { path: '**', component: OtxsotxComponent }
  ];
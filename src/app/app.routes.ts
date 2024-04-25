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
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guard.guard';
import { ViewprojectComponent } from './projects/viewproject/viewproject.component';
import { NewsviewComponent } from './news/newsview/newsview.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: '',
      component: HomeComponent,
      title: 'ახალი სახლი',
    },
    {
      path:"about",
      component: AboutComponent,
      children: [
        {
          path: 'aboutCompany',
          component: ShesaxebComponent,
          data: { title: 'კომპანიის შესახებ' },
        },
        {
          path: 'mxf',
          component: MxfComponent,
          data: { title: 'მისია, ხედვა, ფასეულობები' },
        },
        {
          path: 'team',
          component: GundiComponent,
          data: { title: 'ჩვენი გუნდი' },
        },
        {
          path: 'partners',
          component: PartnersComponent,
          data: { title: 'პარტნიორები' },
        },
      ],
    },
    {
      path: 'contact',
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
      path: 'services',
      component: ServiceComponent,
      title: 'სერვისები',
      children: [
        {
          path: 'interieri',
          component: InterieriComponent,
          data: { title: 'ინტერიერი' },
        },
        {
          path: 'landshafti',
          component: LandshaftiComponent,
          data: { title: 'ლადნშაფტის დიზაინი' },
        },
        {
          path: 'mshenebloba',
          component: MsheneblobaComponent,
          data: { title: 'მშენებლობა' },
        },
        {
          path: 'proektireba',
          component: ProektirebaComponent,
          data: { title: 'პროექტირება' },
        },
        {
          path: 'remonti',
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
      path:"admin",
      component:AdminComponent,
      canActivate: [AuthGuard]
    },
    {
      path:"sales",
      component:MessComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'projectview',
      component:ViewprojectComponent
    },
    {      path: 'newsview',
    component:NewsviewComponent

    },
    {
      path :'privacy',
      component:PrivacyComponent
    },
    { path: '**', component: OtxsotxComponent }
  ];
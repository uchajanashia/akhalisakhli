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
import { VidcaruselComponent } from './vidcarusel/vidcarusel.component';
import { OtxsotxComponent } from './otxsotx/otxsotx.component';
import { UsrComponent } from './usr/usr.component';
import { MessComponent } from './usr/mess/mess.component';
import { HomeInputComponent } from './inputed/home-input/home-input.component';
import { ContactInputComponent } from './inputed/contact-input/contact-input.component';
import { GundiInputComponent } from './inputed/gundi-input/gundi-input.component';
import { MxfInputComponent } from './inputed/mxf-input/mxf-input.component';
import { NewsInputComponent } from './inputed/news-input/news-input.component';
import { PartnersInputComponent } from './inputed/partners-input/partners-input.component';
import { ServiceInputComponent } from './inputed/service-input/service-input.component';
import { ShesaxebInputComponent } from './inputed/shesaxeb-input/shesaxeb-input.component';
import { AboutInputComponent } from './inputed/about-input/about-input.component';
import { InterieriinputComponent } from './inputed/service-input/interieriinput/interieriinput.component';
import { MsheneblobainputComponent } from './inputed/service-input/msheneblobainput/msheneblobainput.component';
import { ProeqtirebainputComponent } from './inputed/service-input/proeqtirebainput/proeqtirebainput.component';
import { RemontiinputComponent } from './inputed/service-input/remontiinput/remontiinput.component';
import { LandinputComponent } from './inputed/service-input/landinput/landinput.component';
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
    { path: 'homeinput', component: HomeInputComponent },
    { path: 'contactinput', component: ContactInputComponent },
    { path: 'newsinput', component: NewsInputComponent },
    { path: 'serviceinput', component: ServiceInputComponent, 
    children: [
      {
        path: 'interieriinput',
        component: InterieriinputComponent,
        data: { title: 'ინტერიერი' },
      },
      {
        path: 'landshaftiinput',
        component: LandinputComponent,
        data: { title: 'ლადნშაფტის დიზაინი' },
      },
      {
        path: 'msheneblobainput',
        component: MsheneblobainputComponent,
        data: { title: 'მშენებლობა' },
      },
      {
        path: 'proektirebainput',
        component: ProeqtirebainputComponent,
        data: { title: 'პროექტირება' },
      },
      {
        path: 'remontiinput',
        component: RemontiinputComponent,
        data: { title: 'რემონტი' },
      },
    ]
  },
    {
      path:"aboutinput",
      component: AboutInputComponent,
      children: [
        {
          path: 'shesaxebinput',
          component: ShesaxebInputComponent,
          data: { title: 'კომპანიის შესახებ' },
        },
        {
          path: 'mxfinput',
          component: MxfInputComponent,
          data: { title: 'მისია, ხედვა, ფასეულობები' },
        },
        {
          path: 'gundiinput',
          component: GundiInputComponent,
          data: { title: 'ჩვენი გუნდი' },
        },
        {
          path: 'partnersinput',
          component: PartnersInputComponent,
          data: { title: 'პარტნიორები' },
        },

      ],
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
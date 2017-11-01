import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import {FlashMessagesModule} from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthService} from './services/auth.service';
import { LoginComponent } from './login/login.component';
import {HttpModule} from "@angular/http";
import {AuthGuard} from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LabReportsComponent } from './lab-reports/lab-reports.component';
import { PrelabsComponent } from './prelabs/prelabs.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { ExperimentComponent } from './experiment/experiment.component';

const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard],
    children:[
      {path:'LabCourses', component:LabReportsComponent},
      {path:'Prelabs', component:PrelabsComponent},
      {path:'Tutorials', component:TutorialsComponent},
      {path:'Experiments', component:ExperimentComponent},
    ]
  },
  {path:'*', component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    LabReportsComponent,
    PrelabsComponent,
    TutorialsComponent,
    ExperimentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

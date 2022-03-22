import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { FooterComponent } from './footers/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { TeachersComponent } from './teachers/teachers.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import {HttpClientModule} from '@angular/common/http';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    AboutComponent,
    TeachersComponent,
    PricingComponent,
    ContactComponent,
    CoursesComponent,
    SubjectListComponent,
    ChapterListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

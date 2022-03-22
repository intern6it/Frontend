import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';

import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {path:'',redirectTo:"/", pathMatch:"full"},
  { path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path:'teacher',component:TeachersComponent},
  {path:'pricing',component:PricingComponent},
  {path:'contact',component:ContactComponent},
  {path:'courses',component:CoursesComponent},
  {path:'subject',component:SubjectListComponent},
  {path:'chapter',component:ChapterListComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

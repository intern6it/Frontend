import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {path:'', redirectTo:"/", pathMatch:"full"},
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'maths', component: SubjectComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

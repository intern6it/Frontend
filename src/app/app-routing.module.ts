import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './header/about/about.component';
import { HomeComponent } from './header/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:"/", pathMatch:"full"},
  { path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

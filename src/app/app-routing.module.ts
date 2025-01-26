import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JobListComponent } from './job-list/job-list.component';
import {EmployeeResolver} from './employee-resolver';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },

  { path: 'job-list', component: JobListComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent ,resolve: {job: EmployeeResolver}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

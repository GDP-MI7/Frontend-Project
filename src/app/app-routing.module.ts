import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListTagsComponent } from './list-tags/list-tags.component';
import { ShowReportComponent } from './show-report/show-report.component';

const routes: Routes = [
  {path :"home", component: HomeComponent},
  {path : "list-tags", component: ListTagsComponent},
  {path: "show-report", component: ShowReportComponent},
  {pathMatch:"full", redirectTo:"\home", path:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListTagsComponent } from './list-tags/list-tags.component';
import { ShowReportComponent } from './show-report/show-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListTagsComponent,
    ShowReportComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

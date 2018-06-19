import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import{RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookSeriesComponent } from './book-series/book-series.component';
import { ContactComponent } from './contact/contact.component';
import { BookHttpService } from './book-http.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BookSeriesComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'book-series',component:BookSeriesComponent},
      {path:'contact',component:ContactComponent}

    ])

  ],
  providers: [BookHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

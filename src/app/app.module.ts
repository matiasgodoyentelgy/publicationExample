import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PublicationModule } from './components/publication.module';
import { PublicationListComponent } from './components/publication-list/publication-list.component';

@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    PublicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

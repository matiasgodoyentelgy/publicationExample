import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationComponent } from './publication/publication.component';
import { PublicationListComponent } from './publication-list/publication-list.component';



@NgModule({
  declarations: [
    PublicationComponent,
    PublicationListComponent
  ],
  imports: [
    CommonModule
  ],exports : [
    PublicationComponent,
    PublicationListComponent
  ]
})
export class PublicationModule { }

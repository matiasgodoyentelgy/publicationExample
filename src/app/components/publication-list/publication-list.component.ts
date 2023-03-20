import { Component } from '@angular/core';
import { PublicationModel } from 'src/app/model/PublicationModel';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent {
  
  public publicationList: PublicationModel[];
  public validationDate = new Date(2000,1,1);

  constructor(private _publicationService: PublicationService) {
    this.publicationList = _publicationService.getPublicationList();
  }
}

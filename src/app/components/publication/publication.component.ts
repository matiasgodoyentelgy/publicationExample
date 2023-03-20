import { Component, Input } from '@angular/core';
import { PublicationModel } from 'src/app/model/PublicationModel';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent {
  @Input() publication: PublicationModel;
  public numero : number;

  constructor(){
    this.numero = 123;
  }


}

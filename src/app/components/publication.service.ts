import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicationModel } from '../model/PublicationModel';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  public publicationList: PublicationModel[] = 
  [
    {title : 'Harry Potter',
    number : 6,
    description : 'Saga de Magia',
    photo  : 'https://m.media-amazon.com/images/I/61jURwOcTbL._SX498_BO1,204,203,200_.jpg',
    publicationDate : new Date(2001,6,12)},
    {title : 'El señor de los anillos',
    number : 3,
    description : 'Novelas de la Edad media',
    photo  : 'https://m.media-amazon.com/images/I/41PiLJMCmiL._SX507_BO1,204,203,200_.jpg',
    publicationDate : new Date(1980,12,15)},
    {title : 'Animales Fantasticos',
    number : 1,
    description : 'Saga de Magia',
    photo  : 'https://m.media-amazon.com/images/I/51D60EdIPtL.jpg',
    publicationDate : new Date(2015,2,2)},
  ];


  constructor() { }

  public getPublicationList() : PublicationModel[] {
    return this.publicationList;
  }

}

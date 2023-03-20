import { Component } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { PublicationModel } from './model/PublicationModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hola Mundo'

  public pubiclation : PublicationModel;

  public clickMe():void{
    debugger;
  }
}

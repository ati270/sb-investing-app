import { Injectable } from '@angular/core';
import { PenzugyiAdatok } from 'src/app/models/uj-befektetes-models/penzugyi-adatok/penzugyi-adatok.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PenzugyiAdatokService {

  penzugyiAdatok: PenzugyiAdatok;

  constructor() { }

  createPenzugyiAdatok(penzugyiAdatok: any[]){
      this.penzugyiAdatok = new PenzugyiAdatok(penzugyiAdatok);
  }

  getPenzugyiAdatok(): Observable<PenzugyiAdatok> {
      return of(this.penzugyiAdatok);
  }

}

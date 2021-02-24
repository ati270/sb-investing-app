import { Injectable } from '@angular/core';
import { VallalatPenzugyiElemzes } from 'src/app/models/uj-befektetes-models/vallalat-penz-elemzes/vallalat-penz-elemzes.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VallalatPenzElemzesService {

  vallalatPenzugyiElemzes: VallalatPenzugyiElemzes;

  constructor() { }

  createVallalatPenzugyiElemzes(
    vallalatPenzugyiElemzesJovedelmezoseg: any[],
    vallalatPenzugyiElemzesHatekonysag: any[],
    vallalatPenzugyiElemzesHitel: any[],
    vallalatPenzugyiElemzesPiaci: any[]
  ){
      this.vallalatPenzugyiElemzes = new VallalatPenzugyiElemzes(
        vallalatPenzugyiElemzesJovedelmezoseg,
        vallalatPenzugyiElemzesHatekonysag,
        vallalatPenzugyiElemzesHitel,
        vallalatPenzugyiElemzesPiaci
      );
  }

  getVallPenzugyiElemzes(): Observable<VallalatPenzugyiElemzes> {
      return of(this.vallalatPenzugyiElemzes);
  }
}

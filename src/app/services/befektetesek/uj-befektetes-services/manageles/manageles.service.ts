import { Injectable } from '@angular/core';
import { Manageles } from 'src/app/models/uj-befektetes-models/manageles/manageles.model';
import { Observable, of } from 'rxjs';
import { VallalatPenzugyiElemzes } from 'src/app/models/uj-befektetes-models/vallalat-penz-elemzes/vallalat-penz-elemzes.model';

@Injectable({
  providedIn: 'root'
})
export class ManagelesService {

  manageles: Manageles;

  constructor() { }

  createManageles(
    managelesBef: any[],
    managelesReszveny: any[],
    managelesStrat: any[],
    managelesBefMen: any[]
  ){
      this.manageles = new Manageles(
        managelesBef,
        managelesReszveny,
        managelesStrat,
        managelesBefMen
      );
  }

  getManageles(): Observable<Manageles> {
      return of(this.manageles);
  }
}

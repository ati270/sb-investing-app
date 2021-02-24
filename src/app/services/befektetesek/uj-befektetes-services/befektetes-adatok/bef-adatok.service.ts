import { Injectable } from '@angular/core';
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BefAdatokService {

  befAdatok: BefektetesAdatok;

  constructor() { }

  addBefAdat(vallalatNeve: string,reszvenyTicker: string,datum: string,agazat: string,strategia: string,status: string){
      this.befAdatok = new BefektetesAdatok(vallalatNeve, reszvenyTicker, datum, agazat, strategia, status);
  }

  getBefektetesAdatok(): Observable<BefektetesAdatok>{
    return of(this.befAdatok);
  }

}

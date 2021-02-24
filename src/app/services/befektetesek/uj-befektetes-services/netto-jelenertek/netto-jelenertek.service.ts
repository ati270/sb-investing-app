import { Injectable } from '@angular/core';
import { NettoJelenErtek } from 'src/app/models/uj-befektetes-models/netto-jelenertek/netto-jelenertek.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NettoJelenertekService {

  nettoJelenErtek: NettoJelenErtek;

  constructor() { }

  createNettoJelenErtek(nettoJelenErtek: any[]){
      this.nettoJelenErtek = new NettoJelenErtek(nettoJelenErtek);
  }

  getNettoJelenErtek(): Observable<NettoJelenErtek> {
      return of(this.nettoJelenErtek);
  }
}

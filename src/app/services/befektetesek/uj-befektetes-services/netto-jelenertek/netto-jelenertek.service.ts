import { Injectable } from '@angular/core';
import { NettoJelenErtek } from 'src/app/models/uj-befektetes-models/netto-jelenertek/netto-jelenertek.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NettoJelenertekService {

  nettoJelenErtek: NettoJelenErtek;
  private updatedAdatok: NettoJelenErtek;

  constructor() { }

  createNettoJelenErtek(
    befOsszeg: number,
    penznem: string,
    arfolyam: number,
    csucsKimenet: number,
    csucsVal: number,
    celarKimenet: number,
    celarVal: number,
    celarFelKimenet: number,
    celarFelVal: number,
    aljKimenet: number,
    aljVal: number,
    melyKimenet: number,
    melyVal: number,
    csodKimenet: number,
    csodVal: number
  ){
      this.nettoJelenErtek = new NettoJelenErtek(
        befOsszeg,penznem,arfolyam,csucsKimenet,csucsVal,celarKimenet,celarVal,celarFelKimenet,celarFelVal,aljKimenet,aljVal,melyKimenet,
        melyVal,csodKimenet,csodVal
      );
  }

  getNettoJelenErtek(): Observable<NettoJelenErtek> {
      return of(this.nettoJelenErtek);
  }

  loadNettoJelenertek(nettoJelenertek: NettoJelenErtek){
    this.updatedAdatok = nettoJelenertek;
  }


    /**
     * Getter $updatedAdatok
     * @return {NettoJelenErtek}
     */
	public get $updatedAdatok(): NettoJelenErtek {
		return this.updatedAdatok;
	}

    /**
     * Setter $updatedAdatok
     * @param {NettoJelenErtek} value
     */
	public set $updatedAdatok(value: NettoJelenErtek) {
		this.updatedAdatok = value;
	}

}

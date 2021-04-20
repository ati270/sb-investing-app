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

  createNettoJelenErtek(nettoJelenErtek: any[]){
      this.nettoJelenErtek = new NettoJelenErtek(nettoJelenErtek);
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

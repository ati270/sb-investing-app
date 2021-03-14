import { BefektetesAdatok } from './../../../../models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';

@Injectable({
  providedIn: 'root'
})
export class BefAdatokService {

  befAdatok: BefektetesAdatok;
  private updatedAdatok: BefektetesAdatok;

  constructor() { }

  addBefAdat(vallalatNeve: string,reszvenyTicker: string,datum: string,agazat: string,strategia: string,status: string){
      this.befAdatok = new BefektetesAdatok(vallalatNeve, reszvenyTicker, datum, agazat, strategia, status);
  }


  loadBefAdatok(befAdatok: BefektetesAdatok){

    this.updatedAdatok = befAdatok;

  }



  getBefektetesAdatok(): Observable<BefektetesAdatok>{
    return of(this.befAdatok);
  }


    /**
     * Getter $updatedAdatok
     * @return {BefektetesAdatok}
     */
	public get $updatedAdatok(): BefektetesAdatok {
		return this.updatedAdatok;
	}

    /**
     * Setter $updatedAdatok
     * @param {BefektetesAdatok} value
     */
	public set $updatedAdatok(value: BefektetesAdatok) {
		this.updatedAdatok = value;
	}



}

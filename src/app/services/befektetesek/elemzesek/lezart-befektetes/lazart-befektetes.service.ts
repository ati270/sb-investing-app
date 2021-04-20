import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/components/store/reszveny/state';
import { ElemzesTipusok } from 'src/app/components/utilities/reszveny-utilities.model';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';

@Injectable({
  providedIn: 'root'
})
export class LezartBefektetesService {

  private ujReszvenyek: UjReszveny[] = [];
  private countLezart: number = 0;

  constructor(private store: Store<AppState>) { }

  getStoreValues() {
    let allItems = this.store.select(store => store.reszvenyek);
    this.ujReszvenyek = [];
    this.countLezart = 0;
    allItems.subscribe(item => {
      for (let it of item) {
        if(it.$befektetesAdatok.$status === ElemzesTipusok.LEZART_BEFEKTETESEK){
          this.ujReszvenyek.push(it);
        }
        console.log(it.$befektetesAdatok.$status);
      }
    });

    this.countLezart = this.ujReszvenyek.length;

  }


    /**
     * Getter $ujReszvenyek
     * @return {UjReszveny[] }
     */
	public get $ujReszvenyek(): UjReszveny[]  {
		return this.ujReszvenyek;
	}

    /**
     * Getter $countLezart
     * @return {number }
     */
	public get $countLezart(): number  {
		return this.countLezart;
	}

    /**
     * Setter $ujReszvenyek
     * @param {UjReszveny[] } value
     */
	public set $ujReszvenyek(value: UjReszveny[] ) {
		this.ujReszvenyek = value;
	}

    /**
     * Setter $countLezart
     * @param {number } value
     */
	public set $countLezart(value: number ) {
		this.countLezart = value;
	}

}


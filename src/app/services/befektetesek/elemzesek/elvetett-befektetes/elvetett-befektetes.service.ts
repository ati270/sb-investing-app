import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/components/store/reszveny/state';
import { ElemzesTipusok } from 'src/app/components/utilities/reszveny-utilities.model';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';

@Injectable({
  providedIn: 'root'
})
export class ElvetettBefektetesService {

  private ujReszvenyek: UjReszveny[] = [];
  private countElvetett: number = 0;

  constructor(private store: Store<AppState>) { }

  getStoreValues() {
    let allItems = this.store.select(store => store.reszvenyek);
    this.ujReszvenyek = [];
    this.countElvetett = 0;
    allItems.subscribe(item => {
      for (let it of item) {
        if(it.$befektetesAdatok.$status === ElemzesTipusok.ELVETETT_BEFEKTETESEK){
          this.ujReszvenyek.push(it);
        }
        console.log(it.$befektetesAdatok.$status);
      }
    });

    this.countElvetett = this.ujReszvenyek.length;

  }


    /**
     * Getter $ujReszvenyek
     * @return {UjReszveny[] }
     */
	public get $ujReszvenyek(): UjReszveny[]  {
		return this.ujReszvenyek;
	}



    /**
     * Setter $ujReszvenyek
     * @param {UjReszveny[] } value
     */
	public set $ujReszvenyek(value: UjReszveny[] ) {
		this.ujReszvenyek = value;
	}


    /**
     * Getter $countElvetett
     * @return {number }
     */
	public get $countElvetett(): number  {
		return this.countElvetett;
	}

    /**
     * Setter $countElvetett
     * @param {number } value
     */
	public set $countElvetett(value: number ) {
		this.countElvetett = value;
	}

}

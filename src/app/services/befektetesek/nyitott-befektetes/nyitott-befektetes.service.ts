import { Injectable } from '@angular/core';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { BefektetesService } from '../befektetes/befektetes.service';
import { Observable, of } from 'rxjs';
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/components/store/reszveny/state';
import { ElemzesTipusok } from 'src/app/components/utilities/reszveny-utilities.model';

@Injectable({
  providedIn: 'root'
})
export class NyitottBefektetesService {

  private ujReszvenyek: UjReszveny[] = [];
  private countNyitott: number = 0;

  constructor(private store: Store<AppState>) {

   }

   getStoreValues() {
    let allItems = this.store.select(store => store.reszvenyek);
    this.ujReszvenyek = [];
    this.countNyitott = 0;
    allItems.subscribe(item => {
      for (let it of item) {
        if(it.$befektetesAdatok.$status === ElemzesTipusok.NYITOTT_BEFEKTETESEK){
          this.ujReszvenyek.push(it);
        }
        console.log(it.$befektetesAdatok.$status);
      }
    });

    this.countNyitott = this.ujReszvenyek.length;

  }


    /**
     * Getter $ujReszvenyek
     * @return {UjReszveny[] }
     */
	public get $ujReszvenyek(): UjReszveny[]  {
		return this.ujReszvenyek;
	}

    /**
     * Getter $countNyitott
     * @return {number }
     */
	public get $countNyitott(): number  {
		return this.countNyitott;
	}

    /**
     * Setter $ujReszvenyek
     * @param {UjReszveny[] } value
     */
	public set $ujReszvenyek(value: UjReszveny[] ) {
		this.ujReszvenyek = value;
	}

    /**
     * Setter $countNyitott
     * @param {number } value
     */
	public set $countNyitott(value: number ) {
		this.countNyitott = value;
	}


}

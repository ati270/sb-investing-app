import { UjBefektetesService } from 'src/app/services/befektetesek/uj-befektetes-services/uj-befektetes/uj-befektetes.service';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/components/store/reszveny/state';
import { ElemzesTipusok } from 'src/app/components/utilities/reszveny-utilities.model';

@Injectable({
  providedIn: 'root'
})
export class FolyamatbanLevoElemzesService {

  private ujReszvenyek: UjReszveny[] = [];
  private countOfFolyamatban: number = 0;


  constructor(private store: Store<AppState>, private ujBefektetesService: UjBefektetesService) { }

  getStoreValues() {
    let allItems = this.store.select(store => store.reszvenyek);
    this.ujReszvenyek = [];
    this.$countOfFolyamatban = 0;
    allItems.subscribe(item => {
      for (let it of item) {
        if(it.$befektetesAdatok.$status === ElemzesTipusok.FOLYAMATBAN_LEVO_ELEMZESEK){
          this.ujReszvenyek.push(it);
        }
        console.log(it.$befektetesAdatok.$status);
      }
    });

    this.countOfFolyamatban = this.ujReszvenyek.length;

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
     * Getter $countOfFolyamatban
     * @return {number }
     */
	public get $countOfFolyamatban(): number  {
		return this.countOfFolyamatban;
	}

    /**
     * Setter $countOfFolyamatban
     * @param {number } value
     */
	public set $countOfFolyamatban(value: number ) {
		this.countOfFolyamatban = value;
	}



}

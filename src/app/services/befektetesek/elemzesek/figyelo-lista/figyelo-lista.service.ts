import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/components/store/reszveny/state';
import { ElemzesTipusok } from 'src/app/components/utilities/reszveny-utilities.model';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';

@Injectable({
  providedIn: 'root'
})
export class FigyeloListaService {

  private ujReszvenyek: UjReszveny[] = [];
  private countFigyelo: number = 0;

  constructor(private store: Store<AppState>) { }

  getStoreValues() {
    let allItems = this.store.select(store => store.reszvenyek);
    this.ujReszvenyek = [];
    this.countFigyelo = 0;
    allItems.subscribe(item => {
      for (let it of item) {
        if(it.$befektetesAdatok.status === ElemzesTipusok.FIGYELO_LISTA){
          this.ujReszvenyek.push(it);
        }
        console.log(it.$befektetesAdatok.status);
      }
    });

    this.countFigyelo = this.ujReszvenyek.length;

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
     * Setter $countFigyelo
     * @param {number } value
     */
	public set $countFigyelo(value: number ) {
		this.countFigyelo = value;
	}

    /**
     * Getter $countFigyelo
     * @return {number }
     */
	public get $countFigyelo(): number  {
		return this.countFigyelo;
	}



}

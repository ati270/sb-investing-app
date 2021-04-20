import { Injectable } from '@angular/core';
import { Manageles } from 'src/app/models/uj-befektetes-models/manageles/manageles.model';
import { Observable, of } from 'rxjs';
import { VallalatPenzugyiElemzes } from 'src/app/models/uj-befektetes-models/vallalat-penz-elemzes/vallalat-penz-elemzes.model';
import { Store } from '@ngrx/store';
import { AppKotesState } from 'src/app/components/store/reszveny/state';

@Injectable({
  providedIn: 'root'
})
export class ManagelesService {

  manageles: Manageles;
  private kotesek: number[] = [];
  private updatedAdatok: Manageles;

  constructor(private store: Store<AppKotesState>) { }

  createManageles(
    managelesBef: any[],
    managelesReszveny: any[],
    managelesStrat: any[],
    managelesBefMen: any[]
  ){
      this.manageles = new Manageles(
        managelesBef,
        managelesReszveny,
        managelesStrat,
        managelesBefMen
      );
  }

  getManageles(): Observable<Manageles> {
      return of(this.manageles);
  }

  loadManageles(manageles: Manageles){
    this.updatedAdatok = manageles;
  }


 getStoreValues() {
  this.kotesek = [];
  let allItems = new Observable<Array<number>>();
  allItems = this.store.select(store => store.kotesek);
    allItems.subscribe(item => {
     this.kotesek = item;
    });

    console.log(this.kotesek);
  }



    /**
     * Setter $updatedAdatok
     * @param {Manageles} value
     */
	public set $updatedAdatok(value: Manageles) {
		this.updatedAdatok = value;
	}

    /**
     * Getter $updatedAdatok
     * @return {Manageles}
     */
	public get $updatedAdatok(): Manageles {
		return this.updatedAdatok;
	}


    /**
     * Getter $kotesek
     * @return {number[] }
     */
	public get $kotesek(): number[]  {
		return this.kotesek;
	}

    /**
     * Setter $kotesek
     * @param {number[] } value
     */
	public set $kotesek(value: number[] ) {
		this.kotesek = value;
	}



}

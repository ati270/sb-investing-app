import { Injectable } from '@angular/core';
import { VallalatPenzugyiElemzes } from 'src/app/models/uj-befektetes-models/vallalat-penz-elemzes/vallalat-penz-elemzes.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VallalatPenzElemzesService {

  vallalatPenzugyiElemzes: VallalatPenzugyiElemzes;
  private updatedAdatok: VallalatPenzugyiElemzes;

  constructor() { }

  createVallalatPenzugyiElemzes(
    vallalatPenzugyiElemzesJovedelmezoseg: any[],
    vallalatPenzugyiElemzesHatekonysag: any[],
    vallalatPenzugyiElemzesHitel: any[],
    vallalatPenzugyiElemzesPiaci: any[]
  ){
      this.vallalatPenzugyiElemzes = new VallalatPenzugyiElemzes(
        vallalatPenzugyiElemzesJovedelmezoseg,
        vallalatPenzugyiElemzesHatekonysag,
        vallalatPenzugyiElemzesHitel,
        vallalatPenzugyiElemzesPiaci
      );
  }

  getVallPenzugyiElemzes(): Observable<VallalatPenzugyiElemzes> {
      return of(this.vallalatPenzugyiElemzes);
  }

  loadVallalatPenzElemzes(vallPenzelemzes: VallalatPenzugyiElemzes){
    this.updatedAdatok = vallPenzelemzes;
  }


    /**
     * Getter $updatedAdatok
     * @return {VallalatPenzugyiElemzes}
     */
	public get $updatedAdatok(): VallalatPenzugyiElemzes {
		return this.updatedAdatok;
	}

    /**
     * Setter $updatedAdatok
     * @param {VallalatPenzugyiElemzes} value
     */
	public set $updatedAdatok(value: VallalatPenzugyiElemzes) {
		this.updatedAdatok = value;
	}

}

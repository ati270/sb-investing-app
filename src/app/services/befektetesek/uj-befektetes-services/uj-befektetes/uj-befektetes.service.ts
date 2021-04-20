import { VallalatKockazatElemzes } from 'src/app/models/uj-befektetes-models/vallalat-vizsg-kriteriumok/vallalat-vizsg-kriteriumok.model';
import { MentalisElemzes } from 'src/app/models/uj-befektetes-models/mentalis-elemzes/mentalis-elemzes.model';
import { Manageles } from 'src/app/models/uj-befektetes-models/manageles/manageles.model';
import { NettoJelenErtek } from 'src/app/models/uj-befektetes-models/netto-jelenertek/netto-jelenertek.model';
import { CelarMeghatarozas } from 'src/app/models/uj-befektetes-models/celar-meghatarozas/celar-meghatarozas.model';
import { VallalatPenzugyiElemzes } from 'src/app/models/uj-befektetes-models/vallalat-penz-elemzes/vallalat-penz-elemzes.model';
import { PenzugyiAdatok } from 'src/app/models/uj-befektetes-models/penzugyi-adatok/penzugyi-adatok.model';
import { Injectable } from '@angular/core';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { Observable, of, Subject } from 'rxjs';
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';

@Injectable({
  providedIn: 'root'
})
export class UjBefektetesService {

  private ujReszveny: UjReszveny; // 1 db részvény aminek van egy elem listája
  private countFolyamatban: number = 0;
  private visszatoltottReszveny: UjReszveny;
  private count: number = 0;
  private isSavedActualElemzes: boolean;
  constructor() {
    this.$ujReszveny = new UjReszveny();
  }

  loadMentettElemzes(isSavedActualElemzes: boolean){
    this.isSavedActualElemzes = isSavedActualElemzes;
  }

  /*addAllItems(befadatok?: BefektetesAdatok, mentalisElemzes?: MentalisElemzes, vallKockEl?: VallalatKockazatElemzes, penzugyiAdatok?: PenzugyiAdatok, vallalatPenzEl?: VallalatPenzugyiElemzes,
    celarMeghat?: CelarMeghatarozas, nettoJelenErtek?: NettoJelenErtek, manageles?: Manageles) {
    this.$ujReszveny.$befektetesAdatok = befadatok;
    this.$ujReszveny.$mentalisElemzes = mentalisElemzes;
    this.$ujReszveny.$vallalatKockazatElemzes = vallKockEl;
    this.$ujReszveny.$penzugyiAdatok = penzugyiAdatok;
    this.$ujReszveny.$vallalatPenzugyiElemzes = vallalatPenzEl;
    this.$ujReszveny.$celarMeghatarozas = celarMeghat;
    this.$ujReszveny.$nettoJelenertek = nettoJelenErtek;
    this.$ujReszveny.$manageles = manageles;

  }*/

  addOneItem(item: any) {
    switch (true) {
      case item instanceof BefektetesAdatok:
        this.ujReszveny.$befektetesAdatok = item;
        break;
      case item instanceof MentalisElemzes:
        this.ujReszveny.$mentalisElemzes = item;
        break;
      case item instanceof VallalatKockazatElemzes:
        this.ujReszveny.$vallalatKockazatElemzes = item;
        break;
      case item instanceof PenzugyiAdatok:
        this.ujReszveny.$penzugyiAdatok = item;
        break;
      case item instanceof VallalatPenzugyiElemzes:
        this.ujReszveny.$vallalatPenzugyiElemzes = item;
        break;
      case item instanceof CelarMeghatarozas:
        this.ujReszveny.$celarMeghatarozas = item;
        break;
      case item instanceof NettoJelenErtek:
        this.ujReszveny.$nettoJelenertek = item;
        break;
      case item instanceof Manageles:
        this.ujReszveny.$manageles = item;
        break;

      default:
        break;
    }
  }

  loadReszveny(ujReszveny: UjReszveny){
      this.visszatoltottReszveny = ujReszveny;
      this.count = this.visszatoltottReszveny.$haladas;
      this.$isSavedActualElemzes = true;
  }

    /**
     * Setter $ujReszveny
     * @param {UjReszveny} value
     */
	public set $ujReszveny(value: UjReszveny) {
		this.ujReszveny = value;
	}


    /**
     * Getter $ujReszveny
     * @return {UjReszveny}
     */
	public get $ujReszveny(): UjReszveny {
		return this.ujReszveny;
	}


    /**
     * Getter $countFolyamatban
     * @return {number }
     */
	public get $countFolyamatban(): number  {
		return this.countFolyamatban;
	}

    /**
     * Setter $countFolyamatban
     * @param {number } value
     */
	public set $countFolyamatban(value: number ) {
		this.countFolyamatban = value;
	}


    /**
     * Getter $isSavedActualElemzes
     * @return {boolean}
     */
	public get $isSavedActualElemzes(): boolean {
		return this.isSavedActualElemzes;
	}

    /**
     * Setter $isSavedActualElemzes
     * @param {boolean} value
     */
	public set $isSavedActualElemzes(value: boolean) {
		this.isSavedActualElemzes = value;
	}


    /**
     * Getter $count
     * @return {number }
     */
	public get $count(): number  {
		return this.count;
	}

    /**
     * Setter $count
     * @param {number } value
     */
	public set $count(value: number ) {
		this.count = value;
	}


}

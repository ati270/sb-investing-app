import { BefektetesAdatok } from "../befektetes-adatok/bef-adatok.model";
import { CelarMeghatarozas } from "../celar-meghatarozas/celar-meghatarozas.model";
import { Manageles } from "../manageles/manageles.model";
import { MentalisElemzes } from "../mentalis-elemzes/mentalis-elemzes.model";
import { NettoJelenErtek } from "../netto-jelenertek/netto-jelenertek.model";
import { PenzugyiAdatok } from "../penzugyi-adatok/penzugyi-adatok.model";
import { VallalatPenzugyiElemzes } from "../vallalat-penz-elemzes/vallalat-penz-elemzes.model";
import { VallalatKockazatElemzes } from "../vallalat-vizsg-kriteriumok/vallalat-vizsg-kriteriumok.model";

export class UjReszveny {
  private id: number;
  private befektetesAdatok: BefektetesAdatok;
  private mentalisElemzes: MentalisElemzes;
  private vallalatKockazatElemzes: VallalatKockazatElemzes;
  private penzugyiAdatok: PenzugyiAdatok;
  private vallalatPenzugyiElemzes: VallalatPenzugyiElemzes;
  private celarMeghatarozas: CelarMeghatarozas;
  private nettoJelenertek: NettoJelenErtek;
  private manageles: Manageles;
  //private ujReszvenyElemekList: any[];

  constructor() {
    this.$id = Math.floor(Math.random() * 1000) + 1;
  }


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}



  /*public get $ujReszvenyElemekList(): any[] {
    return this.ujReszvenyElemekList;
  }


  public set $ujReszvenyElemekList(value: any[]) {
    this.ujReszvenyElemekList = value;
  }*/



    /**
     * Getter $befektetesAdatok
     * @return {BefektetesAdatok}
     */
	public get $befektetesAdatok(): BefektetesAdatok {
		return this.befektetesAdatok;
	}

    /**
     * Getter $mentalisElemzes
     * @return {MentalisElemzes}
     */
	public get $mentalisElemzes(): MentalisElemzes {
		return this.mentalisElemzes;
	}

    /**
     * Getter $vallalatKockazatElemzes
     * @return {VallalatKockazatElemzes}
     */
	public get $vallalatKockazatElemzes(): VallalatKockazatElemzes {
		return this.vallalatKockazatElemzes;
	}

    /**
     * Getter $penzugyiAdatok
     * @return {PenzugyiAdatok}
     */
	public get $penzugyiAdatok(): PenzugyiAdatok {
		return this.penzugyiAdatok;
	}

    /**
     * Getter $vallalatPenzugyiElemzes
     * @return {VallalatPenzugyiElemzes}
     */
	public get $vallalatPenzugyiElemzes(): VallalatPenzugyiElemzes {
		return this.vallalatPenzugyiElemzes;
	}

    /**
     * Getter $celarMeghatarozas
     * @return {CelarMeghatarozas}
     */
	public get $celarMeghatarozas(): CelarMeghatarozas {
		return this.celarMeghatarozas;
	}

    /**
     * Getter $nettoJelenertek
     * @return {NettoJelenErtek}
     */
	public get $nettoJelenertek(): NettoJelenErtek {
		return this.nettoJelenertek;
	}

    /**
     * Getter $manageles
     * @return {Manageles}
     */
	public get $manageles(): Manageles {
		return this.manageles;
	}

    /**
     * Setter $befektetesAdatok
     * @param {BefektetesAdatok} value
     */
	public set $befektetesAdatok(value: BefektetesAdatok) {
		this.befektetesAdatok = value;
	}

    /**
     * Setter $mentalisElemzes
     * @param {MentalisElemzes} value
     */
	public set $mentalisElemzes(value: MentalisElemzes) {
		this.mentalisElemzes = value;
	}

    /**
     * Setter $vallalatKockazatElemzes
     * @param {VallalatKockazatElemzes} value
     */
	public set $vallalatKockazatElemzes(value: VallalatKockazatElemzes) {
		this.vallalatKockazatElemzes = value;
	}

    /**
     * Setter $penzugyiAdatok
     * @param {PenzugyiAdatok} value
     */
	public set $penzugyiAdatok(value: PenzugyiAdatok) {
		this.penzugyiAdatok = value;
	}

    /**
     * Setter $vallalatPenzugyiElemzes
     * @param {VallalatPenzugyiElemzes} value
     */
	public set $vallalatPenzugyiElemzes(value: VallalatPenzugyiElemzes) {
		this.vallalatPenzugyiElemzes = value;
	}

    /**
     * Setter $celarMeghatarozas
     * @param {CelarMeghatarozas} value
     */
	public set $celarMeghatarozas(value: CelarMeghatarozas) {
		this.celarMeghatarozas = value;
	}

    /**
     * Setter $nettoJelenertek
     * @param {NettoJelenErtek} value
     */
	public set $nettoJelenertek(value: NettoJelenErtek) {
		this.nettoJelenertek = value;
	}

    /**
     * Setter $manageles
     * @param {Manageles} value
     */
	public set $manageles(value: Manageles) {
		this.manageles = value;
	}



}

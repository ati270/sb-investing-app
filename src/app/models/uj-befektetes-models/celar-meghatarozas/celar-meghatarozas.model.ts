export class CelarMeghatarozas{

    private konkurenciaMutato: number;
    private konyvSzerintiErtek: number;
    private elvartHozam: number;

    constructor(
        konkurenciaMutato: number,
        konyvSzerintiErtek: number,
        elvartHozam: number
    ){
        this.konkurenciaMutato = konkurenciaMutato;
        this.elvartHozam = elvartHozam;
        this.konyvSzerintiErtek = konyvSzerintiErtek;
    }


    /**
     * Getter $konkurenciaMutato
     * @return {number}
     */
	public get $konkurenciaMutato(): number {
		return this.konkurenciaMutato;
	}

    /**
     * Getter $konyvSzerintiErtek
     * @return {number}
     */
	public get $konyvSzerintiErtek(): number {
		return this.konyvSzerintiErtek;
	}

    /**
     * Getter $elvartHozam
     * @return {number}
     */
	public get $elvartHozam(): number {
		return this.elvartHozam;
    }
    

    /**
     * Setter $konkurenciaMutato
     * @param {number} value
     */
	public set $konkurenciaMutato(value: number) {
		this.konkurenciaMutato = value;
	}

    /**
     * Setter $konyvSzerintiErtek
     * @param {number} value
     */
	public set $konyvSzerintiErtek(value: number) {
		this.konyvSzerintiErtek = value;
	}

    /**
     * Setter $elvartHozam
     * @param {number} value
     */
	public set $elvartHozam(value: number) {
		this.elvartHozam = value;
	}


}
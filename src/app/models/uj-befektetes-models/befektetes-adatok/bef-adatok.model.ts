export class BefektetesAdatok {

  private status: string;
  private vallalatNeve: string;
  private ticker: string;
  private datum: string;
  private agazat: string;
  private strategia: string;


    constructor(vallalatNeve: string,ticker: string,datum: string,agazat: string,strategia: string,status: string) {
      this.status = status;
      this.agazat = agazat;
      this.strategia = strategia;
      this.vallalatNeve = vallalatNeve;
      this.datum = datum;
      this.ticker = ticker;
    }



    /**
     * Getter $status
     * @return {string}
     */
	public get $status(): string {
		return this.status;
	}

    /**
     * Setter $status
     * @param {string} value
     */
	public set $status(value: string) {
		this.status = value;
	}


    /**
     * Getter $vallalatNeve
     * @return {string}
     */
	public get $vallalatNeve(): string {
		return this.vallalatNeve;
	}

    /**
     * Getter $ticker
     * @return {string}
     */
	public get $ticker(): string {
		return this.ticker;
	}

    /**
     * Getter $datum
     * @return {string}
     */
	public get $datum(): string {
		return this.datum;
	}

    /**
     * Getter $agazat
     * @return {string}
     */
	public get $agazat(): string {
		return this.agazat;
	}

    /**
     * Getter $strategia
     * @return {string}
     */
	public get $strategia(): string {
		return this.strategia;
	}

    /**
     * Setter $vallalatNeve
     * @param {string} value
     */
	public set $vallalatNeve(value: string) {
		this.vallalatNeve = value;
	}

    /**
     * Setter $ticker
     * @param {string} value
     */
	public set $ticker(value: string) {
		this.ticker = value;
	}

    /**
     * Setter $datum
     * @param {string} value
     */
	public set $datum(value: string) {
		this.datum = value;
	}

    /**
     * Setter $agazat
     * @param {string} value
     */
	public set $agazat(value: string) {
		this.agazat = value;
	}

    /**
     * Setter $strategia
     * @param {string} value
     */
	public set $strategia(value: string) {
		this.strategia = value;
	}

}

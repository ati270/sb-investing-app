export class BefektetesAdatok {

  private status: string;

    constructor(
        public vallalatNeve: string,
        public reszvenyTicker: string,
        public datum: string,
        public agazat: string,
        public strategia: string,
        status: string
    ) {
      this.status = status;
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


}

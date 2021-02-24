export class UjCel{
   private celMegnevezes: string;
   private  celOsszeg: number;
   private  celFutamido: number;
   private  megtakaritasKezdete: string;
   private  szuksegesMegtakaritas: number;   

    constructor(){
               
    }


    /**
     * Getter $celMegnevezes
     * @return {string}
     */
	public get $celMegnevezes(): string {
		return this.celMegnevezes;
	}

    /**
     * Getter $celOsszeg
     * @return {number}
     */
	public get $celOsszeg(): number {
		return this.celOsszeg;
	}

    /**
     * Getter $celFutamido
     * @return {number}
     */
	public get $celFutamido(): number {
		return this.celFutamido;
	}

    /**
     * Getter $megtakaritasKezdete
     * @return {string}
     */
	public get $megtakaritasKezdete(): string {
		return this.megtakaritasKezdete;
     }
     

    /**
     * Getter $szuksegesMegtakaritas
     * @return {number}
     */
	public get $szuksegesMegtakaritas(): number {
		return this.szuksegesMegtakaritas;
	}

    /**
     * Setter $szuksegesMegtakaritas
     * @param {number} value
     */
	public set $szuksegesMegtakaritas(value: number) {
		this.szuksegesMegtakaritas = value;
	}


    /**
     * Setter $celMegnevezes
     * @param {string} value
     */
	public set $celMegnevezes(value: string) {
		this.celMegnevezes = value;
	}

    /**
     * Setter $celOsszeg
     * @param {number} value
     */
	public set $celOsszeg(value: number) {
		this.celOsszeg = value;
	}

    /**
     * Setter $celFutamido
     * @param {number} value
     */
	public set $celFutamido(value: number) {
		this.celFutamido = value;
	}

    /**
     * Setter $megtakaritasKezdete
     * @param {string} value
     */
	public set $megtakaritasKezdete(value: string) {
		this.megtakaritasKezdete = value;
	}


}
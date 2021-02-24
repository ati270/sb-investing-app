export class MentalisElemzes{
    
    private fokozott: string;
    private fokozottElv: boolean[]; 

    private kavargo: string;
    private kavargoElv: boolean[]; 

    private indokolatlan: string;
    private indokolatlanElv: boolean[]; 

    private kellemetlen: string;
    private kellemetlenElv: boolean[]; 

    private ellensegesseg: string;
    private ellensegessegElv: boolean[]; 

    private onbizalom: string;
    private onbizalomElv: boolean[]; 

    private felelem : string;
    private felelemElv: boolean[]; 

    private kimerultseg: string;
    private kimerultsegElv: boolean[]; 

    private introvertalt: string;
    private introvertaltElv: boolean[]; 

    private szomorusag: string;
    private szomorusagElv: boolean[]; 


    constructor(fokozott: string, fokozottElv: boolean[],
        kavargo: string, kavargoElv: boolean[],
        indokolatlan: string, indokolatlanElv: boolean[],
        kellemetlen: string, kellemetlenElv: boolean[],
        ellensegesseg: string, ellensegessegElv: boolean[],
        onbizalom: string, onbizalomElv: boolean[],
        felelem: string, felelemElv: boolean[],
        kimerultseg: string, kimerultsegElv: boolean[],
        introvertalt: string, introvertaltElv: boolean[],
        szomorusag: string, szomorusagElv: boolean[],
        ){
            this.fokozott = fokozott;
            this.fokozottElv = fokozottElv;
            this.kavargo = kavargo;
            this.kavargoElv = kavargoElv;
            this.indokolatlan = indokolatlan;
            this.indokolatlanElv = indokolatlanElv;
            this.kellemetlen = kellemetlen;
            this.kellemetlenElv = kellemetlenElv;
            this.ellensegesseg = ellensegesseg;
            this.ellensegessegElv = ellensegessegElv;
            this.onbizalom = onbizalom;
            this.onbizalomElv = onbizalomElv;
            this.felelem = felelem;
            this.felelemElv = felelemElv;
            this.kimerultseg = kimerultseg;
            this.kimerultsegElv = kimerultsegElv;
            this.introvertalt = introvertalt;
            this.introvertaltElv = introvertaltElv;
            this.szomorusag = szomorusag;
            this.szomorusagElv = szomorusagElv;

        }

    // Getters

    /**
     * Getter $fokozott
     * @return {string}
     */
	public get $fokozott(): string {
		return this.fokozott;
	}

    /**
     * Getter $fokozottElv
     * @return {boolean[]}
     */
	public get $fokozottElv(): boolean[] {
		return this.fokozottElv;
	}

    /**
     * Getter $kavargo
     * @return {string}
     */
	public get $kavargo(): string {
		return this.kavargo;
	}

    /**
     * Getter $kavargoElv
     * @return {boolean[]}
     */
	public get $kavargoElv(): boolean[] {
		return this.kavargoElv;
	}

    /**
     * Getter $indokolatlan
     * @return {string}
     */
	public get $indokolatlan(): string {
		return this.indokolatlan;
	}

    /**
     * Getter $indokolatlanElv
     * @return {boolean[]}
     */
	public get $indokolatlanElv(): boolean[] {
		return this.indokolatlanElv;
	}

    /**
     * Getter $kellemetlen
     * @return {string}
     */
	public get $kellemetlen(): string {
		return this.kellemetlen;
	}

    /**
     * Getter $kellemetlenElv
     * @return {boolean[]}
     */
	public get $kellemetlenElv(): boolean[] {
		return this.kellemetlenElv;
	}

    /**
     * Getter $ellensegesseg
     * @return {string}
     */
	public get $ellensegesseg(): string {
		return this.ellensegesseg;
	}

    /**
     * Getter $ellensegessegElv
     * @return {boolean[]}
     */
	public get $ellensegessegElv(): boolean[] {
		return this.ellensegessegElv;
	}

    /**
     * Getter $onbizalom
     * @return {string}
     */
	public get $onbizalom(): string {
		return this.onbizalom;
	}

    /**
     * Getter $onbizalomElv
     * @return {boolean[]}
     */
	public get $onbizalomElv(): boolean[] {
		return this.onbizalomElv;
	}

    /**
     * Getter $felelem
     * @return {string}
     */
	public get $felelem(): string {
		return this.felelem;
	}

    /**
     * Getter $felelemElv
     * @return {boolean[]}
     */
	public get $felelemElv(): boolean[] {
		return this.felelemElv;
	}

    /**
     * Getter $kimerultseg
     * @return {string}
     */
	public get $kimerultseg(): string {
		return this.kimerultseg;
	}

    /**
     * Getter $kimerultsegElv
     * @return {boolean[]}
     */
	public get $kimerultsegElv(): boolean[] {
		return this.kimerultsegElv;
	}

    /**
     * Getter $introvertalt
     * @return {string}
     */
	public get $introvertalt(): string {
		return this.introvertalt;
	}

    /**
     * Getter $introvertaltElv
     * @return {boolean[]}
     */
	public get $introvertaltElv(): boolean[] {
		return this.introvertaltElv;
	}

    /**
     * Getter $szomorusag
     * @return {string}
     */
	public get $szomorusag(): string {
		return this.szomorusag;
	}

    /**
     * Getter $szomorusagElv
     * @return {boolean[]}
     */
	public get $szomorusagElv(): boolean[] {
		return this.szomorusagElv;
    }
    
    // Setters

    /**
     * Setter $fokozott
     * @param {string} value
     */
	public set $fokozott(value: string) {
		this.fokozott = value;
	}

    /**
     * Setter $fokozottElv
     * @param {boolean[]} value
     */
	public set $fokozottElv(value: boolean[]) {
		this.fokozottElv = value;
	}

    /**
     * Setter $kavargo
     * @param {string} value
     */
	public set $kavargo(value: string) {
		this.kavargo = value;
	}

    /**
     * Setter $kavargoElv
     * @param {boolean[]} value
     */
	public set $kavargoElv(value: boolean[]) {
		this.kavargoElv = value;
	}

    /**
     * Setter $indokolatlan
     * @param {string} value
     */
	public set $indokolatlan(value: string) {
		this.indokolatlan = value;
	}

    /**
     * Setter $indokolatlanElv
     * @param {boolean[]} value
     */
	public set $indokolatlanElv(value: boolean[]) {
		this.indokolatlanElv = value;
	}

    /**
     * Setter $kellemetlen
     * @param {string} value
     */
	public set $kellemetlen(value: string) {
		this.kellemetlen = value;
	}

    /**
     * Setter $kellemetlenElv
     * @param {boolean[]} value
     */
	public set $kellemetlenElv(value: boolean[]) {
		this.kellemetlenElv = value;
	}

    /**
     * Setter $ellensegesseg
     * @param {string} value
     */
	public set $ellensegesseg(value: string) {
		this.ellensegesseg = value;
	}

    /**
     * Setter $ellensegessegElv
     * @param {boolean[]} value
     */
	public set $ellensegessegElv(value: boolean[]) {
		this.ellensegessegElv = value;
	}

    /**
     * Setter $onbizalom
     * @param {string} value
     */
	public set $onbizalom(value: string) {
		this.onbizalom = value;
	}

    /**
     * Setter $onbizalomElv
     * @param {boolean[]} value
     */
	public set $onbizalomElv(value: boolean[]) {
		this.onbizalomElv = value;
	}

    /**
     * Setter $felelem
     * @param {string} value
     */
	public set $felelem(value: string) {
		this.felelem = value;
	}

    /**
     * Setter $felelemElv
     * @param {boolean[]} value
     */
	public set $felelemElv(value: boolean[]) {
		this.felelemElv = value;
	}

    /**
     * Setter $kimerultseg
     * @param {string} value
     */
	public set $kimerultseg(value: string) {
		this.kimerultseg = value;
	}

    /**
     * Setter $kimerultsegElv
     * @param {boolean[]} value
     */
	public set $kimerultsegElv(value: boolean[]) {
		this.kimerultsegElv = value;
	}

    /**
     * Setter $introvertalt
     * @param {string} value
     */
	public set $introvertalt(value: string) {
		this.introvertalt = value;
	}

    /**
     * Setter $introvertaltElv
     * @param {boolean[]} value
     */
	public set $introvertaltElv(value: boolean[]) {
		this.introvertaltElv = value;
	}

    /**
     * Setter $szomorusag
     * @param {string} value
     */
	public set $szomorusag(value: string) {
		this.szomorusag = value;
	}

    /**
     * Setter $szomorusagElv
     * @param {boolean[]} value
     */
	public set $szomorusagElv(value: boolean[]) {
		this.szomorusagElv = value;
	}


}
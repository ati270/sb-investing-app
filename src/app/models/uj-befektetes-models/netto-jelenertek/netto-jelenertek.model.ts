export class NettoJelenErtek {
  private befOsszeg: number;
  private penznem: string;
  private arfolyam: number;
  private csucsKimenet: number;
  private csucsVal: number;
  private celarKimenet: number;
  private celarVal: number;
  private celarFelKimenet: number;
  private celarFelVal: number;
  private aljKimenet: number;
  private aljVal: number;
  private melyKimenet: number;
  private melyVal: number;
  private csodKimenet: number;
  private csodVal: number;

  constructor(
    befOsszeg: number,
    penznem: string,
    arfolyam: number,
    csucsKimenet: number,
    csucsVal: number,
    celarKimenet: number,
    celarVal: number,
    celarFelKimenet: number,
    celarFelVal: number,
    aljKimenet: number,
    aljVal: number,
    melyKimenet: number,
    melyVal: number,
    csodKimenet: number,
    csodVal: number
  ) {
    this.befOsszeg = befOsszeg;
    this.penznem = penznem;
    this.arfolyam = arfolyam;
    this.csucsKimenet = csucsKimenet;
    this.csucsVal = csucsVal;
    this.celarKimenet = celarKimenet;
    this.celarVal = celarVal;
    this.celarFelKimenet = celarFelKimenet;
    this.celarFelVal = celarFelVal;
    this.aljKimenet = aljKimenet;
    this.aljVal = aljVal;
    this.melyKimenet = melyKimenet;
    this.melyVal = melyVal;
    this.csodKimenet = csodKimenet;
    this.csodVal = csodVal;
  }


    /**
     * Getter $befOsszeg
     * @return {number}
     */
	public get $befOsszeg(): number {
		return this.befOsszeg;
	}

    /**
     * Getter $penznem
     * @return {number}
     */
	public get $penznem(): string {
		return this.penznem;
	}

    /**
     * Getter $arfolyam
     * @return {number}
     */
	public get $arfolyam(): number {
		return this.arfolyam;
	}

    /**
     * Getter $csucsKimenet
     * @return {number}
     */
	public get $csucsKimenet(): number {
		return this.csucsKimenet;
	}

    /**
     * Getter $csucsVal
     * @return {number}
     */
	public get $csucsVal(): number {
		return this.csucsVal;
	}

    /**
     * Getter $celarKimenet
     * @return {number}
     */
	public get $celarKimenet(): number {
		return this.celarKimenet;
	}

    /**
     * Getter $celarVal
     * @return {number}
     */
	public get $celarVal(): number {
		return this.celarVal;
	}

    /**
     * Getter $celarFelKimenet
     * @return {number}
     */
	public get $celarFelKimenet(): number {
		return this.celarFelKimenet;
	}

    /**
     * Getter $celarFelVal
     * @return {number}
     */
	public get $celarFelVal(): number {
		return this.celarFelVal;
	}

    /**
     * Getter $aljKimenet
     * @return {number}
     */
	public get $aljKimenet(): number {
		return this.aljKimenet;
	}

    /**
     * Getter $aljVal
     * @return {number}
     */
	public get $aljVal(): number {
		return this.aljVal;
	}

    /**
     * Getter $melyKimenet
     * @return {number}
     */
	public get $melyKimenet(): number {
		return this.melyKimenet;
	}

    /**
     * Getter $melyVal
     * @return {number}
     */
	public get $melyVal(): number {
		return this.melyVal;
	}

    /**
     * Getter $csodKimenet
     * @return {number}
     */
	public get $csodKimenet(): number {
		return this.csodKimenet;
	}

    /**
     * Getter $csodVal
     * @return {number}
     */
	public get $csodVal(): number {
		return this.csodVal;
	}

    /**
     * Setter $befOsszeg
     * @param {number} value
     */
	public set $befOsszeg(value: number) {
		this.befOsszeg = value;
	}

    /**
     * Setter $penznem
     * @param {number} value
     */
	public set $penznem(value: string) {
		this.penznem = value;
	}

    /**
     * Setter $arfolyam
     * @param {number} value
     */
	public set $arfolyam(value: number) {
		this.arfolyam = value;
	}

    /**
     * Setter $csucsKimenet
     * @param {number} value
     */
	public set $csucsKimenet(value: number) {
		this.csucsKimenet = value;
	}

    /**
     * Setter $csucsVal
     * @param {number} value
     */
	public set $csucsVal(value: number) {
		this.csucsVal = value;
	}

    /**
     * Setter $celarKimenet
     * @param {number} value
     */
	public set $celarKimenet(value: number) {
		this.celarKimenet = value;
	}

    /**
     * Setter $celarVal
     * @param {number} value
     */
	public set $celarVal(value: number) {
		this.celarVal = value;
	}

    /**
     * Setter $celarFelKimenet
     * @param {number} value
     */
	public set $celarFelKimenet(value: number) {
		this.celarFelKimenet = value;
	}

    /**
     * Setter $celarFelVal
     * @param {number} value
     */
	public set $celarFelVal(value: number) {
		this.celarFelVal = value;
	}

    /**
     * Setter $aljKimenet
     * @param {number} value
     */
	public set $aljKimenet(value: number) {
		this.aljKimenet = value;
	}

    /**
     * Setter $aljVal
     * @param {number} value
     */
	public set $aljVal(value: number) {
		this.aljVal = value;
	}

    /**
     * Setter $melyKimenet
     * @param {number} value
     */
	public set $melyKimenet(value: number) {
		this.melyKimenet = value;
	}

    /**
     * Setter $melyVal
     * @param {number} value
     */
	public set $melyVal(value: number) {
		this.melyVal = value;
	}

    /**
     * Setter $csodKimenet
     * @param {number} value
     */
	public set $csodKimenet(value: number) {
		this.csodKimenet = value;
	}

    /**
     * Setter $csodVal
     * @param {number} value
     */
	public set $csodVal(value: number) {
		this.csodVal = value;
	}

}

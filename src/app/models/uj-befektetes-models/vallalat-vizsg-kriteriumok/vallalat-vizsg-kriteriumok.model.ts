export class VallalatKockazatElemzes{
    private reszvenyEredmeny: string;
    private reszvenyRiziko: number;
    private konyvEredmeny: string;
    private konyvRiziko: number;
    private epsEredmeny: string;
    private epsRiziko: number;
    private piaciKapEredmeny: string;
    private piaciKapRiziko: number;
    private hitelBesorolasEredmeny: string;
    private hitelBesorolasRiziko: number;
    private tobbsegiTulajEredmeny: string;
    private tobbsegiTulajRiziko: number;
    private cegInfoEredmeny: string;
    private cegInfoRiziko: number;
    private termekInfoEredmeny: string;
    private termekInfoRiziko: number;
    private kutatasFejlesztesEredmeny: string;
    private kutatasFejlesztesRiziko: number;
    private immaterialisEredmeny: string;
    private immaterialisRiziko: number;
    private egyebEredmeny: string;
    private egyebRiziko: number;
    private szuksegesAllomanyEredmeny: string;
    private szuksegesAllomanyRiziko: number;
    private elerhetoInfoEredmeny: string;
    private elerhetoInfoRiziko: number;
    private osztalekEredmeny: string;
    private osztalekRiziko: number;
    private vallalatTozsdeEredmeny: string;
    private vallalatTozsdeRiziko: number;
    private fontosTechEredmeny: string;
    private fontosTechRiziko: number;
    private voltCsucsonEredmeny: string;
    private voltCsucsonRiziko: number;
    private fuzioEredmeny: string;
    private fuzioRiziko: number;
    private betaEredmeny: string;
    private betaRiziko: number;
    private vezMeEredmeny: string;
    private vezMeRiziko: number;
    private ujReszvenyKiEredmeny: string;
    private ujReszvenyKiRiziko: number;


    constructor(
        reszvenyEredmeny: string,
        reszvenyRiziko: number,
        konyvEredmeny: string,
        konyvRiziko: number,
        epsEredmeny: string,
        epsRiziko: number,
        piaciKapEredmeny: string,
        piaciKapRiziko: number,
        hitelBesorolasEredmeny: string,
        hitelBesorolasRiziko: number,
        tobbsegiTulajEredmeny: string,
        tobbsegiTulajRiziko: number,
        cegInfoEredmeny: string,
        cegInfoRiziko: number,
        termekInfoEredmeny: string,
        termekInfoRiziko: number,
        kutatasFejlesztesEredmeny: string,
        kutatasFejlesztesRiziko: number,
        immaterialisEredmeny: string,
        immaterialisRiziko: number,
        egyebEredmeny: string,
        egyebRiziko: number,
        szuksegesAllomanyEredmeny: string,
        szuksegesAllomanyRiziko: number,
        elerhetoInfoEredmeny: string,
        elerhetoInfoRiziko: number,
        osztalekEredmeny: string,
        osztalekRiziko: number,
        vallalatTozsdeEredmeny: string,
        vallalatTozsdeRiziko: number,
        fontosTechEredmeny: string,
        fontosTechRiziko: number,
        voltCsucsonEredmeny: string,
        voltCsucsonRiziko: number,
        fuzioEredmeny: string,
        fuzioRiziko: number,
        betaEredmeny: string,
        betaRiziko: number,
        vezMeEredmeny: string,
        vezMeRiziko: number,
        ujReszvenyKiEredmeny: string,
        ujReszvenyKiRiziko: number)
        {
            this.reszvenyEredmeny = reszvenyEredmeny;
            this.reszvenyRiziko = reszvenyRiziko;
            this.konyvEredmeny = konyvEredmeny;
            this.konyvRiziko = konyvRiziko;
            this.epsEredmeny = epsEredmeny;
            this.epsRiziko = epsRiziko;
            this.piaciKapEredmeny = piaciKapEredmeny;
            this.piaciKapRiziko = piaciKapRiziko;
            this.hitelBesorolasEredmeny = hitelBesorolasEredmeny;
            this.hitelBesorolasRiziko = hitelBesorolasRiziko;
            this.tobbsegiTulajEredmeny = tobbsegiTulajEredmeny;
            this.tobbsegiTulajRiziko = tobbsegiTulajRiziko;
            this.cegInfoEredmeny = cegInfoEredmeny;
            this.cegInfoRiziko = cegInfoRiziko;
            this.termekInfoEredmeny = termekInfoEredmeny;
            this.termekInfoRiziko = termekInfoRiziko;
            this.kutatasFejlesztesEredmeny = kutatasFejlesztesEredmeny,
            this.kutatasFejlesztesRiziko = kutatasFejlesztesRiziko,
            this.immaterialisEredmeny = immaterialisEredmeny,
            this.immaterialisRiziko = immaterialisRiziko,
            this.egyebEredmeny = egyebEredmeny,
            this.egyebRiziko = egyebRiziko,
            this.szuksegesAllomanyEredmeny = szuksegesAllomanyEredmeny,
            this.szuksegesAllomanyRiziko = szuksegesAllomanyRiziko,
            this.elerhetoInfoEredmeny = elerhetoInfoEredmeny,
            this.elerhetoInfoRiziko = elerhetoInfoRiziko,
            this.osztalekEredmeny = osztalekEredmeny,
            this.osztalekRiziko = osztalekRiziko,
            this.vallalatTozsdeEredmeny = vallalatTozsdeEredmeny,
            this.vallalatTozsdeRiziko = vallalatTozsdeRiziko,
            this.fontosTechEredmeny = fontosTechEredmeny,
            this.fontosTechRiziko = fontosTechRiziko,
            this.voltCsucsonEredmeny = voltCsucsonEredmeny,
            this.voltCsucsonRiziko = voltCsucsonRiziko,
            this.fuzioEredmeny = fuzioEredmeny,
            this.fuzioRiziko = fuzioRiziko,
            this.betaEredmeny = betaEredmeny,
            this.betaRiziko = betaRiziko,
            this.vezMeEredmeny = vezMeEredmeny,
            this.vezMeRiziko = vezMeRiziko,
            this.ujReszvenyKiEredmeny = ujReszvenyKiEredmeny,
            this.ujReszvenyKiRiziko = ujReszvenyKiRiziko
    }

    // GETTERS, SETTERS
    
    /**
     * Getter $reszvenyEredmeny
     * @return {string}
     */
	public get $reszvenyEredmeny(): string {
		return this.reszvenyEredmeny;
	}

    /**
     * Getter $reszvenyRiziko
     * @return {number}
     */
	public get $reszvenyRiziko(): number {
		return this.reszvenyRiziko;
	}

    /**
     * Getter $konyvEredmeny
     * @return {string}
     */
	public get $konyvEredmeny(): string {
		return this.konyvEredmeny;
	}

    /**
     * Getter $konyvRiziko
     * @return {number}
     */
	public get $konyvRiziko(): number {
		return this.konyvRiziko;
	}

    /**
     * Getter $epsEredmeny
     * @return {string}
     */
	public get $epsEredmeny(): string {
		return this.epsEredmeny;
	}

    /**
     * Getter $epsRiziko
     * @return {number}
     */
	public get $epsRiziko(): number {
		return this.epsRiziko;
	}

    /**
     * Getter $piaciKapEredmeny
     * @return {string}
     */
	public get $piaciKapEredmeny(): string {
		return this.piaciKapEredmeny;
	}

    /**
     * Getter $piaciKapRiziko
     * @return {number}
     */
	public get $piaciKapRiziko(): number {
		return this.piaciKapRiziko;
	}

    /**
     * Getter $hitelBesorolasEredmeny
     * @return {string}
     */
	public get $hitelBesorolasEredmeny(): string {
		return this.hitelBesorolasEredmeny;
	}

    /**
     * Getter $hitelBesorolasRiziko
     * @return {number}
     */
	public get $hitelBesorolasRiziko(): number {
		return this.hitelBesorolasRiziko;
	}

    /**
     * Getter $tobbsegiTulajEredmeny
     * @return {string}
     */
	public get $tobbsegiTulajEredmeny(): string {
		return this.tobbsegiTulajEredmeny;
	}

    /**
     * Getter $tobbsegiTulajRiziko
     * @return {number}
     */
	public get $tobbsegiTulajRiziko(): number {
		return this.tobbsegiTulajRiziko;
	}

    /**
     * Getter $cegInfoEredmeny
     * @return {string}
     */
	public get $cegInfoEredmeny(): string {
		return this.cegInfoEredmeny;
	}

    /**
     * Getter $cegInfoRiziko
     * @return {number}
     */
	public get $cegInfoRiziko(): number {
		return this.cegInfoRiziko;
	}

    /**
     * Getter $termekInfoEredmeny
     * @return {string}
     */
	public get $termekInfoEredmeny(): string {
		return this.termekInfoEredmeny;
	}

    /**
     * Getter $termekInfoRiziko
     * @return {number}
     */
	public get $termekInfoRiziko(): number {
		return this.termekInfoRiziko;
	}

    /**
     * Getter $kutatasFejlesztesEredmeny
     * @return {string}
     */
	public get $kutatasFejlesztesEredmeny(): string {
		return this.kutatasFejlesztesEredmeny;
	}

    /**
     * Getter $kutatasFejlesztesRiziko
     * @return {number}
     */
	public get $kutatasFejlesztesRiziko(): number {
		return this.kutatasFejlesztesRiziko;
	}

    /**
     * Getter $immaterialisEredmeny
     * @return {string}
     */
	public get $immaterialisEredmeny(): string {
		return this.immaterialisEredmeny;
	}

    /**
     * Getter $immaterialisRiziko
     * @return {number}
     */
	public get $immaterialisRiziko(): number {
		return this.immaterialisRiziko;
	}

    /**
     * Getter $egyebEredmeny
     * @return {string}
     */
	public get $egyebEredmeny(): string {
		return this.egyebEredmeny;
	}

    /**
     * Getter $egyebRiziko
     * @return {number}
     */
	public get $egyebRiziko(): number {
		return this.egyebRiziko;
	}

    /**
     * Getter $szuksegesAllomanyEredmeny
     * @return {string}
     */
	public get $szuksegesAllomanyEredmeny(): string {
		return this.szuksegesAllomanyEredmeny;
	}

    /**
     * Getter $szuksegesAllomanyRiziko
     * @return {number}
     */
	public get $szuksegesAllomanyRiziko(): number {
		return this.szuksegesAllomanyRiziko;
	}

    /**
     * Getter $elerhetoInfoEredmeny
     * @return {string}
     */
	public get $elerhetoInfoEredmeny(): string {
		return this.elerhetoInfoEredmeny;
	}

    /**
     * Getter $elerhetoInfoRiziko
     * @return {number}
     */
	public get $elerhetoInfoRiziko(): number {
		return this.elerhetoInfoRiziko;
	}

    /**
     * Getter $osztalekEredmeny
     * @return {string}
     */
	public get $osztalekEredmeny(): string {
		return this.osztalekEredmeny;
	}

    /**
     * Getter $osztalekRiziko
     * @return {number}
     */
	public get $osztalekRiziko(): number {
		return this.osztalekRiziko;
	}

    /**
     * Getter $vallalatTozsdeEredmeny
     * @return {string}
     */
	public get $vallalatTozsdeEredmeny(): string {
		return this.vallalatTozsdeEredmeny;
	}

    /**
     * Getter $vallalatTozsdeRiziko
     * @return {number}
     */
	public get $vallalatTozsdeRiziko(): number {
		return this.vallalatTozsdeRiziko;
	}

    /**
     * Getter $fontosTechEredmeny
     * @return {string}
     */
	public get $fontosTechEredmeny(): string {
		return this.fontosTechEredmeny;
	}

    /**
     * Getter $fontosTechRiziko
     * @return {number}
     */
	public get $fontosTechRiziko(): number {
		return this.fontosTechRiziko;
	}

    /**
     * Getter $voltCsucsonEredmeny
     * @return {string}
     */
	public get $voltCsucsonEredmeny(): string {
		return this.voltCsucsonEredmeny;
	}

    /**
     * Getter $voltCsucsonRiziko
     * @return {number}
     */
	public get $voltCsucsonRiziko(): number {
		return this.voltCsucsonRiziko;
	}

    /**
     * Getter $fuzioEredmeny
     * @return {string}
     */
	public get $fuzioEredmeny(): string {
		return this.fuzioEredmeny;
	}

    /**
     * Getter $fuzioRiziko
     * @return {number}
     */
	public get $fuzioRiziko(): number {
		return this.fuzioRiziko;
	}

    /**
     * Getter $betaEredmeny
     * @return {string}
     */
	public get $betaEredmeny(): string {
		return this.betaEredmeny;
	}

    /**
     * Getter $betaRiziko
     * @return {number}
     */
	public get $betaRiziko(): number {
		return this.betaRiziko;
	}

    /**
     * Getter $vezMeEredmeny
     * @return {string}
     */
	public get $vezMeEredmeny(): string {
		return this.vezMeEredmeny;
	}

    /**
     * Getter $vezMeRiziko
     * @return {number}
     */
	public get $vezMeRiziko(): number {
		return this.vezMeRiziko;
	}

    /**
     * Getter $ujReszvenyKiEredmeny
     * @return {string}
     */
	public get $ujReszvenyKiEredmeny(): string {
		return this.ujReszvenyKiEredmeny;
	}


    /**
     * Getter $ujReszvenyKiRiziko
     * @return {number}
     */
	public get $ujReszvenyKiRiziko(): number {
		return this.ujReszvenyKiRiziko;
	}
    

    /**
     * Setter $reszvenyEredmeny
     * @param {string} value
     */
	public set $reszvenyEredmeny(value: string) {
		this.reszvenyEredmeny = value;
	}

    /**
     * Setter $reszvenyRiziko
     * @param {number} value
     */
	public set $reszvenyRiziko(value: number) {
		this.reszvenyRiziko = value;
	}

    /**
     * Setter $konyvEredmeny
     * @param {string} value
     */
	public set $konyvEredmeny(value: string) {
		this.konyvEredmeny = value;
	}

    /**
     * Setter $konyvRiziko
     * @param {number} value
     */
	public set $konyvRiziko(value: number) {
		this.konyvRiziko = value;
	}

    /**
     * Setter $epsEredmeny
     * @param {string} value
     */
	public set $epsEredmeny(value: string) {
		this.epsEredmeny = value;
	}

    /**
     * Setter $epsRiziko
     * @param {number} value
     */
	public set $epsRiziko(value: number) {
		this.epsRiziko = value;
	}

    /**
     * Setter $piaciKapEredmeny
     * @param {string} value
     */
	public set $piaciKapEredmeny(value: string) {
		this.piaciKapEredmeny = value;
	}

    /**
     * Setter $piaciKapRiziko
     * @param {number} value
     */
	public set $piaciKapRiziko(value: number) {
		this.piaciKapRiziko = value;
	}

    /**
     * Setter $hitelBesorolasEredmeny
     * @param {string} value
     */
	public set $hitelBesorolasEredmeny(value: string) {
		this.hitelBesorolasEredmeny = value;
	}

    /**
     * Setter $hitelBesorolasRiziko
     * @param {number} value
     */
	public set $hitelBesorolasRiziko(value: number) {
		this.hitelBesorolasRiziko = value;
	}

    /**
     * Setter $tobbsegiTulajEredmeny
     * @param {string} value
     */
	public set $tobbsegiTulajEredmeny(value: string) {
		this.tobbsegiTulajEredmeny = value;
	}

    /**
     * Setter $tobbsegiTulajRiziko
     * @param {number} value
     */
	public set $tobbsegiTulajRiziko(value: number) {
		this.tobbsegiTulajRiziko = value;
	}

    /**
     * Setter $cegInfoEredmeny
     * @param {string} value
     */
	public set $cegInfoEredmeny(value: string) {
		this.cegInfoEredmeny = value;
	}

    /**
     * Setter $cegInfoRiziko
     * @param {number} value
     */
	public set $cegInfoRiziko(value: number) {
		this.cegInfoRiziko = value;
	}

    /**
     * Setter $termekInfoEredmeny
     * @param {string} value
     */
	public set $termekInfoEredmeny(value: string) {
		this.termekInfoEredmeny = value;
	}

    /**
     * Setter $termekInfoRiziko
     * @param {number} value
     */
	public set $termekInfoRiziko(value: number) {
		this.termekInfoRiziko = value;
	}

    /**
     * Setter $kutatasFejlesztesEredmeny
     * @param {string} value
     */
	public set $kutatasFejlesztesEredmeny(value: string) {
		this.kutatasFejlesztesEredmeny = value;
	}

    /**
     * Setter $kutatasFejlesztesRiziko
     * @param {number} value
     */
	public set $kutatasFejlesztesRiziko(value: number) {
		this.kutatasFejlesztesRiziko = value;
	}

    /**
     * Setter $immaterialisEredmeny
     * @param {string} value
     */
	public set $immaterialisEredmeny(value: string) {
		this.immaterialisEredmeny = value;
	}

    /**
     * Setter $immaterialisRiziko
     * @param {number} value
     */
	public set $immaterialisRiziko(value: number) {
		this.immaterialisRiziko = value;
	}

    /**
     * Setter $egyebEredmeny
     * @param {string} value
     */
	public set $egyebEredmeny(value: string) {
		this.egyebEredmeny = value;
	}

    /**
     * Setter $egyebRiziko
     * @param {number} value
     */
	public set $egyebRiziko(value: number) {
		this.egyebRiziko = value;
	}

    /**
     * Setter $szuksegesAllomanyEredmeny
     * @param {string} value
     */
	public set $szuksegesAllomanyEredmeny(value: string) {
		this.szuksegesAllomanyEredmeny = value;
	}

    /**
     * Setter $szuksegesAllomanyRiziko
     * @param {number} value
     */
	public set $szuksegesAllomanyRiziko(value: number) {
		this.szuksegesAllomanyRiziko = value;
	}

    /**
     * Setter $elerhetoInfoEredmeny
     * @param {string} value
     */
	public set $elerhetoInfoEredmeny(value: string) {
		this.elerhetoInfoEredmeny = value;
	}

    /**
     * Setter $elerhetoInfoRiziko
     * @param {number} value
     */
	public set $elerhetoInfoRiziko(value: number) {
		this.elerhetoInfoRiziko = value;
	}

    /**
     * Setter $osztalekEredmeny
     * @param {string} value
     */
	public set $osztalekEredmeny(value: string) {
		this.osztalekEredmeny = value;
	}

    /**
     * Setter $osztalekRiziko
     * @param {number} value
     */
	public set $osztalekRiziko(value: number) {
		this.osztalekRiziko = value;
	}

    /**
     * Setter $vallalatTozsdeEredmeny
     * @param {string} value
     */
	public set $vallalatTozsdeEredmeny(value: string) {
		this.vallalatTozsdeEredmeny = value;
	}

    /**
     * Setter $vallalatTozsdeRiziko
     * @param {number} value
     */
	public set $vallalatTozsdeRiziko(value: number) {
		this.vallalatTozsdeRiziko = value;
	}

    /**
     * Setter $fontosTechEredmeny
     * @param {string} value
     */
	public set $fontosTechEredmeny(value: string) {
		this.fontosTechEredmeny = value;
	}

    /**
     * Setter $fontosTechRiziko
     * @param {number} value
     */
	public set $fontosTechRiziko(value: number) {
		this.fontosTechRiziko = value;
	}

    /**
     * Setter $voltCsucsonEredmeny
     * @param {string} value
     */
	public set $voltCsucsonEredmeny(value: string) {
		this.voltCsucsonEredmeny = value;
	}

    /**
     * Setter $voltCsucsonRiziko
     * @param {number} value
     */
	public set $voltCsucsonRiziko(value: number) {
		this.voltCsucsonRiziko = value;
	}

    /**
     * Setter $fuzioEredmeny
     * @param {string} value
     */
	public set $fuzioEredmeny(value: string) {
		this.fuzioEredmeny = value;
	}

    /**
     * Setter $fuzioRiziko
     * @param {number} value
     */
	public set $fuzioRiziko(value: number) {
		this.fuzioRiziko = value;
	}

    /**
     * Setter $betaEredmeny
     * @param {string} value
     */
	public set $betaEredmeny(value: string) {
		this.betaEredmeny = value;
	}

    /**
     * Setter $betaRiziko
     * @param {number} value
     */
	public set $betaRiziko(value: number) {
		this.betaRiziko = value;
	}

    /**
     * Setter $vezMeEredmeny
     * @param {string} value
     */
	public set $vezMeEredmeny(value: string) {
		this.vezMeEredmeny = value;
	}

    /**
     * Setter $vezMeRiziko
     * @param {number} value
     */
	public set $vezMeRiziko(value: number) {
		this.vezMeRiziko = value;
	}

    /**
     * Setter $ujReszvenyKiEredmeny
     * @param {string} value
     */
	public set $ujReszvenyKiEredmeny(value: string) {
		this.ujReszvenyKiEredmeny = value;
	}


    /**
     * Setter $ujReszvenyKiRiziko
     * @param {number} value
     */
	public set $ujReszvenyKiRiziko(value: number) {
		this.ujReszvenyKiRiziko = value;
	}
    

   
}
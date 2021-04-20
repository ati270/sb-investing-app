export class PenzugyiAdatok {
  //penzugyiAdatok: any[];
  private nettoTargyev: number;
  private nettoElozoEv: number;
  private nettoKonkurencia: number;
  private nettoQ2: number;
  private nettoQ3: number;
  private eladottAruTargyev: number;
  private eladottAruElozoEv: number;
  private eladottAruKonkurencia: number;
  private eladottAruQ2: number;
  private eladottAruQ3: number;
  private tarsasagTargyev: number;
  private tarsasagElozoEv: number;
  private tarsasagKonkurencia: number;
  private tarsasagQ2: number;
  private tarsasagQ3: number;
  private kamatTargyev: number;
  private kamatElozoEv: number;
  private kamatKonkurencia: number;
  private kamatQ2: number;
  private kamatQ3: number;
  private fizetettKamatokTargyev: number;
  private fizetettKamatokElozoEv: number;
  private fizetettKamatokKonkurencia: number;
  private fizetettKamatokQ2: number;
  private fizetettKamatokQ3: number;
  private admTargyev: number;
  private admElozoEv: number;
  private admKonkurencia: number;
  private admQ2: number;
  private admQ3: number;
  private egyebTargyev: number;
  private egyebElozoEv: number;
  private egyebKonkurencia: number;
  private egyebQ2: number;
  private egyebQ3: number;
  private reszvenyTargyev: number;
  private reszvenyElozoEv: number;
  private reszvenyKonkurencia: number;
  private reszvenyQ2: number;
  private reszvenyQ3: number;
  private osztalekTargyev: number;
  private osztalekElozoEv: number;
  private osztalekKonkurencia: number;
  private osztalekQ2: number;
  private osztalekQ3: number;
  private elszamoltTargyev: number;
  private elszamoltElozoEv: number;
  private elszamoltKonkurencia: number;
  private elszamoltQ2: number;
  private elszamoltQ3: number;
  private keszpenzTargyev: number;
  private keszpenzElozoEv: number;
  private keszpenzKonkurencia: number;
  private keszpenzQ2: number;
  private keszpenzQ3: number;
  private kovetelesVevoTargyev: number;
  private kovetelesVevoElozoEv: number;
  private kovetelesVevoKonkurencia: number;
  private kovetelesVevoQ2: number;
  private kovetelesVevoQ3: number;
  private keszletTargyev: number;
  private keszletElozoEv: number;
  private keszletKonkurencia: number;
  private keszletQ2: number;
  private keszletQ3: number;
  private jovairasTargyev: number;
  private jovairasElozoEv: number;
  private jovairasKonkurencia: number;
  private jovairasQ2: number;
  private jovairasQ3: number;
  private immTargyev: number;
  private immElozoEv: number;
  private immKonkurencia: number;
  private immQ2: number;
  private immQ3: number;
  private forgoTargyev: number;
  private forgoElozoEv: number;
  private forgoKonkurencia: number;
  private forgoQ2: number;
  private forgoQ3: number;
  private eszkozTargyev: number;
  private eszkozElozoEv: number;
  private eszkozKonkurencia: number;
  private eszkozQ2: number;
  private eszkozQ3: number;
  private kotSzallitoTargyev: number;
  private kotSzallitoElozoEv: number;
  private kotSzallitoKonkurencia: number;
  private kotSzallitoQ2: number;
  private kotSzallitoQ3: number;
  private tokeTargyev: number;
  private tokeElozoEv: number;
  private tokeKonkurencia: number;
  private tokeQ2: number;
  private tokeQ3: number;
  private rovidLejaratuKotTargyev: number;
  private rovidLejaratuKotElozoEv: number;
  private rovidLejaratuKotKonkurencia: number;
  private rovidLejaratuKotQ2: number;
  private rovidLejaratuKotQ3: number;
  private osszKotTargyev: number;
  private osszKotElozoEv: number;
  private osszKotKonkurencia: number;
  private osszKotQ2: number;
  private osszKotQ3: number;
  private alkalmazottakSzamaTargyev: number;
  private alkalmazottakSzamaElozoEv: number;
  private alkalmazottakSzamaKonkurencia: number;
  private alkalmazottakSzamaQ2: number;
  private alkalmazottakSzamaQ3: number;
  private reszvenyArfolyamTargyev: number;
  private reszvenyArfolyamElozoEv: number;
  private reszvenyArfolyamKonkurencia: number;
  private reszvenyArfolyamQ2: number;
  private reszvenyArfolyamQ3: number;
  private naptarTargyev: number;
  private naptarElozoEv: number;
  private naptarKonkurencia: number;
  private naptarQ2: number;
  private naptarQ3: number;
  private hozamTargyev: number;
  private hozamElozoEv: number;
  private hozamKonkurencia: number;
  private hozamQ2: number;
  private hozamQ3: number;

  constructor(
    nettoTargyev: number,
    nettoElozoEv: number,
    nettoKonkurencia: number,
    nettoQ2: number,
    nettoQ3: number,
    eladottAruTargyev: number,
    eladottAruElozoEv: number,
    eladottAruKonkurencia: number,
    eladottAruQ2: number,
    eladottAruQ3: number,
    tarsasagTargyev: number,
    tarsasagElozoEv: number,
    tarsasagKonkurencia: number,
    tarsasagQ2: number,
    tarsasagQ3: number,
    kamatTargyev: number,
    kamatElozoEv: number,
    kamatKonkurencia: number,
    kamatQ2: number,
    kamatQ3: number,
    fizetettKamatokTargyev: number,
    fizetettKamatokElozoEv: number,
    fizetettKamatokKonkurencia: number,
    fizetettKamatokQ2: number,
    fizetettKamatokQ3: number,
    admTargyev: number,
    admElozoEv: number,
    admKonkurencia: number,
    admQ2: number,
    admQ3: number,
    egyebTargyev: number,
    egyebElozoEv: number,
    egyebKonkurencia: number,
    egyebQ2: number,
    egyebQ3: number,
    reszvenyTargyev: number,
    reszvenyElozoEv: number,
    reszvenyKonkurencia: number,
    reszvenyQ2: number,
    reszvenyQ3: number,
    osztalekTargyev: number,
    osztalekElozoEv: number,
    osztalekKonkurencia: number,
    osztalekQ2: number,
    osztalekQ3: number,
    elszamoltTargyev: number,
    elszamoltElozoEv: number,
    elszamoltKonkurencia: number,
    elszamoltQ2: number,
    elszamoltQ3: number,
    keszpenzTargyev: number,
    keszpenzElozoEv: number,
    keszpenzKonkurencia: number,
    keszpenzQ2: number,
    keszpenzQ3: number,
    kovetelesVevoTargyev: number,
    kovetelesVevoElozoEv: number,
    kovetelesVevoKonkurencia: number,
    kovetelesVevoQ2: number,
    kovetelesVevoQ3: number,
    keszletTargyev: number,
    keszletElozoEv: number,
    keszletKonkurencia: number,
    keszletQ2: number,
    keszletQ3: number,
    jovairasTargyev: number,
    jovairasElozoEv: number,
    jovairasKonkurencia: number,
    jovairasQ2: number,
    jovairasQ3: number,
    immTargyev: number,
    immElozoEv: number,
    immKonkurencia: number,
    immQ2: number,
    immQ3: number,
    forgoTargyev: number,
    forgoElozoEv: number,
    forgoKonkurencia: number,
    forgoQ2: number,
    forgoQ3: number,
    eszkozTargyev: number,
    eszkozElozoEv: number,
    eszkozKonkurencia: number,
    eszkozQ2: number,
    eszkozQ3: number,
    kotSzallitoTargyev: number,
    kotSzallitoElozoEv: number,
    kotSzallitoKonkurencia: number,
    kotSzallitoQ2: number,
    kotSzallitoQ3: number,
    tokeTargyev: number,
    tokeElozoEv: number,
    tokeKonkurencia: number,
    tokeQ2: number,
    tokeQ3: number,
    rovidLejaratuKotTargyev: number,
    rovidLejaratuKotElozoEv: number,
    rovidLejaratuKotKonkurencia: number,
    rovidLejaratuKotQ2: number,
    rovidLejaratuKotQ3: number,
    osszKotTargyev: number,
    osszKotElozoEv: number,
    osszKotKonkurencia: number,
    osszKotQ2: number,
    osszKotQ3: number,
    alkalmazottakSzamaTargyev: number,
    alkalmazottakSzamaElozoEv: number,
    alkalmazottakSzamaKonkurencia: number,
    alkalmazottakSzamaQ2: number,
    alkalmazottakSzamaQ3: number,
    reszvenyArfolyamTargyev: number,
    reszvenyArfolyamElozoEv: number,
    reszvenyArfolyamKonkurencia: number,
    reszvenyArfolyamQ2: number,
    reszvenyArfolyamQ3: number,
    naptarTargyev: number,
    naptarElozoEv: number,
    naptarKonkurencia: number,
    naptarQ2: number,
    naptarQ3: number,
    hozamTargyev: number,
    hozamElozoEv: number,
    hozamKonkurencia: number,
    hozamQ2: number,
    hozamQ3: number
  ) {
    this.nettoTargyev = nettoTargyev;
    this.nettoElozoEv = nettoElozoEv;
    this.nettoKonkurencia = nettoKonkurencia;
    this.nettoQ2 = nettoQ2;
    this.nettoQ3 = nettoQ3;
    this.eladottAruTargyev = eladottAruTargyev;
    this.eladottAruElozoEv = eladottAruElozoEv;
    this.eladottAruKonkurencia = eladottAruKonkurencia;
    this.eladottAruQ2 = eladottAruQ2;
    this.eladottAruQ3 = eladottAruQ3;
    this.tarsasagTargyev = tarsasagTargyev;
    this.tarsasagElozoEv = tarsasagElozoEv;
    this.tarsasagKonkurencia = tarsasagKonkurencia;
    this.tarsasagQ2 = tarsasagQ2;
    this.tarsasagQ3 = tarsasagQ3;
    this.kamatTargyev = kamatTargyev;
    this.kamatElozoEv = kamatElozoEv;
    this.kamatKonkurencia = kamatKonkurencia;
    this.kamatQ2 = kamatQ2;
    this.kamatQ3 = kamatQ3;
    this.fizetettKamatokTargyev = fizetettKamatokTargyev;
    this.fizetettKamatokElozoEv = fizetettKamatokElozoEv;
    this.fizetettKamatokKonkurencia = fizetettKamatokKonkurencia;
    this.fizetettKamatokQ2 = fizetettKamatokQ2;
    this.fizetettKamatokQ3 = fizetettKamatokQ3;
    this.admTargyev = admTargyev;
    this.admElozoEv = admElozoEv;
    this.admKonkurencia = admKonkurencia;
    this.admQ2 = admQ2;
    this.admQ3 = admQ3;
    this.egyebTargyev = egyebTargyev;
    this.egyebElozoEv = egyebElozoEv;
    this.egyebKonkurencia = egyebKonkurencia;
    this.egyebQ2 = egyebQ2;
    this.egyebQ3 = egyebQ3;
    this.reszvenyTargyev = reszvenyTargyev;
    this.reszvenyElozoEv = reszvenyElozoEv;
    this.reszvenyKonkurencia = reszvenyKonkurencia;
    this.reszvenyQ2 = reszvenyQ2;
    this.reszvenyQ3 = reszvenyQ3;
    this.osztalekTargyev = osztalekTargyev;
    this.osztalekElozoEv = osztalekElozoEv;
    this.osztalekKonkurencia = osztalekKonkurencia;
    this.osztalekQ2 = osztalekQ2;
    this.osztalekQ3 = osztalekQ3;
    this.elszamoltTargyev = elszamoltTargyev;
    this.elszamoltElozoEv = elszamoltElozoEv;
    this.elszamoltKonkurencia = elszamoltKonkurencia;
    this.elszamoltQ2 = elszamoltQ2;
    this.elszamoltQ3 = elszamoltQ3;
    this.keszpenzTargyev = keszpenzTargyev;
    this.keszpenzElozoEv = keszpenzElozoEv;
    this.keszpenzKonkurencia = keszpenzKonkurencia;
    this.keszpenzQ2 = keszpenzQ2;
    this.keszpenzQ3 = keszpenzQ3;
    this.kovetelesVevoTargyev = kovetelesVevoTargyev;
    this.kovetelesVevoElozoEv = kovetelesVevoElozoEv;
    this.kovetelesVevoKonkurencia = kovetelesVevoKonkurencia;
    this.kovetelesVevoQ2 = kovetelesVevoQ2;
    this.kovetelesVevoQ3 = kovetelesVevoQ3;
    this.keszletTargyev = keszletTargyev;
    this.keszletElozoEv = keszletElozoEv;
    this.keszletKonkurencia = keszletKonkurencia;
    this.keszletQ2 = keszletQ2;
    this.keszletQ3 = keszletQ3;
    this.jovairasTargyev = jovairasTargyev;
    this.jovairasElozoEv = jovairasElozoEv;
    this.jovairasKonkurencia = jovairasKonkurencia;
    this.jovairasQ2 = jovairasQ2;
    this.jovairasQ3 = jovairasQ3;
    this.immTargyev = immTargyev;
    this.immElozoEv = immElozoEv;
    this.immKonkurencia = immKonkurencia;
    this.immQ2 = immQ2;
    this.immQ3 = immQ3;
    this.forgoTargyev = forgoTargyev;
    this.forgoElozoEv = forgoElozoEv;
    this.forgoKonkurencia = forgoKonkurencia;
    this.forgoQ2 = forgoQ2;
    this.forgoQ3 = forgoQ3;
    this.eszkozTargyev = eszkozTargyev;
    this.eszkozElozoEv = eszkozElozoEv;
    this.eszkozKonkurencia = eszkozKonkurencia;
    this.eszkozQ2 = eszkozQ2;
    this.eszkozQ3 = eszkozQ3;
    this.kotSzallitoTargyev = kotSzallitoTargyev;
    this.kotSzallitoElozoEv = kotSzallitoElozoEv;
    this.kotSzallitoKonkurencia = kotSzallitoKonkurencia;
    this.kotSzallitoQ2 = kotSzallitoQ2;
    this.kotSzallitoQ3 = kotSzallitoQ3;
    this.tokeTargyev = tokeTargyev;
    this.tokeElozoEv = tokeElozoEv;
    this.tokeKonkurencia = tokeKonkurencia;
    this.tokeQ2 = tokeQ2;
    this.tokeQ3 = tokeQ3;
    this.rovidLejaratuKotTargyev = rovidLejaratuKotTargyev;
    this.rovidLejaratuKotElozoEv = rovidLejaratuKotElozoEv;
    this.rovidLejaratuKotKonkurencia = rovidLejaratuKotKonkurencia;
    this.rovidLejaratuKotQ2 = rovidLejaratuKotQ2;
    this.rovidLejaratuKotQ3 = rovidLejaratuKotQ3;
    this.osszKotTargyev = osszKotTargyev;
    this.osszKotElozoEv = osszKotElozoEv;
    this.osszKotKonkurencia = osszKotKonkurencia;
    this.osszKotQ2 = osszKotQ2;
    this.osszKotQ3 = osszKotQ3;
    this.alkalmazottakSzamaTargyev = alkalmazottakSzamaTargyev;
    this.alkalmazottakSzamaElozoEv = alkalmazottakSzamaElozoEv;
    this.alkalmazottakSzamaKonkurencia = alkalmazottakSzamaKonkurencia;
    this.alkalmazottakSzamaQ2 = alkalmazottakSzamaQ2;
    this.alkalmazottakSzamaQ3 = alkalmazottakSzamaQ3;
    this.reszvenyArfolyamTargyev = reszvenyArfolyamTargyev;
    this.reszvenyArfolyamElozoEv = reszvenyArfolyamElozoEv;
    this.reszvenyArfolyamKonkurencia = reszvenyArfolyamKonkurencia;
    this.reszvenyArfolyamQ2 = reszvenyArfolyamQ2;
    this.reszvenyArfolyamQ3 = reszvenyArfolyamQ3;
    this.naptarTargyev = naptarTargyev;
    this.naptarElozoEv = naptarElozoEv;
    this.naptarKonkurencia = naptarKonkurencia;
    this.naptarQ2 = naptarQ2;
    this.naptarQ3 = naptarQ3;
    this.hozamTargyev = hozamTargyev;
    this.hozamElozoEv = hozamElozoEv;
    this.hozamKonkurencia = hozamKonkurencia;
    this.hozamQ2 = hozamQ2;
    this.hozamQ3 = hozamQ3;
  }

  // Getters, setters


    /**
     * Getter $nettoTargyev
     * @return {number}
     */
	public get $nettoTargyev(): number {
		return this.nettoTargyev;
	}

    /**
     * Getter $nettoElozoEv
     * @return {number}
     */
	public get $nettoElozoEv(): number {
		return this.nettoElozoEv;
	}

    /**
     * Getter $nettoKonkurencia
     * @return {number}
     */
	public get $nettoKonkurencia(): number {
		return this.nettoKonkurencia;
	}

    /**
     * Getter $nettoQ2
     * @return {number}
     */
	public get $nettoQ2(): number {
		return this.nettoQ2;
	}

    /**
     * Getter $nettoQ3
     * @return {number}
     */
	public get $nettoQ3(): number {
		return this.nettoQ3;
	}

    /**
     * Getter $eladottAruTargyev
     * @return {number}
     */
	public get $eladottAruTargyev(): number {
		return this.eladottAruTargyev;
	}

    /**
     * Getter $eladottAruElozoEv
     * @return {number}
     */
	public get $eladottAruElozoEv(): number {
		return this.eladottAruElozoEv;
	}

    /**
     * Getter $eladottAruKonkurencia
     * @return {number}
     */
	public get $eladottAruKonkurencia(): number {
		return this.eladottAruKonkurencia;
	}

    /**
     * Getter $eladottAruQ2
     * @return {number}
     */
	public get $eladottAruQ2(): number {
		return this.eladottAruQ2;
	}

    /**
     * Getter $eladottAruQ3
     * @return {number}
     */
	public get $eladottAruQ3(): number {
		return this.eladottAruQ3;
	}

    /**
     * Getter $tarsasagTargyev
     * @return {number}
     */
	public get $tarsasagTargyev(): number {
		return this.tarsasagTargyev;
	}

    /**
     * Getter $tarsasagElozoEv
     * @return {number}
     */
	public get $tarsasagElozoEv(): number {
		return this.tarsasagElozoEv;
	}

    /**
     * Getter $tarsasagKonkurencia
     * @return {number}
     */
	public get $tarsasagKonkurencia(): number {
		return this.tarsasagKonkurencia;
	}

    /**
     * Getter $tarsasagQ2
     * @return {number}
     */
	public get $tarsasagQ2(): number {
		return this.tarsasagQ2;
	}

    /**
     * Getter $tarsasagQ3
     * @return {number}
     */
	public get $tarsasagQ3(): number {
		return this.tarsasagQ3;
	}

    /**
     * Getter $kamatTargyev
     * @return {number}
     */
	public get $kamatTargyev(): number {
		return this.kamatTargyev;
	}

    /**
     * Getter $kamatElozoEv
     * @return {number}
     */
	public get $kamatElozoEv(): number {
		return this.kamatElozoEv;
	}

    /**
     * Getter $kamatKonkurencia
     * @return {number}
     */
	public get $kamatKonkurencia(): number {
		return this.kamatKonkurencia;
	}

    /**
     * Getter $kamatQ2
     * @return {number}
     */
	public get $kamatQ2(): number {
		return this.kamatQ2;
	}

    /**
     * Getter $kamatQ3
     * @return {number}
     */
	public get $kamatQ3(): number {
		return this.kamatQ3;
	}

    /**
     * Getter $fizetettKamatokTargyev
     * @return {number}
     */
	public get $fizetettKamatokTargyev(): number {
		return this.fizetettKamatokTargyev;
	}

    /**
     * Getter $fizetettKamatokElozoEv
     * @return {number}
     */
	public get $fizetettKamatokElozoEv(): number {
		return this.fizetettKamatokElozoEv;
	}

    /**
     * Getter $fizetettKamatokKonkurencia
     * @return {number}
     */
	public get $fizetettKamatokKonkurencia(): number {
		return this.fizetettKamatokKonkurencia;
	}

    /**
     * Getter $fizetettKamatokQ2
     * @return {number}
     */
	public get $fizetettKamatokQ2(): number {
		return this.fizetettKamatokQ2;
	}

    /**
     * Getter $fizetettKamatokQ3
     * @return {number}
     */
	public get $fizetettKamatokQ3(): number {
		return this.fizetettKamatokQ3;
	}

    /**
     * Getter $admTargyev
     * @return {number}
     */
	public get $admTargyev(): number {
		return this.admTargyev;
	}

    /**
     * Getter $admElozoEv
     * @return {number}
     */
	public get $admElozoEv(): number {
		return this.admElozoEv;
	}

    /**
     * Getter $admKonkurencia
     * @return {number}
     */
	public get $admKonkurencia(): number {
		return this.admKonkurencia;
	}

    /**
     * Getter $admQ2
     * @return {number}
     */
	public get $admQ2(): number {
		return this.admQ2;
	}

    /**
     * Getter $admQ3
     * @return {number}
     */
	public get $admQ3(): number {
		return this.admQ3;
	}

    /**
     * Getter $egyebTargyev
     * @return {number}
     */
	public get $egyebTargyev(): number {
		return this.egyebTargyev;
	}

    /**
     * Getter $egyebElozoEv
     * @return {number}
     */
	public get $egyebElozoEv(): number {
		return this.egyebElozoEv;
	}

    /**
     * Getter $egyebKonkurencia
     * @return {number}
     */
	public get $egyebKonkurencia(): number {
		return this.egyebKonkurencia;
	}

    /**
     * Getter $egyebQ2
     * @return {number}
     */
	public get $egyebQ2(): number {
		return this.egyebQ2;
	}

    /**
     * Getter $egyebQ3
     * @return {number}
     */
	public get $egyebQ3(): number {
		return this.egyebQ3;
	}

    /**
     * Getter $reszvenyTargyev
     * @return {number}
     */
	public get $reszvenyTargyev(): number {
		return this.reszvenyTargyev;
	}

    /**
     * Getter $reszvenyElozoEv
     * @return {number}
     */
	public get $reszvenyElozoEv(): number {
		return this.reszvenyElozoEv;
	}

    /**
     * Getter $reszvenyKonkurencia
     * @return {number}
     */
	public get $reszvenyKonkurencia(): number {
		return this.reszvenyKonkurencia;
	}

    /**
     * Getter $reszvenyQ2
     * @return {number}
     */
	public get $reszvenyQ2(): number {
		return this.reszvenyQ2;
	}

    /**
     * Getter $reszvenyQ3
     * @return {number}
     */
	public get $reszvenyQ3(): number {
		return this.reszvenyQ3;
	}

    /**
     * Getter $osztalekTargyev
     * @return {number}
     */
	public get $osztalekTargyev(): number {
		return this.osztalekTargyev;
	}

    /**
     * Getter $osztalekElozoEv
     * @return {number}
     */
	public get $osztalekElozoEv(): number {
		return this.osztalekElozoEv;
	}

    /**
     * Getter $osztalekKonkurencia
     * @return {number}
     */
	public get $osztalekKonkurencia(): number {
		return this.osztalekKonkurencia;
	}

    /**
     * Getter $osztalekQ2
     * @return {number}
     */
	public get $osztalekQ2(): number {
		return this.osztalekQ2;
	}

    /**
     * Getter $osztalekQ3
     * @return {number}
     */
	public get $osztalekQ3(): number {
		return this.osztalekQ3;
	}

    /**
     * Getter $elszamoltTargyev
     * @return {number}
     */
	public get $elszamoltTargyev(): number {
		return this.elszamoltTargyev;
	}

    /**
     * Getter $elszamoltElozoEv
     * @return {number}
     */
	public get $elszamoltElozoEv(): number {
		return this.elszamoltElozoEv;
	}

    /**
     * Getter $elszamoltKonkurencia
     * @return {number}
     */
	public get $elszamoltKonkurencia(): number {
		return this.elszamoltKonkurencia;
	}

    /**
     * Getter $elszamoltQ2
     * @return {number}
     */
	public get $elszamoltQ2(): number {
		return this.elszamoltQ2;
	}

    /**
     * Getter $elszamoltQ3
     * @return {number}
     */
	public get $elszamoltQ3(): number {
		return this.elszamoltQ3;
	}

    /**
     * Getter $keszpenzTargyev
     * @return {number}
     */
	public get $keszpenzTargyev(): number {
		return this.keszpenzTargyev;
	}

    /**
     * Getter $keszpenzElozoEv
     * @return {number}
     */
	public get $keszpenzElozoEv(): number {
		return this.keszpenzElozoEv;
	}

    /**
     * Getter $keszpenzKonkurencia
     * @return {number}
     */
	public get $keszpenzKonkurencia(): number {
		return this.keszpenzKonkurencia;
	}

    /**
     * Getter $keszpenzQ2
     * @return {number}
     */
	public get $keszpenzQ2(): number {
		return this.keszpenzQ2;
	}

    /**
     * Getter $keszpenzQ3
     * @return {number}
     */
	public get $keszpenzQ3(): number {
		return this.keszpenzQ3;
	}

    /**
     * Getter $kovetelesVevoTargyev
     * @return {number}
     */
	public get $kovetelesVevoTargyev(): number {
		return this.kovetelesVevoTargyev;
	}

    /**
     * Getter $kovetelesVevoElozoEv
     * @return {number}
     */
	public get $kovetelesVevoElozoEv(): number {
		return this.kovetelesVevoElozoEv;
	}

    /**
     * Getter $kovetelesVevoKonkurencia
     * @return {number}
     */
	public get $kovetelesVevoKonkurencia(): number {
		return this.kovetelesVevoKonkurencia;
	}

    /**
     * Getter $kovetelesVevoQ2
     * @return {number}
     */
	public get $kovetelesVevoQ2(): number {
		return this.kovetelesVevoQ2;
	}

    /**
     * Getter $kovetelesVevoQ3
     * @return {number}
     */
	public get $kovetelesVevoQ3(): number {
		return this.kovetelesVevoQ3;
	}

    /**
     * Getter $keszletTargyev
     * @return {number}
     */
	public get $keszletTargyev(): number {
		return this.keszletTargyev;
	}

    /**
     * Getter $keszletElozoEv
     * @return {number}
     */
	public get $keszletElozoEv(): number {
		return this.keszletElozoEv;
	}

    /**
     * Getter $keszletKonkurencia
     * @return {number}
     */
	public get $keszletKonkurencia(): number {
		return this.keszletKonkurencia;
	}

    /**
     * Getter $keszletQ2
     * @return {number}
     */
	public get $keszletQ2(): number {
		return this.keszletQ2;
	}

    /**
     * Getter $keszletQ3
     * @return {number}
     */
	public get $keszletQ3(): number {
		return this.keszletQ3;
	}

    /**
     * Getter $jovairasTargyev
     * @return {number}
     */
	public get $jovairasTargyev(): number {
		return this.jovairasTargyev;
	}

    /**
     * Getter $jovairasElozoEv
     * @return {number}
     */
	public get $jovairasElozoEv(): number {
		return this.jovairasElozoEv;
	}

    /**
     * Getter $jovairasKonkurencia
     * @return {number}
     */
	public get $jovairasKonkurencia(): number {
		return this.jovairasKonkurencia;
	}

    /**
     * Getter $jovairasQ2
     * @return {number}
     */
	public get $jovairasQ2(): number {
		return this.jovairasQ2;
	}

    /**
     * Getter $jovairasQ3
     * @return {number}
     */
	public get $jovairasQ3(): number {
		return this.jovairasQ3;
	}

    /**
     * Getter $immTargyev
     * @return {number}
     */
	public get $immTargyev(): number {
		return this.immTargyev;
	}

    /**
     * Getter $immElozoEv
     * @return {number}
     */
	public get $immElozoEv(): number {
		return this.immElozoEv;
	}

    /**
     * Getter $immKonkurencia
     * @return {number}
     */
	public get $immKonkurencia(): number {
		return this.immKonkurencia;
	}

    /**
     * Getter $immQ2
     * @return {number}
     */
	public get $immQ2(): number {
		return this.immQ2;
	}

    /**
     * Getter $immQ3
     * @return {number}
     */
	public get $immQ3(): number {
		return this.immQ3;
	}

    /**
     * Getter $forgoTargyev
     * @return {number}
     */
	public get $forgoTargyev(): number {
		return this.forgoTargyev;
	}

    /**
     * Getter $forgoElozoEv
     * @return {number}
     */
	public get $forgoElozoEv(): number {
		return this.forgoElozoEv;
	}

    /**
     * Getter $forgoKonkurencia
     * @return {number}
     */
	public get $forgoKonkurencia(): number {
		return this.forgoKonkurencia;
	}

    /**
     * Getter $forgoQ2
     * @return {number}
     */
	public get $forgoQ2(): number {
		return this.forgoQ2;
	}

    /**
     * Getter $forgoQ3
     * @return {number}
     */
	public get $forgoQ3(): number {
		return this.forgoQ3;
	}

    /**
     * Getter $eszkozTargyev
     * @return {number}
     */
	public get $eszkozTargyev(): number {
		return this.eszkozTargyev;
	}

    /**
     * Getter $eszkozElozoEv
     * @return {number}
     */
	public get $eszkozElozoEv(): number {
		return this.eszkozElozoEv;
	}

    /**
     * Getter $eszkozKonkurencia
     * @return {number}
     */
	public get $eszkozKonkurencia(): number {
		return this.eszkozKonkurencia;
	}

    /**
     * Getter $eszkozQ2
     * @return {number}
     */
	public get $eszkozQ2(): number {
		return this.eszkozQ2;
	}

    /**
     * Getter $eszkozQ3
     * @return {number}
     */
	public get $eszkozQ3(): number {
		return this.eszkozQ3;
	}

    /**
     * Getter $kotSzallitoTargyev
     * @return {number}
     */
	public get $kotSzallitoTargyev(): number {
		return this.kotSzallitoTargyev;
	}

    /**
     * Getter $kotSzallitoElozoEv
     * @return {number}
     */
	public get $kotSzallitoElozoEv(): number {
		return this.kotSzallitoElozoEv;
	}

    /**
     * Getter $kotSzallitoKonkurencia
     * @return {number}
     */
	public get $kotSzallitoKonkurencia(): number {
		return this.kotSzallitoKonkurencia;
	}

    /**
     * Getter $kotSzallitoQ2
     * @return {number}
     */
	public get $kotSzallitoQ2(): number {
		return this.kotSzallitoQ2;
	}

    /**
     * Getter $kotSzallitoQ3
     * @return {number}
     */
	public get $kotSzallitoQ3(): number {
		return this.kotSzallitoQ3;
	}

    /**
     * Getter $tokeTargyev
     * @return {number}
     */
	public get $tokeTargyev(): number {
		return this.tokeTargyev;
	}

    /**
     * Getter $tokeElozoEv
     * @return {number}
     */
	public get $tokeElozoEv(): number {
		return this.tokeElozoEv;
	}

    /**
     * Getter $tokeKonkurencia
     * @return {number}
     */
	public get $tokeKonkurencia(): number {
		return this.tokeKonkurencia;
	}

    /**
     * Getter $tokeQ2
     * @return {number}
     */
	public get $tokeQ2(): number {
		return this.tokeQ2;
	}

    /**
     * Getter $tokeQ3
     * @return {number}
     */
	public get $tokeQ3(): number {
		return this.tokeQ3;
	}

    /**
     * Getter $rovidLejaratuKotTargyev
     * @return {number}
     */
	public get $rovidLejaratuKotTargyev(): number {
		return this.rovidLejaratuKotTargyev;
	}

    /**
     * Getter $rovidLejaratuKotElozoEv
     * @return {number}
     */
	public get $rovidLejaratuKotElozoEv(): number {
		return this.rovidLejaratuKotElozoEv;
	}

    /**
     * Getter $rovidLejaratuKotKonkurencia
     * @return {number}
     */
	public get $rovidLejaratuKotKonkurencia(): number {
		return this.rovidLejaratuKotKonkurencia;
	}

    /**
     * Getter $rovidLejaratuKotQ2
     * @return {number}
     */
	public get $rovidLejaratuKotQ2(): number {
		return this.rovidLejaratuKotQ2;
	}

    /**
     * Getter $rovidLejaratuKotQ3
     * @return {number}
     */
	public get $rovidLejaratuKotQ3(): number {
		return this.rovidLejaratuKotQ3;
	}

    /**
     * Getter $osszKotTargyev
     * @return {number}
     */
	public get $osszKotTargyev(): number {
		return this.osszKotTargyev;
	}

    /**
     * Getter $osszKotElozoEv
     * @return {number}
     */
	public get $osszKotElozoEv(): number {
		return this.osszKotElozoEv;
	}

    /**
     * Getter $osszKotKonkurencia
     * @return {number}
     */
	public get $osszKotKonkurencia(): number {
		return this.osszKotKonkurencia;
	}

    /**
     * Getter $osszKotQ2
     * @return {number}
     */
	public get $osszKotQ2(): number {
		return this.osszKotQ2;
	}

    /**
     * Getter $osszKotQ3
     * @return {number}
     */
	public get $osszKotQ3(): number {
		return this.osszKotQ3;
	}

    /**
     * Getter $alkalmazottakSzamaTargyev
     * @return {number}
     */
	public get $alkalmazottakSzamaTargyev(): number {
		return this.alkalmazottakSzamaTargyev;
	}

    /**
     * Getter $alkalmazottakSzamaElozoEv
     * @return {number}
     */
	public get $alkalmazottakSzamaElozoEv(): number {
		return this.alkalmazottakSzamaElozoEv;
	}

    /**
     * Getter $alkalmazottakSzamaKonkurencia
     * @return {number}
     */
	public get $alkalmazottakSzamaKonkurencia(): number {
		return this.alkalmazottakSzamaKonkurencia;
	}

    /**
     * Getter $alkalmazottakSzamaQ2
     * @return {number}
     */
	public get $alkalmazottakSzamaQ2(): number {
		return this.alkalmazottakSzamaQ2;
	}

    /**
     * Getter $alkalmazottakSzamaQ3
     * @return {number}
     */
	public get $alkalmazottakSzamaQ3(): number {
		return this.alkalmazottakSzamaQ3;
	}

    /**
     * Getter $reszvenyArfolyamTargyev
     * @return {number}
     */
	public get $reszvenyArfolyamTargyev(): number {
		return this.reszvenyArfolyamTargyev;
	}

    /**
     * Getter $reszvenyArfolyamElozoEv
     * @return {number}
     */
	public get $reszvenyArfolyamElozoEv(): number {
		return this.reszvenyArfolyamElozoEv;
	}

    /**
     * Getter $reszvenyArfolyamKonkurencia
     * @return {number}
     */
	public get $reszvenyArfolyamKonkurencia(): number {
		return this.reszvenyArfolyamKonkurencia;
	}

    /**
     * Getter $reszvenyArfolyamQ2
     * @return {number}
     */
	public get $reszvenyArfolyamQ2(): number {
		return this.reszvenyArfolyamQ2;
	}

    /**
     * Getter $reszvenyArfolyamQ3
     * @return {number}
     */
	public get $reszvenyArfolyamQ3(): number {
		return this.reszvenyArfolyamQ3;
	}

    /**
     * Getter $naptarTargyev
     * @return {number}
     */
	public get $naptarTargyev(): number {
		return this.naptarTargyev;
	}

    /**
     * Getter $naptarElozoEv
     * @return {number}
     */
	public get $naptarElozoEv(): number {
		return this.naptarElozoEv;
	}

    /**
     * Getter $naptarKonkurencia
     * @return {number}
     */
	public get $naptarKonkurencia(): number {
		return this.naptarKonkurencia;
	}

    /**
     * Getter $naptarQ2
     * @return {number}
     */
	public get $naptarQ2(): number {
		return this.naptarQ2;
	}

    /**
     * Getter $naptarQ3
     * @return {number}
     */
	public get $naptarQ3(): number {
		return this.naptarQ3;
	}

    /**
     * Getter $hozamTargyev
     * @return {number}
     */
	public get $hozamTargyev(): number {
		return this.hozamTargyev;
	}

    /**
     * Getter $hozamElozoEv
     * @return {number}
     */
	public get $hozamElozoEv(): number {
		return this.hozamElozoEv;
	}

    /**
     * Getter $hozamKonkurencia
     * @return {number}
     */
	public get $hozamKonkurencia(): number {
		return this.hozamKonkurencia;
	}

    /**
     * Getter $hozamQ2
     * @return {number}
     */
	public get $hozamQ2(): number {
		return this.hozamQ2;
	}

    /**
     * Getter $hozamQ3
     * @return {number}
     */
	public get $hozamQ3(): number {
		return this.hozamQ3;
	}


    /**
     * Setter $nettoTargyev
     * @param {number} value
     */
	public set $nettoTargyev(value: number) {
		this.nettoTargyev = value;
	}

    /**
     * Setter $nettoElozoEv
     * @param {number} value
     */
	public set $nettoElozoEv(value: number) {
		this.nettoElozoEv = value;
	}

    /**
     * Setter $nettoKonkurencia
     * @param {number} value
     */
	public set $nettoKonkurencia(value: number) {
		this.nettoKonkurencia = value;
	}

    /**
     * Setter $nettoQ2
     * @param {number} value
     */
	public set $nettoQ2(value: number) {
		this.nettoQ2 = value;
	}

    /**
     * Setter $nettoQ3
     * @param {number} value
     */
	public set $nettoQ3(value: number) {
		this.nettoQ3 = value;
	}

    /**
     * Setter $eladottAruTargyev
     * @param {number} value
     */
	public set $eladottAruTargyev(value: number) {
		this.eladottAruTargyev = value;
	}

    /**
     * Setter $eladottAruElozoEv
     * @param {number} value
     */
	public set $eladottAruElozoEv(value: number) {
		this.eladottAruElozoEv = value;
	}

    /**
     * Setter $eladottAruKonkurencia
     * @param {number} value
     */
	public set $eladottAruKonkurencia(value: number) {
		this.eladottAruKonkurencia = value;
	}

    /**
     * Setter $eladottAruQ2
     * @param {number} value
     */
	public set $eladottAruQ2(value: number) {
		this.eladottAruQ2 = value;
	}

    /**
     * Setter $eladottAruQ3
     * @param {number} value
     */
	public set $eladottAruQ3(value: number) {
		this.eladottAruQ3 = value;
	}

    /**
     * Setter $tarsasagTargyev
     * @param {number} value
     */
	public set $tarsasagTargyev(value: number) {
		this.tarsasagTargyev = value;
	}

    /**
     * Setter $tarsasagElozoEv
     * @param {number} value
     */
	public set $tarsasagElozoEv(value: number) {
		this.tarsasagElozoEv = value;
	}

    /**
     * Setter $tarsasagKonkurencia
     * @param {number} value
     */
	public set $tarsasagKonkurencia(value: number) {
		this.tarsasagKonkurencia = value;
	}

    /**
     * Setter $tarsasagQ2
     * @param {number} value
     */
	public set $tarsasagQ2(value: number) {
		this.tarsasagQ2 = value;
	}

    /**
     * Setter $tarsasagQ3
     * @param {number} value
     */
	public set $tarsasagQ3(value: number) {
		this.tarsasagQ3 = value;
	}

    /**
     * Setter $kamatTargyev
     * @param {number} value
     */
	public set $kamatTargyev(value: number) {
		this.kamatTargyev = value;
	}

    /**
     * Setter $kamatElozoEv
     * @param {number} value
     */
	public set $kamatElozoEv(value: number) {
		this.kamatElozoEv = value;
	}

    /**
     * Setter $kamatKonkurencia
     * @param {number} value
     */
	public set $kamatKonkurencia(value: number) {
		this.kamatKonkurencia = value;
	}

    /**
     * Setter $kamatQ2
     * @param {number} value
     */
	public set $kamatQ2(value: number) {
		this.kamatQ2 = value;
	}

    /**
     * Setter $kamatQ3
     * @param {number} value
     */
	public set $kamatQ3(value: number) {
		this.kamatQ3 = value;
	}

    /**
     * Setter $fizetettKamatokTargyev
     * @param {number} value
     */
	public set $fizetettKamatokTargyev(value: number) {
		this.fizetettKamatokTargyev = value;
	}

    /**
     * Setter $fizetettKamatokElozoEv
     * @param {number} value
     */
	public set $fizetettKamatokElozoEv(value: number) {
		this.fizetettKamatokElozoEv = value;
	}

    /**
     * Setter $fizetettKamatokKonkurencia
     * @param {number} value
     */
	public set $fizetettKamatokKonkurencia(value: number) {
		this.fizetettKamatokKonkurencia = value;
	}

    /**
     * Setter $fizetettKamatokQ2
     * @param {number} value
     */
	public set $fizetettKamatokQ2(value: number) {
		this.fizetettKamatokQ2 = value;
	}

    /**
     * Setter $fizetettKamatokQ3
     * @param {number} value
     */
	public set $fizetettKamatokQ3(value: number) {
		this.fizetettKamatokQ3 = value;
	}

    /**
     * Setter $admTargyev
     * @param {number} value
     */
	public set $admTargyev(value: number) {
		this.admTargyev = value;
	}

    /**
     * Setter $admElozoEv
     * @param {number} value
     */
	public set $admElozoEv(value: number) {
		this.admElozoEv = value;
	}

    /**
     * Setter $admKonkurencia
     * @param {number} value
     */
	public set $admKonkurencia(value: number) {
		this.admKonkurencia = value;
	}

    /**
     * Setter $admQ2
     * @param {number} value
     */
	public set $admQ2(value: number) {
		this.admQ2 = value;
	}

    /**
     * Setter $admQ3
     * @param {number} value
     */
	public set $admQ3(value: number) {
		this.admQ3 = value;
	}

    /**
     * Setter $egyebTargyev
     * @param {number} value
     */
	public set $egyebTargyev(value: number) {
		this.egyebTargyev = value;
	}

    /**
     * Setter $egyebElozoEv
     * @param {number} value
     */
	public set $egyebElozoEv(value: number) {
		this.egyebElozoEv = value;
	}

    /**
     * Setter $egyebKonkurencia
     * @param {number} value
     */
	public set $egyebKonkurencia(value: number) {
		this.egyebKonkurencia = value;
	}

    /**
     * Setter $egyebQ2
     * @param {number} value
     */
	public set $egyebQ2(value: number) {
		this.egyebQ2 = value;
	}

    /**
     * Setter $egyebQ3
     * @param {number} value
     */
	public set $egyebQ3(value: number) {
		this.egyebQ3 = value;
	}

    /**
     * Setter $reszvenyTargyev
     * @param {number} value
     */
	public set $reszvenyTargyev(value: number) {
		this.reszvenyTargyev = value;
	}

    /**
     * Setter $reszvenyElozoEv
     * @param {number} value
     */
	public set $reszvenyElozoEv(value: number) {
		this.reszvenyElozoEv = value;
	}

    /**
     * Setter $reszvenyKonkurencia
     * @param {number} value
     */
	public set $reszvenyKonkurencia(value: number) {
		this.reszvenyKonkurencia = value;
	}

    /**
     * Setter $reszvenyQ2
     * @param {number} value
     */
	public set $reszvenyQ2(value: number) {
		this.reszvenyQ2 = value;
	}

    /**
     * Setter $reszvenyQ3
     * @param {number} value
     */
	public set $reszvenyQ3(value: number) {
		this.reszvenyQ3 = value;
	}

    /**
     * Setter $osztalekTargyev
     * @param {number} value
     */
	public set $osztalekTargyev(value: number) {
		this.osztalekTargyev = value;
	}

    /**
     * Setter $osztalekElozoEv
     * @param {number} value
     */
	public set $osztalekElozoEv(value: number) {
		this.osztalekElozoEv = value;
	}

    /**
     * Setter $osztalekKonkurencia
     * @param {number} value
     */
	public set $osztalekKonkurencia(value: number) {
		this.osztalekKonkurencia = value;
	}

    /**
     * Setter $osztalekQ2
     * @param {number} value
     */
	public set $osztalekQ2(value: number) {
		this.osztalekQ2 = value;
	}

    /**
     * Setter $osztalekQ3
     * @param {number} value
     */
	public set $osztalekQ3(value: number) {
		this.osztalekQ3 = value;
	}

    /**
     * Setter $elszamoltTargyev
     * @param {number} value
     */
	public set $elszamoltTargyev(value: number) {
		this.elszamoltTargyev = value;
	}

    /**
     * Setter $elszamoltElozoEv
     * @param {number} value
     */
	public set $elszamoltElozoEv(value: number) {
		this.elszamoltElozoEv = value;
	}

    /**
     * Setter $elszamoltKonkurencia
     * @param {number} value
     */
	public set $elszamoltKonkurencia(value: number) {
		this.elszamoltKonkurencia = value;
	}

    /**
     * Setter $elszamoltQ2
     * @param {number} value
     */
	public set $elszamoltQ2(value: number) {
		this.elszamoltQ2 = value;
	}

    /**
     * Setter $elszamoltQ3
     * @param {number} value
     */
	public set $elszamoltQ3(value: number) {
		this.elszamoltQ3 = value;
	}

    /**
     * Setter $keszpenzTargyev
     * @param {number} value
     */
	public set $keszpenzTargyev(value: number) {
		this.keszpenzTargyev = value;
	}

    /**
     * Setter $keszpenzElozoEv
     * @param {number} value
     */
	public set $keszpenzElozoEv(value: number) {
		this.keszpenzElozoEv = value;
	}

    /**
     * Setter $keszpenzKonkurencia
     * @param {number} value
     */
	public set $keszpenzKonkurencia(value: number) {
		this.keszpenzKonkurencia = value;
	}

    /**
     * Setter $keszpenzQ2
     * @param {number} value
     */
	public set $keszpenzQ2(value: number) {
		this.keszpenzQ2 = value;
	}

    /**
     * Setter $keszpenzQ3
     * @param {number} value
     */
	public set $keszpenzQ3(value: number) {
		this.keszpenzQ3 = value;
	}

    /**
     * Setter $kovetelesVevoTargyev
     * @param {number} value
     */
	public set $kovetelesVevoTargyev(value: number) {
		this.kovetelesVevoTargyev = value;
	}

    /**
     * Setter $kovetelesVevoElozoEv
     * @param {number} value
     */
	public set $kovetelesVevoElozoEv(value: number) {
		this.kovetelesVevoElozoEv = value;
	}

    /**
     * Setter $kovetelesVevoKonkurencia
     * @param {number} value
     */
	public set $kovetelesVevoKonkurencia(value: number) {
		this.kovetelesVevoKonkurencia = value;
	}

    /**
     * Setter $kovetelesVevoQ2
     * @param {number} value
     */
	public set $kovetelesVevoQ2(value: number) {
		this.kovetelesVevoQ2 = value;
	}

    /**
     * Setter $kovetelesVevoQ3
     * @param {number} value
     */
	public set $kovetelesVevoQ3(value: number) {
		this.kovetelesVevoQ3 = value;
	}

    /**
     * Setter $keszletTargyev
     * @param {number} value
     */
	public set $keszletTargyev(value: number) {
		this.keszletTargyev = value;
	}

    /**
     * Setter $keszletElozoEv
     * @param {number} value
     */
	public set $keszletElozoEv(value: number) {
		this.keszletElozoEv = value;
	}

    /**
     * Setter $keszletKonkurencia
     * @param {number} value
     */
	public set $keszletKonkurencia(value: number) {
		this.keszletKonkurencia = value;
	}

    /**
     * Setter $keszletQ2
     * @param {number} value
     */
	public set $keszletQ2(value: number) {
		this.keszletQ2 = value;
	}

    /**
     * Setter $keszletQ3
     * @param {number} value
     */
	public set $keszletQ3(value: number) {
		this.keszletQ3 = value;
	}

    /**
     * Setter $jovairasTargyev
     * @param {number} value
     */
	public set $jovairasTargyev(value: number) {
		this.jovairasTargyev = value;
	}

    /**
     * Setter $jovairasElozoEv
     * @param {number} value
     */
	public set $jovairasElozoEv(value: number) {
		this.jovairasElozoEv = value;
	}

    /**
     * Setter $jovairasKonkurencia
     * @param {number} value
     */
	public set $jovairasKonkurencia(value: number) {
		this.jovairasKonkurencia = value;
	}

    /**
     * Setter $jovairasQ2
     * @param {number} value
     */
	public set $jovairasQ2(value: number) {
		this.jovairasQ2 = value;
	}

    /**
     * Setter $jovairasQ3
     * @param {number} value
     */
	public set $jovairasQ3(value: number) {
		this.jovairasQ3 = value;
	}

    /**
     * Setter $immTargyev
     * @param {number} value
     */
	public set $immTargyev(value: number) {
		this.immTargyev = value;
	}

    /**
     * Setter $immElozoEv
     * @param {number} value
     */
	public set $immElozoEv(value: number) {
		this.immElozoEv = value;
	}

    /**
     * Setter $immKonkurencia
     * @param {number} value
     */
	public set $immKonkurencia(value: number) {
		this.immKonkurencia = value;
	}

    /**
     * Setter $immQ2
     * @param {number} value
     */
	public set $immQ2(value: number) {
		this.immQ2 = value;
	}

    /**
     * Setter $immQ3
     * @param {number} value
     */
	public set $immQ3(value: number) {
		this.immQ3 = value;
	}

    /**
     * Setter $forgoTargyev
     * @param {number} value
     */
	public set $forgoTargyev(value: number) {
		this.forgoTargyev = value;
	}

    /**
     * Setter $forgoElozoEv
     * @param {number} value
     */
	public set $forgoElozoEv(value: number) {
		this.forgoElozoEv = value;
	}

    /**
     * Setter $forgoKonkurencia
     * @param {number} value
     */
	public set $forgoKonkurencia(value: number) {
		this.forgoKonkurencia = value;
	}

    /**
     * Setter $forgoQ2
     * @param {number} value
     */
	public set $forgoQ2(value: number) {
		this.forgoQ2 = value;
	}

    /**
     * Setter $forgoQ3
     * @param {number} value
     */
	public set $forgoQ3(value: number) {
		this.forgoQ3 = value;
	}

    /**
     * Setter $eszkozTargyev
     * @param {number} value
     */
	public set $eszkozTargyev(value: number) {
		this.eszkozTargyev = value;
	}

    /**
     * Setter $eszkozElozoEv
     * @param {number} value
     */
	public set $eszkozElozoEv(value: number) {
		this.eszkozElozoEv = value;
	}

    /**
     * Setter $eszkozKonkurencia
     * @param {number} value
     */
	public set $eszkozKonkurencia(value: number) {
		this.eszkozKonkurencia = value;
	}

    /**
     * Setter $eszkozQ2
     * @param {number} value
     */
	public set $eszkozQ2(value: number) {
		this.eszkozQ2 = value;
	}

    /**
     * Setter $eszkozQ3
     * @param {number} value
     */
	public set $eszkozQ3(value: number) {
		this.eszkozQ3 = value;
	}

    /**
     * Setter $kotSzallitoTargyev
     * @param {number} value
     */
	public set $kotSzallitoTargyev(value: number) {
		this.kotSzallitoTargyev = value;
	}

    /**
     * Setter $kotSzallitoElozoEv
     * @param {number} value
     */
	public set $kotSzallitoElozoEv(value: number) {
		this.kotSzallitoElozoEv = value;
	}

    /**
     * Setter $kotSzallitoKonkurencia
     * @param {number} value
     */
	public set $kotSzallitoKonkurencia(value: number) {
		this.kotSzallitoKonkurencia = value;
	}

    /**
     * Setter $kotSzallitoQ2
     * @param {number} value
     */
	public set $kotSzallitoQ2(value: number) {
		this.kotSzallitoQ2 = value;
	}

    /**
     * Setter $kotSzallitoQ3
     * @param {number} value
     */
	public set $kotSzallitoQ3(value: number) {
		this.kotSzallitoQ3 = value;
	}

    /**
     * Setter $tokeTargyev
     * @param {number} value
     */
	public set $tokeTargyev(value: number) {
		this.tokeTargyev = value;
	}

    /**
     * Setter $tokeElozoEv
     * @param {number} value
     */
	public set $tokeElozoEv(value: number) {
		this.tokeElozoEv = value;
	}

    /**
     * Setter $tokeKonkurencia
     * @param {number} value
     */
	public set $tokeKonkurencia(value: number) {
		this.tokeKonkurencia = value;
	}

    /**
     * Setter $tokeQ2
     * @param {number} value
     */
	public set $tokeQ2(value: number) {
		this.tokeQ2 = value;
	}

    /**
     * Setter $tokeQ3
     * @param {number} value
     */
	public set $tokeQ3(value: number) {
		this.tokeQ3 = value;
	}

    /**
     * Setter $rovidLejaratuKotTargyev
     * @param {number} value
     */
	public set $rovidLejaratuKotTargyev(value: number) {
		this.rovidLejaratuKotTargyev = value;
	}

    /**
     * Setter $rovidLejaratuKotElozoEv
     * @param {number} value
     */
	public set $rovidLejaratuKotElozoEv(value: number) {
		this.rovidLejaratuKotElozoEv = value;
	}

    /**
     * Setter $rovidLejaratuKotKonkurencia
     * @param {number} value
     */
	public set $rovidLejaratuKotKonkurencia(value: number) {
		this.rovidLejaratuKotKonkurencia = value;
	}

    /**
     * Setter $rovidLejaratuKotQ2
     * @param {number} value
     */
	public set $rovidLejaratuKotQ2(value: number) {
		this.rovidLejaratuKotQ2 = value;
	}

    /**
     * Setter $rovidLejaratuKotQ3
     * @param {number} value
     */
	public set $rovidLejaratuKotQ3(value: number) {
		this.rovidLejaratuKotQ3 = value;
	}

    /**
     * Setter $osszKotTargyev
     * @param {number} value
     */
	public set $osszKotTargyev(value: number) {
		this.osszKotTargyev = value;
	}

    /**
     * Setter $osszKotElozoEv
     * @param {number} value
     */
	public set $osszKotElozoEv(value: number) {
		this.osszKotElozoEv = value;
	}

    /**
     * Setter $osszKotKonkurencia
     * @param {number} value
     */
	public set $osszKotKonkurencia(value: number) {
		this.osszKotKonkurencia = value;
	}

    /**
     * Setter $osszKotQ2
     * @param {number} value
     */
	public set $osszKotQ2(value: number) {
		this.osszKotQ2 = value;
	}

    /**
     * Setter $osszKotQ3
     * @param {number} value
     */
	public set $osszKotQ3(value: number) {
		this.osszKotQ3 = value;
	}

    /**
     * Setter $alkalmazottakSzamaTargyev
     * @param {number} value
     */
	public set $alkalmazottakSzamaTargyev(value: number) {
		this.alkalmazottakSzamaTargyev = value;
	}

    /**
     * Setter $alkalmazottakSzamaElozoEv
     * @param {number} value
     */
	public set $alkalmazottakSzamaElozoEv(value: number) {
		this.alkalmazottakSzamaElozoEv = value;
	}

    /**
     * Setter $alkalmazottakSzamaKonkurencia
     * @param {number} value
     */
	public set $alkalmazottakSzamaKonkurencia(value: number) {
		this.alkalmazottakSzamaKonkurencia = value;
	}

    /**
     * Setter $alkalmazottakSzamaQ2
     * @param {number} value
     */
	public set $alkalmazottakSzamaQ2(value: number) {
		this.alkalmazottakSzamaQ2 = value;
	}

    /**
     * Setter $alkalmazottakSzamaQ3
     * @param {number} value
     */
	public set $alkalmazottakSzamaQ3(value: number) {
		this.alkalmazottakSzamaQ3 = value;
	}

    /**
     * Setter $reszvenyArfolyamTargyev
     * @param {number} value
     */
	public set $reszvenyArfolyamTargyev(value: number) {
		this.reszvenyArfolyamTargyev = value;
	}

    /**
     * Setter $reszvenyArfolyamElozoEv
     * @param {number} value
     */
	public set $reszvenyArfolyamElozoEv(value: number) {
		this.reszvenyArfolyamElozoEv = value;
	}

    /**
     * Setter $reszvenyArfolyamKonkurencia
     * @param {number} value
     */
	public set $reszvenyArfolyamKonkurencia(value: number) {
		this.reszvenyArfolyamKonkurencia = value;
	}

    /**
     * Setter $reszvenyArfolyamQ2
     * @param {number} value
     */
	public set $reszvenyArfolyamQ2(value: number) {
		this.reszvenyArfolyamQ2 = value;
	}

    /**
     * Setter $reszvenyArfolyamQ3
     * @param {number} value
     */
	public set $reszvenyArfolyamQ3(value: number) {
		this.reszvenyArfolyamQ3 = value;
	}

    /**
     * Setter $naptarTargyev
     * @param {number} value
     */
	public set $naptarTargyev(value: number) {
		this.naptarTargyev = value;
	}

    /**
     * Setter $naptarElozoEv
     * @param {number} value
     */
	public set $naptarElozoEv(value: number) {
		this.naptarElozoEv = value;
	}

    /**
     * Setter $naptarKonkurencia
     * @param {number} value
     */
	public set $naptarKonkurencia(value: number) {
		this.naptarKonkurencia = value;
	}

    /**
     * Setter $naptarQ2
     * @param {number} value
     */
	public set $naptarQ2(value: number) {
		this.naptarQ2 = value;
	}

    /**
     * Setter $naptarQ3
     * @param {number} value
     */
	public set $naptarQ3(value: number) {
		this.naptarQ3 = value;
	}

    /**
     * Setter $hozamTargyev
     * @param {number} value
     */
	public set $hozamTargyev(value: number) {
		this.hozamTargyev = value;
	}

    /**
     * Setter $hozamElozoEv
     * @param {number} value
     */
	public set $hozamElozoEv(value: number) {
		this.hozamElozoEv = value;
	}

    /**
     * Setter $hozamKonkurencia
     * @param {number} value
     */
	public set $hozamKonkurencia(value: number) {
		this.hozamKonkurencia = value;
	}

    /**
     * Setter $hozamQ2
     * @param {number} value
     */
	public set $hozamQ2(value: number) {
		this.hozamQ2 = value;
	}

    /**
     * Setter $hozamQ3
     * @param {number} value
     */
	public set $hozamQ3(value: number) {
		this.hozamQ3 = value;
	}


}

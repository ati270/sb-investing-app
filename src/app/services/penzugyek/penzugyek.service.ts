import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PenzugyekService {

  private osszMegtakaritasMap: Map<string, number>;
  private osszBevetelMap: Map<string, number>;
  private osszKiadasMap: Map<string, number>;
  private osszRezsiMap: Map<string, number>;
  private osszElvCikkekMap: Map<string, number>;
  private osszUtKoltsMap: Map<string, number>;
  private osszFogyCikkekMap: Map<string, number>;
  private osszRuhazkodasMap: Map<string, number>;
  private osszEgyebMap: Map<string, number>;

  constructor() { }



  /**
   * Getter $osszMegtakaritasMap
   * @return {Map<string, number>}
   */
  public get $osszMegtakaritasMap(): Map<string, number> {
    return this.osszMegtakaritasMap;
  }

  /**
   * Setter $osszMegtakaritasMap
   * @param {Map<string, number>} value
   */
  public set $osszMegtakaritasMap(value: Map<string, number>) {
    this.osszMegtakaritasMap = value;
  }


  /**
   * Getter $osszBevetelMap
   * @return {Map<string, number>}
   */
  public get $osszBevetelMap(): Map<string, number> {
    return this.osszBevetelMap;
  }

  /**
   * Setter $osszBevetelMap
   * @param {Map<string, number>} value
   */
  public set $osszBevetelMap(value: Map<string, number>) {
    this.osszBevetelMap = value;
  }


    /**
     * Getter $osszKiadasMap
     * @return {Map<string, number>}
     */
	public get $osszKiadasMap(): Map<string, number> {
		return this.osszKiadasMap;
	}

    /**
     * Getter $osszRezsiMap
     * @return {Map<string, number>}
     */
	public get $osszRezsiMap(): Map<string, number> {
		return this.osszRezsiMap;
	}

    /**
     * Getter $osszElvCikkekMap
     * @return {Map<string, number>}
     */
	public get $osszElvCikkekMap(): Map<string, number> {
		return this.osszElvCikkekMap;
	}

    /**
     * Getter $osszUtKoltsMap
     * @return {Map<string, number>}
     */
	public get $osszUtKoltsMap(): Map<string, number> {
		return this.osszUtKoltsMap;
	}

    /**
     * Getter $osszFogyCikkekMap
     * @return {Map<string, number>}
     */
	public get $osszFogyCikkekMap(): Map<string, number> {
		return this.osszFogyCikkekMap;
	}

    /**
     * Getter $osszRuhazkodasMap
     * @return {Map<string, number>}
     */
	public get $osszRuhazkodasMap(): Map<string, number> {
		return this.osszRuhazkodasMap;
	}

    /**
     * Getter $osszEgyebMap
     * @return {Map<string, number>}
     */
	public get $osszEgyebMap(): Map<string, number> {
		return this.osszEgyebMap;
	}

    /**
     * Setter $osszKiadasMap
     * @param {Map<string, number>} value
     */
	public set $osszKiadasMap(value: Map<string, number>) {
		this.osszKiadasMap = value;
	}

    /**
     * Setter $osszRezsiMap
     * @param {Map<string, number>} value
     */
	public set $osszRezsiMap(value: Map<string, number>) {
		this.osszRezsiMap = value;
	}

    /**
     * Setter $osszElvCikkekMap
     * @param {Map<string, number>} value
     */
	public set $osszElvCikkekMap(value: Map<string, number>) {
		this.osszElvCikkekMap = value;
	}

    /**
     * Setter $osszUtKoltsMap
     * @param {Map<string, number>} value
     */
	public set $osszUtKoltsMap(value: Map<string, number>) {
		this.osszUtKoltsMap = value;
	}

    /**
     * Setter $osszFogyCikkekMap
     * @param {Map<string, number>} value
     */
	public set $osszFogyCikkekMap(value: Map<string, number>) {
		this.osszFogyCikkekMap = value;
	}

    /**
     * Setter $osszRuhazkodasMap
     * @param {Map<string, number>} value
     */
	public set $osszRuhazkodasMap(value: Map<string, number>) {
		this.osszRuhazkodasMap = value;
	}

    /**
     * Setter $osszEgyebMap
     * @param {Map<string, number>} value
     */
	public set $osszEgyebMap(value: Map<string, number>) {
		this.osszEgyebMap = value;
	}




}

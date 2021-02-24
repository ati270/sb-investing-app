export class Feladat{
  private title: string;
  private besorolas: string;
  private hatarido: string;
  private color: string;

  public start?: string;
  public end?: string;


  constructor(){}



    /**
     * Getter $color
     * @return {string}
     */
	public get $color(): string {
		return this.color;
	}

    /**
     * Setter $color
     * @param {string} value
     */
	public set $color(value: string) {
		this.color = value;
	}

    /**
     * Getter $megnevezes
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Getter $besorolas
     * @return {string}
     */
	public get $besorolas(): string {
		return this.besorolas;
	}

    /**
     * Getter $hatarido
     * @return {string}
     */
	public get $hatarido(): string {
		return this.hatarido;
	}

    /**
     * Setter $megnevezes
     * @param {string} value
     */
	public set $title(value: string) {
		this.title = value;
	}

    /**
     * Setter $besorolas
     * @param {string} value
     */
	public set $besorolas(value: string) {
		this.besorolas = value;
	}

    /**
     * Setter $hatarido
     * @param {string} value
     */
	public set $hatarido(value: string) {
		this.hatarido = value;
	}



}

export class UjReszveny{
   private  ujReszvenyElemekList: any[];

    constructor(){
        this.ujReszvenyElemekList = new Array<UjReszveny>();
    }


    /**
     * Getter $ujReszvenyElemekList
     * @return {any[]}
     */
	public get $ujReszvenyElemekList(): any[] {
		return this.ujReszvenyElemekList;
	}

    /**
     * Setter $ujReszvenyElemekList
     * @param {any[]} value
     */
	public set $ujReszvenyElemekList(value: any[]) {
		this.ujReszvenyElemekList = value;
	}

    
}
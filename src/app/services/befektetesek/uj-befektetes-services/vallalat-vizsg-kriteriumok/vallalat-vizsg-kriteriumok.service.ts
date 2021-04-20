import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VallalatKockazatElemzes } from 'src/app/models/uj-befektetes-models/vallalat-vizsg-kriteriumok/vallalat-vizsg-kriteriumok.model';


@Injectable({
  providedIn: 'root'
})
export class VallalatVizsgKriteriumokService {

  vallalatKockazatelemzes: VallalatKockazatElemzes;
  private updatedAdatok: VallalatKockazatElemzes;

  constructor() { }

  createVallalatKockazatElemzes(
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
    ujReszvenyKiRiziko: number) {
    this.vallalatKockazatelemzes = new VallalatKockazatElemzes(
      reszvenyEredmeny,
      reszvenyRiziko,
      konyvEredmeny,
      konyvRiziko,
      epsEredmeny,
      epsRiziko,
      piaciKapEredmeny,
      piaciKapRiziko,
      hitelBesorolasEredmeny,
      hitelBesorolasRiziko,
      tobbsegiTulajEredmeny,
      tobbsegiTulajRiziko,
      cegInfoEredmeny,
      cegInfoRiziko,
      termekInfoEredmeny,
      termekInfoRiziko,
      kutatasFejlesztesEredmeny,
      kutatasFejlesztesRiziko,
      immaterialisEredmeny,
      immaterialisRiziko,
      egyebEredmeny,
      egyebRiziko,
      szuksegesAllomanyEredmeny,
      szuksegesAllomanyRiziko,
      elerhetoInfoEredmeny,
      elerhetoInfoRiziko,
      osztalekEredmeny,
      osztalekRiziko,
      vallalatTozsdeEredmeny,
      vallalatTozsdeRiziko,
      fontosTechEredmeny,
      fontosTechRiziko,
      voltCsucsonEredmeny,
      voltCsucsonRiziko,
      fuzioEredmeny,
      fuzioRiziko,
      betaEredmeny,
      betaRiziko,
      vezMeEredmeny,
      vezMeRiziko,
      ujReszvenyKiEredmeny,
      ujReszvenyKiRiziko
    )
  }

  getVallalatiKockazatElemzes(): Observable<VallalatKockazatElemzes>{
      return of(this.vallalatKockazatelemzes);
  }

  loadVallKrit(vallKrit: VallalatKockazatElemzes){
    this.updatedAdatok = vallKrit;
  }


    /**
     * Setter $updatedAdatok
     * @param {VallalatKockazatElemzes} value
     */
	public set $updatedAdatok(value: VallalatKockazatElemzes) {
		this.updatedAdatok = value;
	}

    /**
     * Getter $updatedAdatok
     * @return {VallalatKockazatElemzes}
     */
	public get $updatedAdatok(): VallalatKockazatElemzes {
		return this.updatedAdatok;
	}

}

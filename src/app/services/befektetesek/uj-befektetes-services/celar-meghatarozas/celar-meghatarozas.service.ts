import { Injectable } from '@angular/core';
import { CelarMeghatarozas } from 'src/app/models/uj-befektetes-models/celar-meghatarozas/celar-meghatarozas.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelarMeghatarozasService {

  private celarMeghatarozasModel: CelarMeghatarozas;
  private haszonVesztes: number;
  private diszkontRata: number;
  private celar: number;
  private kotesiArfolyamok: number[];

  constructor() { }


    createCelar(konkurenciaMutato: number, konyvSzerintiErtek: number, elvartHozam: number){
      this.celarMeghatarozasModel = new CelarMeghatarozas(konkurenciaMutato, konyvSzerintiErtek, elvartHozam);
    }

    /**
     * Getter $celarMeghatarozas
     * @return {CelarMeghatarozas}
     */
	public getCelarMeghatarozas(): Observable<CelarMeghatarozas> {

		return of(this.celarMeghatarozasModel);
  }
  
  // Kalkuláció


    /**
     * Getter $celar
     * @return {number}
     */
	public get $celar(): number {

    this.celar = this.celarMeghatarozasModel.$konkurenciaMutato * this.celarMeghatarozasModel.$konyvSzerintiErtek;
		return this.celar;
	}

    /**
     * Getter $haszonVesztes
     * @return {number}
     */
	public get $haszonVesztes(): number {
    
    this.haszonVesztes = this.celarMeghatarozasModel.$elvartHozam / 100;
    
    return this.haszonVesztes;
	}

    /**
     * Getter $diszkontRata
     * @return {number}
     */
	public get $diszkontRata(): number {

    this.diszkontRata = this.$haszonVesztes +1;

		return this.diszkontRata;
	}

  // Kötési árfolyamok

    /**
     * Getter $kotesiArfolyamok
     * @return {number[]}
     */
	public get $kotesiArfolyamok(): number[] {
    let kotesiArfolyam = 0;
    for(let i = 1; i<=10; i++){
      kotesiArfolyam = this.$celar / Math.pow(this.$diszkontRata, i);

      this.kotesiArfolyamok.push(kotesiArfolyam);
    }

		return this.kotesiArfolyamok;
	}



}

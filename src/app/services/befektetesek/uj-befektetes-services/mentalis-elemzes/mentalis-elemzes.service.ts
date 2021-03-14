import { Injectable } from '@angular/core';
import { MentalisElemzes } from 'src/app/models/uj-befektetes-models/mentalis-elemzes/mentalis-elemzes.model';
import { Observable, of } from 'rxjs';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';

@Injectable({
  providedIn: 'root'
})
export class MentalisElemzesService {

  mentalisElemzes: MentalisElemzes;
  private updatedMentalisElemzes: MentalisElemzes;


  constructor() { }

  createMentalisElemzes(fokozott: string, fokozottElv: boolean[], kavargo: string, kavargoElv: boolean[], indokolatlan: string, indokolatlanElv: boolean[], kellemetlen: string, kellemetlenElv: boolean[], ellensegesseg: string, ellensegessegElv: boolean[], onbizalom: string, onbizalomElv: boolean[], felelem: string, felelemElv: boolean[], kimerultseg: string , kimerultsegElv: boolean[], introvertalt: string, introvertaltElv: boolean[], szomorusag: string, szomorusagElv: boolean[]){
    this.mentalisElemzes = new MentalisElemzes(
      fokozott, fokozottElv, kavargo, kavargoElv,
      indokolatlan, indokolatlanElv, kellemetlen, kellemetlenElv,
      ellensegesseg, ellensegessegElv,
      onbizalom, onbizalomElv, felelem, felelemElv,
      kimerultseg, kimerultsegElv, introvertalt, introvertaltElv,
      szomorusag, szomorusagElv
      )
  }

  getMentalisElemzes(): Observable<MentalisElemzes>{

    return of(this.mentalisElemzes);
  }

  loadMentalisElemzes(mentalisElemzes: MentalisElemzes){

    this.updatedMentalisElemzes = mentalisElemzes;

  }


    /**
     * Getter $updatedMentalisElemzes
     * @return {MentalisElemzes}
     */
	public get $updatedMentalisElemzes(): MentalisElemzes {
		return this.updatedMentalisElemzes;
	}

    /**
     * Setter $updatedMentalisElemzes
     * @param {MentalisElemzes} value
     */
	public set $updatedMentalisElemzes(value: MentalisElemzes) {
		this.updatedMentalisElemzes = value;
	}

}

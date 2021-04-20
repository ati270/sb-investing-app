import { Injectable } from '@angular/core';
import { PenzugyiAdatok } from 'src/app/models/uj-befektetes-models/penzugyi-adatok/penzugyi-adatok.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PenzugyiAdatokService {

  penzugyiAdatok: PenzugyiAdatok;
  private updatedAdatok: PenzugyiAdatok;

  constructor() { }

  addPenzugyiAdatok(
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
    this.penzugyiAdatok = new PenzugyiAdatok(
      nettoTargyev,
      nettoElozoEv,
      nettoKonkurencia,
      nettoQ2,
      nettoQ3,
      eladottAruTargyev,
      eladottAruElozoEv,
      eladottAruKonkurencia,
      eladottAruQ2,
      eladottAruQ3,
      tarsasagTargyev,
      tarsasagElozoEv,
      tarsasagKonkurencia,
      tarsasagQ2,
      tarsasagQ3,
      kamatTargyev,
      kamatElozoEv,
      kamatKonkurencia,
      kamatQ2,
      kamatQ3,
      fizetettKamatokTargyev,
      fizetettKamatokElozoEv,
      fizetettKamatokKonkurencia,
      fizetettKamatokQ2,
      fizetettKamatokQ3,
      admTargyev,
      admElozoEv,
      admKonkurencia,
      admQ2,
      admQ3,
      egyebTargyev,
      egyebElozoEv,
      egyebKonkurencia,
      egyebQ2,
      egyebQ3,
      reszvenyTargyev,
      reszvenyElozoEv,
      reszvenyKonkurencia,
      reszvenyQ2,
      reszvenyQ3,
      osztalekTargyev,
      osztalekElozoEv,
      osztalekKonkurencia,
      osztalekQ2,
      osztalekQ3,
      elszamoltTargyev,
      elszamoltElozoEv,
      elszamoltKonkurencia,
      elszamoltQ2,
      elszamoltQ3,
      keszpenzTargyev,
      keszpenzElozoEv,
      keszpenzKonkurencia,
      keszpenzQ2,
      keszpenzQ3,
      kovetelesVevoTargyev,
      kovetelesVevoElozoEv,
      kovetelesVevoKonkurencia,
      kovetelesVevoQ2,
      kovetelesVevoQ3,
      keszletTargyev,
      keszletElozoEv,
      keszletKonkurencia,
      keszletQ2,
      keszletQ3,
      jovairasTargyev,
      jovairasElozoEv,
      jovairasKonkurencia,
      jovairasQ2,
      jovairasQ3,
      immTargyev,
      immElozoEv,
      immKonkurencia,
      immQ2,
      immQ3,
      forgoTargyev,
      forgoElozoEv,
      forgoKonkurencia,
      forgoQ2,
      forgoQ3,
      eszkozTargyev,
      eszkozElozoEv,
      eszkozKonkurencia,
      eszkozQ2,
      eszkozQ3,
      kotSzallitoTargyev,
      kotSzallitoElozoEv,
      kotSzallitoKonkurencia,
      kotSzallitoQ2,
      kotSzallitoQ3,
      tokeTargyev,
      tokeElozoEv,
      tokeKonkurencia,
      tokeQ2,
      tokeQ3,
      rovidLejaratuKotTargyev,
      rovidLejaratuKotElozoEv,
      rovidLejaratuKotKonkurencia,
      rovidLejaratuKotQ2,
      rovidLejaratuKotQ3,
      osszKotTargyev,
      osszKotElozoEv,
      osszKotKonkurencia,
      osszKotQ2,
      osszKotQ3,
      alkalmazottakSzamaTargyev,
      alkalmazottakSzamaElozoEv,
      alkalmazottakSzamaKonkurencia,
      alkalmazottakSzamaQ2,
      alkalmazottakSzamaQ3,
      reszvenyArfolyamTargyev,
      reszvenyArfolyamElozoEv,
      reszvenyArfolyamKonkurencia,
      reszvenyArfolyamQ2,
      reszvenyArfolyamQ3,
      naptarTargyev,
      naptarElozoEv,
      naptarKonkurencia,
      naptarQ2,
      naptarQ3,
      hozamTargyev,
      hozamElozoEv,
      hozamKonkurencia,
      hozamQ2,
      hozamQ3
    );
  }

  getPenzugyiAdatok(): Observable<PenzugyiAdatok> {
    return of(this.penzugyiAdatok);
  }

  loadPenzugyiAdatok(penzugyiAdatok: PenzugyiAdatok) {
    this.updatedAdatok = penzugyiAdatok;
  }


  /**
   * Getter $updatedAdatok
   * @return {PenzugyiAdatok}
   */
  public get $updatedAdatok(): PenzugyiAdatok {
    return this.updatedAdatok;
  }

  /**
   * Setter $updatedAdatok
   * @param {PenzugyiAdatok} value
   */
  public set $updatedAdatok(value: PenzugyiAdatok) {
    this.updatedAdatok = value;
  }


}

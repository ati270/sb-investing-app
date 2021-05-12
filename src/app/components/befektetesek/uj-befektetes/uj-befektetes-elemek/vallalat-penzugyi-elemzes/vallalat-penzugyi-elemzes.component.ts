import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { VallalatPenzugyiElemzes } from 'src/app/models/uj-befektetes-models/vallalat-penz-elemzes/vallalat-penz-elemzes.model';
import { VallalatPenzElemzesService } from 'src/app/services/befektetesek/uj-befektetes-services/vallalat-penz-elemzes/vallalat-penz-elemzes.service';

export interface dataArguments {
  filled: boolean;
  vallalatPenzugyiElemzes: VallalatPenzugyiElemzes;
}
@Component({
  selector: 'app-vallalat-penzugyi-elemzes',
  templateUrl: './vallalat-penzugyi-elemzes.component.html',
  styleUrls: ['./vallalat-penzugyi-elemzes.component.scss'],
  providers: [MessageService]
})
export class VallalatPenzugyiElemzesComponent implements OnInit, AfterViewInit {

  vallalatPenzugyiElemzes: VallalatPenzugyiElemzes;

  @Output() filledVallPenzElemzesEmitter: EventEmitter<VallalatPenzugyiElemzes> = new EventEmitter();
  allFilled: boolean;

  isLinear = false;
  jovedelmezosegiFormGroup: FormGroup;
  hatekonysagiFormGroup: FormGroup;
  hitelFormGroup: FormGroup;
  piaciFormGroup: FormGroup;

  private osszErtekesites: number;
  private koltsegHatekonySzazelek: number;
  private szallitoForgasiSebessege: number;
  private szallitoKifizetesiNapokSzama: number;
  private beosztottAltalTermeltNetto: number;
  private forgoTokeAllomanya: number;
  private forgoTokeMegterules: number;
  // Saját tőke arány
  private hitelSajatTokeArany: number;
  private hitelImmJavakArany: number;
  private hitelJovairasArany: number;
  private hitelOsszHosszuLejKot: number;
  private hitelSzigoritottSajatToke: number;
  private hitelSajatTokeAranyIdegenToke: number;
  //Kamatfedezeti mutató
  private hitelKamatJovElottiEredmeny: number;
  private hitelErtekCsokk: number;
  private hitelKamat: number;
  private hitelKifOsztalek: number;
  private hitelNyeresegFedezet: number;
  private hitelEBIDTA: number;
  // Likviditási ráta (rövid távú eladós.)
  private hitelOsszForgo: number;
  private hitelRovidKot: number;
  private hitelForgoEszkozErteke: number;
  //Likviditási gyorsráta
  private hitelGyorsOsszForgo: number;
  private hitelGyorsKeszletek: number;
  private hitelGyorsKeszNelkuliForgo: number;
  private hitelGyorsRovidLejKot: number;
  private hitelGyorsPenzeszkozokErteke: number;

  //PIACI MUTATÓK
  // Árfolyam nyereség arány
  private piaciReszvenyArfolyam: number;
  private piaciNettoEredmeny: number;
  private piaciReszvenyDarabszama: number;
  private piaciReszvenyreJutoEredmeny: number;
  private piaciArfolyamEgyReszvenyre: number;
  // Befektetés belső kamatlába
  private piaciBefNettoEredmeny: number;
  private piaciBefReszvDbSzama: number;
  private piaciBefReszvArfolyam: number;
  private piaciBefBelsoKamatlaba: number;
  private piaciBefCegPiaciErteke: number;
  // Arfolyam/ kömyv szerinti érték
  private piaciKonyvReszvenyArfolyam: number;
  private piaciKonyvSajatToke: number;
  private piaciKonyvGoodWill: number;
  private piaciKonyvImmJavak: number;
  private piaciKonyvReszDbSzama: number;
  private piaciKonyvArfolyamErteke: number;
  private piaciKonyvKonyvSzerintiErtek: number;

  constructor(private _formBuilder: FormBuilder, private vallalatPenzugyiElemzesService: VallalatPenzElemzesService,
    private messageService: MessageService) { }


  ngOnInit(): void {
    this.allFilled = false;
    this.createJovFormGroup();

    this.createHatekonysagFormGroup();

    this.createHitelFormGroup();

    this.createPiaciFormGroup();

  }

  ngAfterViewInit(): void {
    if(this.vallalatPenzugyiElemzesService.$updatedAdatok !== undefined){
    this.loadVallPenz();
    }
  }

  loadVallPenz() {
    let vallPenz = this.vallalatPenzugyiElemzesService.$updatedAdatok;

    this.patchFormGroup(vallPenz);

  }

  patchFormGroup(vallPenzElemzes: VallalatPenzugyiElemzes){
      // bekötni a formgroupba
    this.jovedelmezosegiFormGroup.patchValue(vallPenzElemzes.vallalatPenzugyiElemzesJovedelmezoseg);
    this.hatekonysagiFormGroup.patchValue(vallPenzElemzes.vallalatPenzugyiElemzesHatekonysag);
    this.hitelFormGroup.patchValue(vallPenzElemzes.vallalatPenzugyiElemzesHitel);
    this.piaciFormGroup.patchValue(vallPenzElemzes.vallalatPenzugyiElemzesPiaci);
  }

  createJovFormGroup() {

    this.jovedelmezosegiFormGroup = this._formBuilder.group({
      jovMegjegyzesCtrl: new FormControl(''),
      jovedelemEszkozAdatok: this._formBuilder.group({
        nettoEszkozCtrl: new FormControl('', [Validators.required]),
        eszkozokEszkozCtrl: new FormControl('', Validators.required),
        targyevEszkozCtrl: new FormControl('', Validators.required),
        elozoevEszkozCtrl: new FormControl('', Validators.required),
        konkurenciaEszkozCtrl: new FormControl('', Validators.required)
      }),
      jovedelemSajatAdatok: this._formBuilder.group(
        {
          nettoSajatCtrl: new FormControl('', [Validators.required]),
          osszSajatTokeCtrl: new FormControl('', Validators.required),
          targyevSajatCtrl: new FormControl('', Validators.required),
          elozoevSajatCtrl: new FormControl('', Validators.required),
          konkurenciaSajatCtrl: new FormControl('', Validators.required)
        }
      ),
      jovedelemReszvenyAdatok: this._formBuilder.group(
        {
          nettoReszvenyCtrl: new FormControl('', [Validators.required]),
          reszvenyDbCtrl: new FormControl('', Validators.required),
          targyevReszvenyCtrl: new FormControl('', Validators.required),
          elozoevReszvenyCtrl: new FormControl('', Validators.required),
          konkurenciaReszvenyCtrl: new FormControl('', Validators.required)
        }
      ),
      jovedelemArbevetelAdatok: this._formBuilder.group(
        {
          nettoArbevetelCtrl: new FormControl('', [Validators.required]),
          arbevetelCtrl: new FormControl('', Validators.required),
          targyevArbevetelCtrl: new FormControl('', Validators.required),
          elozoevArbevetelCtrl: new FormControl('', Validators.required),
          konkurenciaArbevetelCtrl: new FormControl('', Validators.required)
        }
      ),
      jovedelemFedezetiAdatok: this._formBuilder.group(
        {
          bruttoFedezetCtrl: new FormControl('', [Validators.required]),
          eladottArukKtgCtrl: new FormControl('', [Validators.required]),
          nettoFedezetCtrl: new FormControl('', [Validators.required]),
          targyevFedezetCtrl: new FormControl('', [Validators.required]),
          elozoevFedezetCtrl: new FormControl('', [Validators.required]),
          konkurenciaFedezetCtrl: new FormControl('', [Validators.required])

        }
      )
    })
  }

  createHatekonysagFormGroup() {
    this.hatekonysagiFormGroup = this._formBuilder.group({
      hatMegjegyzesCtrl: new FormControl(''),
      hatekonysagKeszletAdatok: this._formBuilder.group({
        nettoHatCtrl: new FormControl('', Validators.required),
        keszletHatCtrl: new FormControl('', Validators.required),
        targyevKeszletHatCtrl: new FormControl('', Validators.required),
        elozoevKeszletHatCtrl: new FormControl('', Validators.required),
        konkurenciaKeszletHatCtrl: new FormControl('', Validators.required),
      }),
      hatekonysagKoltsegAdatok: this._formBuilder.group({
        ertHatCtrl: new FormControl('', Validators.required),
        hatEgyebMukodesiCtrl: new FormControl('', Validators.required),
        hatNettoArbevetelCtrl: new FormControl('', Validators.required),
        targyevKoltsegHatCtrl: new FormControl('', Validators.required),
        elozoevKoltsegHatCtrl: new FormControl('', Validators.required),
        konkurenciaKoltsegHatCtrl: new FormControl('', Validators.required),
      }),

      hatekonysagAtlagosBeszedesiIdoAdatok: this._formBuilder.group({
        naptarHatCtrl: new FormControl('', Validators.required),
        hatAtlagosNettoArbevetelCtrl: new FormControl('', Validators.required),
        hatAtlagosKovetelesCtrl: new FormControl('', Validators.required),
        targyevAtlagosHatCtrl: new FormControl('', Validators.required),
        elozoevAtlagosHatCtrl: new FormControl('', Validators.required),
        konkurenciaAtlagosHatCtrl: new FormControl('', Validators.required),
      }),

      hatekonysagSzallitokForgasiIdejeAdatok: this._formBuilder.group({
        naptarHatSzallitoCtrl: new FormControl('', Validators.required),
        hatSzallitoNettoArbevetelCtrl: new FormControl('', Validators.required),
        hatSzallitoKotelezettsegCtrl: new FormControl('', Validators.required),
        targyevSzallitoHatCtrl: new FormControl('', Validators.required),
        elozoevSzallitoHatCtrl: new FormControl('', Validators.required),
        konkurenciaSzallitoHatCtrl: new FormControl('', Validators.required),
      }),

      hatekonysagForeJutoArbevetelAdatok: this._formBuilder.group({
        foreJutoNettoHatCtrl: new FormControl('', Validators.required),
        foreJutoLetszamHatCtrl: new FormControl('', Validators.required),
        targyevForeJutoHatCtrl: new FormControl('', Validators.required),
        elozoevForeJutoHatCtrl: new FormControl('', Validators.required),
        konkurenciaForeJutoHatCtrl: new FormControl('', Validators.required)
      }),

      hatekonysagForgoTokeAdatok: this._formBuilder.group({
        forgoTokeHatNettoArbevetelCtrl: new FormControl('', Validators.required),
        forgoTokeHatForgoEszkozCtrl: new FormControl('', Validators.required),
        forgoTokeHatRovidLejKotCtrl: new FormControl('', Validators.required),
        targyevForgoTokeHatCtrl: new FormControl('', Validators.required),
        elozoevForgoTokeHatCtrl: new FormControl('', Validators.required),
        konkurenciaForgoTokeHatCtrl: new FormControl('', Validators.required)
      })
    })
  }

  createHitelFormGroup() {
    this.hitelFormGroup = this._formBuilder.group({
      hitelMegjegyzesCtrl: new FormControl(''),
      hitelSajatTokeAdatok: this._formBuilder.group({
        hitelSajatTokeCtrl: new FormControl('', Validators.required),
        hitelImmJavakCtrl: new FormControl('', Validators.required),
        hitelJovairasCtrl: new FormControl('', Validators.required),
        hitelOsszHosszLejKotCtrl: new FormControl('', Validators.required),
        targyevSajatTokeHitelCtrl: new FormControl('', Validators.required),
        elozoevSajatTokeHitelCtrl: new FormControl('', Validators.required),
        konkurenciaSajatTokeHitelCtrl: new FormControl('', Validators.required)
      }),
      hitelKamatFedezetAdatok: this._formBuilder.group({
        hitelKamatJovAdoElottiEredmenyCtrl: new FormControl('', Validators.required),
        hitelElszamoltAmortizacioCtrl: new FormControl('', Validators.required),
        hitelKamatCtrl: new FormControl('', Validators.required),
        hitelKifizetettOsztalekCtrl: new FormControl('', Validators.required),
        targyevKamatHitelCtrl: new FormControl('', Validators.required),
        elozoevKamatHitelCtrl: new FormControl('', Validators.required),
        konkurenciaKamatHitelCtrl: new FormControl('', Validators.required)
      }),
      hitelRovidLikviditasAdatok: this._formBuilder.group({
        hitelRovidLikvOsszforgoEszkozCtrl: new FormControl('', Validators.required),
        hitelRovidLikvKotelezettsegekCtrl: new FormControl('', Validators.required),
        targyevRovidLikvHitelCtrl: new FormControl('', Validators.required),
        elozoevRovidLikvHitelCtrl: new FormControl('', Validators.required),
        konkurenciaRovidLikvHitelCtrl: new FormControl('', Validators.required)
      }),
      hitelLikviditasGyorsAdatok: this._formBuilder.group({
        hitelLikvOsszforgoEszkozCtrl: new FormControl('', Validators.required),
        hitelLikvKeszletekCtrl: new FormControl('', Validators.required),
        hitelLikvRovidLejKotCtrl: new FormControl('', Validators.required),
        targyevLikvHitelCtrl: new FormControl('', Validators.required),
        elozoevLikvHitelCtrl: new FormControl('', Validators.required),
        konkurenciaLikvHitelCtrl: new FormControl('', Validators.required)
      })
    })
  }

  createPiaciFormGroup() {
    this.piaciFormGroup = this._formBuilder.group({
      piaciMegjegyzesCtrl: new FormControl(''),
      piaciArfolyamAdatok: this._formBuilder.group({
        piaciArfolyamNyeresegCtrl: new FormControl('', Validators.required),
        piaciTarsNettoEredmenyCtrl: new FormControl('', Validators.required),
        piaciReszvenyekDbSzamaCtrl: new FormControl('', Validators.required),
        targyevPiaciArfolyamNyeresegCtrl: new FormControl('', Validators.required),
        elozoevPiaciArfolyamNyeresegCtrl: new FormControl('', Validators.required),
        konkurenciaPiaciArfolyamNyeresegCtrl: new FormControl('', Validators.required)
      }),

      piaciBefektetesKamatlabAdatok: this._formBuilder.group({
        piaciBefKamNettoEredmenyCtrl: new FormControl('', Validators.required),
        piaciBefKamReszvDbSzamaCtrl: new FormControl('', Validators.required),
        piaciBefKamReszvenyArfolyamaCtrl: new FormControl('', Validators.required),
        targyevPiaciBefKamatlabCtrl: new FormControl('', Validators.required),
        elozoevPiaciBefKamatlabCtrl: new FormControl('', Validators.required),
        konkurenciaPiaciBefKamatlabCtrl: new FormControl('', Validators.required)
      }),

      piaciKonyvAdatok: this._formBuilder.group({
        piaciKonyvReszvenyArfolyamCtrl: new FormControl('', Validators.required),
        piaciKonyvSajatTokeCtrl: new FormControl('', Validators.required),
        piaciKonyvGoodwillCtrl: new FormControl('', Validators.required),
        piaciKonyvImmJavakCtrl: new FormControl('', Validators.required),
        piaciKonyvReszvenyekDbSzamaCtrl: new FormControl('', Validators.required),
        targyevPiaciKonyvCtrl: new FormControl('', Validators.required),
        elozoevPiaciKonyvCtrl: new FormControl('', Validators.required),
        konkurenciaPiaciKonyvCtrl: new FormControl('', Validators.required)
      })
    })
  }

  jovClick() {
    console.log(this.jovedelmezosegiFormGroup.value);
  }

  createVallalatPenzugyiElemzes(){
    this.vallalatPenzugyiElemzesService.createVallalatPenzugyiElemzes(
      this.jovedelmezosegiFormGroup.value,
      this.hatekonysagiFormGroup.value,
      this.hitelFormGroup.value,
      this.piaciFormGroup.value)
}

getVallalatPenzugyiElemzes(){
  this.vallalatPenzugyiElemzesService.getVallPenzugyiElemzes().subscribe(
    adatok =>{
      this.vallalatPenzugyiElemzes = adatok;
    }
  )
}

redirectToBlog(){
  let url = "https://blog.sb-investing.com/penzugyi-mutatok-vizsgalata/";
  window.open(url, "_blank");
}

  submitPenzugyiElemzes(){

    this.createVallalatPenzugyiElemzes();
    this.getVallalatPenzugyiElemzes();

    this.filledVallPenzElemzesEmitter.emit(this.vallalatPenzugyiElemzes);

    console.log(this.vallalatPenzugyiElemzes);

    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Vállalat pénzügyi elemzés sikeresen hozzáadva!'});

  }

  // Getters

  /**
   * Getter $osszErtekesites
   * @return {number}
   */
  public get $osszErtekesites(): number {
    this.osszErtekesites = this.hatekonysagiFormGroup.get('hatekonysagKoltsegAdatok').get('ertHatCtrl').value
      + this.hatekonysagiFormGroup.get('hatekonysagKoltsegAdatok').get('hatEgyebMukodesiCtrl').value;

    return this.osszErtekesites;
  }


  /**
   * Getter $koltsegHatekonySzazelek
   * @return {number}
   */
  public get $koltsegHatekonySzazelek(): number {
    let netto = this.hatekonysagiFormGroup.get('hatekonysagKoltsegAdatok').get('hatNettoArbevetelCtrl').value;
    this.koltsegHatekonySzazelek = Number((this.osszErtekesites / netto));
    return this.koltsegHatekonySzazelek;
  }


  /**
   * Getter $szallitoForgasiSebessege
   * @return {number}
   */
  public get $szallitoForgasiSebessege(): number {
    this.szallitoForgasiSebessege = this.hatekonysagiFormGroup.get('hatekonysagSzallitokForgasiIdejeAdatok').
      get('hatSzallitoNettoArbevetelCtrl').value / this.hatekonysagiFormGroup.get('hatekonysagSzallitokForgasiIdejeAdatok').
        get('hatSzallitoKotelezettsegCtrl').value;
    return this.szallitoForgasiSebessege;
  }


  /**
   * Getter $szallitoKifizetesiNapokSzama
   * @return {number}
   */
  public get $szallitoKifizetesiNapokSzama(): number {
    let naptar = this.hatekonysagiFormGroup.get('hatekonysagSzallitokForgasiIdejeAdatok').get('naptarHatSzallitoCtrl').value;
    this.szallitoKifizetesiNapokSzama = naptar / this.szallitoForgasiSebessege;
    return this.szallitoKifizetesiNapokSzama;
  }


  /**
   * Getter $beosztottAltalTermeltNetto
   * @return {number}
   */
  public get $beosztottAltalTermeltNetto(): number {
    let netto = this.hatekonysagiFormGroup.get('hatekonysagForeJutoArbevetelAdatok').get('foreJutoNettoHatCtrl').value;
    let letszam = this.hatekonysagiFormGroup.get('hatekonysagForeJutoArbevetelAdatok').get('foreJutoLetszamHatCtrl').value;

    this.beosztottAltalTermeltNetto = (netto / letszam) / 12;

    return this.beosztottAltalTermeltNetto;
  }


  /**
   * Getter $forgoTokeAllomanya
   * @return {number}
   */
  public get $forgoTokeAllomanya(): number {
    let forgo = this.hatekonysagiFormGroup.get('hatekonysagForgoTokeAdatok').get('forgoTokeHatForgoEszkozCtrl').value;
    let rovidLejaratu = this.hatekonysagiFormGroup.get('hatekonysagForgoTokeAdatok').get('forgoTokeHatRovidLejKotCtrl').value;

    this.forgoTokeAllomanya = forgo - rovidLejaratu;

    return this.forgoTokeAllomanya;
  }


  /**
   * Getter $forgoTokeMEgterules
   * @return {number}
   */
  public get $forgoTokeMegterules(): number {
    let netto = this.hatekonysagiFormGroup.get('hatekonysagForgoTokeAdatok').get('forgoTokeHatNettoArbevetelCtrl').value;

    this.forgoTokeMegterules = netto / this.$forgoTokeAllomanya;
    return this.forgoTokeMegterules;
  }

  // HITEL FROMGROUP GETTERS
  /**
   * Getter $hitelSajatTokeArany
   * @return {number}
   */
  public get $hitelSajatTokeArany(): number {

    this.hitelSajatTokeArany = this.hitelFormGroup.get('hitelSajatTokeAdatok').get('hitelSajatTokeCtrl').value;

    return this.hitelSajatTokeArany;
  }

  /**
   * Getter $hitelImmJavakArany
   * @return {number}
   */
  public get $hitelImmJavakArany(): number {

    this.hitelImmJavakArany = this.hitelFormGroup.get('hitelSajatTokeAdatok').get('hitelImmJavakCtrl').value;

    return this.hitelImmJavakArany;
  }

  /**
   * Getter $hitelJovairasArany
   * @return {number}
   */
  public get $hitelJovairasArany(): number {

    this.hitelJovairasArany = this.hitelFormGroup.get('hitelSajatTokeAdatok').get('hitelJovairasCtrl').value;

    return this.hitelJovairasArany;
  }

  /**
   * Getter $hitelOsszHosszuLejKot
   * @return {number}
   */
  public get $hitelOsszHosszuLejKot(): number {

    this.hitelOsszHosszuLejKot = this.hitelFormGroup.get('hitelSajatTokeAdatok').get('hitelOsszHosszLejKotCtrl').value;

    return this.hitelOsszHosszuLejKot;
  }



  /**
   * Getter $hitelSzigoritottSajatToke
   * @return {number}
   */
  public get $hitelSzigoritottSajatToke(): number {

    this.hitelSzigoritottSajatToke = (this.$hitelSajatTokeArany - this.$hitelImmJavakArany) - this.$hitelJovairasArany;
    return this.hitelSzigoritottSajatToke;
  }


  /**
   * Getter $hitelsajatTokeAranyIdegenToke
   * @return {number}
   */
  public get $hitelSajatTokeAranyIdegenToke(): number {

    this.hitelSajatTokeAranyIdegenToke = this.$hitelSzigoritottSajatToke / this.$hitelOsszHosszuLejKot;

    return this.hitelSajatTokeAranyIdegenToke;
  }

  // ********* KAMATFEDEETI MUTATÓ  *************

  /**
   * Getter $hitelKamatJovElottiEredmeny
   * @return {number}
   */
  public get $hitelKamatJovElottiEredmeny(): number {

    this.hitelKamatJovElottiEredmeny = this.hitelFormGroup.get('hitelKamatFedezetAdatok').get('hitelKamatJovAdoElottiEredmenyCtrl').value;

    return this.hitelKamatJovElottiEredmeny;
  }

  /**
   * Getter $hitelErtekCsokk
   * @return {number}
   */
  public get $hitelErtekCsokk(): number {

    this.hitelErtekCsokk = this.hitelFormGroup.get('hitelKamatFedezetAdatok').get('hitelElszamoltAmortizacioCtrl').value;

    return this.hitelErtekCsokk;
  }

  /**
   * Getter $hitelKamat
   * @return {number}
   */
  public get $hitelKamat(): number {

    this.hitelKamat = this.hitelFormGroup.get('hitelKamatFedezetAdatok').get('hitelKamatCtrl').value;

    return this.hitelKamat;
  }

  /**
   * Getter $hitelKifOsztalek
   * @return {number}
   */
  public get $hitelKifOsztalek(): number {

    this.hitelKifOsztalek = this.hitelFormGroup.get('hitelKamatFedezetAdatok').get('hitelKifizetettOsztalekCtrl').value;

    return this.hitelKifOsztalek;
  }


  /**
   * Getter $hitelEBIDTA
   * @return {number}
   */
  public get $hitelEBIDTA(): number {

    this.hitelEBIDTA = this.$hitelKamatJovElottiEredmeny + this.$hitelErtekCsokk;

    return this.hitelEBIDTA;
  }


  /**
   * Getter $hitelNyeresegFedezet
   * @return {number}
   */
  public get $hitelNyeresegFedezet(): number {

    this.hitelNyeresegFedezet = this.$hitelEBIDTA / (this.$hitelKamat + this.$hitelKifOsztalek);

    return this.hitelNyeresegFedezet;
  }


  // ***********   LIKVIDITÁSIRÁTA (RÖVID)  ***************

  /**
   * Getter $hitelOsszForgo
   * @return {number}
   */
  public get $hitelOsszForgo(): number {

    this.hitelOsszForgo = this.hitelFormGroup.get('hitelRovidLikviditasAdatok').get('hitelRovidLikvOsszforgoEszkozCtrl').value;

    return this.hitelOsszForgo;
  }

  /**
   * Getter $hitelRovidKot
   * @return {number}
   */
  public get $hitelRovidKot(): number {

    this.hitelRovidKot = this.hitelFormGroup.get('hitelRovidLikviditasAdatok').get('hitelRovidLikvKotelezettsegekCtrl').value;

    return this.hitelRovidKot;
  }

  /**
   * Getter $forgoEszkozErteke
   * @return {number}
   */
  public get $hitelForgoEszkozErteke(): number {

    this.hitelForgoEszkozErteke = this.$hitelOsszForgo / this.$hitelRovidKot;

    return this.hitelForgoEszkozErteke;
  }

  // **************** LIKVIDITÁSI GYORSRÁTA ****************

  /**
   * Getter $hitelGyorsOsszForgo
   * @return {number}
   */
  public get $hitelGyorsOsszForgo(): number {

    this.hitelGyorsOsszForgo = this.hitelFormGroup.get('hitelLikviditasGyorsAdatok').get('hitelLikvOsszforgoEszkozCtrl').value;

    return this.hitelGyorsOsszForgo;
  }

  /**
   * Getter $hitelGyorsKeszletek
   * @return {number}
   */
  public get $hitelGyorsKeszletek(): number {

    this.hitelGyorsKeszletek = this.hitelFormGroup.get('hitelLikviditasGyorsAdatok').get('hitelLikvKeszletekCtrl').value;

    return this.hitelGyorsKeszletek;
  }

  /**
   * Getter $hitelGyorsKeszNelkuliForgo
   * @return {number}
   */
  public get $hitelGyorsKeszNelkuliForgo(): number {

    this.hitelGyorsKeszNelkuliForgo = this.$hitelGyorsOsszForgo - this.$hitelGyorsKeszletek;

    return this.hitelGyorsKeszNelkuliForgo;
  }

  /**
   * Getter $hitelGyorsRovidLejKot
   * @return {number}
   */
  public get $hitelGyorsRovidLejKot(): number {

    this.hitelGyorsRovidLejKot = this.hitelFormGroup.get('hitelLikviditasGyorsAdatok').get('hitelLikvRovidLejKotCtrl').value;

    return this.hitelGyorsRovidLejKot;
  }

  /**
   * Getter $hitelGyorsPenzeszkozokErteke
   * @return {number}
   */
  public get $hitelGyorsPenzeszkozokErteke(): number {

    this.hitelGyorsPenzeszkozokErteke = this.$hitelGyorsKeszNelkuliForgo / this.$hitelGyorsRovidLejKot;

    return this.hitelGyorsPenzeszkozokErteke;
  }


  // ************* PIACI MUTATÓK ***********

  // *** Árfolyam nyereség arány P/E mutató  ******

  /*piaciArfolyamAdatok: this._formBuilder.group({
        piaciArfolyamNyeresegCtrl: new FormControl('', Validators.required),
        piaciTarsNettoEredmenyCtrl: new FormControl('', Validators.required),
        piaciReszvenyekDbSzamaCtrl: new FormControl('', Validators.required),
    /**
     * Getter $piaciReszvenyArfolyam
     * @return {number}
     */
  public get $piaciReszvenyArfolyam(): number {

    this.piaciReszvenyArfolyam = this.piaciFormGroup.get('piaciArfolyamAdatok').get('piaciArfolyamNyeresegCtrl').value;

    return this.piaciReszvenyArfolyam;
  }

  /**
   * Getter $piaciNettoEredmeny
   * @return {number}
   */
  public get $piaciNettoEredmeny(): number {

    this.piaciNettoEredmeny = this.piaciFormGroup.get('piaciArfolyamAdatok').get('piaciTarsNettoEredmenyCtrl').value;

    return this.piaciNettoEredmeny;
  }

  /**
   * Getter $piaciReszvenyDarabszama
   * @return {number}
   */
  public get $piaciReszvenyDarabszama(): number {

    this.piaciReszvenyDarabszama = this.piaciFormGroup.get('piaciArfolyamAdatok').get('piaciReszvenyekDbSzamaCtrl').value;

    return this.piaciReszvenyDarabszama;
  }

  /**
   * Getter $piaciReszvenyreJutoEredmeny
   * @return {number}
   */
  public get $piaciReszvenyreJutoEredmeny(): number {

    this.piaciReszvenyreJutoEredmeny = this.$piaciNettoEredmeny / this.$piaciReszvenyDarabszama;

    return this.piaciReszvenyreJutoEredmeny;
  }

  /**
   * Getter $piaciArfolyamEgyReszvenyre
   * @return {number}
   */
  public get $piaciArfolyamEgyReszvenyre(): number {

    this.piaciArfolyamEgyReszvenyre = this.$piaciReszvenyArfolyam / this.$piaciReszvenyreJutoEredmeny;

    return this.piaciArfolyamEgyReszvenyre;
  }

  // ******* Befektetés belső kamatlába ***********

  /**
   * Getter $piaciBefNettoEredmeny
   * @return {number}
   */
  public get $piaciBefNettoEredmeny(): number {

    this.piaciBefNettoEredmeny = this.piaciFormGroup.get('piaciBefektetesKamatlabAdatok').get('piaciBefKamNettoEredmenyCtrl').value;

    return this.piaciBefNettoEredmeny;
  }

  /**
   * Getter $piaciBefReszvDbSzama
   * @return {number}
   */
  public get $piaciBefReszvDbSzama(): number {

    this.piaciBefReszvDbSzama = this.piaciFormGroup.get('piaciBefektetesKamatlabAdatok').get('piaciBefKamReszvDbSzamaCtrl').value;

    return this.piaciBefReszvDbSzama;
  }

  /**
   * Getter $piaciBefReszvArfolyam
   * @return {number}
   */
  public get $piaciBefReszvArfolyam(): number {

    this.piaciBefReszvArfolyam = this.piaciFormGroup.get('piaciBefektetesKamatlabAdatok').get('piaciBefKamReszvenyArfolyamaCtrl').value;

    return this.piaciBefReszvArfolyam;
  }

  /**
   * Getter $piaciBefCegPiaciErteke
   * @return {number}
   */
  public get $piaciBefCegPiaciErteke(): number {

    this.piaciBefCegPiaciErteke = this.$piaciBefReszvDbSzama * this.$piaciBefReszvArfolyam;

    return this.piaciBefCegPiaciErteke;
  }

  /**
   * Getter $piaciBefBelsoKamatlaba
   * @return {number}
   */
  public get $piaciBefBelsoKamatlaba(): number {

    this.piaciBefBelsoKamatlaba = (this.$piaciBefNettoEredmeny / this.$piaciBefCegPiaciErteke)

    return this.piaciBefBelsoKamatlaba;
  }

  // **** Árfolyam / könyv szerinti érték *****
  /*
   piaciKonyvAdatok: this._formBuilder.group({
        piaciKonyvReszvenyekDbSzamaCtrl: new FormControl('', Validators.required)

    /**
     * Getter $piaciKonyvReszvenyArfolyam
     * @return {number}
     */
  public get $piaciKonyvReszvenyArfolyam(): number {

    this.piaciKonyvReszvenyArfolyam = this.piaciFormGroup.get('piaciKonyvAdatok').get('piaciKonyvReszvenyArfolyamCtrl').value;

    return this.piaciKonyvReszvenyArfolyam;
  }

  /**
   * Getter $piaciKonyvSajatToke
   * @return {number}
   */
  public get $piaciKonyvSajatToke(): number {

    this.piaciKonyvSajatToke = this.piaciFormGroup.get('piaciKonyvAdatok').get('piaciKonyvSajatTokeCtrl').value;

    return this.piaciKonyvSajatToke;
  }

  /**
   * Getter $piaciKonyvGoodWill
   * @return {number}
   */
  public get $piaciKonyvGoodWill(): number {

    this.piaciKonyvGoodWill = this.piaciFormGroup.get('piaciKonyvAdatok').get('piaciKonyvGoodwillCtrl').value;

    return this.piaciKonyvGoodWill;
  }

  /**
   * Getter $piaciKonyvImmJavak
   * @return {number}
   */
  public get $piaciKonyvImmJavak(): number {

    this.piaciKonyvImmJavak = this.piaciFormGroup.get('piaciKonyvAdatok').get('piaciKonyvImmJavakCtrl').value;

    return this.piaciKonyvImmJavak;
  }

  /**
   * Getter $piaciKonyvReszDbSzama
   * @return {number}
   */
  public get $piaciKonyvReszDbSzama(): number {

    this.piaciKonyvReszDbSzama = this.piaciFormGroup.get('piaciKonyvAdatok').get('piaciKonyvReszvenyekDbSzamaCtrl').value;

    return this.piaciKonyvReszDbSzama;
  }

  /**
   * Getter $piaciKonyvKonyvSzerintiErtek
   * @return {number}
   */
  public get $piaciKonyvKonyvSzerintiErtek(): number {

    this.piaciKonyvKonyvSzerintiErtek = (this.$piaciKonyvSajatToke - this.$piaciKonyvGoodWill - this.$piaciKonyvImmJavak) / this.$piaciKonyvReszDbSzama;

    return this.piaciKonyvKonyvSzerintiErtek;
  }

  /**
   * Getter $piaciKonyvArfolyamErteke
   * @return {number}
   */
  public get $piaciKonyvArfolyamErteke(): number {

    this.piaciKonyvArfolyamErteke = this.$piaciKonyvReszvenyArfolyam / this.$piaciKonyvKonyvSzerintiErtek;

    return this.piaciKonyvArfolyamErteke;
  }





  /**
   * Getter $jovNettoEredmeny
   * @return {number}
   */
  public get jovNettoEredmeny(): number {
    return this.jovedelmezosegiFormGroup.get('jovAdatok').get('nettoCtrl').value;
  }

  /**
   * Getter $jovEszkozokOssz
   * @return {number}
   */
  public get jovEszkozokOssz(): number {
    return this.jovedelmezosegiFormGroup.get('jovAdatok').get('eszkozokCtrl').value;
  }

  /**
   * Getter $jovSzazalekosHozam
   * @return {number}
   */
  public get jovSzazalekosHozam(): number {
    return (this.jovNettoEredmeny / this.jovEszkozokOssz) * 100;
  }



  /**
   * Setter $jovNettoEredmeny
   * @param {number} value
   */
  public set jovNettoEredmeny(value: number) {
    this.jovNettoEredmeny = value;
  }

  /**
   * Setter $jovEszkozokOssz
   * @param {number} value
   */
  public set jovEszkozokOssz(value: number) {
    this.jovEszkozokOssz = value;
  }

  /**
   * Setter $jovSzazalekosHozam
   * @param {number} value
   */
  public set jovSzazalekosHozam(value: number) {
    this.jovSzazalekosHozam = value;
  }

  // TODO: create all formgoup
  public penzElemzesSubmit() {
    return null;
  }

}

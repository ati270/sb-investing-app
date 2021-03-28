import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { NettoJelenErtek } from 'src/app/models/uj-befektetes-models/netto-jelenertek/netto-jelenertek.model';
import { NettoJelenertekService } from 'src/app/services/befektetesek/uj-befektetes-services/netto-jelenertek/netto-jelenertek.service';


@Component({
  selector: 'app-netto-jelenertek-szamitas',
  templateUrl: './netto-jelenertek-szamitas.component.html',
  styleUrls: ['./netto-jelenertek-szamitas.component.scss'],
  providers: [MessageService]
})
export class NettoJelenertekSzamitasComponent implements OnInit {

  @Output() filledNettoJelenertekEmitter: EventEmitter<NettoJelenErtek> = new EventEmitter();
  allFilled: boolean;

  nettoJelenErtek: NettoJelenErtek;

  nettoJelenFormGroup: FormGroup;
  bef_osszeg: number;
  penznem: string;
  jel_arfolyam: number;
  totalValoszinuseg: number;
  totalSulyozott: number;
  sumValoszinuseg = 0;
  sumValSulyAtlag = 0;
  csucsFocusState: boolean;
  celarFocusState: boolean;
  celarFelFocusState: boolean;
  aljFocusState: boolean;
  melyFocusState: boolean;
  csodFocusState: boolean;

  private csucsVal: number = 0;
  private celarVal: number = 0;
  private celarFelVal: number = 0;
  private aljVal: number = 0;
  private melyVal: number = 0;
  private csodVal: number = 0;
  private vasaroltMennyiseg: number = 0;



  private osszVal: number = 0;


  constructor(private _formBuilder: FormBuilder, private nettoJelenErtekService: NettoJelenertekService,
    private messageService: MessageService) { }



  ngOnInit(): void {
    this.allFilled = false;
    this.createNettoJelenErtekFormGroup();
    this.onChanges();
  }


  createNettoJelenErtekFormGroup() {
    this.nettoJelenFormGroup = this._formBuilder.group({
      befOsszegCtrl: new FormControl('', [Validators.required]),
      penznemCtrl: new FormControl('', [Validators.required]),

      arfolyamCtrl: new FormControl('', Validators.required),
      adatok: this._formBuilder.group({
        csucsKimenetCtrl: new FormControl('', Validators.required),
        csucsValCtrl: new FormControl('', [Validators.required, Validators.max(100)]),

        celarKimenetCtrl: new FormControl('', Validators.required),
        celarValCtrl: new FormControl('', [Validators.required, Validators.max(100)]),

        celarFelKimenetCtrl: new FormControl('', Validators.required),
        celarFelValCtrl: new FormControl('', [Validators.required, Validators.max(100)]),

        aljKimenetCtrl: new FormControl('', Validators.required),
        aljValCtrl: new FormControl('', [Validators.required, Validators.max(100)]),

        melyKimenetCtrl: new FormControl('', Validators.required),
        melyValCtrl: new FormControl('', [Validators.required, Validators.max(100)]),

        csodKimenetCtrl: new FormControl('', Validators.required),
        csodValCtrl: new FormControl('', [Validators.required, Validators.max(100)]),
      })
    });
  }

  // STYLE
  public getOsszValoszinuseg() {
    let color = 'gray';

    if (this.osszVal > 100) {
      color = 'red';
    }
    else if (this.osszVal == 100) {
      color = 'green';
    }
    return color;
  }

  public getNettoJelenErtekStyle(val: number){
      let color = 'gray';

      if(val > 0){
        color = 'green';
      }
      else{
        color = 'red';
      }
  }

  onChanges(){

    this.nettoJelenFormGroup.get('adatok').get('csucsValCtrl').valueChanges.subscribe(
      val=> { this.csucsVal = val; }
    )

    this.nettoJelenFormGroup.get('adatok').get('celarValCtrl').valueChanges.subscribe(
      val=> { this.celarVal = val; }
    )

    this.nettoJelenFormGroup.get('adatok').get('celarFelValCtrl').valueChanges.subscribe(
      val=> { this.celarFelVal = val; }
    )

    this.nettoJelenFormGroup.get('adatok').get('aljValCtrl').valueChanges.subscribe(
      val=> { this.aljVal = val; }
    )

    this.nettoJelenFormGroup.get('adatok').get('melyValCtrl').valueChanges.subscribe(
      val=> { this.melyVal = val; }
    )

    this.nettoJelenFormGroup.get('adatok').get('csodValCtrl').valueChanges.subscribe(
      val=> { this.csodVal = val; }
    )

  }

  createNettoJelenErtek(){
      this.nettoJelenErtekService.createNettoJelenErtek(this.nettoJelenFormGroup.value);
  }

  getJelenErtek(){

    this.nettoJelenErtekService.getNettoJelenErtek().subscribe(
      adatok => {
        this.nettoJelenErtek = adatok;
      }
    )

  }

  onNettoSubmit() {
    this.createNettoJelenErtek();
    this.getJelenErtek();

    this.filledNettoJelenertekEmitter.emit(this.nettoJelenErtek);

    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Nettó jelenérték sikeresen hozzáadva!'});

    console.log(this.nettoJelenErtek);

  }

  redirectToBlog(){
    let url = "https://blog.sb-investing.com/befektetesi-kockazat-elemzese/";
    window.open(url, "_blank");
  }

  // Getters

  get befOsszeg() {
    return this.nettoJelenFormGroup.get('befOsszegCtrl').value;
  }

  get arfolyam() {
    return this.nettoJelenFormGroup.get('arfolyamCtrl').value;
  }


    /**
     * Getter $vasaroltMennyiseg
     * @return {number }
     */
	public get $vasaroltMennyiseg(): number  {

    this.vasaroltMennyiseg = this.befOsszeg / this.arfolyam;
		return Math.floor(this.vasaroltMennyiseg);
	}



  /**
   * Getter $csucsVal
   * @return {number }
   */
  public get $csucsVal(): number {
    this.csucsVal = this.nettoJelenFormGroup.get('adatok').get('csucsValCtrl').value;
    return this.csucsVal;
  }

  /**
   * Getter $celVal
   * @return {number  }
   */
  public get $celarVal(): number {
    this.celarVal = this.nettoJelenFormGroup.get('adatok').get('celarValCtrl').value;
    return this.celarVal;
  }

  /**
   * Getter $celFelVal
   * @return {number }
   */
  public get $celarFelVal(): number {
    this.celarFelVal = this.nettoJelenFormGroup.get('adatok').get('celarFelValCtrl').value;
    return this.celarFelVal;
  }

  /**
   * Getter $aljVal
   * @return {number }
   */
  public get $aljVal(): number {
    this.aljVal = this.nettoJelenFormGroup.get('adatok').get('aljValCtrl').value;
    return this.aljVal;
  }

  /**
   * Getter $melyVal
   * @return {number }
   */
  public get $melyVal(): number {
    this.melyVal = this.nettoJelenFormGroup.get('adatok').get('melyValCtrl').value;
    return this.melyVal;
  }

  /**
   * Getter $csodVal
   * @return {number }
   */
  public get $csodVal(): number {

    this.csodVal = this.nettoJelenFormGroup.get('adatok').get('csodValCtrl').value;
    return this.csodVal;
  }


  get csucsKimenet() {
    return this.nettoJelenFormGroup.get('adatok').get('csucsKimenetCtrl').value;
  }



  get csucsAtlag() { return (this.csucsKimenet * this.csucsVal)/100; }


  get celarKimenet() {
    return this.nettoJelenFormGroup.get('adatok').get('celarKimenetCtrl').value;

  }

  get celarAtlag() { return (this.celarKimenet * this.celarVal)/100; }



  get celarFelKimenet() {
    return this.nettoJelenFormGroup.get('adatok').get('celarFelKimenetCtrl').value;

  }

  get celarFelAtlag() { return (this.celarFelKimenet * this.celarFelVal)/100; }


  get aljKimenet() {
    return this.nettoJelenFormGroup.get('adatok').get('aljKimenetCtrl').value;

  }

  get aljAtlag() { return (this.aljKimenet * this.aljVal)/100; }



  get melyKimenet() {
    return this.nettoJelenFormGroup.get('adatok').get('melyKimenetCtrl').value;

  }

  get melyAtlag() { return (this.melyKimenet * this.melyVal)/100 };

  get csodKimenet() {
    return this.nettoJelenFormGroup.get('adatok').get('csodKimenetCtrl').value;

  }

  get csodAtlag() { return (this.csodKimenet * this.csodVal)/100; }


  /**
 * Getter $osszVal
 * @return {number }
 */
  public get $osszVal(): number {

    this.osszVal = Number(this.$csucsVal) + Number(this.$celarVal) +
      Number(this.$celarFelVal) + Number(this.$aljVal) +
      Number(this.$melyVal) + Number(this.$csodVal);
    return this.osszVal;
  }


  get osszAtlag() {
    return this.csucsAtlag + this.celarAtlag + this.celarFelAtlag + this.aljAtlag
      + this.melyAtlag + this.csodAtlag
  }

  get befAtlagAra() { return this.vasaroltMennyiseg * this.osszAtlag; }

  get befJelenErtek() {
    return this.befAtlagAra / 1.2;
  }

  get befNettoJelenErtek() {
    return this.befJelenErtek - this.befOsszeg;
  }


  /*get celarVal() { return this.nettoJelenFormGroup.get('celarValCtrl').value; }

  get celarFelVal() { return this.nettoJelenFormGroup.get('celarFelValCtrl').value; }

  get aljVal() { return this.nettoJelenFormGroup.get('aljValCtrl').value; }

  get melyVal() { return this.nettoJelenFormGroup.get('melyValCtrl').value; }

  get csodVal() { return this.nettoJelenFormGroup.get('csodValCtrl').value; }

*/

}

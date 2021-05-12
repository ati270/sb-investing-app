import { UpdateReszvenyStatusAction } from './../../../../store/reszveny/actions';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, Output, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';
import { BefAdatokService } from 'src/app/services/befektetesek/uj-befektetes-services/befektetes-adatok/bef-adatok.service';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { UpdateReszvenyAction } from 'src/app/components/store/reszveny/actions';
import { UjBefektetesService } from 'src/app/services/befektetesek/uj-befektetes-services/uj-befektetes/uj-befektetes.service';
import { AppState } from 'src/app/components/store/reszveny/state';


export interface dataArguments {
  filled: boolean;
  befektetesAdatok: BefektetesAdatok;
}

@Component({
  selector: 'app-bef-adatok',
  templateUrl: './bef-adatok.component.html',
  styleUrls: ['./bef-adatok.component.scss'],
  providers: [MessageService]
})

export class BefAdatokComponent implements OnInit, AfterViewInit {


  @Output() filledEmitter: EventEmitter<dataArguments> = new EventEmitter();
  @Output() filledSaveEmitter: EventEmitter<BefektetesAdatok> = new EventEmitter();
  allFilled: boolean;
  befAdatok: BefektetesAdatok;

  adatokFormGroup: FormGroup;
  valid: boolean = false;
  strategies: string[] = ["Válság", "Normál", "Bőség"];
  statusok: string[] = ['Folyamatban levő elemzések',
    'Nyitott befektetések',
    'Lezárt befektetések',
    'Figyelő lista', 'Elvetett befektetések'];

  private vallalatNeve: string;
  private reszvenyTicker: string;
  private datum: string;
  private agazat: string;
  private strategia: string;
  private status: string;


  constructor(private _formBuilder: FormBuilder, private befAdatokService: BefAdatokService, private messageService: MessageService,
    private primengConfig: PrimeNGConfig, private store: Store<AppState>, private ujBefektetesService: UjBefektetesService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.createAdatokFormGroup();

  }

  ngAfterViewInit(): void {
    if(this.befAdatokService.$updatedAdatok !== undefined){
    this.loadBefAdatok();
    }
  }


  createAdatokFormGroup() {

    this.adatokFormGroup = this._formBuilder.group({

      vallalat_neveCtrl: new FormControl('', [Validators.required]),

      reszveny_tickerCtrl: new FormControl('', [Validators.required]),

      datumCtrl: new FormControl('', Validators.required),

      agazatCtrl: new FormControl('', Validators.required),

      strategiaCtrl: new FormControl('', Validators.required),

      statusCtrl: new FormControl('', Validators.required),
    });

  }

  loadBefAdatok() {
    let befAdat = this.befAdatokService.$updatedAdatok;

    this.adatokFormGroup.patchValue({
      vallalat_neveCtrl: befAdat.vallalatNeve,
      reszveny_tickerCtrl: befAdat.reszvenyTicker,
      datumCtrl: befAdat.datum,
      agazatCtrl: befAdat.agazat,
      strategiaCtrl: befAdat.strategia,
      statusCtrl: befAdat.$status
      // formControlName2: myValue2 (can be omitted)
    });
  }

  createBefAdatok() {
    this.befAdatokService.addBefAdat(
      this.$vallalatNeve,
      this.$reszvenyTicker,
      this.$datum,
      this.$agazat,
      this.$strategia,
      this.$status);
  }

  getBefAdatok() {


    this.befAdatokService.getBefektetesAdatok().subscribe(
      adatok => {
        this.befAdatok = adatok;
      }
    )
  }


  // TODO: create model, post on http to backend
  /*befAdatokSubmit() {
    this.allFilled = true;

    // Add bef.adatok to service
    this.createBefAdatok();
    this.getBefAdatok();

    // Send data to uj-befektetes with emitter

    this.filledEmitter.emit(
      {
        filled: this.allFilled,
        befektetesAdatok: this.befAdatok
      }
    );

    this.loadBefAdatok();

  }*/

  saveBefAdatok() {
    this.createBefAdatok();
    this.getBefAdatok();

    this.filledSaveEmitter.emit(this.befAdatok)
    console.log(this.befAdatok);
    /*let updatedStat = {
      reszveny: this.ujBefektetesService.$ujReszveny,
      status: this.befAdatok.$status
    }
    // Bef adatokat kell módosítani a store-ban
    this.store.dispatch(new UpdateReszvenyStatusAction(updatedStat));

    // Ha valtozik a statud akkor update store
    let allItems = this.store.select(store => store.reszvenyek);
    allItems.subscribe(item => {
      for (let it of item) {
        console.log("STATUS MOIST: " + it.$befektetesAdatok);
      }
    });*/

    // Toast
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Befektetési adatok sikeresen hozzáadva!'});

  }

  // GETTERS

  /**
   * Getter $vallalatNeve
   * @return {string}
   */
  public get $vallalatNeve(): string {

    this.vallalatNeve = this.adatokFormGroup.get('vallalat_neveCtrl').value;

    return this.vallalatNeve;
  }

  /**
   * Getter $reszvenyTicker
   * @return {string}
   */
  public get $reszvenyTicker(): string {

    this.reszvenyTicker = this.adatokFormGroup.get('reszveny_tickerCtrl').value;

    return this.reszvenyTicker;
  }

  /**
   * Getter $datum
   * @return {string}
   */
  public get $datum(): string {

    this.datum = this.adatokFormGroup.get('datumCtrl').value;

    return this.datum;
  }

  /**
   * Getter $agazat
   * @return {string}
   */
  public get $agazat(): string {

    this.agazat = this.adatokFormGroup.get('agazatCtrl').value;

    return this.agazat;
  }

  /**
   * Getter $strategia
   * @return {string}
   */
  public get $strategia(): string {

    this.strategia = this.adatokFormGroup.get('strategiaCtrl').value;

    return this.strategia;
  }

  /**
   * Getter $status
   * @return {string}
   */
  public get $status(): string {

    this.status = this.adatokFormGroup.get('statusCtrl').value;

    return this.status;
  }




}

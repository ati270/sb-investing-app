import { Component, OnInit, Input, Output, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';
import { BefAdatokService } from 'src/app/services/befektetesek/uj-befektetes-services/befektetes-adatok/bef-adatok.service';

export interface dataArguments {
  filled: boolean;
  befektetesAdatok: BefektetesAdatok;
}

@Component({
  selector: 'app-bef-adatok',
  templateUrl: './bef-adatok.component.html',
  styleUrls: ['./bef-adatok.component.scss']
})

export class BefAdatokComponent implements OnInit {


  @Output() filledEmitter: EventEmitter<dataArguments> = new EventEmitter();
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


  constructor(private _formBuilder: FormBuilder, private befAdatokService: BefAdatokService) { }

  ngOnInit(): void {
    this.createAdatokFormGroup();
    //this.getBefAdatok();
    this.allFilled = false;
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

  createBefAdatok(){
  this.befAdatokService.addBefAdat(
    this.$vallalatNeve, 
    this.$reszvenyTicker, 
    this.$datum, 
    this.$agazat, 
    this.$strategia, 
    this.$status);
  }
  getBefAdatok(){
    

    this.befAdatokService.getBefektetesAdatok().subscribe(
      adatok => { 
       this.befAdatok = adatok;
        }
    )
  }
  

  // TODO: create model, post on http to backend
  befAdatokSubmit() {

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

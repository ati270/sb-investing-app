import { Component, OnInit, Input, ElementRef, AfterViewInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CelarMeghatarozas } from 'src/app/models/uj-befektetes-models/celar-meghatarozas/celar-meghatarozas.model';
import { CelarMeghatarozasService } from 'src/app/services/befektetesek/uj-befektetes-services/celar-meghatarozas/celar-meghatarozas.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-celar-meghatarozas',
  templateUrl: './celar-meghatarozas.component.html',
  styleUrls: ['./celar-meghatarozas.component.scss'],
  providers: [MessageService]
})
export class CelarMeghatarozasComponent implements OnInit {

  @Output() filledCelarEmitter: EventEmitter<CelarMeghatarozas> = new EventEmitter();
  allFilled: boolean;

  celarMeghatarozas: CelarMeghatarozas;

  celarFormGroup: FormGroup;
  vasarlasiCelarFormGroup: FormGroup;
  // vasarlasiFormGroup: FormGroup;

   private konkurenciaMutato: number;
   private konyvSzerintiErtek: number;
   private elvartHozam: number = 20;
   private haszonvesztes: number;
   private diszkontrata: number;

  isLinear = true;

  constructor(private _formBuilder: FormBuilder, private celarService: CelarMeghatarozasService, private messageService: MessageService) { }


  ngOnInit(): void {
    this.allFilled = false;
    this.celarFormGroup = this._formBuilder.group({
      celarKonkurenciaAdatok: this._formBuilder.group({
        konkurenciaCtrl: new FormControl('', Validators.required)
      }),
      celarElemzettAdatok: this._formBuilder.group({
        elemzettCtrl: new FormControl('', Validators.required)
      })

    });
    this.vasarlasiCelarFormGroup = this._formBuilder.group({

      VasElvartHozamEvCtrl: new FormControl(this.elvartHozam, [Validators.required])
    });
  }

  public onElvartHozam(elvHozam: number){
    this.$elvartHozam = elvHozam;
  }

  // Getters


    /**
     * Getter $konkurenciaMutato
     * @return {number}
     */
	public get $konkurenciaMutato(): number {
    this.konkurenciaMutato = this.celarFormGroup.get('celarKonkurenciaAdatok').get('konkurenciaCtrl').value;

		return this.konkurenciaMutato;
	}


    /**
     * Getter $konyvSzerintiErtek
     * @return {number}
     */
	public get $konyvSzerintiErtek(): number {

    this.konyvSzerintiErtek = this.celarFormGroup.get('celarElemzettAdatok').get('elemzettCtrl').value;
		return this.konyvSzerintiErtek;
	}

    /**
     * Getter $elvartHozam
     * @return {number}
     */
	public get $elvartHozam(): number {
    //this.elvartHozam = this.celarFormGroup.get('vasarlasiCelarFormGroup').get('VasElvartHozam_EvCtrl').value;
		return this.elvartHozam;
	}

    /**
     * Getter $haszonvesztes
     * @return {number}
     */
	public get $haszonvesztes(): number {
    this.haszonvesztes = this.elvartHozam/100;
		return this.haszonvesztes;
	}

    /**
     * Getter $diszkontrata
     * @return {number}
     */
	public get $diszkontrata(): number {
    this.diszkontrata = this.haszonvesztes+1;
		return this.diszkontrata;
	}


    /**
     * Getter $celarVal
     * @return {number}
     */
	get celarVal(): number {
		return this.$konkurenciaMutato * this.$konyvSzerintiErtek;
  }

  get kotes1(): number{

    return  this.celarVal/this.diszkontrata;
  }

  get kotes2(): number{
    let val = this.celarVal / Math.pow(this.diszkontrata, 2);
      return val;


  }

  get kotes3(): number{
    let val = this.celarVal / Math.pow(this.diszkontrata, 3);
      return val;
  }

  get kotes4(): number{
    let val = this.celarVal / Math.pow(this.diszkontrata, 4);
      return val;
  }

  get kotes5(): number{
    let val = this.celarVal / Math.pow(this.diszkontrata, 5);
      return val;
  }

  get kotes6(): number{
    let val = this.celarVal / Math.pow(this.diszkontrata,6);
      return val;
  }


  get kotes8(): number{
    let val = this.celarVal / Math.pow(this.diszkontrata, 8);
      return val;
  }


  get kotes10(): number{
    let val = this.celarVal / Math.pow(this.diszkontrata, 10);
      return val;
  }

  // Setters


    /**
     * Setter $elvartHozam
     * @param {number} value
     */
	public set $elvartHozam(value: number) {
		this.elvartHozam = value;
	}

    /**
     * Setter $haszonvesztes
     * @param {number} value
     */
	public set $haszonvesztes(value: number) {
		this.haszonvesztes = value;
	}

    /**
     * Setter $diszkontrata
     * @param {number} value
     */
	public set $diszkontrata(value: number) {
		this.diszkontrata = value;
	}

  createCelar(){
    this.celarService.createCelar(this.$konkurenciaMutato, this.$konyvSzerintiErtek,this.$elvartHozam)
  }


  public getCelarAdatok(){
    this.celarService.getCelarMeghatarozas().subscribe(
      adatok => {
        this.celarMeghatarozas = adatok;
      }
    )
  }

  celarSubmit(){
    this.createCelar();
    this.getCelarAdatok();

    this.filledCelarEmitter.emit(this.celarMeghatarozas);

    console.log(this.celarMeghatarozas);

    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Célár adatok sikeresen hozzáadva!'});
  }


}



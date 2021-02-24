import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { PenzugyiAdatok } from 'src/app/models/uj-befektetes-models/penzugyi-adatok/penzugyi-adatok.model';
import { PenzugyiAdatokService } from 'src/app/services/befektetesek/uj-befektetes-services/penzugyi-adatok/penzugyi-adatok.service';

export interface dataArguments {
  filled: boolean;
  penzugyiAdatok: PenzugyiAdatok;
}

@Component({
  selector: 'app-penzugyi-adatok',
  templateUrl: './penzugyi-adatok.component.html',
  styleUrls: ['./penzugyi-adatok.component.scss']
})
export class PenzugyiAdatokComponent implements OnInit {

  @Output() filledEmitter: EventEmitter<dataArguments> = new EventEmitter();
  allFilled: boolean;

  penzugyiAdatok: PenzugyiAdatok;
  
  penzugyiAdatokFormGroup: FormGroup;
  nettoTargyEv: number;
  nettoElozoEv: number;
  eladottAruTargyEv: number;
  eladottAruElozoEv: number;
  tarsasagTargyEv: number;
  tarsasagElozoEv: number;
  kamatTargyEv: number;
  kamatElozoEv: number;
  fizetettKamatokTargyEv: number;
  fizetettKamatokElozoEv: number;
  admTargyEv: number;
  admElozoEv: number;
  egyebTargyEv: number;
  egyebElozoEv: number;
  reszvenyTargyEv: number;
  reszvenyElozoEv: number;
  osztalekTargyEv: number;
  osztalekElozoEv: number;
  elszamoltTargyEv: number;
  elszamoltElozoEv: number;
  keszpenzTargyEv: number;
  keszpenzElozoEv: number;
  kovetelesVevoTargyEv: number;
  kovetelesVevoElozoEv: number;
  keszletTargyEv: number;
  keszletElozoEv: number;
  jovairasTargyEv: number;
  jovairasElozoEv: number;
  immTargyEv: number;
  immElozoEv: number;
  forgoTargyEv: number;
  forgoElozoEv: number;
  eszkozTargyEv: number;
  eszkozElozoEv: number;
  kotSzallitoTargyEv: number;
  kotSzallitoElozoEv: number;
  tokeTargyEv: number;
  tokeElozoEv: number;
  rovidLejaratuKotTargyEv: number;
  rovidLejaratuKotElozoEv: number;
  rovidLejaratuKotKonkurencia: number;
  rovidLejaratuKotQ2: number;
  rovidLejaratuKotQ3: number;
  osszKotTargyEv: number;
  osszKotElozoEv: number;
  osszKotKonkurencia: number;
  osszKotQ2: number;
  osszKotQ3: number;
  alkalmazottakSzamaTargyEv: number;
  alkalmazottakSzamaElozoEv: number;
  reszvenyArfolyamTargyEv: number;
  reszvenyArfolyamElozoEv: number;
  naptarTargyEv: number;
  naptarElozoEv: number;
  hozamTargyEv: number;
  hozamElozoEv: number;
  
  constructor(private formBuilder: FormBuilder, private penzugyiAdatokService: PenzugyiAdatokService) { }

  ngOnInit(): void {
    this.allFilled = false;
    this.createFormGroup();
  }

  createFormGroup() {

    this.penzugyiAdatokFormGroup = this.formBuilder.group({
      penzugyiAdatok: this.formBuilder.group({
        nettoTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        nettoElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        nettoKonkurenciaCtrl: new FormControl('', [Validators.required]),
        nettoQ2Ctrl: new FormControl('', []),
        nettoQ3Ctrl: new FormControl('', []),
        eladottAruTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        eladottAruElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        eladottAruKonkurenciaCtrl: new FormControl('', [Validators.required]),
        eladottAruQ2Ctrl: new FormControl('', []),
        eladottAruQ3Ctrl: new FormControl('', []),
        tarsasagTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        tarsasagElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        tarsasagKonkurenciaCtrl: new FormControl('', [Validators.required]),
        tarsasagQ2Ctrl: new FormControl('', []),
        tarsasagQ3Ctrl: new FormControl('', []),
        kamatTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        kamatElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        kamatKonkurenciaCtrl: new FormControl('', [Validators.required]),
        kamatQ2Ctrl: new FormControl('', []),
        kamatQ3Ctrl: new FormControl('', []),
        fizetettKamatokTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        fizetettKamatokElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        fizetettKamatokKonkurenciaCtrl: new FormControl('', [Validators.required]),
        fizetettKamatokQ2Ctrl: new FormControl('', []),
        fizetettKamatokQ3Ctrl: new FormControl('', []),
        admTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        admElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        admKonkurenciaCtrl: new FormControl('', [Validators.required]),
        admQ2Ctrl: new FormControl('', []),
        admQ3Ctrl: new FormControl('', []),
        egyebTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        egyebElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        egyebKonkurenciaCtrl: new FormControl('', [Validators.required]),
        egyebQ2Ctrl: new FormControl('', []),
        egyebQ3Ctrl: new FormControl('', []),
        reszvenyTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        reszvenyElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        reszvenyKonkurenciaCtrl: new FormControl('', [Validators.required]),
        reszvenyQ2Ctrl: new FormControl('', []),
        reszvenyQ3Ctrl: new FormControl('', []),
        osztalekTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        osztalekElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        osztalekKonkurenciaCtrl: new FormControl('', [Validators.required]),
        osztalekQ2Ctrl: new FormControl('', []),
        osztalekQ3Ctrl: new FormControl('', []),
        elszamoltTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        elszamoltElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        elszamoltKonkurenciaCtrl: new FormControl('', [Validators.required]),
        elszamoltQ2Ctrl: new FormControl('', []),
        elszamoltQ3Ctrl: new FormControl('', []),
        keszpenzTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        keszpenzElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        keszpenzKonkurenciaCtrl: new FormControl('', [Validators.required]),
        keszpenzQ2Ctrl: new FormControl('', []),
        keszpenzQ3Ctrl: new FormControl('', []),
        kovetelesVevoTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        kovetelesVevoElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        kovetelesVevoKonkurenciaCtrl: new FormControl('', [Validators.required]),
        kovetelesVevoQ2Ctrl: new FormControl('', []),
        kovetelesVevoQ3Ctrl: new FormControl('', []),
        keszletTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        keszletElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        keszletKonkurenciaCtrl: new FormControl('', [Validators.required]),
        keszletQ2Ctrl: new FormControl('', []),
        keszletQ3Ctrl: new FormControl('', []),
        jovairasTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        jovairasElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        jovairasKonkurenciaCtrl: new FormControl('', [Validators.required]),
        jovairasQ2Ctrl: new FormControl('', []),
        jovairasQ3Ctrl: new FormControl('', []),
        immTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        immElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        immKonkurenciaCtrl: new FormControl('', [Validators.required]),
        immQ2Ctrl: new FormControl('', []),
        immQ3Ctrl: new FormControl('', []),
        forgoTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        forgoElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        forgoKonkurenciaCtrl: new FormControl('', [Validators.required]),
        forgoQ2Ctrl: new FormControl('', []),
        forgoQ3Ctrl: new FormControl('', []),
        eszkozTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        eszkozElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        eszkozKonkurenciaCtrl: new FormControl('', [Validators.required]),
        eszkozQ2Ctrl: new FormControl('', []),
        eszkozQ3Ctrl: new FormControl('', []),
        kotSzallitoTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        kotSzallitoElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        kotSzallitoKonkurenciaCtrl: new FormControl('', [Validators.required]),
        kotSzallitoQ2Ctrl: new FormControl('', []),
        kotSzallitoQ3Ctrl: new FormControl('', []),
        tokeTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        tokeElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        tokeKonkurenciaCtrl: new FormControl('', [Validators.required]),
        tokeQ2Ctrl: new FormControl('', []),
        tokeQ3Ctrl: new FormControl('', []),
        rovidLejaratuKotTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        rovidLejaratuKotElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        rovidLejaratuKotKonkurenciaCtrl: new FormControl('', [Validators.required]),
        rovidLejaratuKotQ2Ctrl: new FormControl('', []),
        rovidLejaratuKotQ3Ctrl: new FormControl('', []),
        osszKotTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        osszKotElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        osszKotKonkurenciaCtrl: new FormControl('', [Validators.required]),
        osszKotQ2Ctrl: new FormControl('', []),
        osszKotQ3Ctrl: new FormControl('', []),
        alkalmazottakSzamaTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        alkalmazottakSzamaElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        alkalmazottakSzamaKonkurenciaCtrl: new FormControl('', [Validators.required]),
        alkalmazottakSzamaQ2Ctrl: new FormControl('', []),
        alkalmazottakSzamaQ3Ctrl: new FormControl('', []),
        reszvenyArfolyamTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        reszvenyArfolyamElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        reszvenyArfolyamKonkurenciaCtrl: new FormControl('', [Validators.required]),
        reszvenyArfolyamQ2Ctrl: new FormControl('', []),
        reszvenyArfolyamQ3Ctrl: new FormControl('', []),
        naptarTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        naptarElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        naptarKonkurenciaCtrl: new FormControl('', [Validators.required]),
        naptarQ2Ctrl: new FormControl('', []),
        naptarQ3Ctrl: new FormControl('', []),
        hozamTargyevCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        hozamElozoEvCtrl: new FormControl('', [Validators.required, Validators.min(0)]),
        hozamKonkurenciaCtrl: new FormControl('', [Validators.required]),
        hozamQ2Ctrl: new FormControl('', []),
        hozamQ3Ctrl: new FormControl('', []),
      })
    })

  }


  valuechangeNettoTargyEv(value) {
    
    console.log(value);
  }

  valuechangeNettoElozo(value) {
    console.log(value);
  }

  // GETTERS
  createPenzugyiElemzes(){
      this.penzugyiAdatokService.createPenzugyiAdatok(this.penzugyiAdatokFormGroup.value);
  }

  getPenzugyiAdatok(){
    this.penzugyiAdatokService.getPenzugyiAdatok().subscribe(
      adatok =>{
        this.penzugyiAdatok = adatok;
      }
    )
  }

  penzugyiAdatokSubmit() {
    this.allFilled = true;
    this.createPenzugyiElemzes();
    this.getPenzugyiAdatok();
    this.filledEmitter.emit({filled: this.allFilled,penzugyiAdatok: this.penzugyiAdatok });
  }

}
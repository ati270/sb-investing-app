import { Component, OnInit, AfterViewInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PenzugyiAdatok } from 'src/app/models/uj-befektetes-models/penzugyi-adatok/penzugyi-adatok.model';
import { PenzugyiAdatokService } from 'src/app/services/befektetesek/uj-befektetes-services/penzugyi-adatok/penzugyi-adatok.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-penzugyi-adatok',
  templateUrl: './penzugyi-adatok.component.html',
  styleUrls: ['./penzugyi-adatok.component.scss'],
  providers: [MessageService]

})
export class PenzugyiAdatokComponent implements OnInit, AfterViewInit {

  @ViewChild('table', { static: false }) tableElement: ElementRef;

  @Output() filledPenzAdatokEmitter: EventEmitter<PenzugyiAdatok> = new EventEmitter();
  @Output() clearFormGroupEmitter: EventEmitter<FormGroup> = new EventEmitter();

  allFilled: boolean;

  penzugyiAdatok: PenzugyiAdatok;  // ezt fogom emitternek átadni: értéke ami a service-bol jön

  penzugyiAdatokFormGroup: FormGroup;
  private nettoTargyEv: number;
  private nettoElozoEv: number;
  private nettoKonkurencia: number;
  private nettoQ2: number;
  private nettoQ3: number;
  private eladottAruTargyev: number;
  private eladottAruElozoEv: number;
  private eladottAruKonkurencia: number;
  private eladottAruQ2: number;
  private eladottAruQ3: number;
  private tarsasagTargyev: number;
  private tarsasagElozoEv: number;
  private tarsasagKonkurencia: number;
  private tarsasagQ2: number;
  private tarsasagQ3: number;
  private kamatTargyev: number;
  private kamatElozoEv: number;
  private kamatKonkurencia: number;
  private kamatQ2: number;
  private kamatQ3: number;
  private fizetettKamatokTargyev: number;
  private fizetettKamatokElozoEv: number;
  private fizetettKamatokKonkurencia: number;
  private fizetettKamatokQ2: number;
  private fizetettKamatokQ3: number;
  private admTargyev: number;
  private admElozoEv: number;
  private admKonkurencia: number;
  private admQ2: number;
  private admQ3: number;
  private egyebTargyev: number;
  private egyebElozoEv: number;
  private egyebKonkurencia: number;
  private egyebQ2: number;
  private egyebQ3: number;
  private reszvenyTargyev: number;
  private reszvenyElozoEv: number;
  private reszvenyKonkurencia: number;
  private reszvenyQ2: number;
  private reszvenyQ3: number;
  private osztalekTargyev: number;
  private osztalekElozoEv: number;
  private osztalekKonkurencia: number;
  private osztalekQ2: number;
  private osztalekQ3: number;
  private elszamoltTargyev: number;
  private elszamoltElozoEv: number;
  private elszamoltKonkurencia: number;
  private elszamoltQ2: number;
  private elszamoltQ3: number;
  private keszpenzTargyev: number;
  private keszpenzElozoEv: number;
  private keszpenzKonkurencia: number;
  private keszpenzQ2: number;
  private keszpenzQ3: number;
  private kovetelesVevoTargyev: number;
  private kovetelesVevoElozoEv: number;
  private kovetelesVevoKonkurencia: number;
  private kovetelesVevoQ2: number;
  private kovetelesVevoQ3: number;
  private keszletTargyev: number;
  private keszletElozoEv: number;
  private keszletKonkurencia: number;
  private keszletQ2: number;
  private keszletQ3: number;
  private jovairasTargyev: number;
  private jovairasElozoEv: number;
  private jovairasKonkurencia: number;
  private jovairasQ2: number;
  private jovairasQ3: number;
  private immTargyev: number;
  private immElozoEv: number;
  private immKonkurencia: number;
  private immQ2: number;
  private immQ3: number;
  private forgoTargyev: number;
  private forgoElozoEv: number;
  private forgoKonkurencia: number;
  private forgoQ2: number;
  private forgoQ3: number;
  private eszkozTargyev: number;
  private eszkozElozoEv: number;
  private eszkozKonkurencia: number;
  private eszkozQ2: number;
  private eszkozQ3: number;
  private kotSzallitoTargyev: number;
  private kotSzallitoElozoEv: number;
  private kotSzallitoKonkurencia: number;
  private kotSzallitoQ2: number;
  private kotSzallitoQ3: number;
  private tokeTargyev: number;
  private tokeElozoEv: number;
  private tokeKonkurencia: number;
  private tokeQ2: number;
  private tokeQ3: number;
  private rovidLejaratuKotTargyev: number;
  private rovidLejaratuKotElozoEv: number;
  private rovidLejaratuKotKonkurencia: number;
  private rovidLejaratuKotQ2: number;
  private rovidLejaratuKotQ3: number;
  private osszKotTargyev: number;
  private osszKotElozoEv: number;
  private osszKotKonkurencia: number;
  private osszKotQ2: number;
  private osszKotQ3: number;
  private alkalmazottakSzamaTargyev: number;
  private alkalmazottakSzamaElozoEv: number;
  private alkalmazottakSzamaKonkurencia: number;
  private alkalmazottakSzamaQ2: number;
  private alkalmazottakSzamaQ3: number;
  private reszvenyArfolyamTargyev: number;
  private reszvenyArfolyamElozoEv: number;
  private reszvenyArfolyamKonkurencia: number;
  private reszvenyArfolyamQ2: number;
  private reszvenyArfolyamQ3: number;
  private naptarTargyev: number;
  private naptarElozoEv: number;
  private naptarKonkurencia: number;
  private naptarQ2: number;
  private naptarQ3: number;
  private hozamTargyev: number;
  private hozamElozoEv: number;
  private hozamKonkurencia: number;
  private hozamQ2: number;
  private hozamQ3: number;



  constructor(private formBuilder: FormBuilder, private penzugyiAdatokService: PenzugyiAdatokService, private messageService: MessageService) { }





  ngOnInit(): void {
    this.allFilled = false;
    this.createFormGroup();
  }

  ngAfterViewInit(): void {
    if(this.penzugyiAdatokService.$updatedAdatok !== undefined){
    this.loadVallKock();
    }

    this.clearFormGroupEmitter.emit(this.penzugyiAdatokFormGroup);

  }

  loadVallKock() {
    let penzugyiAdatok = this.penzugyiAdatokService.$updatedAdatok;

    this.patchFormGroup(penzugyiAdatok);

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

  patchFormGroup(penzAdatok: PenzugyiAdatok) {
    //penzugyiAdatok
    this.penzugyiAdatokFormGroup.patchValue(
      {
        penzugyiAdatok: {
          nettoTargyevCtrl: penzAdatok.$nettoTargyev,
          nettoElozoEvCtrl: penzAdatok.$nettoElozoEv,
          nettoKonkurenciaCtrl: penzAdatok.$nettoKonkurencia,
          nettoQ2Ctrl: penzAdatok.$nettoQ2,
          nettoQ3Ctrl: penzAdatok.$nettoQ3,
          eladottAruTargyevCtrl: penzAdatok.$eladottAruTargyev,
          eladottAruElozoEvCtrl: penzAdatok.$eladottAruElozoEv,
          eladottAruKonkurenciaCtrl: penzAdatok.$eladottAruKonkurencia,
          eladottAruQ2Ctrl: penzAdatok.$eladottAruQ2,
          eladottAruQ3Ctrl: penzAdatok.$eladottAruQ3,
          tarsasagTargyevCtrl: penzAdatok.$tarsasagTargyev,
          tarsasagElozoEvCtrl: penzAdatok.$tarsasagElozoEv,
          tarsasagKonkurenciaCtrl: penzAdatok.$tarsasagKonkurencia,
          tarsasagQ2Ctrl: penzAdatok.$tarsasagQ2,
          tarsasagQ3Ctrl: penzAdatok.$tarsasagQ3,
          kamatTargyevCtrl: penzAdatok.$kamatTargyev,
          kamatElozoEvCtrl: penzAdatok.$kamatElozoEv,
          kamatKonkurenciaCtrl: penzAdatok.$kamatKonkurencia,
          kamatQ2Ctrl: penzAdatok.$kamatQ2,
          kamatQ3Ctrl: penzAdatok.$kamatQ3,
          fizetettKamatokTargyevCtrl: penzAdatok.$fizetettKamatokTargyev,
          fizetettKamatokElozoEvCtrl: penzAdatok.$fizetettKamatokElozoEv,
          fizetettKamatokKonkurenciaCtrl: penzAdatok.$fizetettKamatokKonkurencia,
          fizetettKamatokQ2Ctrl: penzAdatok.$fizetettKamatokQ2,
          fizetettKamatokQ3Ctrl: penzAdatok.$fizetettKamatokQ3,
          admTargyevCtrl: penzAdatok.$admTargyev,
          admElozoEvCtrl: penzAdatok.$admElozoEv,
          admKonkurenciaCtrl: penzAdatok.$admKonkurencia,
          admQ2Ctrl: penzAdatok.$admQ2,
          admQ3Ctrl: penzAdatok.$admQ3,
          egyebTargyevCtrl: penzAdatok.$egyebTargyev,
          egyebElozoEvCtrl: penzAdatok.$egyebElozoEv,
          egyebKonkurenciaCtrl: penzAdatok.$egyebKonkurencia,
          egyebQ2Ctrl: penzAdatok.$egyebQ2,
          egyebQ3Ctrl: penzAdatok.$egyebQ3,
          reszvenyTargyevCtrl: penzAdatok.$reszvenyTargyev,
          reszvenyElozoEvCtrl: penzAdatok.$reszvenyElozoEv,
          reszvenyKonkurenciaCtrl: penzAdatok.$reszvenyKonkurencia,
          reszvenyQ2Ctrl: penzAdatok.$reszvenyQ2,
          reszvenyQ3Ctrl: penzAdatok.$reszvenyQ3,
          osztalekTargyevCtrl: penzAdatok.$osztalekTargyev,
          osztalekElozoEvCtrl: penzAdatok.$osztalekElozoEv,
          osztalekKonkurenciaCtrl: penzAdatok.$osztalekKonkurencia,
          osztalekQ2Ctrl: penzAdatok.$osztalekQ2,
          osztalekQ3Ctrl: penzAdatok.$osztalekQ3,
          elszamoltTargyevCtrl: penzAdatok.$elszamoltTargyev,
          elszamoltElozoEvCtrl: penzAdatok.$elszamoltElozoEv,
          elszamoltKonkurenciaCtrl: penzAdatok.$elszamoltKonkurencia,
          elszamoltQ2Ctrl: penzAdatok.$elszamoltQ2,
          elszamoltQ3Ctrl: penzAdatok.$elszamoltQ3,
          keszpenzTargyevCtrl: penzAdatok.$keszpenzTargyev,
          keszpenzElozoEvCtrl: penzAdatok.$keszletElozoEv,
          keszpenzKonkurenciaCtrl: penzAdatok.$keszletKonkurencia,
          keszpenzQ2Ctrl: penzAdatok.$keszletQ2,
          keszpenzQ3Ctrl: penzAdatok.$keszpenzQ3,
          kovetelesVevoTargyevCtrl: penzAdatok.$kovetelesVevoTargyev,
          kovetelesVevoElozoEvCtrl: penzAdatok.$kovetelesVevoElozoEv,
          kovetelesVevoKonkurenciaCtrl: penzAdatok.$kovetelesVevoKonkurencia,
          kovetelesVevoQ2Ctrl: penzAdatok.$kovetelesVevoQ2,
          kovetelesVevoQ3Ctrl: penzAdatok.$kovetelesVevoQ3,
          keszletTargyevCtrl: penzAdatok.$keszletTargyev,
          keszletElozoEvCtrl: penzAdatok.$keszletElozoEv,
          keszletKonkurenciaCtrl: penzAdatok.$keszletKonkurencia,
          keszletQ2Ctrl: penzAdatok.$keszletQ2,
          keszletQ3Ctrl: penzAdatok.$keszletQ3,
          jovairasTargyevCtrl: penzAdatok.$jovairasTargyev,
          jovairasElozoEvCtrl: penzAdatok.$jovairasElozoEv,
          jovairasKonkurenciaCtrl: penzAdatok.$jovairasKonkurencia,
          jovairasQ2Ctrl: penzAdatok.$jovairasQ2,
          jovairasQ3Ctrl: penzAdatok.$jovairasQ3,
          immTargyevCtrl: penzAdatok.$immTargyev,
          immElozoEvCtrl: penzAdatok.$immElozoEv,
          immKonkurenciaCtrl: penzAdatok.$immKonkurencia,
          immQ2Ctrl: penzAdatok.$immQ2,
          immQ3Ctrl: penzAdatok.$immQ3,
          forgoTargyevCtrl: penzAdatok.$forgoTargyev,
          forgoElozoEvCtrl: penzAdatok.$forgoElozoEv,
          forgoKonkurenciaCtrl: penzAdatok.$forgoKonkurencia,
          forgoQ2Ctrl: penzAdatok.$forgoQ2,
          forgoQ3Ctrl: penzAdatok.$forgoQ3,
          eszkozTargyevCtrl: penzAdatok.$eszkozTargyev,
          eszkozElozoEvCtrl: penzAdatok.$eszkozElozoEv,
          eszkozKonkurenciaCtrl: penzAdatok.$eszkozKonkurencia,
          eszkozQ2Ctrl: penzAdatok.$eszkozQ2,
          eszkozQ3Ctrl: penzAdatok.$eszkozQ3,
          kotSzallitoTargyevCtrl: penzAdatok.$kotSzallitoTargyev,
          kotSzallitoElozoEvCtrl: penzAdatok.$kotSzallitoElozoEv,
          kotSzallitoKonkurenciaCtrl: penzAdatok.$kotSzallitoKonkurencia,
          kotSzallitoQ2Ctrl: penzAdatok.$kotSzallitoQ2,
          kotSzallitoQ3Ctrl: penzAdatok.$kotSzallitoQ3,
          tokeTargyevCtrl: penzAdatok.$tokeTargyev,
          tokeElozoEvCtrl: penzAdatok.$tokeElozoEv,
          tokeKonkurenciaCtrl: penzAdatok.$tokeKonkurencia,
          tokeQ2Ctrl: penzAdatok.$tokeQ2,
          tokeQ3Ctrl: penzAdatok.$tokeQ3,
          rovidLejaratuKotTargyevCtrl: penzAdatok.$rovidLejaratuKotTargyev,
          rovidLejaratuKotElozoEvCtrl: penzAdatok.$rovidLejaratuKotElozoEv,
          rovidLejaratuKotKonkurenciaCtrl: penzAdatok.$rovidLejaratuKotKonkurencia,
          rovidLejaratuKotQ2Ctrl: penzAdatok.$rovidLejaratuKotQ2,
          rovidLejaratuKotQ3Ctrl: penzAdatok.$rovidLejaratuKotQ3,
          osszKotTargyevCtrl: penzAdatok.$osszKotTargyev,
          osszKotElozoEvCtrl: penzAdatok.$osszKotElozoEv,
          osszKotKonkurenciaCtrl: penzAdatok.$osszKotKonkurencia,
          osszKotQ2Ctrl: penzAdatok.$osszKotQ2,
          osszKotQ3Ctrl: penzAdatok.$osszKotQ3,
          alkalmazottakSzamaTargyevCtrl: penzAdatok.$alkalmazottakSzamaTargyev,
          alkalmazottakSzamaElozoEvCtrl: penzAdatok.$alkalmazottakSzamaElozoEv,
          alkalmazottakSzamaKonkurenciaCtrl: penzAdatok.$alkalmazottakSzamaKonkurencia,
          alkalmazottakSzamaQ2Ctrl: penzAdatok.$alkalmazottakSzamaQ2,
          alkalmazottakSzamaQ3Ctrl: penzAdatok.$alkalmazottakSzamaQ3,
          reszvenyArfolyamTargyevCtrl: penzAdatok.$reszvenyArfolyamTargyev,
          reszvenyArfolyamElozoEvCtrl: penzAdatok.$reszvenyArfolyamElozoEv,
          reszvenyArfolyamKonkurenciaCtrl: penzAdatok.$reszvenyArfolyamKonkurencia,
          reszvenyArfolyamQ2Ctrl: penzAdatok.$reszvenyArfolyamQ2,
          reszvenyArfolyamQ3Ctrl: penzAdatok.$reszvenyArfolyamQ3,
          naptarTargyevCtrl: penzAdatok.$naptarTargyev,
          naptarElozoEvCtrl: penzAdatok.$naptarElozoEv,
          naptarKonkurenciaCtrl: penzAdatok.$naptarKonkurencia,
          naptarQ2Ctrl: penzAdatok.$naptarQ2,
          naptarQ3Ctrl: penzAdatok.$naptarQ3,
          hozamTargyevCtrl: penzAdatok.$hozamTargyev,
          hozamElozoEvCtrl: penzAdatok.$hozamElozoEv,
          hozamKonkurenciaCtrl: penzAdatok.$hozamKonkurencia,
          hozamQ2Ctrl: penzAdatok.$hozamQ2,
          hozamQ3Ctrl: penzAdatok.$hozamQ3,
        }
      }
    )

  }



  valuechangeNettoTargyEv(value) {

    console.log(value);
  }

  valuechangeNettoElozo(value) {
    console.log(value);
  }

  // GETTERS


  createPenzugyiElemzes() {
    // Át kell adni az adatokat, az itteni gettereket
    this.penzugyiAdatokService.addPenzugyiAdatok(
      this.$nettoTargyEv,
      this.$nettoElozoEv,
      this.$nettoKonkurencia,
      this.$nettoQ2,
      this.$nettoQ3,
      this.$eladottAruTargyev,
      this.$eladottAruElozoEv,
      this.$eladottAruKonkurencia,
      this.$eladottAruQ2,
      this.$eladottAruQ3,
      this.$tarsasagTargyev,
      this.$tarsasagElozoEv,
      this.$tarsasagKonkurencia,
      this.$tarsasagQ2,
      this.$tarsasagQ3,
      this.$kamatTargyev,
      this.$kamatElozoEv,
      this.$kamatKonkurencia,
      this.$kamatQ2,
      this.$kamatQ3,
      this.$fizetettKamatokTargyev,
      this.$fizetettKamatokElozoEv,
      this.$fizetettKamatokKonkurencia,
      this.$fizetettKamatokQ2,
      this.$fizetettKamatokQ3,
      this.$admTargyev,
      this.$admElozoEv,
      this.$admKonkurencia,
      this.$admQ2,
      this.$admQ3,
      this.$egyebTargyev,
      this.$egyebElozoEv,
      this.$egyebKonkurencia,
      this.$egyebQ2,
      this.$egyebQ3,
      this.$reszvenyTargyev,
      this.$reszvenyElozoEv,
      this.$reszvenyKonkurencia,
      this.$reszvenyQ2,
      this.$reszvenyQ3,
      this.$osztalekTargyev,
      this.$osztalekElozoEv,
      this.$osztalekKonkurencia,
      this.$osztalekQ2,
      this.$osztalekQ3,
      this.$elszamoltTargyev,
      this.$elszamoltElozoEv,
      this.$elszamoltKonkurencia,
      this.$elszamoltQ2,
      this.$elszamoltQ3,
      this.$keszpenzTargyev,
      this.$keszpenzElozoEv,
      this.$keszpenzKonkurencia,
      this.$keszpenzQ2,
      this.$keszpenzQ3,
      this.$kovetelesVevoTargyev,
      this.$kovetelesVevoElozoEv,
      this.$kovetelesVevoKonkurencia,
      this.$kovetelesVevoQ2,
      this.$kovetelesVevoQ3,
      this.$keszletTargyev,
      this.$keszletElozoEv,
      this.$keszletKonkurencia,
      this.$keszletQ2,
      this.$keszletQ3,
      this.$jovairasTargyev,
      this.$jovairasElozoEv,
      this.$jovairasKonkurencia,
      this.$jovairasQ2,
      this.$jovairasQ3,
      this.$immTargyev,
      this.$immElozoEv,
      this.$immKonkurencia,
      this.$immQ2,
      this.$immQ3,
      this.$forgoTargyev,
      this.$forgoElozoEv,
      this.$forgoKonkurencia,
      this.$forgoQ2,
      this.$forgoQ3,
      this.$eszkozTargyev,
      this.$eszkozElozoEv,
      this.$eszkozKonkurencia,
      this.$eszkozQ2,
      this.$eszkozQ3,
      this.$kotSzallitoTargyev,
      this.$kotSzallitoElozoEv,
      this.$kotSzallitoKonkurencia,
      this.$kotSzallitoQ2,
      this.$kotSzallitoQ3,
      this.$tokeTargyev,
      this.$tokeElozoEv,
      this.$tokeKonkurencia,
      this.$tokeQ2,
      this.$tokeQ3,
      this.$rovidLejaratuKotTargyev,
      this.$rovidLejaratuKotElozoEv,
      this.$rovidLejaratuKotKonkurencia,
      this.$rovidLejaratuKotQ2,
      this.$rovidLejaratuKotQ3,
      this.$osszKotTargyev,
      this.$osszKotElozoEv,
      this.$osszKotKonkurencia,
      this.$osszKotQ2,
      this.$osszKotQ3,
      this.$alkalmazottakSzamaTargyev,
      this.$alkalmazottakSzamaElozoEv,
      this.$alkalmazottakSzamaKonkurencia,
      this.$alkalmazottakSzamaQ2,
      this.$alkalmazottakSzamaQ3,
      this.$reszvenyArfolyamTargyev,
      this.$reszvenyArfolyamElozoEv,
      this.$reszvenyArfolyamKonkurencia,
      this.$reszvenyArfolyamQ2,
      this.$reszvenyArfolyamQ3,
      this.$naptarTargyev,
      this.$naptarElozoEv,
      this.$naptarKonkurencia,
      this.$naptarQ2,
      this.$naptarQ3,
      this.$hozamTargyev,
      this.$hozamElozoEv,
      this.$hozamKonkurencia,
      this.$hozamQ2,
      this.$hozamQ3
    )
  }

  // OK
  getPenzugyiAdatok() {
    this.penzugyiAdatokService.getPenzugyiAdatok().subscribe(
      adatok => {
        this.penzugyiAdatok = adatok;
      }
    )
  }

  penzugyiAdatokSubmit() {
    this.createPenzugyiElemzes();
    this.getPenzugyiAdatok();
    this.filledPenzAdatokEmitter.emit(this.penzugyiAdatok);

    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Pénzügyi adatok sikeresen hozzáadva!' });

    console.log(this.penzugyiAdatok)

  }





  redirectToBlog() {
    let url = "https://blog.sb-investing.com/penzugyi-adatok/";
    window.open(url, "_blank");
  }



  generatePDF() {

    let header = [['Megnevezés', 'Tárgyév', 'Elozo év', 'Konkurencia']];

    let tableData = [
      ['Nettó árbevétel', this.$nettoTargyEv, this.$nettoElozoEv, this.$nettoKonkurencia],
      ['Az eladott áruk költsége', this.$eladottAruTargyev, this.$eladottAruElozoEv, this.$eladottAruKonkurencia],
      ['Értékesítés és adminisztratív költségek', this.$admTargyev, this.$admElozoEv, this.$admKonkurencia,],
      ['Elszámolt értékcs. és amortizáció', this.$elszamoltTargyev, this.$elszamoltElozoEv, this.$elszamoltKonkurencia],
      ['Egyéb muködési költség', this.$egyebTargyev, this.$egyebElozoEv, this.$egyebKonkurencia],
      ['Kamat és jövedelem elotti nyereség', this.$kamatTargyev, this.$kamatElozoEv, this.$kamatKonkurencia],
      ['Fizetett kamatok', this.$fizetettKamatokTargyev, this.$fizetettKamatokElozoEv, this.$fizetettKamatokKonkurencia],
      ['Társaságnak tulajdonítható nettó eredmény', this.$tarsasagTargyev, this.$tarsasagElozoEv, this.$tarsasagKonkurencia],
      ['Kifizetett osztalékok', this.$osztalekTargyev, this.$osztalekElozoEv, this.$osztalekKonkurencia],
      ['Készpénz', this.$keszpenzTargyev, this.$keszpenzElozoEv, this.$keszpenzKonkurencia],
      ['Követelések (vevok)', this.$kovetelesVevoTargyev, this.$kovetelesVevoElozoEv, this.$kovetelesVevoKonkurencia],
      ['Készletek (leltár)', this.$keszletTargyev, this.$keszletElozoEv, this.$keszletKonkurencia],
      ['Összes forgóeszköz', this.$forgoTargyev, this.$forgoElozoEv, this.$forgoKonkurencia],
      ['Jóváírás', this.$jovairasTargyev, this.$jovairasElozoEv, this.$jovairasKonkurencia],
      ['Immateriális javak', this.$immTargyev, this.$immElozoEv, this.$immKonkurencia],
      ['Eszközök összesen', this.$eszkozTargyev, this.$eszkozElozoEv, this.$eszkozKonkurencia],
      ['Kötelezettségek (szállítók)', this.$kotSzallitoTargyev, this.$kotSzallitoElozoEv, this.$kotSzallitoKonkurencia],
      ['Rövid lejáratú kötelezettségek összesen', this.$rovidLejaratuKotTargyev, this.$rovidLejaratuKotElozoEv, this.$rovidLejaratuKotKonkurencia],
      ['Összes kötelezettségek', this.$osszKotTargyev, this.$osszKotElozoEv, this.$osszKotKonkurencia],
      ['Hosszú lej.kötelezettségek', this.$osszKotTargyev - this.$rovidLejaratuKotTargyev, this.$osszKotElozoEv - this.rovidLejaratuKotElozoEv, this.$osszKotKonkurencia - this.$rovidLejaratuKotKonkurencia],
      ['Részvények darabszáma', this.$reszvenyTargyev, this.$reszvenyElozoEv, this.$reszvenyKonkurencia, this.$reszvenyQ2, this.$reszvenyQ3],
      ['Összes saját toke', this.tokeTargyev, this.$tokeElozoEv, this.$tokeKonkurencia],
      ['Alkalmazottak száma', this.$alkalmazottakSzamaTargyev, this.$alkalmazottakSzamaElozoEv, this.$alkalmazottakSzamaKonkurencia],
      ['Részvény árfolyam', this.$reszvenyArfolyamTargyev, this.$reszvenyArfolyamElozoEv, this.$reszvenyArfolyamKonkurencia],
      ['Naptári napok száma', this.$naptarTargyev, this.$naptarElozoEv, this.$naptarKonkurencia],
      ['Hosszú lejáratú állampapírok hozama', this.$hozamTargyev, this.$hozamElozoEv, this.$hozamKonkurencia],




    ]

    var pdf = new jsPDF('p', 'pt', 'a4');
    let date = new Date();

    pdf.setProperties({
      title: 'SB Investing - Pénzügyi adatok',
      subject: '',
      //author: 'James Hall',
      //keywords: 'generated, javascript, web 2.0, ajax',
      //creator: 'MEEE'
    });

   // pdf.addFont('PTSans-normal.ttf', 'PTSans', 'normal');

    pdf.setFont('PTSans');
    console.log(pdf.getFontList());

    pdf.text('Kimutatás - Pénzügyi adatok', 45, 40 );
    pdf.setFontSize(12);
    pdf.setCreationDate(new Date());
    pdf.setTextColor(99);


    let pdfName = 'sb_kimutatas' + (date.getMonth() + 1) + date.getDate() + '.pdf';

    (pdf as any).autoTable({
      head: header,
      body: tableData,

      styles: {
        halign: 'center',
      },
      margin: {
        top: 100
      },
      theme: 'grid',
      didDrawCell: data => {
      }

    })

    //pdf.text('Készült: ' + date.getFullYear() + "." + (date.getMonth() +1) +  "."  + date.getDay(), 500, 500);


    // Open PDF document in browser's new tab
    pdf.output('dataurlnewwindow')

    // Download PDF doc
    pdf.save(pdfName);

    /*const doc = new jsPDF('p', 'px', 'a4');

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.tableElement.nativeElement;
    doc.add
    doc.html(pdfTable, {
      callback(rst){
        rst.save('one.pdf');
      },
      x: 10,
      y: 10
    })*/


  }


  // GETTERS

  /**
      * Getter $nettoTargyEv
      * @return {number}
      */
  public get $nettoTargyEv(): number {
    this.nettoTargyEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('nettoTargyevCtrl').value;
    return this.nettoTargyEv;
  }


  /**
   * Getter $nettoElozoEv
   * @return {number}
   */
  public get $nettoElozoEv(): number {

    this.nettoElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('nettoElozoEvCtrl').value;
    return this.nettoElozoEv;
  }

  /**
   * Getter $nettoKonkurencia
   * @return {number}
   */
  public get $nettoKonkurencia(): number {
    this.nettoKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('nettoKonkurenciaCtrl').value;
    return this.nettoKonkurencia;
  }

  /**
   * Getter $nettoQ2
   * @return {number}
   */
  public get $nettoQ2(): number {
    this.nettoQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('nettoQ2Ctrl').value;

    return this.nettoQ2;
  }

  /**
   * Getter $nettoQ3
   * @return {number}
   */
  public get $nettoQ3(): number {
    this.nettoQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('nettoQ3Ctrl').value;

    return this.nettoQ3;
  }

  /**
   * Getter $eladottAruTargyev
   * @return {number}
   */
  public get $eladottAruTargyev(): number {
    this.eladottAruTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('eladottAruTargyevCtrl').value;

    return this.eladottAruTargyev;
  }

  /**
   * Getter $eladottAruElozoEv
   * @return {number}
   */
  public get $eladottAruElozoEv(): number {
    this.eladottAruElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('eladottAruElozoEvCtrl').value;

    return this.eladottAruElozoEv;
  }

  /**
   * Getter $eladottAruKonkurencia
   * @return {number}
   */
  public get $eladottAruKonkurencia(): number {
    this.eladottAruKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('eladottAruKonkurenciaCtrl').value;

    return this.eladottAruKonkurencia;
  }

  /**
   * Getter $eladottAruQ2
   * @return {number}
   */
  public get $eladottAruQ2(): number {
    this.eladottAruQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('eladottAruQ2Ctrl').value;

    return this.eladottAruQ2;
  }

  /**
   * Getter $eladottAruQ3
   * @return {number}
   */
  public get $eladottAruQ3(): number {
    this.eladottAruQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('eladottAruQ3Ctrl').value;

    return this.eladottAruQ3;
  }

  /**
   * Getter $tarsasagTargyev
   * @return {number}
   */
  public get $tarsasagTargyev(): number {

    this.tarsasagTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('tarsasagTargyevCtrl').value;
    return this.tarsasagTargyev;
  }

  /**
   * Getter $tarsasagElozoEv
   * @return {number}
   */
  public get $tarsasagElozoEv(): number {
    this.tarsasagElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('tarsasagElozoEvCtrl').value;

    return this.tarsasagElozoEv;
  }

  /**
   * Getter $tarsasagKonkurencia
   * @return {number}
   */
  public get $tarsasagKonkurencia(): number {
    this.tarsasagKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('tarsasagKonkurenciaCtrl').value;

    return this.tarsasagKonkurencia;
  }

  /**
   * Getter $tarsasagQ2
   * @return {number}
   */
  public get $tarsasagQ2(): number {
    this.tarsasagQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('tarsasagQ2Ctrl').value;

    return this.tarsasagQ2;
  }

  /**
   * Getter $tarsasagQ3
   * @return {number}
   */
  public get $tarsasagQ3(): number {
    this.tarsasagQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('tarsasagQ3Ctrl').value;

    return this.tarsasagQ3;
  }

  /**
   * Getter $kamatTargyev
   * @return {number}
   */
  public get $kamatTargyev(): number {
    this.kamatTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kamatTargyevCtrl').value;

    return this.kamatTargyev;
  }

  /**
   * Getter $kamatElozoEv
   * @return {number}
   */
  public get $kamatElozoEv(): number {
    this.kamatElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kamatElozoEvCtrl').value;

    return this.kamatElozoEv;
  }

  /**
   * Getter $kamatKonkurencia
   * @return {number}
   */
  public get $kamatKonkurencia(): number {
    this.kamatKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kamatKonkurenciaCtrl').value;

    return this.kamatKonkurencia;
  }

  /**
   * Getter $kamatQ2
   * @return {number}
   */
  public get $kamatQ2(): number {
    this.kamatQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kamatQ2Ctrl').value;

    return this.kamatQ2;
  }

  /**
   * Getter $kamatQ3
   * @return {number}
   */
  public get $kamatQ3(): number {
    this.kamatQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kamatQ3Ctrl').value;

    return this.kamatQ3;
  }

  /**
   * Getter $fizetettKamatokTargyev
   * @return {number}
   */
  public get $fizetettKamatokTargyev(): number {
    this.fizetettKamatokTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('fizetettKamatokTargyevCtrl').value;

    return this.fizetettKamatokTargyev;
  }

  /**
   * Getter $fizetettKamatokElozoEv
   * @return {number}
   */
  public get $fizetettKamatokElozoEv(): number {
    this.fizetettKamatokElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('fizetettKamatokElozoEvCtrl').value;

    return this.fizetettKamatokElozoEv;
  }

  /**
   * Getter $fizetettKamatokKonkurencia
   * @return {number}
   */
  public get $fizetettKamatokKonkurencia(): number {
    this.fizetettKamatokKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('fizetettKamatokKonkurenciaCtrl').value;

    return this.fizetettKamatokKonkurencia;
  }

  /**
   * Getter $fizetettKamatokQ2
   * @return {number}
   */
  public get $fizetettKamatokQ2(): number {
    this.fizetettKamatokQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('fizetettKamatokQ2Ctrl').value;

    return this.fizetettKamatokQ2;
  }

  /**
   * Getter $fizetettKamatokQ3
   * @return {number}
   */
  public get $fizetettKamatokQ3(): number {
    this.fizetettKamatokQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('fizetettKamatokQ3Ctrl').value;

    return this.fizetettKamatokQ3;
  }

  /**
   * Getter $admTargyev
   * @return {number}
   */
  public get $admTargyev(): number {
    this.admTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('admTargyevCtrl').value;

    return this.admTargyev;
  }

  /**
   * Getter $admElozoEv
   * @return {number}
   */
  public get $admElozoEv(): number {
    this.admElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('admElozoEvCtrl').value;

    return this.admElozoEv;
  }

  /**
   * Getter $admKonkurencia
   * @return {number}
   */
  public get $admKonkurencia(): number {
    this.admKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('admKonkurenciaCtrl').value;

    return this.admKonkurencia;
  }

  /**
   * Getter $admQ2
   * @return {number}
   */
  public get $admQ2(): number {
    this.admQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('admQ2Ctrl').value;

    return this.admQ2;
  }

  /**
   * Getter $admQ3
   * @return {number}
   */
  public get $admQ3(): number {
    this.admQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('admQ3Ctrl').value;

    return this.admQ3;
  }

  /**
   * Getter $egyebTargyev
   * @return {number}
   */
  public get $egyebTargyev(): number {
    this.egyebTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('egyebTargyevCtrl').value;

    return this.egyebTargyev;
  }

  /**
   * Getter $egyebElozoEv
   * @return {number}
   */
  public get $egyebElozoEv(): number {
    this.egyebElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('egyebElozoEvCtrl').value;

    return this.egyebElozoEv;
  }

  /**
   * Getter $egyebKonkurencia
   * @return {number}
   */
  public get $egyebKonkurencia(): number {
    this.egyebKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('egyebKonkurenciaCtrl').value;

    return this.egyebKonkurencia;
  }

  /**
   * Getter $egyebQ2
   * @return {number}
   */
  public get $egyebQ2(): number {
    this.egyebQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('egyebQ2Ctrl').value;

    return this.egyebQ2;
  }

  /**
   * Getter $egyebQ3
   * @return {number}
   */
  public get $egyebQ3(): number {
    this.egyebQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('egyebQ3Ctrl').value;

    return this.egyebQ3;
  }

  /**
   * Getter $reszvenyTargyev
   * @return {number}
   */
  public get $reszvenyTargyev(): number {
    this.reszvenyTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('reszvenyTargyevCtrl').value;

    return this.reszvenyTargyev;
  }

  /**
   * Getter $reszvenyElozoEv
   * @return {number}
   */
  public get $reszvenyElozoEv(): number {

    this.reszvenyElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('reszvenyElozoEvCtrl').value;

    return this.reszvenyElozoEv;
  }

  /**
   * Getter $reszvenyKonkurencia
   * @return {number}
   */
  public get $reszvenyKonkurencia(): number {
    this.reszvenyKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('reszvenyKonkurenciaCtrl').value;

    return this.reszvenyKonkurencia;
  }

  /**
   * Getter $reszvenyQ2
   * @return {number}
   */
  public get $reszvenyQ2(): number {
    this.reszvenyQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('reszvenyQ2Ctrl').value;

    return this.reszvenyQ2;
  }

  /**
   * Getter $reszvenyQ3
   * @return {number}
   */
  public get $reszvenyQ3(): number {
    this.reszvenyQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('reszvenyQ3Ctrl').value;

    return this.reszvenyQ3;
  }

  /**
   * Getter $osztalekTargyev
   * @return {number}
   */
  public get $osztalekTargyev(): number {
    this.osztalekTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('osztalekTargyevCtrl').value;

    return this.osztalekTargyev;
  }

  /**
   * Getter $osztalekElozoEv
   * @return {number}
   */
  public get $osztalekElozoEv(): number {
    this.osztalekElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('osztalekElozoEvCtrl').value;

    return this.osztalekElozoEv;
  }

  /**
   * Getter $osztalekKonkurencia
   * @return {number}
   */
  public get $osztalekKonkurencia(): number {
    this.osztalekKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('osztalekKonkurenciaCtrl').value;

    return this.osztalekKonkurencia;
  }

  /**
   * Getter $osztalekQ2
   * @return {number}
   */
  public get $osztalekQ2(): number {
    this.osztalekQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('osztalekQ2Ctrl').value;

    return this.osztalekQ2;
  }

  /**
   * Getter $osztalekQ3
   * @return {number}
   */
  public get $osztalekQ3(): number {
    this.osztalekQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('osztalekQ3Ctrl').value;

    return this.osztalekQ3;
  }

  /**
   * Getter $elszamoltTargyev
   * @return {number}
   */
  public get $elszamoltTargyev(): number {
    this.elszamoltTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('elszamoltTargyevCtrl').value;

    return this.elszamoltTargyev;
  }

  /**
   * Getter $elszamoltElozoEv
   * @return {number}
   */
  public get $elszamoltElozoEv(): number {
    this.elszamoltElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('elszamoltElozoEvCtrl').value;

    return this.elszamoltElozoEv;
  }

  /**
   * Getter $elszamoltKonkurencia
   * @return {number}
   */
  public get $elszamoltKonkurencia(): number {
    this.elszamoltKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('elszamoltKonkurenciaCtrl').value;

    return this.elszamoltKonkurencia;
  }

  /**
   * Getter $elszamoltQ2
   * @return {number}
   */
  public get $elszamoltQ2(): number {
    this.elszamoltQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('elszamoltQ2Ctrl').value;

    return this.elszamoltQ2;
  }

  /**
   * Getter $elszamoltQ3
   * @return {number}
   */
  public get $elszamoltQ3(): number {
    this.elszamoltQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('elszamoltQ3Ctrl').value;

    return this.elszamoltQ3;
  }

  /**
   * Getter $keszpenzTargyev
   * @return {number}
   */
  public get $keszpenzTargyev(): number {
    this.keszpenzTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('keszpenzTargyevCtrl').value;

    return this.keszpenzTargyev;
  }

  /**
   * Getter $keszpenzElozoEv
   * @return {number}
   */
  public get $keszpenzElozoEv(): number {
    this.keszpenzElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('keszpenzElozoEvCtrl').value;

    return this.keszpenzElozoEv;
  }

  /**
   * Getter $keszpenzKonkurencia
   * @return {number}
   */
  public get $keszpenzKonkurencia(): number {
    this.keszpenzKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('keszpenzKonkurenciaCtrl').value;

    return this.keszpenzKonkurencia;
  }

  /**
   * Getter $keszpenzQ2
   * @return {number}
   */
  public get $keszpenzQ2(): number {
    this.keszpenzQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('keszpenzQ2Ctrl').value;

    return this.keszpenzQ2;
  }

  /**
   * Getter $keszpenzQ3
   * @return {number}
   */
  public get $keszpenzQ3(): number {
    this.keszpenzQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('keszpenzQ3Ctrl').value;

    return this.keszpenzQ3;
  }

  /**
   * Getter $kovetelesVevoTargyev
   * @return {number}
   */
  public get $kovetelesVevoTargyev(): number {
    this.kovetelesVevoTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kovetelesVevoTargyevCtrl').value;

    return this.kovetelesVevoTargyev;
  }

  /**
   * Getter $kovetelesVevoElozoEv
   * @return {number}
   */
  public get $kovetelesVevoElozoEv(): number {
    this.kovetelesVevoElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kovetelesVevoElozoEvCtrl').value;

    return this.kovetelesVevoElozoEv;
  }

  /**
   * Getter $kovetelesVevoKonkurencia
   * @return {number}
   */
  public get $kovetelesVevoKonkurencia(): number {
    this.kovetelesVevoKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kovetelesVevoKonkurenciaCtrl').value;

    return this.kovetelesVevoKonkurencia;
  }

  /**
   * Getter $kovetelesVevoQ2
   * @return {number}
   */
  public get $kovetelesVevoQ2(): number {
    this.kovetelesVevoQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kovetelesVevoQ2Ctrl').value;

    return this.kovetelesVevoQ2;
  }

  /**
   * Getter $kovetelesVevoQ3
   * @return {number}
   */
  public get $kovetelesVevoQ3(): number {
    this.kovetelesVevoQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kovetelesVevoQ3Ctrl').value;

    return this.kovetelesVevoQ3;
  }

  /**
   * Getter $keszletTargyev
   * @return {number}
   */
  public get $keszletTargyev(): number {
    this.keszletTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('keszletTargyevCtrl').value;

    return this.keszletTargyev;
  }

  /**
   * Getter $keszletElozoEv
   * @return {number}
   */
  public get $keszletElozoEv(): number {
    this.keszletElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('keszletElozoEvCtrl').value;

    return this.keszletElozoEv;
  }

  /**
   * Getter $keszletKonkurencia
   * @return {number}
   */
  public get $keszletKonkurencia(): number {
    this.keszletKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('keszletKonkurenciaCtrl').value;

    return this.keszletKonkurencia;
  }

  /**
   * Getter $keszletQ2
   * @return {number}
   */
  public get $keszletQ2(): number {
    this.keszletQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('keszletQ2Ctrl').value;

    return this.keszletQ2;
  }

  /**
   * Getter $keszletQ3
   * @return {number}
   */
  public get $keszletQ3(): number {
    this.keszletQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('keszletQ3Ctrl').value;

    return this.keszletQ3;
  }

  /**
   * Getter $jovairasTargyev
   * @return {number}
   */
  public get $jovairasTargyev(): number {
    this.jovairasTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('jovairasTargyevCtrl').value;

    return this.jovairasTargyev;
  }

  /**
   * Getter $jovairasElozoEv
   * @return {number}
   */
  public get $jovairasElozoEv(): number {
    this.jovairasElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('jovairasElozoEvCtrl').value;

    return this.jovairasElozoEv;
  }

  /**
   * Getter $jovairasKonkurencia
   * @return {number}
   */
  public get $jovairasKonkurencia(): number {
    this.jovairasKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('jovairasKonkurenciaCtrl').value;

    return this.jovairasKonkurencia;
  }

  /**
   * Getter $jovairasQ2
   * @return {number}
   */
  public get $jovairasQ2(): number {
    this.jovairasQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('jovairasQ2Ctrl').value;

    return this.jovairasQ2;
  }

  /**
   * Getter $jovairasQ3
   * @return {number}
   */
  public get $jovairasQ3(): number {
    this.jovairasQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('jovairasQ3Ctrl').value;

    return this.jovairasQ3;
  }

  /**
   * Getter $immTargyev
   * @return {number}
   */
  public get $immTargyev(): number {
    this.immTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('immTargyevCtrl').value;

    return this.immTargyev;
  }

  /**
   * Getter $immElozoEv
   * @return {number}
   */
  public get $immElozoEv(): number {
    this.immElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('immElozoEvCtrl').value;

    return this.immElozoEv;
  }

  /**
   * Getter $immKonkurencia
   * @return {number}
   */
  public get $immKonkurencia(): number {
    this.immKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('immKonkurenciaCtrl').value;

    return this.immKonkurencia;
  }

  /**
   * Getter $immQ2
   * @return {number}
   */
  public get $immQ2(): number {
    this.immQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('immQ2Ctrl').value;

    return this.immQ2;
  }

  /**
   * Getter $immQ3
   * @return {number}
   */
  public get $immQ3(): number {
    this.immQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('immQ3Ctrl').value;

    return this.immQ3;
  }

  /**
   * Getter $forgoTargyev
   * @return {number}
   */
  public get $forgoTargyev(): number {
    this.forgoTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('forgoTargyevCtrl').value;

    return this.forgoTargyev;
  }

  /**
   * Getter $forgoElozoEv
   * @return {number}
   */
  public get $forgoElozoEv(): number {
    this.forgoElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('forgoElozoEvCtrl').value;

    return this.forgoElozoEv;
  }

  /**
   * Getter $forgoKonkurencia
   * @return {number}
   */
  public get $forgoKonkurencia(): number {
    this.forgoKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('forgoKonkurenciaCtrl').value;

    return this.forgoKonkurencia;
  }

  /**
   * Getter $forgoQ2
   * @return {number}
   */
  public get $forgoQ2(): number {
    this.forgoQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('forgoQ2Ctrl').value;

    return this.forgoQ2;
  }

  /**
   * Getter $forgoQ3
   * @return {number}
   */
  public get $forgoQ3(): number {
    this.forgoQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('forgoQ3Ctrl').value;

    return this.forgoQ3;
  }

  /**
   * Getter $eszkozTargyev
   * @return {number}
   */
  public get $eszkozTargyev(): number {
    this.eszkozTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('eszkozTargyevCtrl').value;

    return this.eszkozTargyev;
  }

  /**
   * Getter $eszkozElozoEv
   * @return {number}
   */
  public get $eszkozElozoEv(): number {
    this.eszkozElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('eszkozElozoEvCtrl').value;

    return this.eszkozElozoEv;
  }

  /**
   * Getter $eszkozKonkurencia
   * @return {number}
   */
  public get $eszkozKonkurencia(): number {
    this.eszkozKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('eszkozKonkurenciaCtrl').value;

    return this.eszkozKonkurencia;
  }

  /**
   * Getter $eszkozQ2
   * @return {number}
   */
  public get $eszkozQ2(): number {
    this.eszkozQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('eszkozQ2Ctrl').value;

    return this.eszkozQ2;
  }

  /**
   * Getter $eszkozQ3
   * @return {number}
   */
  public get $eszkozQ3(): number {
    this.eszkozQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('eszkozQ3Ctrl').value;

    return this.eszkozQ3;
  }

  /**
   * Getter $kotSzallitoTargyev
   * @return {number}
   */
  public get $kotSzallitoTargyev(): number {
    this.kotSzallitoTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kotSzallitoTargyevCtrl').value;

    return this.kotSzallitoTargyev;
  }

  /**
   * Getter $kotSzallitoElozoEv
   * @return {number}
   */
  public get $kotSzallitoElozoEv(): number {
    this.kotSzallitoElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kotSzallitoElozoEvCtrl').value;

    return this.kotSzallitoElozoEv;
  }

  /**
   * Getter $kotSzallitoKonkurencia
   * @return {number}
   */
  public get $kotSzallitoKonkurencia(): number {
    this.kotSzallitoKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kotSzallitoKonkurenciaCtrl').value;

    return this.kotSzallitoKonkurencia;
  }

  /**
   * Getter $kotSzallitoQ2
   * @return {number}
   */
  public get $kotSzallitoQ2(): number {
    this.kotSzallitoQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kotSzallitoQ2Ctrl').value;

    return this.kotSzallitoQ2;
  }

  /**
   * Getter $kotSzallitoQ3
   * @return {number}
   */
  public get $kotSzallitoQ3(): number {
    this.kotSzallitoQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('kotSzallitoQ3Ctrl').value;

    return this.kotSzallitoQ3;
  }

  /**
   * Getter $tokeTargyev
   * @return {number}
   */
  public get $tokeTargyev(): number {
    this.tokeTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('tokeTargyevCtrl').value;

    return this.tokeTargyev;
  }

  /**
   * Getter $tokeElozoEv
   * @return {number}
   */
  public get $tokeElozoEv(): number {
    this.tokeElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('tokeElozoEvCtrl').value;

    return this.tokeElozoEv;
  }

  /**
   * Getter $tokeKonkurencia
   * @return {number}
   */
  public get $tokeKonkurencia(): number {
    this.tokeKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('tokeKonkurenciaCtrl').value;

    return this.tokeKonkurencia;
  }

  /**
   * Getter $tokeQ2
   * @return {number}
   */
  public get $tokeQ2(): number {
    this.tokeQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('tokeQ2Ctrl').value;

    return this.tokeQ2;
  }

  /**
   * Getter $tokeQ3
   * @return {number}
   */
  public get $tokeQ3(): number {
    this.tokeQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('tokeQ3Ctrl').value;

    return this.tokeQ3;
  }

  /**
   * Getter $rovidLejaratuKotTargyev
   * @return {number}
   */
  public get $rovidLejaratuKotTargyev(): number {
    this.rovidLejaratuKotTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('rovidLejaratuKotTargyevCtrl').value;

    return this.rovidLejaratuKotTargyev;
  }

  /**
   * Getter $rovidLejaratuKotElozoEv
   * @return {number}
   */
  public get $rovidLejaratuKotElozoEv(): number {
    this.rovidLejaratuKotElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('rovidLejaratuKotElozoEvCtrl').value;

    return this.rovidLejaratuKotElozoEv;
  }

  /**
   * Getter $rovidLejaratuKotKonkurencia
   * @return {number}
   */
  public get $rovidLejaratuKotKonkurencia(): number {
    this.rovidLejaratuKotKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('rovidLejaratuKotKonkurenciaCtrl').value;

    return this.rovidLejaratuKotKonkurencia;
  }

  /**
   * Getter $rovidLejaratuKotQ2
   * @return {number}
   */
  public get $rovidLejaratuKotQ2(): number {
    this.rovidLejaratuKotQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('rovidLejaratuKotQ2Ctrl').value;

    return this.rovidLejaratuKotQ2;
  }

  /**
   * Getter $rovidLejaratuKotQ3
   * @return {number}
   */
  public get $rovidLejaratuKotQ3(): number {
    this.rovidLejaratuKotQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('rovidLejaratuKotQ3Ctrl').value;

    return this.rovidLejaratuKotQ3;
  }

  /**
   * Getter $osszKotTargyev
   * @return {number}
   */
  public get $osszKotTargyev(): number {
    this.osszKotTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('osszKotTargyevCtrl').value;

    return this.osszKotTargyev;
  }

  /**
   * Getter $osszKotElozoEv
   * @return {number}
   */
  public get $osszKotElozoEv(): number {
    this.osszKotElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('osszKotElozoEvCtrl').value;

    return this.osszKotElozoEv;
  }

  /**
   * Getter $osszKotKonkurencia
   * @return {number}
   */
  public get $osszKotKonkurencia(): number {
    this.osszKotKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('osszKotKonkurenciaCtrl').value;

    return this.osszKotKonkurencia;
  }

  /**
   * Getter $osszKotQ2
   * @return {number}
   */
  public get $osszKotQ2(): number {
    this.osszKotQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('osszKotQ2Ctrl').value;

    return this.osszKotQ2;
  }

  /**
   * Getter $osszKotQ3
   * @return {number}
   */
  public get $osszKotQ3(): number {
    this.osszKotQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('osszKotQ3Ctrl').value;

    return this.osszKotQ3;
  }

  /**
   * Getter $alkalmazottakSzamaTargyev
   * @return {number}
   */
  public get $alkalmazottakSzamaTargyev(): number {
    this.alkalmazottakSzamaTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('alkalmazottakSzamaTargyevCtrl').value;

    return this.alkalmazottakSzamaTargyev;
  }

  /**
   * Getter $alkalmazottakSzamaElozoEv
   * @return {number}
   */
  public get $alkalmazottakSzamaElozoEv(): number {
    this.alkalmazottakSzamaElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('alkalmazottakSzamaElozoEvCtrl').value;

    return this.alkalmazottakSzamaElozoEv;
  }

  /**
   * Getter $alkalmazottakSzamaKonkurencia
   * @return {number}
   */
  public get $alkalmazottakSzamaKonkurencia(): number {
    this.alkalmazottakSzamaKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('alkalmazottakSzamaKonkurenciaCtrl').value;

    return this.alkalmazottakSzamaKonkurencia;
  }

  /**
   * Getter $alkalmazottakSzamaQ2
   * @return {number}
   */
  public get $alkalmazottakSzamaQ2(): number {
    this.alkalmazottakSzamaQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('alkalmazottakSzamaQ2Ctrl').value;

    return this.alkalmazottakSzamaQ2;
  }

  /**
   * Getter $alkalmazottakSzamaQ3
   * @return {number}
   */
  public get $alkalmazottakSzamaQ3(): number {
    this.alkalmazottakSzamaQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('alkalmazottakSzamaQ3Ctrl').value;

    return this.alkalmazottakSzamaQ3;
  }

  /**
   * Getter $reszvenyArfolyamTargyev
   * @return {number}
   */
  public get $reszvenyArfolyamTargyev(): number {
    this.reszvenyArfolyamTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('reszvenyArfolyamTargyevCtrl').value;

    return this.reszvenyArfolyamTargyev;
  }

  /**
   * Getter $reszvenyArfolyamElozoEv
   * @return {number}
   */
  public get $reszvenyArfolyamElozoEv(): number {
    this.reszvenyArfolyamElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('reszvenyArfolyamElozoEvCtrl').value;

    return this.reszvenyArfolyamElozoEv;
  }

  /**
   * Getter $reszvenyArfolyamKonkurencia
   * @return {number}
   */
  public get $reszvenyArfolyamKonkurencia(): number {
    this.reszvenyArfolyamKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('reszvenyArfolyamKonkurenciaCtrl').value;

    return this.reszvenyArfolyamKonkurencia;
  }

  /**
   * Getter $reszvenyArfolyamQ2
   * @return {number}
   */
  public get $reszvenyArfolyamQ2(): number {
    this.reszvenyArfolyamQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('reszvenyArfolyamQ2Ctrl').value;

    return this.reszvenyArfolyamQ2;
  }

  /**
   * Getter $reszvenyArfolyamQ3
   * @return {number}
   */
  public get $reszvenyArfolyamQ3(): number {
    this.reszvenyArfolyamQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('reszvenyArfolyamQ3Ctrl').value;

    return this.reszvenyArfolyamQ3;
  }

  /**
   * Getter $naptarTargyev
   * @return {number}
   */
  public get $naptarTargyev(): number {
    this.naptarTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('naptarTargyevCtrl').value;

    return this.naptarTargyev;
  }

  /**
   * Getter $naptarElozoEv
   * @return {number}
   */
  public get $naptarElozoEv(): number {
    this.naptarElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('naptarElozoEvCtrl').value;

    return this.naptarElozoEv;
  }

  /**
   * Getter $naptarKonkurencia
   * @return {number}
   */
  public get $naptarKonkurencia(): number {
    this.naptarKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('naptarKonkurenciaCtrl').value;

    return this.naptarKonkurencia;
  }

  /**
   * Getter $naptarQ2
   * @return {number}
   */
  public get $naptarQ2(): number {
    this.naptarQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('naptarQ2Ctrl').value;

    return this.naptarQ2;
  }

  /**
   * Getter $naptarQ3
   * @return {number}
   */
  public get $naptarQ3(): number {
    this.naptarQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('naptarQ3Ctrl').value;

    return this.naptarQ3;
  }

  /**
   * Getter $hozamTargyev
   * @return {number}
   */
  public get $hozamTargyev(): number {
    this.hozamTargyev = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('hozamTargyevCtrl').value;

    return this.hozamTargyev;
  }

  /**
   * Getter $hozamElozoEv
   * @return {number}
   */
  public get $hozamElozoEv(): number {
    this.hozamElozoEv = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('hozamElozoEvCtrl').value;

    return this.hozamElozoEv;
  }

  /**
   * Getter $hozamKonkurencia
   * @return {number}
   */
  public get $hozamKonkurencia(): number {
    this.hozamKonkurencia = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('hozamKonkurenciaCtrl').value;

    return this.hozamKonkurencia;
  }

  /**
   * Getter $hozamQ2
   * @return {number}
   */
  public get $hozamQ2(): number {
    this.hozamQ2 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('hozamQ2Ctrl').value;

    return this.hozamQ2;
  }

  /**
   * Getter $hozamQ3
   * @return {number}
   */
  public get $hozamQ3(): number {
    this.hozamQ3 = this.penzugyiAdatokFormGroup.get('penzugyiAdatok').get('hozamQ3Ctrl').value;

    return this.hozamQ3;
  }



  /**
   * Setter $nettoTargyEv
   * @param {number} value
   */
  public set $nettoTargyEv(value: number) {
    this.nettoTargyEv = value;
  }
  /**
   * Setter $nettoElozoEv
   * @param {number} value
   */
  public set $nettoElozoEv(value: number) {
    this.nettoElozoEv = value;
  }

  /**
   * Setter $nettoKonkurencia
   * @param {number} value
   */
  public set $nettoKonkurencia(value: number) {
    this.nettoKonkurencia = value;
  }

  /**
   * Setter $nettoQ2
   * @param {number} value
   */
  public set $nettoQ2(value: number) {
    this.nettoQ2 = value;
  }

  /**
   * Setter $nettoQ3
   * @param {number} value
   */
  public set $nettoQ3(value: number) {
    this.nettoQ3 = value;
  }

  /**
   * Setter $eladottAruTargyev
   * @param {number} value
   */
  public set $eladottAruTargyev(value: number) {
    this.eladottAruTargyev = value;
  }

  /**
   * Setter $eladottAruElozoEv
   * @param {number} value
   */
  public set $eladottAruElozoEv(value: number) {
    this.eladottAruElozoEv = value;
  }

  /**
   * Setter $eladottAruKonkurencia
   * @param {number} value
   */
  public set $eladottAruKonkurencia(value: number) {
    this.eladottAruKonkurencia = value;
  }

  /**
   * Setter $eladottAruQ2
   * @param {number} value
   */
  public set $eladottAruQ2(value: number) {
    this.eladottAruQ2 = value;
  }

  /**
   * Setter $eladottAruQ3
   * @param {number} value
   */
  public set $eladottAruQ3(value: number) {
    this.eladottAruQ3 = value;
  }

  /**
   * Setter $tarsasagTargyev
   * @param {number} value
   */
  public set $tarsasagTargyev(value: number) {
    this.tarsasagTargyev = value;
  }

  /**
   * Setter $tarsasagElozoEv
   * @param {number} value
   */
  public set $tarsasagElozoEv(value: number) {
    this.tarsasagElozoEv = value;
  }

  /**
   * Setter $tarsasagKonkurencia
   * @param {number} value
   */
  public set $tarsasagKonkurencia(value: number) {
    this.tarsasagKonkurencia = value;
  }

  /**
   * Setter $tarsasagQ2
   * @param {number} value
   */
  public set $tarsasagQ2(value: number) {
    this.tarsasagQ2 = value;
  }

  /**
   * Setter $tarsasagQ3
   * @param {number} value
   */
  public set $tarsasagQ3(value: number) {
    this.tarsasagQ3 = value;
  }

  /**
   * Setter $kamatTargyev
   * @param {number} value
   */
  public set $kamatTargyev(value: number) {
    this.kamatTargyev = value;
  }

  /**
   * Setter $kamatElozoEv
   * @param {number} value
   */
  public set $kamatElozoEv(value: number) {
    this.kamatElozoEv = value;
  }

  /**
   * Setter $kamatKonkurencia
   * @param {number} value
   */
  public set $kamatKonkurencia(value: number) {
    this.kamatKonkurencia = value;
  }

  /**
   * Setter $kamatQ2
   * @param {number} value
   */
  public set $kamatQ2(value: number) {
    this.kamatQ2 = value;
  }

  /**
   * Setter $kamatQ3
   * @param {number} value
   */
  public set $kamatQ3(value: number) {
    this.kamatQ3 = value;
  }

  /**
   * Setter $fizetettKamatokTargyev
   * @param {number} value
   */
  public set $fizetettKamatokTargyev(value: number) {
    this.fizetettKamatokTargyev = value;
  }

  /**
   * Setter $fizetettKamatokElozoEv
   * @param {number} value
   */
  public set $fizetettKamatokElozoEv(value: number) {
    this.fizetettKamatokElozoEv = value;
  }

  /**
   * Setter $fizetettKamatokKonkurencia
   * @param {number} value
   */
  public set $fizetettKamatokKonkurencia(value: number) {
    this.fizetettKamatokKonkurencia = value;
  }

  /**
   * Setter $fizetettKamatokQ2
   * @param {number} value
   */
  public set $fizetettKamatokQ2(value: number) {
    this.fizetettKamatokQ2 = value;
  }

  /**
   * Setter $fizetettKamatokQ3
   * @param {number} value
   */
  public set $fizetettKamatokQ3(value: number) {
    this.fizetettKamatokQ3 = value;
  }

  /**
   * Setter $admTargyev
   * @param {number} value
   */
  public set $admTargyev(value: number) {
    this.admTargyev = value;
  }

  /**
   * Setter $admElozoEv
   * @param {number} value
   */
  public set $admElozoEv(value: number) {
    this.admElozoEv = value;
  }

  /**
   * Setter $admKonkurencia
   * @param {number} value
   */
  public set $admKonkurencia(value: number) {
    this.admKonkurencia = value;
  }

  /**
   * Setter $admQ2
   * @param {number} value
   */
  public set $admQ2(value: number) {
    this.admQ2 = value;
  }

  /**
   * Setter $admQ3
   * @param {number} value
   */
  public set $admQ3(value: number) {
    this.admQ3 = value;
  }

  /**
   * Setter $egyebTargyev
   * @param {number} value
   */
  public set $egyebTargyev(value: number) {
    this.egyebTargyev = value;
  }

  /**
   * Setter $egyebElozoEv
   * @param {number} value
   */
  public set $egyebElozoEv(value: number) {
    this.egyebElozoEv = value;
  }

  /**
   * Setter $egyebKonkurencia
   * @param {number} value
   */
  public set $egyebKonkurencia(value: number) {
    this.egyebKonkurencia = value;
  }

  /**
   * Setter $egyebQ2
   * @param {number} value
   */
  public set $egyebQ2(value: number) {
    this.egyebQ2 = value;
  }

  /**
   * Setter $egyebQ3
   * @param {number} value
   */
  public set $egyebQ3(value: number) {
    this.egyebQ3 = value;
  }

  /**
   * Setter $reszvenyTargyev
   * @param {number} value
   */
  public set $reszvenyTargyev(value: number) {
    this.reszvenyTargyev = value;
  }

  /**
   * Setter $reszvenyElozoEv
   * @param {number} value
   */
  public set $reszvenyElozoEv(value: number) {
    this.reszvenyElozoEv = value;
  }

  /**
   * Setter $reszvenyKonkurencia
   * @param {number} value
   */
  public set $reszvenyKonkurencia(value: number) {
    this.reszvenyKonkurencia = value;
  }

  /**
   * Setter $reszvenyQ2
   * @param {number} value
   */
  public set $reszvenyQ2(value: number) {
    this.reszvenyQ2 = value;
  }

  /**
   * Setter $reszvenyQ3
   * @param {number} value
   */
  public set $reszvenyQ3(value: number) {
    this.reszvenyQ3 = value;
  }

  /**
   * Setter $osztalekTargyev
   * @param {number} value
   */
  public set $osztalekTargyev(value: number) {
    this.osztalekTargyev = value;
  }

  /**
   * Setter $osztalekElozoEv
   * @param {number} value
   */
  public set $osztalekElozoEv(value: number) {
    this.osztalekElozoEv = value;
  }

  /**
   * Setter $osztalekKonkurencia
   * @param {number} value
   */
  public set $osztalekKonkurencia(value: number) {
    this.osztalekKonkurencia = value;
  }

  /**
   * Setter $osztalekQ2
   * @param {number} value
   */
  public set $osztalekQ2(value: number) {
    this.osztalekQ2 = value;
  }

  /**
   * Setter $osztalekQ3
   * @param {number} value
   */
  public set $osztalekQ3(value: number) {
    this.osztalekQ3 = value;
  }

  /**
   * Setter $elszamoltTargyev
   * @param {number} value
   */
  public set $elszamoltTargyev(value: number) {
    this.elszamoltTargyev = value;
  }

  /**
   * Setter $elszamoltElozoEv
   * @param {number} value
   */
  public set $elszamoltElozoEv(value: number) {
    this.elszamoltElozoEv = value;
  }

  /**
   * Setter $elszamoltKonkurencia
   * @param {number} value
   */
  public set $elszamoltKonkurencia(value: number) {
    this.elszamoltKonkurencia = value;
  }

  /**
   * Setter $elszamoltQ2
   * @param {number} value
   */
  public set $elszamoltQ2(value: number) {
    this.elszamoltQ2 = value;
  }

  /**
   * Setter $elszamoltQ3
   * @param {number} value
   */
  public set $elszamoltQ3(value: number) {
    this.elszamoltQ3 = value;
  }

  /**
   * Setter $keszpenzTargyev
   * @param {number} value
   */
  public set $keszpenzTargyev(value: number) {
    this.keszpenzTargyev = value;
  }

  /**
   * Setter $keszpenzElozoEv
   * @param {number} value
   */
  public set $keszpenzElozoEv(value: number) {
    this.keszpenzElozoEv = value;
  }

  /**
   * Setter $keszpenzKonkurencia
   * @param {number} value
   */
  public set $keszpenzKonkurencia(value: number) {
    this.keszpenzKonkurencia = value;
  }

  /**
   * Setter $keszpenzQ2
   * @param {number} value
   */
  public set $keszpenzQ2(value: number) {
    this.keszpenzQ2 = value;
  }

  /**
   * Setter $keszpenzQ3
   * @param {number} value
   */
  public set $keszpenzQ3(value: number) {
    this.keszpenzQ3 = value;
  }

  /**
   * Setter $kovetelesVevoTargyev
   * @param {number} value
   */
  public set $kovetelesVevoTargyev(value: number) {
    this.kovetelesVevoTargyev = value;
  }

  /**
   * Setter $kovetelesVevoElozoEv
   * @param {number} value
   */
  public set $kovetelesVevoElozoEv(value: number) {
    this.kovetelesVevoElozoEv = value;
  }

  /**
   * Setter $kovetelesVevoKonkurencia
   * @param {number} value
   */
  public set $kovetelesVevoKonkurencia(value: number) {
    this.kovetelesVevoKonkurencia = value;
  }

  /**
   * Setter $kovetelesVevoQ2
   * @param {number} value
   */
  public set $kovetelesVevoQ2(value: number) {
    this.kovetelesVevoQ2 = value;
  }

  /**
   * Setter $kovetelesVevoQ3
   * @param {number} value
   */
  public set $kovetelesVevoQ3(value: number) {
    this.kovetelesVevoQ3 = value;
  }

  /**
   * Setter $keszletTargyev
   * @param {number} value
   */
  public set $keszletTargyev(value: number) {
    this.keszletTargyev = value;
  }

  /**
   * Setter $keszletElozoEv
   * @param {number} value
   */
  public set $keszletElozoEv(value: number) {
    this.keszletElozoEv = value;
  }

  /**
   * Setter $keszletKonkurencia
   * @param {number} value
   */
  public set $keszletKonkurencia(value: number) {
    this.keszletKonkurencia = value;
  }

  /**
   * Setter $keszletQ2
   * @param {number} value
   */
  public set $keszletQ2(value: number) {
    this.keszletQ2 = value;
  }

  /**
   * Setter $keszletQ3
   * @param {number} value
   */
  public set $keszletQ3(value: number) {
    this.keszletQ3 = value;
  }

  /**
   * Setter $jovairasTargyev
   * @param {number} value
   */
  public set $jovairasTargyev(value: number) {
    this.jovairasTargyev = value;
  }

  /**
   * Setter $jovairasElozoEv
   * @param {number} value
   */
  public set $jovairasElozoEv(value: number) {
    this.jovairasElozoEv = value;
  }

  /**
   * Setter $jovairasKonkurencia
   * @param {number} value
   */
  public set $jovairasKonkurencia(value: number) {
    this.jovairasKonkurencia = value;
  }

  /**
   * Setter $jovairasQ2
   * @param {number} value
   */
  public set $jovairasQ2(value: number) {
    this.jovairasQ2 = value;
  }

  /**
   * Setter $jovairasQ3
   * @param {number} value
   */
  public set $jovairasQ3(value: number) {
    this.jovairasQ3 = value;
  }

  /**
   * Setter $immTargyev
   * @param {number} value
   */
  public set $immTargyev(value: number) {
    this.immTargyev = value;
  }

  /**
   * Setter $immElozoEv
   * @param {number} value
   */
  public set $immElozoEv(value: number) {
    this.immElozoEv = value;
  }

  /**
   * Setter $immKonkurencia
   * @param {number} value
   */
  public set $immKonkurencia(value: number) {
    this.immKonkurencia = value;
  }

  /**
   * Setter $immQ2
   * @param {number} value
   */
  public set $immQ2(value: number) {
    this.immQ2 = value;
  }

  /**
   * Setter $immQ3
   * @param {number} value
   */
  public set $immQ3(value: number) {
    this.immQ3 = value;
  }

  /**
   * Setter $forgoTargyev
   * @param {number} value
   */
  public set $forgoTargyev(value: number) {
    this.forgoTargyev = value;
  }

  /**
   * Setter $forgoElozoEv
   * @param {number} value
   */
  public set $forgoElozoEv(value: number) {
    this.forgoElozoEv = value;
  }

  /**
   * Setter $forgoKonkurencia
   * @param {number} value
   */
  public set $forgoKonkurencia(value: number) {
    this.forgoKonkurencia = value;
  }

  /**
   * Setter $forgoQ2
   * @param {number} value
   */
  public set $forgoQ2(value: number) {
    this.forgoQ2 = value;
  }

  /**
   * Setter $forgoQ3
   * @param {number} value
   */
  public set $forgoQ3(value: number) {
    this.forgoQ3 = value;
  }

  /**
   * Setter $eszkozTargyev
   * @param {number} value
   */
  public set $eszkozTargyev(value: number) {
    this.eszkozTargyev = value;
  }

  /**
   * Setter $eszkozElozoEv
   * @param {number} value
   */
  public set $eszkozElozoEv(value: number) {
    this.eszkozElozoEv = value;
  }

  /**
   * Setter $eszkozKonkurencia
   * @param {number} value
   */
  public set $eszkozKonkurencia(value: number) {
    this.eszkozKonkurencia = value;
  }

  /**
   * Setter $eszkozQ2
   * @param {number} value
   */
  public set $eszkozQ2(value: number) {
    this.eszkozQ2 = value;
  }

  /**
   * Setter $eszkozQ3
   * @param {number} value
   */
  public set $eszkozQ3(value: number) {
    this.eszkozQ3 = value;
  }

  /**
   * Setter $kotSzallitoTargyev
   * @param {number} value
   */
  public set $kotSzallitoTargyev(value: number) {
    this.kotSzallitoTargyev = value;
  }

  /**
   * Setter $kotSzallitoElozoEv
   * @param {number} value
   */
  public set $kotSzallitoElozoEv(value: number) {
    this.kotSzallitoElozoEv = value;
  }

  /**
   * Setter $kotSzallitoKonkurencia
   * @param {number} value
   */
  public set $kotSzallitoKonkurencia(value: number) {
    this.kotSzallitoKonkurencia = value;
  }

  /**
   * Setter $kotSzallitoQ2
   * @param {number} value
   */
  public set $kotSzallitoQ2(value: number) {
    this.kotSzallitoQ2 = value;
  }

  /**
   * Setter $kotSzallitoQ3
   * @param {number} value
   */
  public set $kotSzallitoQ3(value: number) {
    this.kotSzallitoQ3 = value;
  }

  /**
   * Setter $tokeTargyev
   * @param {number} value
   */
  public set $tokeTargyev(value: number) {
    this.tokeTargyev = value;
  }

  /**
   * Setter $tokeElozoEv
   * @param {number} value
   */
  public set $tokeElozoEv(value: number) {
    this.tokeElozoEv = value;
  }

  /**
   * Setter $tokeKonkurencia
   * @param {number} value
   */
  public set $tokeKonkurencia(value: number) {
    this.tokeKonkurencia = value;
  }

  /**
   * Setter $tokeQ2
   * @param {number} value
   */
  public set $tokeQ2(value: number) {
    this.tokeQ2 = value;
  }

  /**
   * Setter $tokeQ3
   * @param {number} value
   */
  public set $tokeQ3(value: number) {
    this.tokeQ3 = value;
  }

  /**
   * Setter $rovidLejaratuKotTargyev
   * @param {number} value
   */
  public set $rovidLejaratuKotTargyev(value: number) {
    this.rovidLejaratuKotTargyev = value;
  }

  /**
   * Setter $rovidLejaratuKotElozoEv
   * @param {number} value
   */
  public set $rovidLejaratuKotElozoEv(value: number) {
    this.rovidLejaratuKotElozoEv = value;
  }

  /**
   * Setter $rovidLejaratuKotKonkurencia
   * @param {number} value
   */
  public set $rovidLejaratuKotKonkurencia(value: number) {
    this.rovidLejaratuKotKonkurencia = value;
  }

  /**
   * Setter $rovidLejaratuKotQ2
   * @param {number} value
   */
  public set $rovidLejaratuKotQ2(value: number) {
    this.rovidLejaratuKotQ2 = value;
  }

  /**
   * Setter $rovidLejaratuKotQ3
   * @param {number} value
   */
  public set $rovidLejaratuKotQ3(value: number) {
    this.rovidLejaratuKotQ3 = value;
  }

  /**
   * Setter $osszKotTargyev
   * @param {number} value
   */
  public set $osszKotTargyev(value: number) {
    this.osszKotTargyev = value;
  }

  /**
   * Setter $osszKotElozoEv
   * @param {number} value
   */
  public set $osszKotElozoEv(value: number) {
    this.osszKotElozoEv = value;
  }

  /**
   * Setter $osszKotKonkurencia
   * @param {number} value
   */
  public set $osszKotKonkurencia(value: number) {
    this.osszKotKonkurencia = value;
  }

  /**
   * Setter $osszKotQ2
   * @param {number} value
   */
  public set $osszKotQ2(value: number) {
    this.osszKotQ2 = value;
  }

  /**
   * Setter $osszKotQ3
   * @param {number} value
   */
  public set $osszKotQ3(value: number) {
    this.osszKotQ3 = value;
  }

  /**
   * Setter $alkalmazottakSzamaTargyev
   * @param {number} value
   */
  public set $alkalmazottakSzamaTargyev(value: number) {
    this.alkalmazottakSzamaTargyev = value;
  }

  /**
   * Setter $alkalmazottakSzamaElozoEv
   * @param {number} value
   */
  public set $alkalmazottakSzamaElozoEv(value: number) {
    this.alkalmazottakSzamaElozoEv = value;
  }

  /**
   * Setter $alkalmazottakSzamaKonkurencia
   * @param {number} value
   */
  public set $alkalmazottakSzamaKonkurencia(value: number) {
    this.alkalmazottakSzamaKonkurencia = value;
  }

  /**
   * Setter $alkalmazottakSzamaQ2
   * @param {number} value
   */
  public set $alkalmazottakSzamaQ2(value: number) {
    this.alkalmazottakSzamaQ2 = value;
  }

  /**
   * Setter $alkalmazottakSzamaQ3
   * @param {number} value
   */
  public set $alkalmazottakSzamaQ3(value: number) {
    this.alkalmazottakSzamaQ3 = value;
  }

  /**
   * Setter $reszvenyArfolyamTargyev
   * @param {number} value
   */
  public set $reszvenyArfolyamTargyev(value: number) {
    this.reszvenyArfolyamTargyev = value;
  }

  /**
   * Setter $reszvenyArfolyamElozoEv
   * @param {number} value
   */
  public set $reszvenyArfolyamElozoEv(value: number) {
    this.reszvenyArfolyamElozoEv = value;
  }

  /**
   * Setter $reszvenyArfolyamKonkurencia
   * @param {number} value
   */
  public set $reszvenyArfolyamKonkurencia(value: number) {
    this.reszvenyArfolyamKonkurencia = value;
  }

  /**
   * Setter $reszvenyArfolyamQ2
   * @param {number} value
   */
  public set $reszvenyArfolyamQ2(value: number) {
    this.reszvenyArfolyamQ2 = value;
  }

  /**
   * Setter $reszvenyArfolyamQ3
   * @param {number} value
   */
  public set $reszvenyArfolyamQ3(value: number) {
    this.reszvenyArfolyamQ3 = value;
  }

  /**
   * Setter $naptarTargyev
   * @param {number} value
   */
  public set $naptarTargyev(value: number) {
    this.naptarTargyev = value;
  }

  /**
   * Setter $naptarElozoEv
   * @param {number} value
   */
  public set $naptarElozoEv(value: number) {
    this.naptarElozoEv = value;
  }

  /**
   * Setter $naptarKonkurencia
   * @param {number} value
   */
  public set $naptarKonkurencia(value: number) {
    this.naptarKonkurencia = value;
  }

  /**
   * Setter $naptarQ2
   * @param {number} value
   */
  public set $naptarQ2(value: number) {
    this.naptarQ2 = value;
  }

  /**
   * Setter $naptarQ3
   * @param {number} value
   */
  public set $naptarQ3(value: number) {
    this.naptarQ3 = value;
  }

  /**
   * Setter $hozamTargyev
   * @param {number} value
   */
  public set $hozamTargyev(value: number) {
    this.hozamTargyev = value;
  }

  /**
   * Setter $hozamElozoEv
   * @param {number} value
   */
  public set $hozamElozoEv(value: number) {
    this.hozamElozoEv = value;
  }

  /**
   * Setter $hozamKonkurencia
   * @param {number} value
   */
  public set $hozamKonkurencia(value: number) {
    this.hozamKonkurencia = value;
  }

  /**
   * Setter $hozamQ2
   * @param {number} value
   */
  public set $hozamQ2(value: number) {
    this.hozamQ2 = value;
  }

  /**
   * Setter $hozamQ3
   * @param {number} value
   */
  public set $hozamQ3(value: number) {
    this.hozamQ3 = value;
  }



}

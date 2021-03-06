import { AppUserState } from './../../store/reszveny/state';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { BefAdatokService } from 'src/app/services/befektetesek/uj-befektetes-services/befektetes-adatok/bef-adatok.service';
import { SajatMagamElemzeseComponent } from './uj-befektetes-elemek/sajat-magam-elemzese/sajat-magam-elemzese.component';
import { BefAdatokComponent } from './uj-befektetes-elemek/bef-adatok/bef-adatok.component';
import { ElemzesService } from './../../../services/befektetesek/elemzesek/elemzes.service';
import { VallalatVizsgKriteriumokComponent } from './uj-befektetes-elemek/vallalat-vizsg-kriteriumok/vallalat-vizsg-kriteriumok.component';
import { AddReszvenyAction, UpdateReszvenyAction } from './../../store/reszveny/actions';
import { Component, OnInit, ViewChild, Output, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TargetBinder } from '@angular/compiler';
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';
import { MentalisElemzes } from 'src/app/models/uj-befektetes-models/mentalis-elemzes/mentalis-elemzes.model';
import { VallalatKockazatElemzes } from 'src/app/models/uj-befektetes-models/vallalat-vizsg-kriteriumok/vallalat-vizsg-kriteriumok.model';
import { PenzugyiAdatok } from 'src/app/models/uj-befektetes-models/penzugyi-adatok/penzugyi-adatok.model';
import { VallalatPenzugyiElemzes } from 'src/app/models/uj-befektetes-models/vallalat-penz-elemzes/vallalat-penz-elemzes.model';
import { CelarMeghatarozas } from 'src/app/models/uj-befektetes-models/celar-meghatarozas/celar-meghatarozas.model';
import { NettoJelenErtek } from 'src/app/models/uj-befektetes-models/netto-jelenertek/netto-jelenertek.model';
import { Manageles } from 'src/app/models/uj-befektetes-models/manageles/manageles.model';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { EventEmitter } from '@angular/core';
import { UjBefektetesService } from 'src/app/services/befektetesek/uj-befektetes-services/uj-befektetes/uj-befektetes.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reszveny/state';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user/user.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-uj-befektetes',
  templateUrl: './uj-befektetes.component.html',
  styleUrls: ['./uj-befektetes.component.scss'],
  providers: [MessageService]
})
export class UjBefektetesComponent implements OnInit, AfterViewInit {
  @ViewChild('saveBtn') saveButton: ElementRef;
  countOfFilled: number = 0;
  pbarTitle = "Kitöltöttség";
  maxPercent: number = 8;
  isBefektetesKesz: boolean;
  count: number = 0.0;
  isSavedActualElemzes: boolean;
  isCreatedNew: boolean;
  circlePrColor = "#3f729b";
  iselemzesSaved = false;

  // Components
  befektetesAdatok: BefektetesAdatok;
  mentalisElemzes: MentalisElemzes;
  vallalatKockazatElemzes: VallalatKockazatElemzes;
  penzugyiAdatok: PenzugyiAdatok;
  vallalatPenzugyiElemzes: VallalatPenzugyiElemzes;
  celarMeghatarozas: CelarMeghatarozas;
  nettoJelenertek: NettoJelenErtek;
  manageles: Manageles;
  private ujReszveny: UjReszveny;
  //@ViewChild('tabGroup') tabGroup;
  //selectedTabIndex: number;
  public nextTabIndex: number = 0;
  changeFromFirstTabToSecond: boolean;
  changeFrom2To3Tab: boolean;
  changeFrom3To4Tab: boolean;
  changeFrom4To5Tab: boolean;
  changeFrom5To6Tab: boolean;
  changeFrom6To7Tab: boolean;
  lastTab: boolean;
  isUjReszv: boolean;
  visszatoltott = false;
  befFormGroup: FormGroup;
  mentalisFormgroup: FormGroup;
  vizsgKritFormGroup: FormGroup;
  penzAdatokFormGroup: FormGroup;
  celarMeghatFormGroup: FormGroup;
  nettoJelenFormGroup: FormGroup;
  vallPenzElemzesFormGroups: FormGroup[];
  managelesFormGroups: FormGroup[];

  befAdatComponent: BefAdatokComponent;
  mentalisComponent: SajatMagamElemzeseComponent;

  private haladasValue: number = 0;
  private tabValue = 12.5;
  constructor(private ujBefektetesService: UjBefektetesService, private store: Store<AppState>, private userStore: Store<AppUserState>, private messageService: MessageService,
    private elemzesService: ElemzesService, private befadatokService: BefAdatokService, private cdr: ChangeDetectorRef,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.isCreatedNew = true;
    this.isUjReszv = true;
    const datepipe: DatePipe = new DatePipe('en-US');

    //this.count = this.ujBefektetesService.$count;
    //this.isSavedActualElemzes = this.ujBefektetesService.$isSavedActualElemzes;
    // töltsük be adatbázisból

  }

  ngAfterViewInit() {
    if (this.ujBefektetesService.$count > 0) {
      this.loadHaladas();
      console.log(this.befFormGroup);
      this.cdr.detectChanges();
    }

    let userObj = this.userStore.select(store => store.user);
    let loggedinUser: User;
    userObj.subscribe(user => loggedinUser = user);

    const url = 'http://localhost:8080/users/' + loggedinUser.$id;
    let ujReszvenyek: UjReszveny[];
    let ujReszv: UjReszveny;
    //this.ujBefektetesService.$ujReszveny.$haladas = this.count;

      this.http.get<User>(url).subscribe(user => {
      ujReszvenyek = user['reszvenyek'];

      for(let i = 0; i<ujReszvenyek.length;i++){
        ujReszv = new UjReszveny();
        // add BefAdatok
        ujReszv.$befektetesAdatok = new BefektetesAdatok("","","","","", "");
        ujReszv.$befektetesAdatok.$vallalatNeve = ujReszvenyek[i]['vallalatNeve'];
        ujReszv.$befektetesAdatok.$agazat = ujReszvenyek[i]['agazat'];
        ujReszv.$befektetesAdatok.$datum = ujReszvenyek[i]['datum'];
        ujReszv.$befektetesAdatok.$strategia = ujReszvenyek[i]['strategia'];
        ujReszv.$befektetesAdatok.$status = ujReszvenyek[i]['status'];
        ujReszv.$befektetesAdatok.$ticker = ujReszvenyek[i]['ticker'];

        this.store.dispatch(new AddReszvenyAction(ujReszv));
      }
      });
    }
  loadHaladas() {
    this.visszatoltott = true;
    let halad = this.ujBefektetesService.$count;
    this.count = halad;
    this.countOfFilled = (this.count * 8) / 100;
    console.log(this.countOfFilled);
    this.isSavedActualElemzes = true;

    console.log(this.count);
    this.ujReszveny = this.ujBefektetesService.$visszatoltottReszveny;
    console.log("VISSZATÖLTÖTT:" + this.ujReszveny.$befektetesAdatok.$vallalatNeve);
    this.isUjReszv = true;
    this.iselemzesSaved = true;
  }


  // Ha az összes adatot egyszerre akarom a részvényhez hozzáadni
  /*addItemToUjReszveny(item: any){
    this.ujBefektetesService.addItems(item);
  }*/

  createUjReszveny() {
    this.messageService.clear();
    this.messageService.add({
      key: 'c', sticky: true, severity: 'warn', summary: 'Biztosan új elemzést szeretnél készíteni?',
      detail: 'Ha van már megkezdett elemzésed és nem mentetted el, kattintd a Nem lehetőségre, majd mentés után térj vissza!'
    });
  }

  onConfirmUjReszveny() {
    this.messageService.clear('c');
    this.isSavedActualElemzes = false;
    this.count = 0;
    this.countOfFilled = 0;

    // Reset formGroups
    // TODO
    //this.befAdatComponent.adatokFormGroup.reset();
    //this.mentalisComponent.sajatMagamElemzesFormGroup.reset();
    /*this.befadatokService.onFormReset.subscribe(formgroup =>{
      formgroup.reset();
    })*/
    this.ujBefektetesService.$ujReszveny = new UjReszveny();
    this.$ujReszveny = this.ujBefektetesService.$ujReszveny;
    this.iselemzesSaved = false;
    this.visszatoltott = false;
    //this.isCreatedNew = true;
    this.clearFormGroups();

  }

  clearFormGroups() {
    this.befFormGroup.reset();
    this.mentalisFormgroup.reset();
    this.vizsgKritFormGroup.reset();
    this.penzAdatokFormGroup.reset();
    this.celarMeghatFormGroup.reset();
    this.nettoJelenFormGroup.reset();
    this.vallPenzElemzesFormGroups[0].reset();
    this.vallPenzElemzesFormGroups[1].reset();
    this.vallPenzElemzesFormGroups[2].reset();
    this.vallPenzElemzesFormGroups[3].reset();

    this.managelesFormGroups[0].reset();
    this.managelesFormGroups[1].reset();
    this.managelesFormGroups[2].reset();
    this.managelesFormGroups[3].reset();


  }

  onRejectUjReszveny() {
    this.messageService.clear('c');
    //this.isCreatedNew = false;
  }

  clearBefAdatokFormGroup(fg: FormGroup) {
    this.befFormGroup = fg;
    console.log(this.befFormGroup);
  }

  clearManagelesFormGroup(fg: FormGroup[]) { this.managelesFormGroups = fg; }
  clearNettoJelenFormGroup(fg: FormGroup) { this.nettoJelenFormGroup = fg; }
  clearCelarMeghatFormGroup(fg: FormGroup) { this.celarMeghatFormGroup = fg; }
  clearVallPenzElemzesFormGroup(fg: FormGroup[]) { this.vallPenzElemzesFormGroups = fg; }
  clearPenzugyiAdatokFormGroup(fg: FormGroup) { this.penzAdatokFormGroup = fg; }
  clearVizsKritFormGroup(fg: FormGroup) { this.vizsgKritFormGroup = fg; }
  clearMentalisFormGroup(fg: FormGroup) { this.mentalisFormgroup = fg; }




  method(value) {

    console.log(value.valid);
    if (value.valid == 'VALID') {
      if (!this.visszatoltott) {
        this.isUjReszv = false;
        this.countOfFilled++;
        this.count = (this.countOfFilled / 8) * 100;
      }
      this.befektetesAdatok = value.befektetesAdatok;
      this.addOneItem(this.befektetesAdatok);
      console.log("*********" + this.ujBefektetesService.$ujReszveny.$befektetesAdatok);
      // Itt kell ellenorizni, hogy mikor visszatöltott ne számoljon

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny));
    }
    else if (value.valid == 'INVALID') {
      this.isUjReszv = true;
    }
  }


  saveReszveny() {
    // Menteni kell az állapotot is, labelek
    this.ujBefektetesService.$ujReszveny.$haladas = this.count;
    this.store.dispatch(
      new AddReszvenyAction(this.ujBefektetesService.$ujReszveny)
    );

    this.messageService.add({ key: 'tcAdd', severity: 'success', summary: 'Elemzés sikeresen mentve!' });
    this.isSavedActualElemzes = true;
    //this.ujBefektetesService.loadMentettElemzes(this.isSavedActualElemzes);
    this.isCreatedNew = false;
    this.isUjReszv = true;
    this.iselemzesSaved = true;
    this.visszatoltott = true;

    // mentsük el adatbázisba
    let userIdObs = this.userStore.select(store => store.user.$id);
    let userId = "";
    userIdObs.subscribe(id => userId = id)
    console.log("USERID: " + userId);
    let addReszvenyUrl = "http://localhost:8080/users/user/addReszveny/" + userId;
    console.log(addReszvenyUrl);
    const body = JSON.stringify(this.ujBefektetesService.$ujReszveny.$befektetesAdatok);
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }

    this.http.post<UjReszveny>(addReszvenyUrl, body, httpOptions).subscribe(data => {
      error: error => {
        console.error('There was an error!', error.message);
      }
    });
  }

  addOneItem(item: any) {
    this.ujBefektetesService.addOneItem(item);
  }

  onTabClick($event, index) {
    console.log($event);
    console.log($event.tab.textLabel);
    console.log(index);
    // Felugró ablak
    /* this.messageService.add({
       key: 'tab', sticky: true, severity: 'info', summary: 'Kérlek, ellenőrizd, hogy mindent elmentettél-e a továbblépés előtt!',
       detail: 'Jelenleg itt tartózkodsz: (' + $event.tab.textLabel +  ') Esetleg lehetnek mentetlen adataid!'
     });
     */


  }

  onConfirmTab() {
    //this.nextTabIndex = 4;
    // Itt engedje továb a következő tab-ra
  }

  onRejectTab() {
    this.messageService.clear('tab');
  }

  saveBefAdatok(befAdatok: BefektetesAdatok) {
    console.log("SAVE ADATOK-----");
    console.log(this.ujBefektetesService.$ujReszveny.$befektetesAdatok);

    // Adjuk hozzá a listához az itemet TEhát ha még nincs hozzáadva a befektetési adat, adjuk hozzá
    if (this.ujBefektetesService.$ujReszveny.$befektetesAdatok === undefined) {
      this.befektetesAdatok = befAdatok;
      this.addOneItem(this.befektetesAdatok);
      console.log("*********" + this.ujBefektetesService.$ujReszveny.$befektetesAdatok);
      this.countOfFilled++;
      this.count = (this.countOfFilled / 8) * 100;
      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny));
    }

    // Egyébként frissitsd a bef. adatot
    else {
      this.befektetesAdatok = befAdatok;
      this.addOneItem(this.befektetesAdatok);

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny));

      // frissiteni kellene a menuben a számlálot
    }

    console.log("Aktuális állás: " + this.ujBefektetesService.$ujReszveny);

  }

  saveMentalisElemzes(mentalisElemzes: MentalisElemzes) {

    if (this.ujBefektetesService.$ujReszveny.$mentalisElemzes === undefined) {
      this.mentalisElemzes = mentalisElemzes;
      this.addOneItem(mentalisElemzes);

      this.countOfFilled++;
      this.count = (this.countOfFilled / 8) * 100;
    }

    else {

      // Hozzáadni az előző értékeket is
      this.mentalisElemzes = mentalisElemzes;
      //this.addOneItem(this.befektetesAdatok);
      this.addOneItem(this.mentalisElemzes);

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny))

      // frissiteni kellene a menuben a számlálot
    }

    console.log(this.ujBefektetesService.$ujReszveny.$mentalisElemzes);
    this.ujBefektetesService.$ujReszveny.$haladas = this.count;

  }

  saveKockazatElemzes(kockElemzes: VallalatKockazatElemzes) {
    if (this.ujBefektetesService.$ujReszveny.$vallalatKockazatElemzes === undefined) {
      this.vallalatKockazatElemzes = kockElemzes;
      this.addOneItem(kockElemzes);

      this.countOfFilled++;
      this.count = (this.countOfFilled / 8) * 100;
      console.log(this.ujBefektetesService.$ujReszveny);
    }

    else {

      // Hozzáadni az előző értékeket is
      this.vallalatKockazatElemzes = kockElemzes;
      //this.addOneItem(this.befektetesAdatok);
      this.addOneItem(this.vallalatKockazatElemzes);

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny))

    }
    this.ujBefektetesService.$ujReszveny.$haladas = this.count;


  }

  savePenzAdatok(penzAdatok: PenzugyiAdatok) {
    if (this.ujBefektetesService.$ujReszveny.$penzugyiAdatok === undefined) {
      this.penzugyiAdatok = penzAdatok;
      this.addOneItem(penzAdatok);
      console.log("friss pénz adatok");
      this.countOfFilled++;
      this.count = (this.countOfFilled / 8) * 100;

      console.log(this.ujBefektetesService.$ujReszveny);

    }

    else {

      // Hozzáadni az előző értékeket is
      this.penzugyiAdatok = penzAdatok;
      //this.addOneItem(this.befektetesAdatok);
      this.addOneItem(this.penzugyiAdatok);

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny))

    }

    console.log(this.ujBefektetesService.$ujReszveny.$penzugyiAdatok);
    this.ujBefektetesService.$ujReszveny.$haladas = this.count;

  }

  saveVallPenzElemzes(vallPenzElemzes: VallalatPenzugyiElemzes) {
    if (this.ujBefektetesService.$ujReszveny.$vallalatPenzugyiElemzes === undefined) {
      this.vallalatPenzugyiElemzes = vallPenzElemzes;
      this.addOneItem(vallPenzElemzes);

      this.countOfFilled++;
      this.count = (this.countOfFilled / 8) * 100;

    }

    else {

      // Hozzáadni az előző értékeket is
      this.vallalatPenzugyiElemzes = vallPenzElemzes;
      //this.addOneItem(this.befektetesAdatok);
      this.addOneItem(this.vallalatPenzugyiElemzes);

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny))

    }
    this.ujBefektetesService.$ujReszveny.$haladas = this.count;

  }

  saveCelar(celar: CelarMeghatarozas) {
    if (this.ujBefektetesService.$ujReszveny.$celarMeghatarozas === undefined) {
      this.celarMeghatarozas = celar;
      this.addOneItem(celar);

      this.countOfFilled++;
      this.count = (this.countOfFilled / 8) * 100;
    }

    else {

      // Hozzáadni az előző értékeket is
      this.celarMeghatarozas = celar;
      //this.addOneItem(this.befektetesAdatok);
      this.addOneItem(this.celarMeghatarozas);

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny))

    }
    this.ujBefektetesService.$ujReszveny.$haladas = this.count;

  }

  saveNettoJelenertek(nettoJelenertek: NettoJelenErtek) {
    if (this.ujBefektetesService.$ujReszveny.$nettoJelenertek === undefined) {
      this.nettoJelenertek = nettoJelenertek;
      this.addOneItem(nettoJelenertek);

      this.countOfFilled++;
      this.count = (this.countOfFilled / 8) * 100;
    }

    else {

      // Hozzáadni az előző értékeket is
      this.nettoJelenertek = nettoJelenertek;
      //this.addOneItem(this.befektetesAdatok);
      this.addOneItem(this.nettoJelenertek);

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny))

    }
    this.ujBefektetesService.$ujReszveny.$haladas = this.count;

  }

  saveManageles(manageles: Manageles) {
    if (this.ujBefektetesService.$ujReszveny.$manageles === undefined) {
      this.manageles = manageles;
      this.addOneItem(manageles);

      this.countOfFilled++;
      this.count = (this.countOfFilled / 8) * 100;
    }

    else {

      // Hozzáadni az előző értékeket is
      this.manageles = manageles;
      //this.addOneItem(this.befektetesAdatok);
      this.addOneItem(this.manageles);

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny))

    }
    this.ujBefektetesService.$ujReszveny.$haladas = this.count;


  }


  /**
   * Setter $ujReszveny
   * @param {UjReszveny} value
   */
  public set $ujReszveny(value: UjReszveny) {
    this.ujReszveny = value;
  }

  /**
   * Getter $ujReszveny
   * @return {UjReszveny}
   */
  public get $ujReszveny(): UjReszveny {
    return this.ujReszveny;
  }


  // GETTERS

  /**
   * Getter $haladasValue
   * @return {number}
   */
  public get $haladasValue(): number {
    return this.haladasValue;
  }


  // SETTERS

  /**
   * Setter $haladasValue
   * @param {number} value
   */
  public set $haladasValue(value: number) {
    this.haladasValue = value;
  }


}

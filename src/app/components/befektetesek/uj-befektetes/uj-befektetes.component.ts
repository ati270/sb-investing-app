import { VallalatVizsgKriteriumokComponent } from './uj-befektetes-elemek/vallalat-vizsg-kriteriumok/vallalat-vizsg-kriteriumok.component';
import { AddReszvenyAction, UpdateReszvenyAction } from './../../store/reszveny/actions';
import { Component, OnInit, ViewChild, Output, ElementRef } from '@angular/core';
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

@Component({
  selector: 'app-uj-befektetes',
  templateUrl: './uj-befektetes.component.html',
  styleUrls: ['./uj-befektetes.component.scss'],
  providers: [MessageService]
})
export class UjBefektetesComponent implements OnInit {
  @ViewChild('saveReszveny') saveButton: ElementRef;
  countOfFilled: number = 0;
  pbarTitle = "Kitöltöttség";
  maxPercent: number = 8;
  isBefektetesKesz: boolean;
  count: number = 0.0;
  isSavedActualElemzes: boolean;
  circlePrColor = "#3f729b";


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

  private haladasValue: number = 0;
  private tabValue = 12.5;
  constructor(private ujBefektetesService: UjBefektetesService, private store: Store<AppState>, private messageService: MessageService) { }

  ngOnInit(): void {

    this.isSavedActualElemzes = false;
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
    this.ujBefektetesService.$ujReszveny = new UjReszveny();
    this.$ujReszveny = this.ujBefektetesService.$ujReszveny;

    this.isSavedActualElemzes = false;

  }

  onRejectUjReszveny() {
    this.messageService.clear('c');
  }

  saveReszveny() {
    // Mentjük az új részvényt.: ami már fel van töltve az adatokkal
    this.store.dispatch(
      new AddReszvenyAction(this.ujBefektetesService.$ujReszveny)
    );

    this.messageService.add({ key: 'tcAdd', severity: 'success', summary: 'Elemzés sikeresen mentve!' });
    this.isSavedActualElemzes = true;
  }

  // Ezzzel adunk mindig hozzá egy elemet a listához
  addOneItem(item: any) {
    this.ujBefektetesService.addOneItem(item);
  }

  saveBefAdatok(befAdatok: BefektetesAdatok) {

    // Adjuk hozzá a listához az itemet TEhát ha még nincs hozzáadva a befektetési adat, adjuk hozzá
    if (this.ujBefektetesService.$ujReszveny.$befektetesAdatok === undefined) {
      this.befektetesAdatok = befAdatok;
      this.addOneItem(this.befektetesAdatok);
      console.log(this.ujBefektetesService.$ujReszveny.$befektetesAdatok);
      this.countOfFilled++;
      this.count = (this.countOfFilled/8)*100;
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
      this.count = (this.countOfFilled/8)*100;
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
  }

  saveKockazatElemzes(kockElemzes: VallalatKockazatElemzes) {
    if (this.ujBefektetesService.$ujReszveny.$vallalatKockazatElemzes === undefined) {
      this.vallalatKockazatElemzes = kockElemzes;
      this.addOneItem(kockElemzes);

      this.countOfFilled++;
      this.count = (this.countOfFilled/8)*100;
      console.log(this.ujBefektetesService.$ujReszveny);
    }

    else {

      // Hozzáadni az előző értékeket is
      this.vallalatKockazatElemzes = kockElemzes;
      //this.addOneItem(this.befektetesAdatok);
      this.addOneItem(this.vallalatKockazatElemzes);

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny))

    }

  }

  savePenzAdatok(penzAdatok: PenzugyiAdatok){
    if (this.ujBefektetesService.$ujReszveny.$penzugyiAdatok === undefined) {
      this.penzugyiAdatok = penzAdatok;
      this.addOneItem(penzAdatok);
      console.log("friss pénz adatok");
      this.countOfFilled++;
      this.count = (this.countOfFilled/8)*100;

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
  }

  saveVallPenzElemzes(vallPenzElemzes: VallalatPenzugyiElemzes){
    if (this.ujBefektetesService.$ujReszveny.$vallalatPenzugyiElemzes === undefined) {
      this.vallalatPenzugyiElemzes = vallPenzElemzes;
      this.addOneItem(vallPenzElemzes);

      this.countOfFilled++;
      this.count = (this.countOfFilled/8)*100;

    }

    else {

      // Hozzáadni az előző értékeket is
      this.vallalatPenzugyiElemzes = vallPenzElemzes;
      //this.addOneItem(this.befektetesAdatok);
      this.addOneItem(this.vallalatPenzugyiElemzes);

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny))

    }
  }

  saveCelar(celar: CelarMeghatarozas){
    if (this.ujBefektetesService.$ujReszveny.$celarMeghatarozas === undefined) {
      this.celarMeghatarozas = celar;
      this.addOneItem(celar);

      this.countOfFilled++;
      this.count = (this.countOfFilled/8)*100;
    }

    else {

      // Hozzáadni az előző értékeket is
      this.celarMeghatarozas = celar;
      //this.addOneItem(this.befektetesAdatok);
      this.addOneItem(this.celarMeghatarozas);

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny))

    }

  }

  saveNettoJelenertek(nettoJelenertek: NettoJelenErtek){
    if (this.ujBefektetesService.$ujReszveny.$nettoJelenertek === undefined) {
      this.nettoJelenertek = nettoJelenertek;
      this.addOneItem(nettoJelenertek);

      this.countOfFilled++;
      this.count = (this.countOfFilled/8)*100;
    }

    else {

      // Hozzáadni az előző értékeket is
      this.nettoJelenertek = nettoJelenertek;
      //this.addOneItem(this.befektetesAdatok);
      this.addOneItem(this.nettoJelenertek);

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny))

    }

  }

  saveManageles(manageles: Manageles){
    if (this.ujBefektetesService.$ujReszveny.$manageles === undefined) {
      this.manageles = manageles;
      this.addOneItem(manageles);

      this.countOfFilled++;
      this.count = (this.countOfFilled/8)*100;
    }

    else {

      // Hozzáadni az előző értékeket is
      this.manageles = manageles;
      //this.addOneItem(this.befektetesAdatok);
      this.addOneItem(this.manageles);

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny))

    }

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

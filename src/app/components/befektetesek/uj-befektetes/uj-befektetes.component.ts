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
  countOfFilled: number = 5;
  isBefektetesKesz: boolean;
  isSavedActualElemzes: boolean;

  // Components
  befektetesAdatok: BefektetesAdatok;
  mentalisElemzes: MentalisElemzes;
  vallalatKockazatElemzes: VallalatKockazatElemzes;
  penzugyiAdatok: PenzugyiAdatok;
  vallalatPenzugyiElemzes: VallalatPenzugyiElemzes;
  celarMeghatarozas: CelarMeghatarozas;
  nettoJelenertek: NettoJelenErtek;
  manageles: Manageles;

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
    this.saveButton.nativeElement.style.background= 'gray';
    this.saveButton.nativeElement.style.color= 'gray';



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
    if (this.ujBefektetesService.$ujReszveny.$mentalisElemzes === undefined) {
      this.vallalatKockazatElemzes = kockElemzes;
      this.addOneItem(kockElemzes);

      this.countOfFilled++;
    }

    else {

      // Hozzáadni az előző értékeket is
      this.vallalatKockazatElemzes = kockElemzes;
      //this.addOneItem(this.befektetesAdatok);
      this.addOneItem(this.vallalatKockazatElemzes);

      this.store.dispatch(new UpdateReszvenyAction(this.ujBefektetesService.$ujReszveny))

      // frissiteni kellene a menuben a számlálot
    }

    console.log(this.ujBefektetesService.$ujReszveny.$vallalatKockazatElemzes);

  }


  filledPenzugyiAdatokTab(data?: any) {
    this.changeFrom4To5Tab = data.filled;
    this.nextTabIndex = 4;
    this.haladasValue = this.tabValue * 4;
    this.penzugyiAdatok = data.penzugyiAdatok;

    // Adjuk hozzá a listához az itemet
    this.addOneItem(this.penzugyiAdatok);
  }

  filledVallPenzElemzesTab(data?: any) {
    this.changeFrom5To6Tab = data.filled;
    this.nextTabIndex = 5;
    this.haladasValue = this.tabValue * 5;
    this.vallalatPenzugyiElemzes = data.vallalatPenzugyiElemzes;

    // Adjuk hozzá a listához az itemet
    this.addOneItem(this.vallalatPenzugyiElemzes);
  }

  filledCelarTab(data?: any) {
    this.changeFrom6To7Tab = data.filled;
    this.nextTabIndex = 6;
    this.haladasValue = this.tabValue * 6;
    this.celarMeghatarozas = data.celar;

    // Adjuk hozzá a listához az itemet
    this.addOneItem(this.celarMeghatarozas);
  }

  filledNettoJelenTab(data?: any) {
    this.lastTab = data.filled;
    this.nextTabIndex = 7;
    this.haladasValue = this.tabValue * 7;
    this.nettoJelenertek = data.nettoJelenErtek;

    // Adjuk hozzá a listához az itemet
    this.addOneItem(this.nettoJelenertek);
  }




  filledManageles(data?: any) {
    this.haladasValue = 100;
    this.isBefektetesKesz = data.filled;
    this.manageles = data.manageles;

    /*this.store.dispatch(
      new AddReszvenyAction(this.reszvenyek)
    );*/
    // a manageles során létrehozok 1 db ujReszvenyt(elemeivel) ami bekerül a service-be

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

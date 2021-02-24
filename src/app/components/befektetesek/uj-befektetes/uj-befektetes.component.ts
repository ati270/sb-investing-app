import { Component, OnInit, ViewChild, Output } from '@angular/core';
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

@Component({
  selector: 'app-uj-befektetes',
  templateUrl: './uj-befektetes.component.html',
  styleUrls: ['./uj-befektetes.component.scss']
})
export class UjBefektetesComponent implements OnInit {

  isBefektetesKesz: boolean;



  // Components
  befektetesAdatok: BefektetesAdatok;
  mentalisElemzes: MentalisElemzes;
  vallalatKockazatElemzes: VallalatKockazatElemzes;
  penzugyiAdatok: PenzugyiAdatok;
  vallalatPenzugyiElemzes: VallalatPenzugyiElemzes;
  celarMeghatarozas: CelarMeghatarozas;
  nettoJelenertek: NettoJelenErtek;
  manageles: Manageles;

  // Új részvény lista
  ujReszveny: UjReszveny;

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

  constructor(private ujBefektetesService: UjBefektetesService) { }

  ngOnInit(): void {
    this.ujReszveny = new UjReszveny();
    this.isBefektetesKesz = false;
  }

  

  addItemsToUjReszveny(item: any){
    this.ujBefektetesService.addItems(item);
  }


  filledAdatokTab(data?: any){
    this.changeFromFirstTabToSecond = data.filled;
    this.nextTabIndex = this.nextTabIndex + 1;
    this.haladasValue = this.tabValue;
    this.befektetesAdatok = data.befektetesAdatok;
    console.log("filled" + this.befektetesAdatok.vallalatNeve);

     // Adjuk hozzá a listához az itemet
     this.addItemsToUjReszveny(this.befektetesAdatok);
  }

  filledSajatMagamElemzeseTab(data?: any){
    this.changeFrom2To3Tab = data.filled;
    this.nextTabIndex = 2;
    this.haladasValue = this.tabValue *2;
    this.mentalisElemzes = data.mentalisElemzes;

     // Adjuk hozzá a listához az itemet
     this.addItemsToUjReszveny(this.mentalisElemzes);
  }

  filledVizsgKriteriumokTab(data?: any){
    this.changeFrom3To4Tab = data.filled;
    this.nextTabIndex = 3;
    this.haladasValue = this.tabValue * 3;
    this.vallalatKockazatElemzes = data.vallalatKockazatElemzes;

     // Adjuk hozzá a listához az itemet
     this.addItemsToUjReszveny(this.vallalatKockazatElemzes);
  }

  filledPenzugyiAdatokTab(data?: any){
    this.changeFrom4To5Tab = data.filled;
    this.nextTabIndex = 4;
    this.haladasValue = this.tabValue * 4;
    this.penzugyiAdatok = data.penzugyiAdatok;

     // Adjuk hozzá a listához az itemet
     this.addItemsToUjReszveny(this.penzugyiAdatok);
  }

  filledVallPenzElemzesTab(data?: any){
    this.changeFrom5To6Tab = data.filled;
    this.nextTabIndex = 5;
    this.haladasValue = this.tabValue * 5;
    this.vallalatPenzugyiElemzes = data.vallalatPenzugyiElemzes;

     // Adjuk hozzá a listához az itemet
     this.addItemsToUjReszveny(this.vallalatPenzugyiElemzes);
  }

  filledCelarTab(data?: any){
    this.changeFrom6To7Tab = data.filled;
    this.nextTabIndex = 6;
    this.haladasValue = this.tabValue * 6;
    this.celarMeghatarozas = data.celar;

     // Adjuk hozzá a listához az itemet
     this.addItemsToUjReszveny(this.celarMeghatarozas);
  }

  filledNettoJelenTab(data?: any){
    this.lastTab = data.filled;
    this.nextTabIndex = 7;
    this.haladasValue = this.tabValue * 7;
    this.nettoJelenertek = data.nettoJelenErtek;

     // Adjuk hozzá a listához az itemet
     this.addItemsToUjReszveny(this.nettoJelenertek);
  }


  

  filledManageles(data? : any){
    this.haladasValue = 100;
    this.isBefektetesKesz = data.filled;
    this.manageles = data.manageles;

    // Adjuk hozzá a listához az itemet
    this.addItemsToUjReszveny(this.manageles);

    this.ujBefektetesService.getUjReszveny().subscribe(
      adatok => {
        this.ujReszveny = adatok;
      }
    )
    // a manageles során létrehozok 1 db ujReszvenyt(elemeivel) ami bekerül a service-be
    this.ujBefektetesService.emitCreateUjReszveny(this.ujReszveny);
    
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

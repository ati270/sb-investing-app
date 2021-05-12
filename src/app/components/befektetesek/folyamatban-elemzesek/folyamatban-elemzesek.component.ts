import { ManagelesService } from 'src/app/services/befektetesek/uj-befektetes-services/manageles/manageles.service';
import { NettoJelenertekService } from './../../../services/befektetesek/uj-befektetes-services/netto-jelenertek/netto-jelenertek.service';
import { CelarMeghatarozasService } from 'src/app/services/befektetesek/uj-befektetes-services/celar-meghatarozas/celar-meghatarozas.service';
import { VallalatPenzElemzesService } from './../../../services/befektetesek/uj-befektetes-services/vallalat-penz-elemzes/vallalat-penz-elemzes.service';
import { PenzugyiAdatokService } from 'src/app/services/befektetesek/uj-befektetes-services/penzugyi-adatok/penzugyi-adatok.service';
import { VallalatVizsgKriteriumokService } from 'src/app/services/befektetesek/uj-befektetes-services/vallalat-vizsg-kriteriumok/vallalat-vizsg-kriteriumok.service';
import { ElemzesService } from './../../../services/befektetesek/elemzesek/elemzes.service';
import { UjBefektetesService } from 'src/app/services/befektetesek/uj-befektetes-services/uj-befektetes/uj-befektetes.service';
import { MentalisElemzesService } from 'src/app/services/befektetesek/uj-befektetes-services/mentalis-elemzes/mentalis-elemzes.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { AppState } from '../../store/reszveny/state';
import { Router } from '@angular/router';
import { BefAdatokService } from 'src/app/services/befektetesek/uj-befektetes-services/befektetes-adatok/bef-adatok.service';
import { FolyamatbanLevoElemzesService } from 'src/app/services/befektetesek/elemzesek/folyamatban-levo-elemzes/folyamatban-levo-elemzes.service';

@Component({
  selector: 'app-folyamatban-elemzesek',
  templateUrl: './folyamatban-elemzesek.component.html',
  styleUrls: ['./folyamatban-elemzesek.component.scss']
})
export class FolyamatbanElemzesekComponent implements OnInit {

  panelOpenState = false;


  constructor(private folyamatbanElemzesekService: FolyamatbanLevoElemzesService, private router: Router, private befAdatService: BefAdatokService,
    private mentalisElemzesService: MentalisElemzesService, private ujBefService: UjBefektetesService, private elemzesService: ElemzesService,
    private valallatKockelemzesService: VallalatVizsgKriteriumokService, private penzugyiAdatokService: PenzugyiAdatokService,
    private vallPenzugyiElemzesService: VallalatPenzElemzesService, private celarService: CelarMeghatarozasService,
    private nettoJelenErtekService: NettoJelenertekService, private managelesService: ManagelesService ) { }

  ngOnInit(): void {
    // Lekéri az adatokat és elmenti az ujReszvenyek valtozoba
    this.folyamatbanElemzesekService.getStoreValues();
  }

  getReszvenyek(): Observable<Array<UjReszveny>>{
    return of(this.folyamatbanElemzesekService.$ujReszvenyek);
  }

  redirectToMain(){
    this.router.navigateByUrl('/befektetes');

    this.befAdatService.loadBefAdatok(this.folyamatbanElemzesekService.$ujReszvenyek[0].$befektetesAdatok);
    this.mentalisElemzesService.loadMentalisElemzes(this.folyamatbanElemzesekService.$ujReszvenyek[0].$mentalisElemzes);
    this.valallatKockelemzesService.loadVallKrit(this.folyamatbanElemzesekService.$ujReszvenyek[0].$vallalatKockazatElemzes)
    this.penzugyiAdatokService.loadPenzugyiAdatok(this.folyamatbanElemzesekService.$ujReszvenyek[0].$penzugyiAdatok)
    this.vallPenzugyiElemzesService.loadVallalatPenzElemzes(this.folyamatbanElemzesekService.$ujReszvenyek[0].$vallalatPenzugyiElemzes)
    this.celarService.loadCelarMeghat(this.folyamatbanElemzesekService.$ujReszvenyek[0].$celarMeghatarozas)
    this.nettoJelenErtekService.loadNettoJelenertek(this.folyamatbanElemzesekService.$ujReszvenyek[0].$nettoJelenertek)
    this.managelesService.loadManageles(this.folyamatbanElemzesekService.$ujReszvenyek[0].$manageles)
  }

  redirectToMainPanel(reszveny: UjReszveny){

    // Itt kellene visszaadni a mentést route on keresztül
    this.router.navigateByUrl('/befektetes', { state: { isSavedActualElemzes: true } });

    let reszvenyek: UjReszveny[] = new Array(reszveny);
    // subject-el visszatölteni
    console.log(reszveny);
    //this.elemzesService.sendSubjectUjReszveny(reszveny);

    // Visszatölteni összes tabot
    this.befAdatService.loadBefAdatok(reszveny.$befektetesAdatok);
    this.mentalisElemzesService.loadMentalisElemzes(reszveny.$mentalisElemzes);
    this.valallatKockelemzesService.loadVallKrit(reszveny.$vallalatKockazatElemzes);
    this.penzugyiAdatokService.loadPenzugyiAdatok(reszveny.$penzugyiAdatok);
    this.vallPenzugyiElemzesService.loadVallalatPenzElemzes(reszveny.$vallalatPenzugyiElemzes)
    this.celarService.loadCelarMeghat(reszveny.$celarMeghatarozas);
    this.nettoJelenErtekService.loadNettoJelenertek(reszveny.$nettoJelenertek);
    this.managelesService.loadManageles(reszveny.$manageles);

    this.ujBefService.loadReszveny(reszveny);
    // Visszatölteni a labeleket meg a százalékot

  }


}

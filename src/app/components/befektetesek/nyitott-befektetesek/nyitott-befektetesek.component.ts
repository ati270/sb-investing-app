import { ElemzesService } from './../../../services/befektetesek/elemzesek/elemzes.service';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { NyitottBefektetesService } from 'src/app/services/befektetesek/nyitott-befektetes/nyitott-befektetes.service';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';
import { Observable, of } from 'rxjs';
import { AppState } from '../../store/reszveny/state';
import { Router } from '@angular/router';
import { BefAdatokService } from 'src/app/services/befektetesek/uj-befektetes-services/befektetes-adatok/bef-adatok.service';
import { MentalisElemzesService } from 'src/app/services/befektetesek/uj-befektetes-services/mentalis-elemzes/mentalis-elemzes.service';
import { CelarMeghatarozasService } from 'src/app/services/befektetesek/uj-befektetes-services/celar-meghatarozas/celar-meghatarozas.service';
import { ManagelesService } from 'src/app/services/befektetesek/uj-befektetes-services/manageles/manageles.service';
import { NettoJelenertekService } from 'src/app/services/befektetesek/uj-befektetes-services/netto-jelenertek/netto-jelenertek.service';
import { PenzugyiAdatokService } from 'src/app/services/befektetesek/uj-befektetes-services/penzugyi-adatok/penzugyi-adatok.service';
import { UjBefektetesService } from 'src/app/services/befektetesek/uj-befektetes-services/uj-befektetes/uj-befektetes.service';
import { VallalatPenzElemzesService } from 'src/app/services/befektetesek/uj-befektetes-services/vallalat-penz-elemzes/vallalat-penz-elemzes.service';
import { VallalatVizsgKriteriumokService } from 'src/app/services/befektetesek/uj-befektetes-services/vallalat-vizsg-kriteriumok/vallalat-vizsg-kriteriumok.service';

@Component({
  selector: 'app-nyitott-befektetesek',
  templateUrl: './nyitott-befektetesek.component.html',
  styleUrls: ['./nyitott-befektetesek.component.scss']
})
export class NyitottBefektetesekComponent implements OnInit {

  reszvenyAllItems$: Observable<Array<UjReszveny>>;
  reszvenyFolyamatbanItems$: Observable<UjReszveny>;
  ujReszvenyek: UjReszveny[] = [];
  befAdat: BefektetesAdatok;
  typeOfBefektetes = "Nyitott befektetések";
  count = 0;

  constructor(private store: Store<AppState>,
    private nyitottBefService: NyitottBefektetesService,
    private router: Router, private befAdatService: BefAdatokService,
    private mentalisElemzesService: MentalisElemzesService, private ujBefService: UjBefektetesService, private elemzesService: ElemzesService,
    private valallatKockelemzesService: VallalatVizsgKriteriumokService, private penzugyiAdatokService: PenzugyiAdatokService,
    private vallPenzugyiElemzesService: VallalatPenzElemzesService, private celarService: CelarMeghatarozasService,
    private nettoJelenErtekService: NettoJelenertekService, private managelesService: ManagelesService) {
   }

  ngOnInit(): void {
    this.nyitottBefService.getStoreValues();
  }

  getReszvenyek(): Observable<Array<UjReszveny>>{
    return of(this.nyitottBefService.$ujReszvenyek);
  }

  redirectToMain(){
    this.router.navigateByUrl('/befektetes');

    //this.befAdatService.loadBefAdatok(this.nyitottBefService[0].$);
    this.befAdatService.loadBefAdatok(this.nyitottBefService.$ujReszvenyek[0].$befektetesAdatok);
    this.mentalisElemzesService.loadMentalisElemzes(this.nyitottBefService.$ujReszvenyek[0].$mentalisElemzes);
    this.valallatKockelemzesService.loadVallKrit(this.nyitottBefService.$ujReszvenyek[0].$vallalatKockazatElemzes)
    this.penzugyiAdatokService.loadPenzugyiAdatok(this.nyitottBefService.$ujReszvenyek[0].$penzugyiAdatok)
    this.vallPenzugyiElemzesService.loadVallalatPenzElemzes(this.nyitottBefService.$ujReszvenyek[0].$vallalatPenzugyiElemzes)
    this.celarService.loadCelarMeghat(this.nyitottBefService.$ujReszvenyek[0].$celarMeghatarozas)
    this.nettoJelenErtekService.loadNettoJelenertek(this.nyitottBefService.$ujReszvenyek[0].$nettoJelenertek)
    this.managelesService.loadManageles(this.nyitottBefService.$ujReszvenyek[0].$manageles)

  }

  redirectToMainPanel(reszveny: UjReszveny){
    // Itt kellene visszaadni a mentést route on keresztül
    this.router.navigateByUrl('/befektetes', { state: { isSavedActualElemzes: true } });

    let reszvenyek: UjReszveny[] = new Array(reszveny);
    // subject-el visszatölteni
    console.log(reszveny);
    this.elemzesService.sendSubjectUjReszveny(reszveny);

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

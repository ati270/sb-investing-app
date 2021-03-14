import { LezartBefektetesService } from './../../../services/befektetesek/elemzesek/lezart-befektetes/lazart-befektetes.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reszveny/state';
import { Router } from '@angular/router';
import { BefAdatokService } from 'src/app/services/befektetesek/uj-befektetes-services/befektetes-adatok/bef-adatok.service';
import { Observable, of } from 'rxjs';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { MentalisElemzesService } from 'src/app/services/befektetesek/uj-befektetes-services/mentalis-elemzes/mentalis-elemzes.service';

@Component({
  selector: 'app-lezart-befektetesek',
  templateUrl: './lezart-befektetesek.component.html',
  styleUrls: ['./lezart-befektetesek.component.scss']
})
export class LezartBefektetesekComponent implements OnInit {

  constructor(private store: Store<AppState>,
    private lezartBefService: LezartBefektetesService,
    private router: Router, private befAdatService: BefAdatokService, private mentalisElemzesService: MentalisElemzesService) {
   }

  ngOnInit(): void {
    this.lezartBefService.getStoreValues();
  }

  getReszvenyek(): Observable<Array<UjReszveny>>{
    return of(this.lezartBefService.$ujReszvenyek);
  }

  redirectToMain(){
    this.router.navigateByUrl('/befektetes');

    this.befAdatService.loadBefAdatok(this.lezartBefService.$ujReszvenyek[0].$befektetesAdatok);
    this.mentalisElemzesService.loadMentalisElemzes(this.lezartBefService.$ujReszvenyek[0].$mentalisElemzes);
  }

  redirectToMainPanel(reszveny: UjReszveny){
    this.router.navigateByUrl('/befektetes');

    let reszvenyek: UjReszveny[] = new Array(reszveny);
    this.befAdatService.loadBefAdatok(reszveny.$befektetesAdatok);
    this.mentalisElemzesService.loadMentalisElemzes(reszveny.$mentalisElemzes);

  }


}

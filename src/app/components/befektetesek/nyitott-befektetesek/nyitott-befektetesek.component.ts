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
    private router: Router, private befAdatService: BefAdatokService, private mentalisElemzesService: MentalisElemzesService) {
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

  }

  redirectToMainPanel(reszveny: UjReszveny){
    this.router.navigateByUrl('/befektetes');

    let reszvenyek: UjReszveny[] = new Array(reszveny);
    this.befAdatService.loadBefAdatok(reszveny.$befektetesAdatok);
    this.mentalisElemzesService.loadMentalisElemzes(reszveny.$mentalisElemzes);

  }



}

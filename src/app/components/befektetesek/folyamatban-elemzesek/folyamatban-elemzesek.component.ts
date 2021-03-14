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
    private mentalisElemzesService: MentalisElemzesService) { }

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
  }

  redirectToMainPanel(reszveny: UjReszveny){
    this.router.navigateByUrl('/befektetes');

    let reszvenyek: UjReszveny[] = new Array(reszveny);
    this.befAdatService.loadBefAdatok(reszveny.$befektetesAdatok);
    this.mentalisElemzesService.loadMentalisElemzes(reszveny.$mentalisElemzes);

  }


}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { AppState } from '../../store/reszveny/state';

@Component({
  selector: 'app-folyamatban-elemzesek',
  templateUrl: './folyamatban-elemzesek.component.html',
  styleUrls: ['./folyamatban-elemzesek.component.scss']
})
export class FolyamatbanElemzesekComponent implements OnInit, AfterViewInit {

  reszvenyAllItems$: Observable<Array<UjReszveny>>;
  reszvenyFolyamatbanItems$: Observable<UjReszveny>;
  ujReszvenyek: UjReszveny[] = [];
  befAdat: BefektetesAdatok;
  typeOfBefektetes = "Folyamatban levő elemzések";
  count = 0;



  constructor(private store: Store<AppState>) { }

  ngAfterViewInit(): void {
    // this.reszvenyFolyamatbanItems$ = this.getFolyamatbanReszvenyek();
  }

  ngOnInit(): void {

    this.test();
  }

  /*getFolyamatbanReszvenyek(): Observable<UjReszveny> {

    let adat: Observable<UjReszveny>;

      adat = this.reszvenyAllItems$;
      console.log(adat);
    return adat;
  }*/

  getVal(): Observable<Array<UjReszveny>>{
    return of(this.ujReszvenyek);
  }

  test() {

    this.reszvenyAllItems$ = this.store.select(store => store.reszvenyek);


    this.reszvenyAllItems$.subscribe(item => {
      for (let it of item) {
        if(it.$befektetesAdatok.status === this.typeOfBefektetes){
          this.ujReszvenyek.push(it);
        }
        console.log(it.$befektetesAdatok.status);
      }
    });
  }
}

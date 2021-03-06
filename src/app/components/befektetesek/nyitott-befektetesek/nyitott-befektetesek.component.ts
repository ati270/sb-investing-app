import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { NyitottBefektetesService } from 'src/app/services/befektetesek/nyitott-befektetes/nyitott-befektetes.service';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';
import { Observable, of } from 'rxjs';
import { AppState } from '../../store/reszveny/state';

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

  constructor(private store: Store<AppState>) {
   }

  ngOnInit(): void {

    this.test();

  }


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

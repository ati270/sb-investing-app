import { Component, OnInit } from '@angular/core';
import { NyitottBefektetesService } from 'src/app/services/befektetesek/nyitott-befektetes/nyitott-befektetes.service';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nyitott-befektetesek',
  templateUrl: './nyitott-befektetesek.component.html',
  styleUrls: ['./nyitott-befektetesek.component.scss']
})
export class NyitottBefektetesekComponent implements OnInit {

  message: string;
  reszvenyek: UjReszveny[];
  ujReszveny: UjReszveny;
  befAdat: BefektetesAdatok;
  vallalatNeve: string;
  datum: string;
  obsList: Observable<UjReszveny>;
  obsBefData: Observable<BefektetesAdatok[]>;

  constructor(private nyitottBefService: NyitottBefektetesService) {
    this.reszvenyek = new Array<UjReszveny>();
   }

  ngOnInit(): void {
      this.obsList = this.nyitottBefService.$obsList;

      this.obsList.subscribe(
        data =>{
          console.log(data.$ujReszvenyElemekList[0]);
        }
      )

  }



}

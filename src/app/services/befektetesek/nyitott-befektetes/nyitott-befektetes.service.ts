import { Injectable } from '@angular/core';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { BefektetesService } from '../befektetes/befektetes.service';
import { Observable, of } from 'rxjs';
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';

@Injectable({
  providedIn: 'root'
})
export class NyitottBefektetesService {

  ujReszveny: UjReszveny;
  message: string;
  befAdat: BefektetesAdatok;
  private obsList: Observable<UjReszveny> ;

  constructor(private befService: BefektetesService) {

    this.obsList = this.befService.$obsNyitottBefList;

   }


    /**
     * Getter $obsList
     * @return {Observable<UjReszveny[]> }
     */
	public get $obsList(): Observable<UjReszveny>  {
		return this.obsList;
	}


}

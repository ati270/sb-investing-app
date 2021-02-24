import { Injectable } from '@angular/core';
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';

@Injectable({
  providedIn: 'root'
})
export class BefektetesService {

  // Subjects
  folyamatbanSubject = new Subject<UjReszveny>();
  nyitottSubject = new Subject<UjReszveny>();
  lezartSubject = new Subject<UjReszveny>();
  figyeloSubject = new Subject<UjReszveny>();
  elvetettSubject = new Subject<UjReszveny>();

  // datas emits

  $emitFolyamatban = this.folyamatbanSubject.asObservable();
  $emitLezart = this.lezartSubject.asObservable();
  $emitFigyelo = this.figyeloSubject.asObservable();
  $emitElvetett = this.elvetettSubject.asObservable();

  private obsNyitottBefList : Subject<UjReszveny> = new Subject();

  constructor() {
   }

  // method for save data 
  emitFolyamaban(value: any) {
    this.folyamatbanSubject.next(value);
  }

  emitNyitott(ujReszveny: UjReszveny) {
        this.obsNyitottBefList.next(ujReszveny);
  }
  emitLezart(value: any) {
    this.lezartSubject.next(value);
  }
  emitFigyelo(value: any) {
    this.figyeloSubject.next(value);
  }
  emitElvetett(value: any) {
    this.elvetettSubject.next(value);
  }


    /**
     * Getter $obsNyitottBefList
     * @return {BehaviorSubject<UjReszveny[]> }
     */
	public get $obsNyitottBefList(): Observable<UjReszveny>  {
		return this.obsNyitottBefList.asObservable();
	}

}

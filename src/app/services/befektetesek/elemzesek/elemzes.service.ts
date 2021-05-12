import { UjReszveny } from './../../../models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface dataFromElemzes{
  ujReszveny: UjReszveny
}

@Injectable({
  providedIn: 'root'
})
export class ElemzesService {

  private elemzesSubject: Subject<UjReszveny> = new Subject<UjReszveny>();
  constructor() { }

  sendSubjectUjReszveny(ujReszveny: UjReszveny){
    this.elemzesSubject.next(ujReszveny);
  }

  receiveSubjectUjReszveny(): Observable<UjReszveny>{
    return this.elemzesSubject.asObservable();
  }

    /**
     * Getter $elemzesSubject
     * @return {Subject<UjReszveny>}
     */
	public get $elemzesSubject(): Subject<UjReszveny> {
		return this.elemzesSubject;
	}

    /**
     * Setter $elemzesSubject
     * @param {Subject<UjReszveny>} value
     */
	public set $elemzesSubject(value: Subject<UjReszveny>) {
		this.elemzesSubject = value;
	}


}

import { Injectable } from '@angular/core';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UjBefektetesService {

  private ujReszveny: UjReszveny; // 1 db részvény aminek van egy elem listája
  private emitChangeSource = new Subject<UjReszveny>();
  
  $changeEmitted = this.emitChangeSource.asObservable();

  constructor() { 
    this.ujReszveny = new UjReszveny();
  }

  emitCreateUjReszveny(change: any){
    this.emitChangeSource.next(change);
  }

  addItems(item: any[]){
      this.ujReszveny.$ujReszvenyElemekList.push(item);
  }

  public getUjReszveny(): Observable<UjReszveny> {
    return of(this.ujReszveny);  // --> visszaad 1 db KÉSZ ujrészvényt
  }
  

}

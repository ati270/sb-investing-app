import { FigyeloListaService } from './../../../services/befektetesek/elemzesek/figyelo-lista/figyelo-lista.service';
import { Component, OnInit } from '@angular/core';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BefAdatokService } from 'src/app/services/befektetesek/uj-befektetes-services/befektetes-adatok/bef-adatok.service';

@Component({
  selector: 'app-figyelo-lista',
  templateUrl: './figyelo-lista.component.html',
  styleUrls: ['./figyelo-lista.component.scss']
})
export class FigyeloListaComponent implements OnInit {

  constructor(private figyeloListaService: FigyeloListaService, private router: Router, private befAdatService: BefAdatokService) { }

  ngOnInit(): void {
    // Lekéri az adatokat és elmenti az ujReszvenyek valtozoba
    this.figyeloListaService.getStoreValues();
  }

  getReszvenyek(): Observable<Array<UjReszveny>>{
    return of(this.figyeloListaService.$ujReszvenyek);
  }

  redirectToMain(){
    this.router.navigateByUrl('/befektetes');

    this.befAdatService.loadBefAdatok(this.figyeloListaService.$ujReszvenyek);

  }

  redirectToMainPanel(reszveny: UjReszveny){
    this.router.navigateByUrl('/befektetes');

    let reszvenyek: UjReszveny[] = new Array(reszveny);
    this.befAdatService.loadBefAdatok(reszvenyek);

  }


}

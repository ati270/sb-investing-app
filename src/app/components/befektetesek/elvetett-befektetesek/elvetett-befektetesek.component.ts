import { ElvetettBefektetesService } from './../../../services/befektetesek/elemzesek/elvetett-befektetes/elvetett-befektetes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { FigyeloListaService } from 'src/app/services/befektetesek/elemzesek/figyelo-lista/figyelo-lista.service';
import { BefAdatokService } from 'src/app/services/befektetesek/uj-befektetes-services/befektetes-adatok/bef-adatok.service';

@Component({
  selector: 'app-elvetett-befektetesek',
  templateUrl: './elvetett-befektetesek.component.html',
  styleUrls: ['./elvetett-befektetesek.component.scss']
})
export class ElvetettBefektetesekComponent implements OnInit {

  constructor(private elvetettBefService: ElvetettBefektetesService, private router: Router, private befAdatService: BefAdatokService) { }

  ngOnInit(): void {
    // Lekéri az adatokat és elmenti az ujReszvenyek valtozoba
    this.elvetettBefService.getStoreValues();
  }

  getReszvenyek(): Observable<Array<UjReszveny>>{
    return of(this.elvetettBefService.$ujReszvenyek);
  }

  redirectToMain(){
    this.router.navigateByUrl('/befektetes');

    this.befAdatService.loadBefAdatok(this.elvetettBefService.$ujReszvenyek);

  }

  redirectToMainPanel(reszveny: UjReszveny){
    this.router.navigateByUrl('/befektetes');

    let reszvenyek: UjReszveny[] = new Array(reszveny);
    this.befAdatService.loadBefAdatok(reszvenyek);

  }

}

import { UjBefektetesService } from 'src/app/services/befektetesek/uj-befektetes-services/uj-befektetes/uj-befektetes.service';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reszveny/state';

@Component({
  selector: 'app-bef-menu',
  templateUrl: './bef-menu.component.html',
  styleUrls: ['./bef-menu.component.scss']
})
export class BefMenuComponent implements OnInit{

  @ViewChild('ujReszvenyAdd') ujReszvenyAdd: ElementRef;

  befAdatok: BefektetesAdatok;
  ujReszveny: UjReszveny;
  private countFolyamatban: number = 0;
  private count: Observable<number>;

  constructor(private router: Router,private store: Store<AppState>,
    private ujBefservice: UjBefektetesService) { }



  ngOnInit(): void {
    this.$countFolyamatban = this.ujBefservice.$countFolyamatban;
  }

  ujBefektetes(){
    this.router.navigate(['/befektetes/uj-befektetes']);
    this.ujReszvenyAdd.nativeElement.blur();
  }

  over(){
    this.ujReszvenyAdd.nativeElement.blur();
  }

  folyamatbanElemzesek(){
    this.router.navigate(['/befektetes/folyamatban-levo-elemzesek']);
  }

  nyitotBefektetesek(){
    this.router.navigate(['/befektetes/nyitott-befektetesek']);
  }

  lezartBefektetesek(){
    this.router.navigate(['/befektetes/lezart-befektetesek'])
  }

  figyeloLista(){
    this.router.navigate(['/befektetes/figyelo-lista']);
  }

  elvetettBefektetesek(){
    this.router.navigate(['/befektetes/elvetett-befektetesek']);
  }



    /**
     * Getter $countFolyamatban
     * @return {number }
     */
	public get $countFolyamatban(): number  {
		return this.countFolyamatban;
	}


    /**
     * Setter $countFolyamatban
     * @param {number } value
     */
	public set $countFolyamatban(value: number ) {
		this.countFolyamatban = value;
	}





}

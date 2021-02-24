import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bef-menu',
  templateUrl: './bef-menu.component.html',
  styleUrls: ['./bef-menu.component.scss']
})
export class BefMenuComponent implements OnInit {

  @ViewChild('ujReszvenyAdd') ujReszvenyAdd: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
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

}

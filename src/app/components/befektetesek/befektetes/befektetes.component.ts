import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoreInfoDialogComponent } from '../../dialogs/more-info-dialog/more-info-dialog.component';
import { UjReszveny } from 'src/app/models/uj-befektetes-models/uj-befektetes/uj-befektetes.model';
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';
import { BefektetesService } from 'src/app/services/befektetesek/befektetes/befektetes.service';
import { UjBefektetesService } from 'src/app/services/befektetesek/uj-befektetes-services/uj-befektetes/uj-befektetes.service';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { MatFabMenu } from '@angular-material-extensions/fab-menu';

@Component({
  selector: 'app-befektetes',
  templateUrl: './befektetes.component.html',
  styleUrls: ['./befektetes.component.scss']
})
export class BefektetesComponent implements OnInit {

  // Befektetés rész komponensei(adatok, saját magam elemzése...stb)
  befektetesAdatok: BefektetesAdatok;

  @ViewChild('mainPanel') mainPanel: ElementRef;
  menuItems: Array<string> = ['Célkitűzés és időbeosztás',
    'Megtakarítás',
    'Gazd. állapot és stratégia meghatározása',
    'Részvények elemzése',
    ''];

  befektetesFormak: string[] = ["Folyamatban levő elemzések", "Nyitott befektetések",
    "Lezárt befektetések", "Figyelő lista",
    "Elvetett befektetések"];

  fabButtonsRandom: MatFabMenu[] = [
    {
      id: 1,
      icon: 'attach_money'
    },
    {
      id: 2,
      icon: 'fact_check'
    },
    {
      id: 3,
      icon: 'bar_chart'
    },
    {
      id: 4,
      icon: 'show_chart'
    },
  ];

  constructor(private ujBefektetesService: UjBefektetesService, private befService: BefektetesService,
    private router: Router) {

  }

  ngOnInit(): void {
    //this.saveDataTo();
  }

  routeToPenzugyek() {
    this.router.navigate(['/befektetes/penzugyek']);
  }

  routeToCelkituzes() {
    this.router.navigate(['/befektetes/celkituzes']);
  }

  routeToStrategia() {
    this.router.navigate(['/befektetes/strategia']);
  }

}

  /*saveDataTo() {
  this.ujBefektetesService.$changeEmitted.subscribe(
    adat => {
      this.befektetesAdatok = adat.$ujReszvenyElemekList[0];
      console.log("Státusz: " + this.befektetesAdatok.vallalatNeve);

      // send data to nyilt, zárt ...
      switch (this.befektetesAdatok.status) {
        // Folyamatban levő elemzések
        case this.befektetesFormak[0]: {
          this.befService.emitFolyamaban(adat);
        }
        // nyitott befektetések
        case this.befektetesFormak[1]: {
          this.befService.emitNyitott(adat);
          console.log(adat)
            ;
        }

        // Lezárt bef.
        case this.befektetesFormak[2]: {
          this.befService.emitLezart(adat);

        }

        // figyelő lista
        case this.befektetesFormak[3]: {
          this.befService.emitFigyelo(adat);

        }

        // elvetett befektetések
        case this.befektetesFormak[4]: {
          this.befService.emitElvetett(adat);
        }
      }
    }
  )
}*/




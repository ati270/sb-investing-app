import { ToastModule } from 'primeng/toast';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatTabsModule } from '@angular/material/tabs';
import { UjBefektetesComponent } from './uj-befektetes.component';
import { UjBefektetesRoutingModule } from './uj-befektetes-routing.module';
import { BefAdatokModule } from './uj-befektetes-elemek/bef-adatok/bef-adatok.module';
import { SajatMagamElemzeseModule } from './uj-befektetes-elemek/sajat-magam-elemzese/sajat-magam.elemzese.module';
import { NettoJelenertekSzamitasModule } from './uj-befektetes-elemek/netto-jelenertek-szamitas/netto-jelenertek-szamitas.module';
import { PenzugyiAdatokModule } from './uj-befektetes-elemek/penzugyi-adatok/penzugyi-adatok.module';
import { VallalatVizsgalatKriteriumokModule } from './uj-befektetes-elemek/vallalat-vizsg-kriteriumok/vallalat-vizsg-kriteriumok.module';
import { VallalatPenzugyiElemzesModule } from './uj-befektetes-elemek/vallalat-penzugyi-elemzes/vallalat-penzugyi-elemzes.module';
import { CelarMeghatarozasModule } from './uj-befektetes-elemek/celar-meghatarozas/celar-meghatarozas.module';
import { ManagelesModule } from './uj-befektetes-elemek/manageles/manageles.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BefMenuModule } from '../../menus/bef-menu/bef-menu.module';
import {MatButtonModule} from '@angular/material/button';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import {KnobModule} from 'primeng/knob';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  imports: [CommonModule,
    UjBefektetesRoutingModule,
    MatTabsModule,
    BefAdatokModule,
    BefMenuModule,
    SajatMagamElemzeseModule,
    NettoJelenertekSzamitasModule,
    PenzugyiAdatokModule,
    MatProgressBarModule,
    VallalatVizsgalatKriteriumokModule,
    VallalatPenzugyiElemzesModule,
    CelarMeghatarozasModule,
    ManagelesModule,
    MatButtonModule,
    ButtonModule,
    KnobModule,
    RippleModule,
    ToastModule,
    MatProgressBarModule,
    NgCircleProgressModule.forRoot({})
],
  declarations: [UjBefektetesComponent],
  exports: [UjBefektetesComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UjBefektetesModule {}

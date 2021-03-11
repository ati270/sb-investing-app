import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { BefektetesRoutingModule } from './befektetes-routing.module';
import { BefektetesComponent } from './befektetes.component';
import { MatTabsModule } from '@angular/material/tabs';
import { UjBefektetesModule } from '../uj-befektetes/uj-befektetes.module';
import { FolyamatbanElemzesekModule } from '../folyamatban-elemzesek/folyamatban-elemzesek.module';
import { NyitottBefektetesekModule } from '../nyitott-befektetesek/nyitott-befektetesek.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LezartBefektetesekModule } from '../lezart-befektetesek/lezart-befektetesek.module';
import { ElvetettBefektetesekModule } from '../elvetett-befektetesek/elvetett-befektetesek.module';
import { FigyeloListaModule } from '../figyelo-lista/figyelo-lista.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavigationBarModule } from '../../nav-bar/nav-bar.module';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatFabMenuModule } from '@angular-material-extensions/fab-menu';
import {ToastModule} from 'primeng/toast';


@NgModule({
  imports: [CommonModule,
    BefektetesRoutingModule,
    MatTabsModule,
    UjBefektetesModule,
    FolyamatbanElemzesekModule,
    NyitottBefektetesekModule,
    LezartBefektetesekModule,
    ElvetettBefektetesekModule,
    FigyeloListaModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDividerModule,
    NavigationBarModule,
    MatCardModule,
    FlexLayoutModule,
    MatFabMenuModule,
    ToastModule
],
  declarations: [BefektetesComponent],
  exports: [BefektetesComponent],
})
export class BefektetesModule {}

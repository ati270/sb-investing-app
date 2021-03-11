import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatTabsModule } from '@angular/material/tabs';
import { BefMenuModule } from '../../menus/bef-menu/bef-menu.module';
import { LezartBefektetesekComponent } from './lezart-befektetesek.component';
import { LezartBefektetesekRoutingModule } from './lezart-befektetesek-routing,module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [CommonModule,
    LezartBefektetesekRoutingModule,
    MatTabsModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
],
  declarations: [LezartBefektetesekComponent],
  exports: [LezartBefektetesekComponent],
})
export class LezartBefektetesekModule {}

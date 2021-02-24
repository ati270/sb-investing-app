import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatTabsModule } from '@angular/material/tabs';
import { BefMenuModule } from '../../menus/bef-menu/bef-menu.module';
import { LezartBefektetesekComponent } from './lezart-befektetesek.component';
import { LezartBefektetesekRoutingModule } from './lezart-befektetesek-routing,module';

@NgModule({
  imports: [CommonModule, 
    LezartBefektetesekRoutingModule,
    MatTabsModule,
],
  declarations: [LezartBefektetesekComponent],
  exports: [LezartBefektetesekComponent],
})
export class LezartBefektetesekModule {}
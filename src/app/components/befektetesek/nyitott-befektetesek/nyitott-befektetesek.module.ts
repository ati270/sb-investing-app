import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatTabsModule } from '@angular/material/tabs';
import { BefMenuModule } from '../../menus/bef-menu/bef-menu.module';
import { NyitottBefektetesekComponent } from './nyitott-befektetesek.component';
import { NyitottBefektetesekRoutingModule } from './nyitott-befektetesek-routing.module';
import {MatCardModule} from '@angular/material/card'; 
import {MatListModule} from '@angular/material/list'; 

@NgModule({
  imports: [CommonModule, 
    NyitottBefektetesekRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatListModule
],
  declarations: [NyitottBefektetesekComponent],
  exports: [NyitottBefektetesekComponent],
})
export class NyitottBefektetesekModule {}
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatTabsModule } from '@angular/material/tabs';
import { BefMenuModule } from '../../menus/bef-menu/bef-menu.module';
import { ElvetettBefektetesekComponent } from './elvetett-befektetesek.component';
import { ElvetettBefektetesekRoutingModule } from './elvetett-befektetesek-routing.module';

@NgModule({
  imports: [CommonModule, 
    ElvetettBefektetesekRoutingModule,
    MatTabsModule,
],
  declarations: [ElvetettBefektetesekComponent],
  exports: [ElvetettBefektetesekComponent],
})
export class ElvetettBefektetesekModule {}
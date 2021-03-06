import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatTabsModule } from '@angular/material/tabs';
import { BefMenuModule } from '../../menus/bef-menu/bef-menu.module';
import { FolyamatbanElemzesekComponent } from './folyamatban-elemzesek.component';
import { FolyamatbanElemzesekRoutingModule } from './folyamatban-elemzesek-routing.module';

@NgModule({
  imports: [CommonModule,
    FolyamatbanElemzesekRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
],
  declarations: [FolyamatbanElemzesekComponent],
  exports: [FolyamatbanElemzesekComponent],
})
export class FolyamatbanElemzesekModule {}

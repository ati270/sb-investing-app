import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatTabsModule } from '@angular/material/tabs';
import { BefMenuModule } from '../../menus/bef-menu/bef-menu.module';
import { ElvetettBefektetesekComponent } from './elvetett-befektetesek.component';
import { ElvetettBefektetesekRoutingModule } from './elvetett-befektetesek-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule,
    ElvetettBefektetesekRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
],
  declarations: [ElvetettBefektetesekComponent],
  exports: [ElvetettBefektetesekComponent],
})
export class ElvetettBefektetesekModule {}

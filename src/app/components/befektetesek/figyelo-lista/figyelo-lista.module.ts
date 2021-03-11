import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatTabsModule } from '@angular/material/tabs';
import { BefMenuModule } from '../../menus/bef-menu/bef-menu.module';
import { FigyeloListaComponent } from './figyelo-lista.component';
import { FigyeloListaRoutingModule } from './figyelo-lista-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule,
    FigyeloListaRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
],
  declarations: [FigyeloListaComponent],
  exports: [FigyeloListaComponent],
})
export class FigyeloListaModule {}

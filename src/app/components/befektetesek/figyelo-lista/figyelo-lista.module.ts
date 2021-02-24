import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatTabsModule } from '@angular/material/tabs';
import { BefMenuModule } from '../../menus/bef-menu/bef-menu.module';
import { FigyeloListaComponent } from './figyelo-lista.component';
import { FigyeloListaRoutingModule } from './figyelo-lista-routing.module';

@NgModule({
  imports: [CommonModule, 
    FigyeloListaRoutingModule,
    MatTabsModule,
],
  declarations: [FigyeloListaComponent],
  exports: [FigyeloListaComponent],
})
export class FigyeloListaModule {}
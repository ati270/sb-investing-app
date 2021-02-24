import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { UzenofalComponent } from './uzenofal.component';
import { UzenofalRoutingModule } from './uzenofal-routing.module';

@NgModule({
  imports: [CommonModule, 
    UzenofalRoutingModule,
],
  declarations: [UzenofalComponent],
  exports: [UzenofalComponent],
})
export class UzenofalModule {}
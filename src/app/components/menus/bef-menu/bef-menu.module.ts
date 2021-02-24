import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { BefMenuComponent } from './bef-menu.component';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
],
  declarations: [BefMenuComponent],
  exports: [BefMenuComponent],
})
export class BefMenuModule {}
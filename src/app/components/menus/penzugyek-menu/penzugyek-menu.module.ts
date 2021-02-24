import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { PenzugyekMenuComponent } from './penzugyek-menu.component';
import {MatBadgeModule} from '@angular/material/badge';
import { BadgeModule } from 'angular-bootstrap-md';
import { AddUjCelDialogModule } from '../../dialogs/add-uj-cel-dialog/add-uj-cel-dialog.module';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    BadgeModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatListModule,
    AddUjCelDialogModule,
    MatCardModule
],
  declarations: [PenzugyekMenuComponent],
  exports: [PenzugyekMenuComponent],
})
export class PenzugyekMenuModule {}
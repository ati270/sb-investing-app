import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule, DatePipe } from "@angular/common";
import { PenzugyekRoutingModule } from './penzugyek-routing.module';
import { PenzugyekComponent } from './penzugyek.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table'
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { PenzugyekAddNewMonthDialogModule } from '../../dialogs/penzugyek-new-month-add-dialog/penzugyek-new-month-add-dialog.module';
import { PenzugyekNewYearAddDialogComponent } from '../../dialogs/penzugyek-new-year-add-dialog/penzugyek-new-year-add-dialog.component';
import { PenzugyekNewMonthAddDialogComponent } from '../../dialogs/penzugyek-new-month-add-dialog/penzugyek-new-month-add-dialog.component';
import { PenzugyekAddNewYearDialogModule } from '../../dialogs/penzugyek-new-year-add-dialog/penzugyek-new-year-add-dialog.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BevetelKiadasModule } from './bevetel-kiadas/bevetel-kiadas.module';
import { PenzugyekMenuModule } from '../../menus/penzugyek-menu/penzugyek-menu.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule, MatSidenav} from '@angular/material/sidenav';

@NgModule({
  imports: [CommonModule,
    PenzugyekRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ChartsModule,
    WavesModule,
    MatExpansionModule,
    PenzugyekAddNewYearDialogModule,
    PenzugyekAddNewMonthDialogModule,
    BevetelKiadasModule,
    PenzugyekMenuModule
],
  declarations: [PenzugyekComponent],
  exports: [PenzugyekComponent],
  providers: [DatePipe]

})
export class PenzugyekModule {}

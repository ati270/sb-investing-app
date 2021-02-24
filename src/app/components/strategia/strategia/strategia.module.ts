import { StrategiaComponent } from './strategia.component';
import { ConfirmDeleteCalDialogModule } from './../../dialogs/confirm-delete-calendar-dialog/confirm-delete-calendar-dialog.module';
import { AddDateTimePickerDialogModule } from './../../dialogs/add-datetime-dialog/add-datetime-dialog.module';
import { AddBesorolasHataridoDialogModule } from './../../dialogs/add-bes-hat-dialog/add-bes-hat-dialog.module';
import { AddEventToCalendarDialogModule } from './../../dialogs/add-event-to-calendar/add-event-to-calendar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { StrategiaRoutingModule } from './strategia-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PointReplacePipeModule } from '../../custom-pipes/decimal-number-with-space.module';

@NgModule({
  imports: [
    CommonModule,
    StrategiaRoutingModule,
    MatTabsModule,
    MatStepperModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSelectModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ChartsModule,
    WavesModule,
    MatExpansionModule,
    MatStepperModule,
    NgxDropzoneModule,
    AddEventToCalendarDialogModule,
    MatListModule,
    AddBesorolasHataridoDialogModule,
    AddDateTimePickerDialogModule,
    ConfirmDeleteCalDialogModule,
    PointReplacePipeModule
  ],
  declarations: [StrategiaComponent],
  exports: [StrategiaComponent],
})
export class StrategiaModule { }

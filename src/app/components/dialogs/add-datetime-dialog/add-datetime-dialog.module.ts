import { AddDatetimeDialogComponent } from './add-datetime-dialog.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


@NgModule({
  imports: [CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDividerModule,
    MatCardModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
],
  declarations: [AddDatetimeDialogComponent],
  exports: [AddDatetimeDialogComponent],
})
export class AddDateTimePickerDialogModule {

}

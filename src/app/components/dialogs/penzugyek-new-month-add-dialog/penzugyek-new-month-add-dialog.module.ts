import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { PenzugyekNewMonthAddDialogComponent } from './penzugyek-new-month-add-dialog.component';


@NgModule({
  imports: [CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule
],
  declarations: [PenzugyekNewMonthAddDialogComponent],
  exports: [PenzugyekNewMonthAddDialogComponent],
})
export class PenzugyekAddNewMonthDialogModule {

}


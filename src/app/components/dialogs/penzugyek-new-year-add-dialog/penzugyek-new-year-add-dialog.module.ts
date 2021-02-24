import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { PenzugyekNewYearAddDialogComponent } from './penzugyek-new-year-add-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select'
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  imports: [CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule, ReactiveFormsModule,
    MatSelectModule,
    MatAutocompleteModule
],
  declarations: [PenzugyekNewYearAddDialogComponent],
  exports: [PenzugyekNewYearAddDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PenzugyekAddNewYearDialogModule {

}

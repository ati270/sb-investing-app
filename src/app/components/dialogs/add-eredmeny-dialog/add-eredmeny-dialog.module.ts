import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { AddEredmenyDialogComponent } from './add-eredmeny-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  imports: [CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
    
],
  declarations: [AddEredmenyDialogComponent],
  exports: [AddEredmenyDialogComponent],
})
export class EredmenyDialogModule {

}
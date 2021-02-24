import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { VallalatVizsgKriteriumokComponent } from './vallalat-vizsg-kriteriumok.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { EredmenyDialogModule } from 'src/app/components/dialogs/add-eredmeny-dialog/add-eredmeny-dialog.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    EredmenyDialogModule,
    FormsModule,
    ReactiveFormsModule
    
],
  declarations: [VallalatVizsgKriteriumokComponent],
  exports: [VallalatVizsgKriteriumokComponent],
})
export class VallalatVizsgalatKriteriumokModule {

}
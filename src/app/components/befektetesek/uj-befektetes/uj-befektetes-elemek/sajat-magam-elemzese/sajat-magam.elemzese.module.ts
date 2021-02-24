import { MatIconModule } from '@angular/material/icon';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SajatMagamElemzeseComponent } from './sajat-magam-elemzese.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,ReactiveFormsModule,
    MatRadioModule,
    MatIconModule

  ],
  declarations: [SajatMagamElemzeseComponent],
  exports: [SajatMagamElemzeseComponent],
})
export class SajatMagamElemzeseModule {

}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NettoJelenertekSzamitasComponent } from './netto-jelenertek-szamitas.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [CommonModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    ButtonModule,
    RippleModule,
    ToastModule

  ],
  declarations: [NettoJelenertekSzamitasComponent],
  exports: [NettoJelenertekSzamitasComponent],
})
export class NettoJelenertekSzamitasModule {

}

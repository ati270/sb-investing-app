import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { PenzugyiAdatokComponent } from './penzugyi-adatok.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule, MatIcon} from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';



@NgModule({
  imports: [CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    RippleModule,
    ButtonModule,
    ToastModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [PenzugyiAdatokComponent],
  exports: [PenzugyiAdatokComponent],
})
export class PenzugyiAdatokModule {

}

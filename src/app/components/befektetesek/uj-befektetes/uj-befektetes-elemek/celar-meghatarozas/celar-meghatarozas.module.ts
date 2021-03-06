import { PointReplacePipeModule } from './../../../../custom-pipes/decimal-number-with-space.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CelarMeghatarozasComponent } from './celar-meghatarozas.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';


@NgModule({
  imports: [CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatStepperModule,
    RippleModule,
    ButtonModule,
    ToastModule,
    PointReplacePipeModule
  ],
  declarations: [CelarMeghatarozasComponent],
  exports: [CelarMeghatarozasComponent],
})
export class CelarMeghatarozasModule {

}

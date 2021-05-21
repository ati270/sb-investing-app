import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from "@angular/common";
import { BefAdatokRoutingModule } from './bef-adatok-routing.module';
import { BefAdatokComponent } from './bef-adatok.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from "primeng/divider";


@NgModule({
    imports: [CommonModule,
        BefAdatokRoutingModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatStepperModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        DividerModule,
        ReactiveFormsModule,
        MatButtonModule,
        ToastModule,
        MatSelectModule,
    ],
    declarations: [BefAdatokComponent],
    bootstrap: [BefAdatokComponent],
    exports: [BefAdatokComponent],
})
export class BefAdatokModule { }

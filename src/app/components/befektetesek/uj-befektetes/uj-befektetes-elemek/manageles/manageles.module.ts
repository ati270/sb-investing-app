import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from "@angular/common";
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
import { ManagelesComponent } from './manageles.component';
import { ManagelesRoutingModule } from './manageles-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { EredmenyDialogModule } from 'src/app/components/dialogs/add-eredmeny-dialog/add-eredmeny-dialog.module';
import { SaveReszvenyDialogModule } from 'src/app/components/dialogs/save-reszveny-dialog/save-reszveny.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { PointReplacePipeModule } from 'src/app/components/custom-pipes/decimal-number-with-space.module';

@NgModule({
    imports: [CommonModule,
        ManagelesRoutingModule,
        MatTableModule,
        MatIconModule,
        MatCheckboxModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatButtonToggleModule,
        MatStepperModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        MatDividerModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSelectModule,
        EredmenyDialogModule,
        SaveReszvenyDialogModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        PointReplacePipeModule
    ],
    declarations: [ManagelesComponent],
    bootstrap: [ManagelesComponent],
    exports: [ManagelesComponent],
})
export class ManagelesModule { }

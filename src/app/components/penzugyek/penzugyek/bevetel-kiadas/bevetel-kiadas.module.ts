import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table'
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BevetelKiadasComponent } from './bevetel-kiadas.component';
import { BevetelKiadasRoutingModule } from './bevetel-kiadas-routing.module';



@NgModule({
  imports: [CommonModule,
    BevetelKiadasRoutingModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ChartsModule,
    WavesModule,
    MatExpansionModule,
    
],
  declarations: [BevetelKiadasComponent],
  exports: [BevetelKiadasComponent],

})
export class BevetelKiadasModule {}

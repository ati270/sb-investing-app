import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatTabsModule } from '@angular/material/tabs';
import { InvestmentHomeComponent } from './investment-home.component';
import { InvestmentHomeRoutingModule } from './investment-home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [CommonModule,
    InvestmentHomeRoutingModule,
    MatTabsModule,
    HttpClientModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
],
  declarations: [InvestmentHomeComponent],
  exports: [InvestmentHomeComponent],
})
export class InvestmentHomeModule {}

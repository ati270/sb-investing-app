import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { NavBarComponent } from './nav-bar.component';
import { NavigationBarRoutingModule } from './nav-bar-routing.module';
import { MoreInfoDialogModule } from '../dialogs/more-info-dialog/more-info-dialog.module';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [CommonModule,
    NavigationBarRoutingModule,
    MoreInfoDialogModule,
    MatIconModule,
    MatChipsModule,
    MatBadgeModule,
    MatMenuModule
],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
})
export class NavigationBarModule {}

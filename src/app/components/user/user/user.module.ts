import { UserComponent } from './user.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [CommonModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule
],
  declarations: [UserComponent],
  exports: [UserComponent],
})
export class UserModule {}

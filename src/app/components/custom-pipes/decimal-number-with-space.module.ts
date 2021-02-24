import { PointReplacerPipe } from './decimal-number-with-space.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PointReplacerPipe],
  exports: [PointReplacerPipe],
})
export class PointReplacePipeModule { }

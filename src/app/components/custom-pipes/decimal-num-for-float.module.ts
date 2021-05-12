import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointReplacerForFloatPipe } from './decimal-num-for-float.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PointReplacerForFloatPipe],
  exports: [PointReplacerForFloatPipe],
})
export class PointReplaceForFloatPipeModule { }

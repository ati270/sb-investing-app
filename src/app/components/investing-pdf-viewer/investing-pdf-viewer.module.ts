import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from "@angular/common";
import { InvestingPdfViewerComponent } from './investing-pdf-viewer.component';
import { InvestingPDFViewerRoutingModule } from './investing-pdf-viewer-routing.module';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, 
    InvestingPDFViewerRoutingModule,
    PdfViewerModule,
    MatCardModule
],
  declarations: [InvestingPdfViewerComponent],
  exports: [InvestingPdfViewerComponent],
})
export class InvestingPDFViewerModule {}
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InvestingPdfViewerComponent } from './investing-pdf-viewer.component';

const routes: Routes = [
    {path: '', component: InvestingPdfViewerComponent}

];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class InvestingPDFViewerRoutingModule { }
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PenzugyekNewYearAddDialogComponent } from './penzugyek-new-year-add-dialog.component';

const routes: Routes = [
    { path: "", component: PenzugyekNewYearAddDialogComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class PenzugyekNewYearDialogRoutingModule { }
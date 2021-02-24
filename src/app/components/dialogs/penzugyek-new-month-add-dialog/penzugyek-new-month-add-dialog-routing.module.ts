import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PenzugyekAddNewMonthDialogModule } from './penzugyek-new-month-add-dialog.module';
import { PenzugyekNewMonthAddDialogComponent } from './penzugyek-new-month-add-dialog.component';

const routes: Routes = [
    { path: "", component: PenzugyekNewMonthAddDialogComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class PenzugyekNewMonthDialogRoutingModule { }
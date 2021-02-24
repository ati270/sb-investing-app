import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConfirmUjCelDialogComponent } from './confirm-uj-cel-dialog.component';

const routes: Routes = [
    { path: "", component: ConfirmUjCelDialogComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ConfirmUjCelDialogRoutingModule { }









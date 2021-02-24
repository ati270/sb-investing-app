import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddUjCelDialogComponent } from './add-uj-cel-dialog.component';

const routes: Routes = [
    { path: "", component: AddUjCelDialogComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class AddUjCelDialogRoutingModule { }









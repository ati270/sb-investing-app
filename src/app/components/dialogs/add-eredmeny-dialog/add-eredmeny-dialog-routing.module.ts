import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEredmenyDialogComponent } from './add-eredmeny-dialog.component';

const routes: Routes = [
    { path: "", component: AddEredmenyDialogComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class EredmenyDialogRoutingModule { }
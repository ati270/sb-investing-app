import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoreInfoDialogComponent } from './more-info-dialog.component';

const routes: Routes = [
    { path: "", component: MoreInfoDialogComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class MoreInfoDialogRoutingModule { }
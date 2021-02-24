import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SaveReszvenyDialogComponent } from './save-reszveny-dialog.component';

const routes: Routes = [
    { path: "", component: SaveReszvenyDialogComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class SaveReszvenyDialogRoutingModule { }
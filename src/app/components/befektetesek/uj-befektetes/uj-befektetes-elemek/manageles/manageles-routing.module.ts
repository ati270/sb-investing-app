import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManagelesComponent } from './manageles.component';



const routes: Routes = [
    { path: "", component: ManagelesComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ManagelesRoutingModule { }
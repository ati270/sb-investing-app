import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BefAdatokComponent } from './bef-adatok.component';



const routes: Routes = [
    { path: "", component: BefAdatokComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class BefAdatokRoutingModule { }
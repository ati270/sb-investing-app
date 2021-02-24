import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PenzugyiAdatokComponent } from './penzugyi-adatok.component';

const routes: Routes = [
    { path: "", component: PenzugyiAdatokComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class PenzugyiAdatokRoutingModule { }
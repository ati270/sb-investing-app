import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VallalatVizsgKriteriumokComponent } from './vallalat-vizsg-kriteriumok.component';

const routes: Routes = [
    { path: "", component: VallalatVizsgKriteriumokComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class VallalatVizsgalatKriteriumokRoutingModule { }
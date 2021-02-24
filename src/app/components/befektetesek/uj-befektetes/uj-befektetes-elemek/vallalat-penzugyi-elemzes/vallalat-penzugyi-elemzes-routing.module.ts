import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VallalatPenzugyiElemzesComponent } from './vallalat-penzugyi-elemzes.component';

const routes: Routes = [
    { path: "", component: VallalatPenzugyiElemzesComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class VallalatPenzugyiElemzesRoutingModule { }
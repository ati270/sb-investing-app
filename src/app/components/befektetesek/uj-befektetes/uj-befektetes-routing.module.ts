import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UjBefektetesComponent } from './uj-befektetes.component';

const routes: Routes = [
    {path: '', component: UjBefektetesComponent}
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class UjBefektetesRoutingModule { }
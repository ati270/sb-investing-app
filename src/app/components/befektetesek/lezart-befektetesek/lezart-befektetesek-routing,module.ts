import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LezartBefektetesekComponent } from './lezart-befektetesek.component';

const routes: Routes = [
    {path: '', component: LezartBefektetesekComponent}
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class  LezartBefektetesekRoutingModule { }
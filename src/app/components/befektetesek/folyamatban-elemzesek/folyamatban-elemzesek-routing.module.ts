import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FolyamatbanElemzesekComponent } from './folyamatban-elemzesek.component';

const routes: Routes = [
    {path: '', component: FolyamatbanElemzesekComponent}
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class  FolyamatbanElemzesekRoutingModule { }
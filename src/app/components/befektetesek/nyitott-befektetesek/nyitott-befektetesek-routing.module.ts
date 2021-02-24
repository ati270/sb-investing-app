import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NyitottBefektetesekComponent } from './nyitott-befektetesek.component';

const routes: Routes = [
    {path: '', component: NyitottBefektetesekComponent}
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class  NyitottBefektetesekRoutingModule { }
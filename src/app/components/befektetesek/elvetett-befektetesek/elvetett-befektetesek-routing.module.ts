import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ElvetettBefektetesekComponent } from './elvetett-befektetesek.component';

const routes: Routes = [
    {path: '', component: ElvetettBefektetesekComponent}
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class  ElvetettBefektetesekRoutingModule { }
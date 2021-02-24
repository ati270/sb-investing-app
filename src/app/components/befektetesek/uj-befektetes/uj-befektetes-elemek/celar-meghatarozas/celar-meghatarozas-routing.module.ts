import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CelarMeghatarozasComponent } from './celar-meghatarozas.component';

const routes: Routes = [
    { path: "", component: CelarMeghatarozasComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class CelarMeghatarozasRoutingModule { }
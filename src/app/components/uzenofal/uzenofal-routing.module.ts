import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UzenofalComponent } from './uzenofal.component';

const routes: Routes = [
    {path: '', component: UzenofalComponent}

];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class UzenofalRoutingModule { }
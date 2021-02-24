import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FigyeloListaComponent } from './figyelo-lista.component';

const routes: Routes = [
    {path: '', component: FigyeloListaComponent}
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class  FigyeloListaRoutingModule { }
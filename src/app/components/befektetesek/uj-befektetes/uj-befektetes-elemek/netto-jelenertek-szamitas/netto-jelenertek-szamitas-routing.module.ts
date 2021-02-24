import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NettoJelenertekSzamitasComponent } from './netto-jelenertek-szamitas.component';

const routes: Routes = [
    { path: "", component: NettoJelenertekSzamitasComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class NettoJelenertekSzamitasRoutingModule { }
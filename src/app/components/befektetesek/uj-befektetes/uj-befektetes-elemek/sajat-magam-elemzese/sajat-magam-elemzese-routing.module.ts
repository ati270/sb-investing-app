import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SajatMagamElemzeseComponent } from './sajat-magam-elemzese.component';

const routes: Routes = [
    { path: "", component: SajatMagamElemzeseComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class SajatMagamElemzeseRoutingModule { }
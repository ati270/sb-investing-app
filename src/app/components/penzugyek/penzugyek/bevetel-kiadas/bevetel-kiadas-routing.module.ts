import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BevetelKiadasComponent } from './bevetel-kiadas.component';

const routes: Routes = [
    {path: '', component: BevetelKiadasComponent}

];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class BevetelKiadasRoutingModule { }
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BefMenuComponent } from './bef-menu.component';

const routes: Routes = [

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class BefMenuRoutingModule { }
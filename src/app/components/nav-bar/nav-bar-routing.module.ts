import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavBarComponent } from './nav-bar.component';

const routes: Routes = [
    {path: '', component: NavBarComponent}

];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class NavigationBarRoutingModule { }
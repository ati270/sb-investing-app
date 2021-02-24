import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PenzugyekComponent } from './penzugyek.component';

const routes: Routes = [
    {path: '', component: PenzugyekComponent}

];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class PenzugyekRoutingModule { }
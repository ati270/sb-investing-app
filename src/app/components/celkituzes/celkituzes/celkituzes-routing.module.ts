import { CelkituzesComponent } from './celkituzes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', component: CelkituzesComponent}

];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class CelkituzesRoutingModule { }

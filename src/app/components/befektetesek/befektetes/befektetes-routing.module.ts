import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BefektetesComponent } from './befektetes.component';
import { UjBefektetesComponent } from '../uj-befektetes/uj-befektetes.component';
import { BefMenuModule } from '../../menus/bef-menu/bef-menu.module';

const routes: Routes = [
  
  { path: '', component: BefektetesComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class BefektetesRoutingModule { }
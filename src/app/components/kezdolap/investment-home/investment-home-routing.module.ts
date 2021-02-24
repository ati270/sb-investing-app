import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InvestmentHomeComponent } from './investment-home.component';

const routes: Routes = [
    {path: '', component: InvestmentHomeComponent}
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class  InvestmentHomeRoutingModule { }
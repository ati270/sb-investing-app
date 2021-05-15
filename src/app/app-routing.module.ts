import { StrategiaRoutingModule } from './components/strategia/strategia/strategia-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BefektetesComponent } from './components/befektetesek/befektetes/befektetes.component';
import { UjBefektetesComponent } from './components/befektetesek/uj-befektetes/uj-befektetes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BefMenuComponent } from './components/menus/bef-menu/bef-menu.component';
import { InvestmentHomeComponent } from './components/kezdolap/investment-home/investment-home.component';


const routes: Routes = [
  { path: '', redirectTo: 'investment-home', pathMatch: 'full' },
  { path: 'investment-home', component: InvestmentHomeComponent },
  /*{path: '', redirectTo: 'befektetes', pathMatch: 'full'},*/
  {
    path: 'befektetes', component: BefektetesComponent,
    children: [
      { path: '', redirectTo: '/befektetes/uj-befektetes', pathMatch: 'full' },
      {
        path: 'uj-befektetes',
        loadChildren: () => import('./components/befektetesek/uj-befektetes/uj-befektetes.module').then(m => m.UjBefektetesModule)
      },
      {
        path: 'folyamatban-levo-elemzesek',
        loadChildren: () => import('./components/befektetesek/folyamatban-elemzesek/folyamatban-elemzesek.module').then(m => m.FolyamatbanElemzesekModule)
      },
      {
        path: 'nyitott-befektetesek',
        loadChildren: () => import('./components/befektetesek/nyitott-befektetesek/nyitott-befektetesek.module').then(m => m.NyitottBefektetesekModule)
      },
      {
        path: 'lezart-befektetesek',
        loadChildren: () => import('./components/befektetesek/lezart-befektetesek/lezart-befektetesek.module').then(m => m.LezartBefektetesekModule)
      },
      {
        path: 'figyelo-lista',
        loadChildren: () => import('./components/befektetesek/figyelo-lista/figyelo-lista.module').then(m => m.FigyeloListaModule)
      },
      {
        path: 'elvetett-befektetesek',
        loadChildren: () => import('./components/befektetesek/elvetett-befektetesek/elvetett-befektetesek.module').then(m => m.ElvetettBefektetesekModule)
      },
      {
        path: 'penzugyek',
        loadChildren: () => import('./components/penzugyek/penzugyek/penzugyek.module').then(m => m.PenzugyekModule)
      },
      {
        path: 'celkituzes',
        loadChildren: () => import('./components/celkituzes/celkituzes/celkituzes.module').then(m => m.CelkituzesModule)
      },
      {
        path: 'strategia',
        loadChildren: () => import('./components/strategia/strategia/strategia.module').then(m => m.StrategiaModule)
      },

    ]
  },
  {
    path: 'user/profil',
    loadChildren: () => import('./components/user/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'uzenofal',
    loadChildren: () => import('./components/uzenofal/uzenofal.module').then(m => m.UzenofalModule)

  },
  {
    path: 'investing-info',
    loadChildren: () => import('./components/investing-pdf-viewer/investing-pdf-viewer.module').then(m => m.InvestingPDFViewerModule)
  },

  {
    path: '**',
    loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

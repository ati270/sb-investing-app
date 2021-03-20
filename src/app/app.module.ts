import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BefektetesModule } from './components/befektetesek/befektetes/befektetes.module';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { UzenofalModule } from './components/uzenofal/uzenofal.module';
import { PageNotFoundModule } from './components/page-not-found/page-not-found.module';
import { InvestmentHomeModule } from './components/kezdolap/investment-home/investment-home.module';
import { InvestingPDFViewerModule } from './components/investing-pdf-viewer/investing-pdf-viewer.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PenzugyekComponent } from './components/penzugyek/penzugyek/penzugyek.component';
import { SaveReszvenyDialogComponent } from './components/dialogs/save-reszveny-dialog/save-reszveny-dialog.component';
import { PenzugyekMenuComponent } from './components/menus/penzugyek-menu/penzugyek-menu.component';
import { AddUjCelDialogComponent } from './components/dialogs/add-uj-cel-dialog/add-uj-cel-dialog.component';
import { PointReplacerPipe } from './components/custom-pipes/decimal-number-with-space.pipe';
import { ConfirmUjCelDialogComponent } from './components/dialogs/confirm-uj-cel-dialog/confirm-uj-cel-dialog.component';
import { AddBesHatDialogComponent } from './components/dialogs/add-bes-hat-dialog/add-bes-hat-dialog.component';
import { AddDatetimeDialogComponent } from './components/dialogs/add-datetime-dialog/add-datetime-dialog.component';
import { ConfirmDeleteCalendarDialogComponent } from './components/dialogs/confirm-delete-calendar-dialog/confirm-delete-calendar-dialog.component';
import { StrategiaComponent } from './components/strategia/strategia/strategia.component';
import { MatFabMenuModule } from '@angular-material-extensions/fab-menu';
import { StoreModule } from '@ngrx/store';
import { KotesReducer, ReszvenyReducer } from './components/store/reszveny/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PageNotFoundModule,
    BefektetesModule,
    UzenofalModule,
    InvestingPDFViewerModule,
    MatCardModule,
    MatButtonModule,
    InvestmentHomeModule,
    FlexLayoutModule,
    MatFabMenuModule,
      StoreModule.forRoot(
        {kotesek: KotesReducer, reszvenyek: ReszvenyReducer},
        {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
        },
      }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

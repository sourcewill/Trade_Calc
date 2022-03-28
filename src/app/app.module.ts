import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './shared/components/home/home.component';
import { OperationComponent } from './shared/components/operation/operation.component';
import { SimulationComponent } from './shared/components/simulation/simulation.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { PieChartComponent } from './shared/components/pie-chart/pie-chart.component';
import { SkeletonModule } from 'primeng/skeleton';
import { StoreModule } from '@ngrx/store';
import { operationReducer } from './shared/reducers/operation.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CurrencyPipe } from './shared/pipes/currency.pipe';
import { PercentPipe } from './shared/pipes/percent.pipe';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OperationComponent,
    SimulationComponent,
    PieChartComponent,
    CurrencyPipe,
    PercentPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SkeletonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    StoreModule.forRoot({ operation: operationReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

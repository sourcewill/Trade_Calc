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
import { SkeletonModule } from "primeng/skeleton";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OperationComponent,
    SimulationComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SkeletonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

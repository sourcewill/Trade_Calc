import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './shared/components/home/home.component';
import { OperationComponent } from './shared/components/operation/operation.component';
import { SimulationComponent } from './shared/components/simulation/simulation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OperationComponent,
    SimulationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

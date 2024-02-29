import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradingviewRoutingModule } from './tradingview-routing.module';
import { AlertsComponent } from './components/alerts/alerts.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AlertsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TradingviewRoutingModule
  ]
})
export class TradingviewModule { }

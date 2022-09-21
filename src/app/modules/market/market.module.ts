import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { StockComponent } from './stock/stock.component';


@NgModule({
  declarations: [
    StockComponent
  ],
  imports: [
    CommonModule,
    MarketRoutingModule
  ]
})
export class MarketModule { }

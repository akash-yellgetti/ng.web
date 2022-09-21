import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { StockComponent } from './components/stock/stock.component';
import { IndexComponent } from './components/index/index.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { MutualFundComponent } from './components/mutual-fund/mutual-fund.component';
import { MaterialModule } from '../common/material.module';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [
    StockComponent,
    IndexComponent,
    CurrencyComponent,
    MutualFundComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MarketRoutingModule
  ]
})
export class MarketModule { }

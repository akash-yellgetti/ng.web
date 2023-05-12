import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { OptionChainComponent } from './components/option-chain/option-chain.component';
import { EquityComponent } from './components/equity/equity.component';


@NgModule({
  declarations: [
    OptionChainComponent,
    EquityComponent
  ],
  imports: [
    CommonModule,
    MarketRoutingModule
  ]
})
export class MarketModule { }

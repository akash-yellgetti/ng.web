import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './components/currency/currency.component';
import { DetailComponent } from './components/detail/detail.component';
import { IndexComponent } from './components/index/index.component';
import { MutualFundComponent } from './components/mutual-fund/mutual-fund.component';
import { StockComponent } from './components/stock/stock.component';
import { StockResolverService } from './resolver/stock-resolver/stock-resolver.service';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'stock',
    component: StockComponent,
    children: [
      {
        path: ':id/detail',
        component: DetailComponent,
        resolve: { stock: StockResolverService }
      }
    ]
  },
  {
    path: 'currency',
    component: CurrencyComponent
  },
  {
    path: 'mutual-fund',
    component: MutualFundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }

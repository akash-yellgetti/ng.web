import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LedgerComponent } from './ledger/ledger.component';
import { VoucherComponent } from './voucher/voucher.component';


const routes: Routes = [
  {
    path: 'ledger',
    component: LedgerComponent,
    data: {
      module: "accounts",
      subModule: "ledger",
    },
  },
  {
    path: 'voucher',
    component: VoucherComponent,
    data: {
      module: "accounts",
      subModule: "voucher",
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }

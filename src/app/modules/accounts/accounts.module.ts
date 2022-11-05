import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { VoucherComponent } from './components/voucher/voucher.component';
import { LedgerComponent } from './components/ledger/ledger.component';


@NgModule({
  declarations: [
    VoucherComponent,
    LedgerComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }

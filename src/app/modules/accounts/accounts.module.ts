import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { VoucherComponent } from './voucher/voucher.component';
import { LedgerComponent } from './ledger/ledger.component';


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

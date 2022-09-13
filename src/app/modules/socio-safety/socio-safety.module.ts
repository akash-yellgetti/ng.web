import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocioSafetyRoutingModule } from './socio-safety-routing.module';
import { SocietyComponent } from './society/society.component';
import { FlatComponent } from './flat/flat.component';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    SocietyComponent,
    FlatComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    SocioSafetyRoutingModule
  ]
})
export class SocioSafetyModule { }

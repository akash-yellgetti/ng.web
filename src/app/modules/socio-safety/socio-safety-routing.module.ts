import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatComponent } from './components/flat/flat.component';
import { MembersComponent } from './components/members/members.component';
import { SocietyComponent } from './components/society/society.component';

const routes: Routes = [
  {
    path: 'society',
    component: SocietyComponent,
    data: {
      module: "socio-safety",
      subModule: "society",
    },
  },
  {
    path: 'flat',
    component: FlatComponent,
    data: {
      module: "socio-safety",
      subModule: "flat",
    },
  },
  {
    path: 'members',
    component: MembersComponent,
    data: {
      module: "socio-safety",
      subModule: "members",
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocioSafetyRoutingModule { }

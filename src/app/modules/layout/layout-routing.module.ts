import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
          path: 'communication',
          loadChildren: () => import('../communication/communication.module').then(m => m.CommunicationModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

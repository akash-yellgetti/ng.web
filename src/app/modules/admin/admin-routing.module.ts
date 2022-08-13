import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from '../layout/core/shared/card/card.component';
import { DatatableComponent } from '../layout/core/shared/datatable/datatable.component';
import { FormComponent } from '../layout/core/shared/form/form.component';
import { ConstantComponent } from './constant/constant.component';
import { MenuComponent } from './menu/menu.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'list',
        component: DatatableComponent,
      },
      {
        path: 'card',
        component: CardComponent,
      },
    ],
    data: {
      module: "admin",
      subModule: "user",
    }
    
  },
  {
    path: 'user/create',
    component: FormComponent,
    data: {
      module: "admin",
      subModule: "user",
    }
  },
  {
    path: 'user/update',
    component: FormComponent,
    data: {
      module: "admin",
      subModule: "user",
    }
  },
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'constant',
    component: ConstantComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

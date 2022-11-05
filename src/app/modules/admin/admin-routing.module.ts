import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { DatatableComponent } from '../../shared/components/datatable/datatable.component';
import { FormComponent } from '../../shared/components/form/form.component';
import { ConstantComponent } from './components/constant/constant.component';
import { MenuComponent } from './components/menu/menu.component';
import { RoleComponent } from './components/role/role.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    data: {
      module: "admin",
      subModule: "user",
    },
    children: [
      {
        path: 'list',
        component: DatatableComponent
      },
      {
        path: 'card',
        component: CardComponent,
      },
      {
        path: 'create',
        component: FormComponent,
      },
      {
        path: 'update/:id',
        component: FormComponent,
      }
    ]
  },
  {
    path: 'role',
    component: RoleComponent,
    data: {
      module: "admin",
      subModule: "role",
    },
    children: [
      {
        path: 'list',
        component: DatatableComponent
      },
      {
        path: 'card',
        component: CardComponent,
      },
      {
        path: 'create',
        component: FormComponent,
      },
      {
        path: 'update/:id',
        component: FormComponent,
      }
    ]
  },
  
  {
    path: 'menu',
    component: MenuComponent,
    data: {
      module: "admin",
      subModule: "menu",
    },
    children: [
      {
        path: 'list',
        component: DatatableComponent
      },
      {
        path: 'card',
        component: CardComponent,
      },
      {
        path: 'create',
        component: FormComponent,
      },
      {
        path: 'update/:id',
        component: FormComponent,
      }
    ]
  },
  
  {
    path: 'constant',
    component: ConstantComponent,
    data: {
      module: "admin",
      subModule: "constant",
    },
    children: [
      {
        path: 'list',
        component: DatatableComponent
      },
      {
        path: 'card',
        component: CardComponent,
      },
      {
        path: 'create',
        component: FormComponent,
      },
      {
        path: 'update/:id',
        component: FormComponent,
      }
    ]
  },

  {
    path: 'form',
    component: ConstantComponent,
    data: {
      module: "admin",
      subModule: "form",
    },
    children: [
      {
        path: 'list',
        component: DatatableComponent
      },
      {
        path: 'card',
        component: CardComponent,
      },
      {
        path: 'create',
        component: FormComponent,
      },
      {
        path: 'update/:id',
        component: FormComponent,
      }
    ]
  }
 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

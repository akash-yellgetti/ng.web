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
        
        data: {
          module: "admin",
          subModule: "user",
        }
      },
      {
        path: 'card',
        component: CardComponent,
        
        data: {
          module: "admin",
          subModule: "user",
        }
      },
      
    ],
    data: {
      module: "admin",
      subModule: "user",
    },
    
    
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
    component: RoleComponent,
    data: {
      module: "admin",
      subModule: "role",
    },
    children: [
      {
        path: 'list',
        component: DatatableComponent,
        data: {
          module: "admin",
          subModule: "role",
        },
      },
      {
        path: 'card',
        component: CardComponent,
        data: {
          module: "admin",
          subModule: "role",
        },
      },
    ],
  },
  {
    path: 'role/create',
    component: FormComponent,
    data: {
      module: "admin",
      subModule: "role",
    }
  },
  {
    path: 'role/update',
    component: FormComponent,
    data: {
      module: "admin",
      subModule: "role",
    }
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
        component: DatatableComponent,
        data: {
          module: "admin",
          subModule: "menu",
        }
      },
      {
        path: 'card',
        component: CardComponent,
        data: {
          module: "admin",
          subModule: "menu",
        }
      },
    ],
  },
  {
    path: 'menu/create',
    component: FormComponent,
    data: {
      module: "admin",
      subModule: "menu",
    }
  },
  {
    path: 'menu/update',
    component: FormComponent,
    data: {
      module: "admin",
      subModule: "menu",
    }
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
        component: DatatableComponent,
        data: {
          module: "admin",
          subModule: "constant",
        }
      },
      {
        path: 'card',
        component: CardComponent,
        data: {
          module: "admin",
          subModule: "constant",
        }
      },
    ],
  },
  {
    path: 'constant/create',
    component: FormComponent,
    data: {
      module: "admin",
      subModule: "constant",
    }
  },
  {
    path: 'constant/update',
    component: FormComponent,
    data: {
      module: "admin",
      subModule: "constant",
    }
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

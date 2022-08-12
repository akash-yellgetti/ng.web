import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstantComponent } from './constant/constant.component';
import { MenuComponent } from './menu/menu.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
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

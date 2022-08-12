import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule as _LayoutModule } from '@angular/cdk/layout';
import { MainComponent } from './main/main.component';
import { MaterialModule } from 'src/app/material.module';
import { LeftNavigationComponent } from './main/left-navigation/left-navigation.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { CardComponent } from './main/view/card/card.component';
import { DatatableComponent } from './main/view/datatable/datatable.component';
import { PaginatorComponent } from './main/view/paginator/paginator.component';



@NgModule({
  declarations: [MainComponent, LeftNavigationComponent, CardComponent, DatatableComponent, PaginatorComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule
  ],
  exports: [
    MainComponent,
    LeftNavigationComponent,
    CardComponent,
    DatatableComponent
  ]
})
export class LayoutModule { }

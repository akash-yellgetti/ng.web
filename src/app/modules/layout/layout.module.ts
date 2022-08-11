import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule as _LayoutModule } from '@angular/cdk/layout';
import { MainComponent } from './main/main.component';
import { MaterialModule } from 'src/app/material.module';
import { LeftNavigationComponent } from './main/left-navigation/left-navigation.component';



@NgModule({
  declarations: [MainComponent, LeftNavigationComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MainComponent,
    LeftNavigationComponent
  ]
})
export class LayoutModule { }

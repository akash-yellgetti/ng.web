import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LayoutModule } from '../app/modules/layout/layout.module';
import { AppRoutingModule } from './app-routing.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterialModule,
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    NgbDropdownModule,
    NgbCollapseModule,
  ], 
  exports: [
    NgbDropdownModule,
    NgbCollapseModule
    
  ]
})
export class NgbModule { }

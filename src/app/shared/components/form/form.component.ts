import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from '../../../modules/layout/core/services/module.service';

@Component({
  selector: 'layout-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data: any = null;
  // fields: any = [];
  constructor(
    private moduleService: ModuleService
  ) {
    this.data = this.moduleService.getSubModule();
  }

  ngOnInit(): void {
  }



  getFields() {
    return this.data.fields;
  }


}

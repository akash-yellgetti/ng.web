import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from '../../services/module.service';

@Component({
  selector: 'layout-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data: any = null;
  // fields: any = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moduleService: ModuleService
  ) {
     this.moduleService.setCurrentRoute(this.route.snapshot.data.module, this.route.snapshot.data.subModule);
     const data = this.moduleService.getSubModule();
    //  console.log(data.fields)
     this.data = data;
  }

  ngOnInit(): void {
  }



  getFields() {
    return this.data.fields;
  }


}

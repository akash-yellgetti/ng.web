import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from '../../../layout/core/services/module.service';


@Component({
  selector: 'app-constant',
  templateUrl: './constant.component.html',
  styleUrls: ['./constant.component.css']
})
export class ConstantComponent implements OnInit {
  public data: any = null
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moduleService: ModuleService
  ) {
    this.moduleService.set(this.route.snapshot.data);
    this.router.navigate(['card'], {relativeTo: this.route});
  }

  ngOnInit(): void {
    this.data = this.moduleService.getSubModule();
  }
}

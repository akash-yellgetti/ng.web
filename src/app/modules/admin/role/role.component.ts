import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from '../../layout/core/services/module.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
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

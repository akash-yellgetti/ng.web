import { Component, OnInit } from '@angular/core';
import { MainLayout } from '../../layout/main/main-layout';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends MainLayout implements OnInit {
  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}

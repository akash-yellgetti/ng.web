import { Component, OnInit } from '@angular/core';
import { forms } from 'src/app/shared/json/forms.json';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public form: any = forms.profileForm;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { stepperForm } from './stepper.forms.json';
import { StepperOrientation } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  // orientation = 'horizontal';
  public orientation: StepperOrientation = 'vertical';
  isLinear = false;
  public form: any = stepperForm;

  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}

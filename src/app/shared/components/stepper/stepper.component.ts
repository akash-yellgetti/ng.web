import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { stepperForm } from './stepper.forms.json';
import { MatStepper, StepperOrientation } from '@angular/material/stepper';
import { FieldService } from '../../services/field/field.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;
  public orientation: StepperOrientation = 'horizontal';
  isLinear = true;
  public form: any = stepperForm;

  constructor(private fieldService: FieldService) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  goToNextStep(stepper: MatStepper, step: any) {
    const errors = this.fieldService.validateForm(step.fields);
    console.log(errors)
    if (Object.keys(errors).length > 0 ){
      step.completed = false;
      this.fieldService.setToastr(errors)
      return;
    }

    step.completed = true;

    // const json = this.fieldService.json(this.form);
    stepper.next();
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper, StepperOrientation } from '@angular/material/stepper';
import { stepperForm } from '../stepper/stepper.forms.json';
import { LocalStorageService } from 'ngx-webstorage';
import * as _ from 'lodash';
import { ProfileService } from 'src/app/modules/user/services/profile/profile.service';
import { Router } from '@angular/router';

interface Step {
  title: string;
  completed: false;
  fields: { name: string; label: string; type: string; options?: { label: string, value: any }[], validators?: string[] }[];
}

@Component({
  selector: 'app-dynamic-stepper',
  templateUrl: './dynamic-stepper.component.html',
  styleUrls: ['./dynamic-stepper.component.scss'],
})
export class DynamicStepperComponent implements OnInit {
  @ViewChild('stepper') private stepper!: MatStepper;
  public orientation: StepperOrientation = 'vertical';
  isLinear = true;
  steps: any[] = [];
  formGroups: FormGroup[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storageService: LocalStorageService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    // this.http.get<Step[]>('assets/stepper-config.json').subscribe(data => {
    this.steps = stepperForm.steps;
    this.initializeForms();
    // });
  }

  initializeForms(): void {
    const formData = this.storageService.retrieve('formData');
    this.steps.forEach((step, i) => {
      this.formGroups.push(this.fb.group({}));
      const fields = step.fields;
      for (const j in fields) {
        if (fields[j]) {
          const field = fields[j];
          _.set(field, 'value', _.get(formData, `${i}.${j}`));
        }
      }
    });
  }

  nextStep(): void {
    const formData = this.formGroups.map((group) => group.value);
    this.storageService.store('formData', formData);
    if (this.formGroups[this.stepper.selectedIndex].valid) {
      this.stepper.next();
    } else {
      this.formGroups[this.stepper.selectedIndex].markAllAsTouched();
    }
  }

  prevStep(): void {
    this.stepper.previous();
  }

  isLastStep(): boolean {
    return this.stepper?.selectedIndex === this.steps.length - 1;
  }

  finish(): void {
    const formData = this.formGroups.map((group) => group.value);
    this.storageService.store('formData', formData);
    console.log('formData', formData);
    this.profileService.updateProfile({}).subscribe(() => {
      this.storageService.store('isEntryCompleted', 'true');
      this.router.navigate(['main/dashboard']);
    });
  }
}

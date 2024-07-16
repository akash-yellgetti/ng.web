import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper, StepperOrientation } from '@angular/material/stepper';
import { dynamicStepperJson } from './dynamic-stepper.json';
import { stepperForm } from '../stepper/stepper.forms.json';
import { LocalStorageService } from 'ngx-webstorage';

interface Step {
  title: string;
  completed: false;
  fields: { name: string; label: string; type: string; options?: { label: string, value: any }[], validators?: string[] }[];
}

@Component({
  selector: 'app-dynamic-stepper',
  templateUrl: './dynamic-stepper.component.html',
  styleUrls: ['./dynamic-stepper.component.scss']
})
export class DynamicStepperComponent implements OnInit {
  @ViewChild('stepper') private stepper!: MatStepper;
  public orientation: StepperOrientation = 'vertical';
  isLinear = true;
  steps: any[] = [];
  formGroups: FormGroup[] = [];

  constructor(private http: HttpClient, private fb: FormBuilder, private storageService: LocalStorageService) {}

  ngOnInit(): void {
    // this.http.get<Step[]>('assets/stepper-config.json').subscribe(data => {
      this.steps = stepperForm.steps;
      this.initializeForms();
    // });
  }

  initializeForms(): void {
    this.steps.forEach(() => {
      this.formGroups.push(this.fb.group({}));
    });
  }

  nextStep(): void {
    const formData = this.formGroups.map(group => group.value);
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
    const formData = this.formGroups.map(group => group.value);
    this.storageService.store('formData', formData);
    console.log('formData', formData)
    // this.dataService.saveFormData(formData).subscribe(response => {
    //   console.log('Data saved successfully', response);
    // });
  }
}

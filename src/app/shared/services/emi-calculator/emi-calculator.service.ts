import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class EmiCalculatorService {
  private amount: Number = 0;
  private rateOfInterest: any = 0;
  private noOfMonths: any = 0;

  constructor() { 

  }

  setAmount = (amount: Number) => {
    this.amount = amount;
  }

  getAmount = (): any => {
    return this.amount;
  }

  setRateOfInterest = (rateOfInterest: any) => {
    this.rateOfInterest = rateOfInterest/100;
  }

  getRateOfInterest = (): any => {
    return this.rateOfInterest;
  }

  getMonthlyRateOfInterest = (): any => {
    return +(this.getRateOfInterest()/12).toFixed(5);
  }

  setNoOfMonths = (noOfMonths: Number) => {
    this.noOfMonths = noOfMonths;
  }

  getNoOfMonths = (): any => {
    return this.noOfMonths;
  }

  getEmiAmount = (): any => {
    const add = 1+this.getMonthlyRateOfInterest();
    const formulaeOfEmi = +(Math.pow(add, this.getNoOfMonths())).toFixed(5);
    return Math.round(this.getAmount() * this.getMonthlyRateOfInterest() * (formulaeOfEmi)/(formulaeOfEmi-1));
  }

  getTotalInterest = (iterationOfEmis: any): any => {
    return _.chain(iterationOfEmis).mapValues('interestAmount').values().sum().value();
  }

  calculate = (amount: Number, rateOfInterest: Number, tenure: Number) => {
    this.setAmount(amount); this.setRateOfInterest(rateOfInterest); this.setNoOfMonths(tenure);
    return { ...this.process(), principalAmount: amount };
  }

  process = () => {
    let remainingAmount = this.getAmount();
    const monthlyRateOfInterest = this.getMonthlyRateOfInterest();
    const emi = this.getEmiAmount();
    const iterationOfEmis = [];

    for (let i = 1; i <= this.getNoOfMonths(); i++) {
      const month = i;
      const interestAmount = Math.round(monthlyRateOfInterest * remainingAmount);
      const principalAmount = Math.round(emi - interestAmount);
      const totalAmount = interestAmount + principalAmount;
      remainingAmount = remainingAmount - principalAmount;
      remainingAmount = remainingAmount < 0 ? 0 : remainingAmount;
      iterationOfEmis.push({ month, interestAmount, principalAmount, totalAmount, remainingAmount });
    }

    return { emi, iterationOfEmis, totalInterestAmount: this.getTotalInterest(iterationOfEmis) };
  }
}

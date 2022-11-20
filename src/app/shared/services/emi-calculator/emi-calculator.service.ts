import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmiCalculatorService {
  private amount: Number = 0;
  private rateOfInterest: Number = 0;
  private noOfMonths: Number = 0;

  constructor() { 

  }

  setAmount = (amount: Number) => {
    this.amount = amount;
  }

  getAmount = () : Number => {
    return this.amount;
  }

  setRateOfInterest = (rateOfInterest: Number) => {
    this.rateOfInterest = rateOfInterest;
  }

  getRateOfInterest = (): Number => {
    return this.rateOfInterest;
  }

  getMonthlyRateOfInterest = () => {
    return parseFloat(this.getRateOfInterest())/12;
  }

  setNoOfMonths = (noOfMonths: Number) => {
    return this.noOfMonths;
  }

  getNoOfMonths = () => {
    return this.noOfMonths;
  }

  getEmiAmount = () => {
    const formulaeOfEmi = Math.pow(1+this.getMonthlyRateOfInterest(), this.getNoOfMonths());
    return Math.round(this.getAmount() * this.getMonthlyRateOfInterest() * (formulaeOfEmi)/(formulaeOfEmi-1));
  }

  calculate = (amount: Number, rateOfInterest: Number, tenure: Number) => {
    this.setAmount(amount); this.setRateOfInterest(rateOfInterest); this.setNoOfMonths(tenure);
    const emi = this.getEmiAmount();
    console.log(emi);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  /*
  Get FV = Future Value (Goal Amount)
  ---------------------------------------------------
  principal = Monthly SIP amount
  rate = Rate of return per period (monthly in this case)
  time = Number of periods (months) 
   */
  futureValue = (principal: number, rate: number, time: number) => {
    // Convert rate to decimal and calculate monthly rate
    const decimalRate = rate / 100;
    const monthlyRate = decimalRate / 12;
  
    // Calculate future value using the formula
    const futureValue = principal * Math.pow(1 + monthlyRate, time);
  
    return futureValue.toFixed(2); // Round the result to 2 decimal places
  }

   /*
  Get principalValue 
  ---------------------------------------------------
  futureValue = Future Value (Goal Amount)
  rate = Rate of return per period (monthly in this case)
  time = Number of periods (months) 
   */
  principalValue = (futureValue: number, rate: number, time: number) => {
    // Convert rate to decimal and calculate monthly rate
    const decimalRate = rate / 100;
    const monthlyRate = decimalRate / 12;
  
    // Calculate future value using the formula
    const principalValue = futureValue * Math.pow(1 + monthlyRate, time);
  
    return principalValue.toFixed(2); // Round the result to 2 decimal places
  }

  SIPAmount = (goalAmount: number, rate: number, time: number) => {
    // Convert rate to decimal and calculate monthly rate
    const decimalRate = rate / 100;
    const monthlyRate = decimalRate / 12;
  
    // Convert time to number of months
    const numberOfMonths = time * 12;
  
    // Calculate SIP amount using the formula
    const sipAmount = goalAmount * (monthlyRate / (Math.pow(1 + monthlyRate, numberOfMonths) - 1));
  
    return sipAmount.toFixed(2); // Round the result to 2 decimal places
  }

  getSIPAmountGrid = (sipAmount: number, rate: number,time: any) => {

    const decimalRate = rate / 100;
    const monthlyRate = decimalRate / 12;

    const numberOfMonths = time * 12;
    
    const data = [];
    let initialAmount = 0;
    let monthlyAmount = 0;
    let monthlySum = 0;
    let monthlyInterest = 0;
    let totalAmount = 0;
    for(let i = 0; i < numberOfMonths; i++) {

      initialAmount = totalAmount;
      monthlyAmount = sipAmount;
      monthlySum = this.round2Decimal(initialAmount + monthlyAmount);
      monthlyInterest = this.round2Decimal(monthlySum * monthlyRate);
      totalAmount = this.round2Decimal(monthlySum + monthlyInterest);

      data.push({
        initialAmount,
        monthlyAmount,
        monthlySum,
        monthlyInterest,
        totalAmount,
      })
    }

    return data;
  }

  round2Decimal = (value: any) => {
    return parseFloat(value.toFixed(2));
  }
}

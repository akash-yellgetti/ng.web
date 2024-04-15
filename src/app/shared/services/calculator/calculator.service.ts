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

  sipTable = (sipAmount: number, rate: number,time: any) => {

    const decimalRate = rate / 100;
    const monthlyRate = decimalRate / 12;

    const numberOfMonths = time * 12;
    
    const data = [];
    let initialAmount = 0;
    let monthlyAmount = 0;
    let monthlySum = 0;
    let monthlyInterest = 0;
    let totalAmount = 0;
    let totalInvestmentAmount = 0;
    for(let i = 0; i < numberOfMonths; i++) {

      initialAmount = totalAmount;
      monthlyAmount = this.round2Decimal(sipAmount);
      monthlySum = this.round2Decimal(initialAmount + monthlyAmount);
      monthlyInterest = this.round2Decimal(monthlySum * monthlyRate);
      totalAmount = this.round2Decimal(monthlySum + monthlyInterest);
      totalInvestmentAmount += this.round2Decimal(monthlyAmount);

      data.push({
        initialAmount,
        monthlyAmount,
        monthlySum,
        monthlyInterest,
        totalAmount,
        totalInvestmentAmount
      })
    }

    return data;
  }

  stepUpSipTable = (sipAmount: number, rate: number, growthRate: number, time: any) => {

    const decimalRate = rate / 100;
    const growthdecimalRate = growthRate / 100;
    const monthlyRate = decimalRate / 12;

    const numberOfMonths = time * 12;
    
    const data = [];
    let initialAmount = 0;
    let monthlyAmount = 0;
    let monthlySum = 0;
    let monthlyInterest = 0;
    let totalAmount = 0;
    let totalInvestmentAmount = 0;
    for(let i = 1; i < numberOfMonths; i++) {
      sipAmount = i%12 === 0 ? sipAmount + (sipAmount * growthdecimalRate) : sipAmount;
      initialAmount = totalAmount;
      monthlyAmount = this.round2Decimal(sipAmount);
      monthlySum = this.round2Decimal(initialAmount + monthlyAmount);
      monthlyInterest = this.round2Decimal(monthlySum * monthlyRate);
      totalAmount = this.round2Decimal(monthlySum + monthlyInterest);
      totalInvestmentAmount += this.round2Decimal(monthlyAmount);

      data.push({
        month: i,
        initialAmount,
        monthlyAmount,
        monthlySum,
        monthlyInterest,
        totalAmount,
        totalInvestmentAmount
      })
    }

    return data;
  }

  loanAmount = (emiAmount: number, rate: number,time: any) => {

    // Convert time to number of months
    const numberOfMonths = time * 12;

    // Convert annual interest rate to monthly and decimal
    const monthlyInterestRate = (rate / 100) / 12;

    // Calculate the loan amount formula
    const maxLoanAmount = emiAmount * ((1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths)) / monthlyInterestRate);

    return this.round2Decimal(maxLoanAmount);
  }

  emiGrid = (principal: number, emi: any,  rate: number, time: number, extraAmount = 0) => {
    const emiTable = [];
    let remainingPrincipal = principal;
    emi = parseFloat(emi) || parseFloat(this.emi(remainingPrincipal, rate, time));
    let totalInterest = 0;
    while(remainingPrincipal > 0) {
      const principal = this.round2Decimal(remainingPrincipal);
      const interest = this.round2Decimal((remainingPrincipal * rate) / (12 * 100));
      const principalPayment = this.round2Decimal(emi - interest);
      totalInterest += this.round2Decimal(interest);
      remainingPrincipal -= this.round2Decimal(principalPayment);
      remainingPrincipal -= extraAmount;

      emiTable.push({
        principal,
        emi,
        principalPayment,
        interest,
        extraAmount,
        remainingPrincipal,
        totalInterest
      })
    }

    return emiTable;
  }


  emi = (principal: number, rate: number, time: number) => {
    // Convert rate to decimal and calculate monthly rate
    const decimalRate = rate / 100;
    const monthlyRate = decimalRate / 12;
  
    // Convert time to number of months
    const numberOfMonths = time * 12;
  
    // Calculate EMI using the formula
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
      (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
  
    return emi.toFixed(2); // Round the result to 2 decimal places
  }

  
  emiTable = (principal: number, rate: number, time: number, emi: number = 0, partPaymentEmiCount = 0, increaseEmi = 0) => {
    const emiTable = [];
    let remainingPrincipal = principal;
    emi = emi = 0 ? parseFloat(this.emi(remainingPrincipal, rate, time)) : emi;
    let i = 1;
    let totalInterest = 0;
    while(remainingPrincipal > 0) {
      emi = i % 13 === 0 && i !== 0 ? emi + this.round2Decimal((emi * increaseEmi) / 100) : emi;
      const principal = this.round2Decimal(remainingPrincipal);
      const interest = this.round2Decimal((remainingPrincipal * rate) / (12 * 100));
      totalInterest = this.round2Decimal(totalInterest + interest);
      const principalPayment = this.round2Decimal(emi - interest);
      
      remainingPrincipal -= this.round2Decimal(principalPayment);
      let partPaymentAmount = i % 12 === 0 ? (emi * partPaymentEmiCount) : 0; 
      remainingPrincipal -= partPaymentAmount;
      remainingPrincipal = this.round2Decimal(remainingPrincipal);
      emiTable.push({
        month: i,
        principal,
        emi,
        principalPayment,
        interest,
        totalInterest,
        partPaymentAmount,
        remainingPrincipal
      })
      i++;
    }

    return emiTable;
  }

  round2Decimal = (value: any) => {
    return parseFloat(value.toFixed(2));
  }

  percentage = (value: number, total: number) => {
  }

  percentageValue = (total: number, percentage: number) => {
    return (total * percentage) / 100;
  }
}

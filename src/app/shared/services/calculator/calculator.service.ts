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
  tenure = Number of periods (months) 
   */
  futureValue = (principal: number, rate: number, tenure: number) => {
    // Convert rate to decimal and calculate monthly rate
    const decimalRate = rate / 100;
    const monthlyRate = decimalRate / 12;
  
    // Calculate future value using the formula
    const futureValue = principal * Math.pow(1 + monthlyRate, tenure);
  
    return futureValue.toFixed(2); // Round the result to 2 decimal places
  }

   /*
  Get principalValue 
  ---------------------------------------------------
  futureValue = Future Value (Goal Amount)
  rate = Rate of return per period (monthly in this case)
  tenure = Number of periods (months) 
   */
  principalValue = (futureValue: number, rate: number, tenure: number) => {
    // Convert rate to decimal and calculate monthly rate
    const decimalRate = rate / 100;
    const monthlyRate = decimalRate / 12;
  
    // Calculate future value using the formula
    const principalValue = futureValue * Math.pow(1 + monthlyRate, tenure);
  
    return principalValue.toFixed(2); // Round the result to 2 decimal places
  }

  SIPAmount = (goalAmount: number, rate: number, tenure: number) => {
    // Convert rate to decimal and calculate monthly rate
    const decimalRate = rate / 100;
    const monthlyRate = decimalRate / 12;
  
    // Convert tenure to number of months
    const numberOfMonths = tenure * 12;
  
    // Calculate SIP amount using the formula
    const sipAmount = goalAmount * (monthlyRate / (Math.pow(1 + monthlyRate, numberOfMonths) - 1));
  
    return sipAmount.toFixed(2); // Round the result to 2 decimal places
  }

  sipTable = (sipAmount: number, rate: number,tenure: any) => {

    const decimalRate = rate / 100;
    const monthlyRate = decimalRate / 12;

    const numberOfMonths = tenure * 12;
    
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

  investmentTable = (sipAmount: number, rate: number, tenure: any, growthRate: number = 0, additionAmount = 0) => {

    const decimalRate = rate / 100;
    const growthdecimalRate = growthRate / 100;
    const monthlyRate = decimalRate / 12;

    const numberOfMonths = tenure * 12;
    
    const data = [];
    let initialAmount = 0;
    let monthlyAmount = 0;
    let totalMonthlyAmount = 0;
    let monthlySum = 0;
    let monthlyInterest = 0;
    let totalMonthlyInterest = 0;
    let totalAmount = 0;
    let extraAmount = 0;
    let totalExtraAmount = 0;
    for(let i = 1; i < numberOfMonths; i++) {
      sipAmount = i%12 === 0 ? sipAmount + (sipAmount * growthdecimalRate) : sipAmount;
      initialAmount = totalAmount;
      monthlyAmount = this.round2Decimal(sipAmount);
      totalMonthlyAmount += this.round2Decimal(monthlyAmount);
      totalMonthlyAmount = this.round2Decimal(totalMonthlyAmount);
      monthlySum = this.round2Decimal(initialAmount + monthlyAmount);
      monthlyInterest = this.round2Decimal(monthlySum * monthlyRate);
      totalMonthlyInterest += this.round2Decimal(monthlyInterest);
      totalMonthlyInterest = this.round2Decimal(totalMonthlyInterest);
      extraAmount = i%12 === 0 ? additionAmount : 0;
      totalExtraAmount += this.round2Decimal(extraAmount);
      totalAmount = this.round2Decimal(monthlySum +  extraAmount + monthlyInterest);
      

      data.push({
        month: i,
        initialAmount,
        monthlyAmount,
        totalMonthlyAmount,
        monthlySum,
        monthlyInterest,
        totalMonthlyInterest,
        extraAmount,
        totalExtraAmount,
        totalAmount
      })
    }

    return data;
  }

  loanAmount = (emiAmount: number, rate: number,tenure: any) => {

    // Convert tenure to number of months
    const numberOfMonths = tenure * 12;

    // Convert annual interest rate to monthly and decimal
    const monthlyInterestRate = (rate / 100) / 12;

    // Calculate the loan amount formula
    const maxLoanAmount = emiAmount * ((1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths)) / monthlyInterestRate);

    return this.round2Decimal(maxLoanAmount);
  }

  emiGrid = (principal: number, emi: any,  rate: number, tenure: number, extraAmount = 0) => {
    const emiTable = [];
    let balance = principal;
    emi = parseFloat(emi) || parseFloat(this.emi(balance, rate, tenure));
    let totalInterest = 0;
    while(balance > 0) {
      const principal = this.round2Decimal(balance);
      const interest = this.round2Decimal((balance * rate) / (12 * 100));
      const principalPayment = this.round2Decimal(emi - interest);
      totalInterest += this.round2Decimal(interest);
      balance -= this.round2Decimal(principalPayment);
      balance -= extraAmount;

      emiTable.push({
        principal,
        emi,
        principalPayment,
        interest,
        extraAmount,
        balance,
        totalInterest
      })
    }

    return emiTable;
  }


  emi = (principal: number, rate: number, tenure: number) => {
    // Convert rate to decimal and calculate monthly rate
    const decimalRate = rate / 100;
    const monthlyRate = decimalRate / 12;
  
    // Convert tenure to number of months
    const numberOfMonths = tenure * 12;
  
    // Calculate EMI using the formula
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
      (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
  
    return emi.toFixed(2); // Round the result to 2 decimal places
  }

  
  emiTable = (principal: number, rate: number, tenure: number, emi: number = 0, partPaymentEmiCount = 0, increaseEmi = 0) => {
    const emiTable = [];
    let balance = principal;
    emi = emi = 0 ? parseFloat(this.emi(balance, rate, tenure)) : emi;
    let i = 1;
    let totalPrincipal = 0;
    let totalInterest = 0;
    let totalPartPayment = 0;
    while(balance > 0) {
      emi = i % 13 === 0 && i !== 0 ? emi + this.round2Decimal((emi * increaseEmi) / 100) : emi;
      const loanAmount = this.round2Decimal(balance);
      const interest = this.round2Decimal((balance * rate) / (12 * 100));
      totalInterest = this.round2Decimal(totalInterest + interest);
      const principal = this.round2Decimal(emi - interest);
      totalPrincipal = this.round2Decimal(totalPrincipal + principal);
      
      balance -= this.round2Decimal(principal);
      let partPayment = i % 12 === 0 ? (emi * partPaymentEmiCount) : 0; 
      totalPartPayment = partPayment > 0 ? totalPartPayment + partPayment : totalPartPayment; 
      balance -= partPayment;
      balance = this.round2Decimal(balance);
      emiTable.push({
        month: i,
        loanAmount,
        emi,
        principal,
        interest,
        totalPrincipal,
        totalInterest,
        partPayment,
        totalPartPayment,
        balance
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

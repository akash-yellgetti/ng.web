import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  corpusAmount = (monthlySavings: number, rate: number) => {
    // Convert rate to decimal and calculate monthly rate
    const decimalRate = rate / 100;

    // Calculate corpus amount using the formula
    const corpusAmount = monthlySavings * 12 / decimalRate;

    return  Number(corpusAmount.toFixed(2)); // Round the result to 2 decimal places
  }
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

    // Calculate future value using the formula
    const futureValue = principal * Math.pow(1 + decimalRate, tenure);
  
    return  Number(futureValue.toFixed(2)); // Round the result to 2 decimal places
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
    
    // Calculate future value using the formula
    const principalValue = futureValue / Math.pow(1 + decimalRate, tenure);
  
    return  Number(principalValue.toFixed(2)); // Round the result to 2 decimal places
  }

  SIPAmount = (goalAmount: number, rate: number, tenure: number) => {
    // Convert rate to decimal and calculate monthly rate
    const decimalRate = rate / 100;
    const monthlyRate = decimalRate / 12;
  
    // Convert tenure to number of months
    const numberOfMonths = tenure * 12;
  
    // Calculate SIP amount using the formula
    const sipAmount = goalAmount * (monthlyRate / (Math.pow(1 + monthlyRate, numberOfMonths) - 1));
  
    return Number(sipAmount.toFixed(2)); // Round the result to 2 decimal places
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
    for(let i = 1; i <= numberOfMonths; i++) {
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

  
  emiTable = (principal: number, rate: number, tenure: number, emi: number = 0, emiGrowthRate: number = 0, additionalAmount: number = 0) => {
    const emiTable = [];
    let balance = principal;
    emi = emi = 0 ? parseFloat(this.emi(balance, rate, tenure)) : emi;
    let i = 1;
    let totalPrincipal = 0;
    let totalInterest = 0;
    let totalPartPayment = 0;
    let totalLoanAmount = 0;
    while(balance > 0 && i <= tenure * 12) {
      emi = i % 13 === 0 && i !== 0 ? emi + this.round2Decimal((emi * emiGrowthRate) / 100) : emi;
      const loanAmount = this.round2Decimal(balance);
      const interest = this.round2Decimal((balance * rate) / (12 * 100));
      totalInterest = this.round2Decimal(totalInterest + interest);
      const principal = this.round2Decimal(emi - interest);
      totalPrincipal = this.round2Decimal(totalPrincipal + principal);
      
      balance -= this.round2Decimal(principal);
      let partPayment = i % 12 === 0 ? additionalAmount : 0; 
      totalPartPayment = partPayment > 0 ? totalPartPayment + partPayment : totalPartPayment; 
      totalLoanAmount += partPayment > 0 ? emi + partPayment : emi;
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
        balance,
        totalLoanAmount
      })
      i++;
    }

    return emiTable;
  }

  round2Decimal = (value: any) => {
    return Number(value.toFixed(2));
  }

  percentage = (value: number, total: number) => {
  }

  percentageValue = (total: number, percentage: number) => {
    return (total * percentage) / 100;
  }

  calculateSIPAmount = (goalAmount: number, annualReturn: number, investmentPeriodYears: number, yearlyIncrementPercentage: number) => {
    // Validate inputs
    if (goalAmount <= 0 || investmentPeriodYears <= 0 || annualReturn <= 0 || yearlyIncrementPercentage < 0) {
      console.error("Invalid input values. All values must be positive.");
      return -1;
    }

    // Convert annual return to monthly rate
    // Convert rate to decimal and calculate monthly rate
    const decimalRate = annualReturn / 100;
    const monthlyReturn = decimalRate / 12;

    // Calculate SIP amount with yearly increment using the formula:
    // SIP = (FV * r) / [(1 + r)^n - 1] * (1 + g)
    // Where:
    // FV = Future value (goal amount)
    // r = Monthly return rate
    // n = Total number of months (investment period in years * 12)
    // g = Yearly increment percentage (converted to monthly increment rate)
    let futureValue = goalAmount;
    const months = investmentPeriodYears * 12;
    const yearlyIncrementRate = yearlyIncrementPercentage / 100; // Convert percentage to decimal

    let SIPAmount = 0;
    let totalInvested = 0;

    for (let i = 1; i <= investmentPeriodYears; i++) {
        // Calculate SIP amount for the current year
        const monthlyIncrementRate = Math.pow(1 + yearlyIncrementRate, 1 / 12) - 1;
        const currentYearSIP = (futureValue * monthlyReturn) / ((Math.pow(1 + monthlyReturn, months) - 1) * (1 + monthlyIncrementRate));

        // Accumulate total invested amount
        totalInvested += currentYearSIP * 12;

        // Update future value for the next year
        futureValue -= currentYearSIP * 12;

        // Increment SIP amount for next year
        SIPAmount += currentYearSIP;

        // Update future value for the next year
        futureValue *= 1 + yearlyIncrementRate;
    }

    return { SIPAmount, totalInvested };
  }

  calculateFIRENumber = (currentAge: number, retirementAge: number, lifeExpectancy: number, currentMonthlyIncome: number, incomeGrowthYearly: number, currentExpense: number, expenseGrowthYearly: number) => {
    // Validate inputs
    if (currentAge >= retirementAge || retirementAge >= lifeExpectancy || currentMonthlyIncome <= 0 || incomeGrowthYearly <= 0 || currentExpense <= 0 || expenseGrowthYearly <= 0) {
        console.error("Invalid input values. Please ensure age and financial values are valid.");
        return -1;
    }

    let yearsToRetirement = retirementAge - currentAge;
    let savingsNeeded = 0;
    let monthlySavings = 0;

    // Project income and expenses until retirement
    for (let i = 0; i < yearsToRetirement; i++) {
        // Calculate income and expense for the current year
        const year = currentAge + i;
        const annualIncome = currentMonthlyIncome * 12 * Math.pow(1 + incomeGrowthYearly, i);
        const annualExpense = currentExpense * 12 * Math.pow(1 + expenseGrowthYearly, i);

        // Calculate savings (annual surplus)
        const annualSavings = annualIncome - annualExpense;

        // Accumulate savings needed for retirement
        savingsNeeded += annualSavings;

        // Accumulate monthly savings (for future investment)
        monthlySavings += annualSavings / 12;
    }

    // Calculate FIRE number (total investments needed at retirement)
    const FIRENumber = monthlySavings * 12 * yearsToRetirement;

    return FIRENumber;
  }

}
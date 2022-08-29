import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-finance',
  templateUrl: './personal-finance.component.html',
  styleUrls: ['./personal-finance.component.css']
})
export class PersonalFinanceComponent implements OnInit {
  public tabs = [
    
    {
      key: "needs",
      value: "Needs",
      children: [
        {
          key: "bills",
          value: "Bills",
        },
        {
          key: "loan",
          value: "Loans",
        },
        
        
      ]
    },
    {
      key: "wants",
      value: "Wants",
      children: [
        {
          key: "vacation",
          value: "Vacation",
        }
      ]
    },
    {
      key: "investment",
      value: "Investment",
      children: [
        {
          key: "fd",
          value: "Fixed Deposit",
        },
        {
          key: "rd",
          value: "Recurring Deposit",
        },
        {
          key: "epf",
          value: "Employee provident fund",
        },
        {
          key: "ppf",
          value: "Public provident fund",
        },
        {
          key: "nps",
          value: "National Pension scheme",
        },
        {
          key: "mf",
          value: "Mutual Funds",
        },
        {
          key: "equity",
          value: "Equity",
        },
        {
          key: "crypto",
          value: "Crypto",
        },
        {
          key: "gold",
          value: "Gold",
        },
        {
          key: "real-estate",
          value: "Real Estate",
        }
      ]
    }
   
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

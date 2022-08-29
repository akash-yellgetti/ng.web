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
          "key": "rent",
          "value": "Rent",
        }, {
          "key": "food",
          "value": "Food",
        }, {
          "key": "electricity",
          "value": "Electricity",
        }, {
          "key": "mobile",
          "value": "Mobile",
        }, {
          "key": "clothes",
          "value": "Clothes",
        }, {
          "key": "transport",
          "value": "Transport",
        }, {
          "key": "internet",
          "value": "Internet",
        }


      ]
    },
    {
      key: "wants",
      value: "Wants",
      children: [
        {
          "key": "car-bike",
          "value": "Car/Bike"
        }, {
          "key": "phone",
          "value": "Phone"
        }, {
          "key": "vacation",
          "value": "Vacation"
        }, {
          "key": "clothes",
          "value": "Clothes"
        }, {
          "key": "dining out",
          "value": "Dining Out"
        }
      ]
    },
    {
      key: "investment",
      value: "Investment",
      children: [
        {
          key: "insurance",
          value: "Insurance",
        },
        {
          key: "emergency",
          value: "Emergency",
        },
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

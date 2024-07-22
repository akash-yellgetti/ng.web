import * as _ from "lodash";
import { categories } from "./categories.json";

export const stepperForm = {
  "steps": [
    {
      "id": 1,
      "title": "Personal Information",
      "completed": false,
      "fields": {
         
        "marital_status": {
          "type": "chips-autocomplete",
          "datatype": "string",
          "col": "6",
          "name": "marital_status",
          "label": "What is your marital status?",
          "value": "",
          "validations": ["required"],
          "options": [
            {
              "key": "single",
              "value": "Single"
            },
            {
              "key": "married",
              "value": "Married"
            },
            {
              "key": "divorced",
              "value": "Divorced"
            },
            {
              "key": "widowed",
              "value": "Widowed"
            }
          ]
        },
        "dependents": {
          "type": "select",
          "datatype": "numeric",
          "col": "6",
          "name": "dependents",
          "label": "Do you have any dependents? If yes, how many?",
          "value": "",
          "validations": ["required"],
          "options": [
            {
              "key": 0,
              "value": "No"
            },
            {
              "key": 1,
              "value": "Yes"
            }
          ]
        }
      }
    },
    {
      "id": 2,
      "title": "Income",
      "fields": {
        "incomes": {
          "type": "checkbox-input",
          "datatype": "string",
          "col": "12",
          "name": "incomes",
          "label": "Do you have any outstanding debts? If yes, what type and amount?",
          "value": "",
          "validations": ["required"],
          "options": [
            {
              "key": "salary",
              "value": "Salary",
              "fields": {
                "salaryAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "salaryAmount",
                  "label": "Salary Monthly Income Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },{
              "key": "business",
              "value": "Business",
              "fields": {
                "businessAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "businessAmount",
                  "label": "Business Monthly Income Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "dividend",
              "value": "Dividend",
              "fields": {
                "dividentAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "dividentAmount",
                  "label": "Divident Monthly Income Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "rental",
              "value": "Rental",
              "fields": {
                "rentalAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "rentalAmount",
                  "label": "Rental Monthly Income Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "depositInterest",
              "value": "Deposit Interest(FD,RD)",
              "fields": {
                "interestAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "depositInterest",
                  "label": "Interest Monthly Income Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "side-hustle",
              "value": "Side Hustle",
              "fields": {
                "sideHustleAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "sideHustleAmount",
                  "label": "Side Hustle Monthly Income Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            }
            
          ]
        },
        
      
      }
    },
    {
      "id": 3,
      "title": "Current Net Worth",
      "fields": {
        "existingInvestments": {
          "type": "checkbox",
          "datatype": "string",
          "col": "12",
          "name": "existing_investments",
          "label": "Do you have any existing investments? If yes, please specify (e.g., stocks, bonds, mutual funds, real estate).",
          "value": "",
          "validations": ["required"],
          "options": [
            {
              "key": "saving",
              "value": "Saving Account",
              "fields": {
                "savingAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "savingAmount",
                  "label": "Current Saving Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "ppf",
              "value": "PPF",
              "fields": {
                "ppfAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "ppfAmount",
                  "label": "Current PPF Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "epf",
              "value": "ePF",
              "fields": {
                "epfAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "epfAmount",
                  "label": "Current ePF Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "nps",
              "value": "NPS",
              "fields": {
                "fdAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "fdAmount",
                  "label": "Current NPF Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "fd",
              "value": "FD",
              "fields": {
                "fdAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "fdAmount",
                  "label": "Current FD Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "rd",
              "value": "RD",
              "fields": {
                "fdAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "fdAmount",
                  "label": "Current RD Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "gold",
              "value": "Gold",
              "fields": {
                "fdAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "gold",
                  "label": "Current Gold Quantity?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "silve",
              "value": "Silver",
              "fields": {
                "fdAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "gold",
                  "label": "Current Silver Quantity?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "emergencyFund",
              "value": "Emergency Fund",
              "fields": {
                "fdAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "gold",
                  "label": "Current Emergency Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "stocks",
              "value": "Stocks",
              "fields": {
                "fdAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "gold",
                  "label": "Current Stock Investment Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "bonds",
              "value": "Bonds",
              "fields": {
                "fdAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "gold",
                  "label": "Current Bond Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "mutual funds",
              "value": "Mutual Funds",
              "fields": {
                "fdAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "gold",
                  "label": "Current Mutual Fund Investment Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "real estate",
              "value": "Real Estate",
              "fields": {
                "fdAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "gold",
                  "label": "Current Real Estate Investment Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "commodities",
              "value": "Commodities",
              "fields": {
                "fdAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "gold",
                  "label": "Current Commodities Investment Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "cryptocurrencies",
              "value": "Cryptocurrencies",
              "fields": {
                "fdAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "gold",
                  "label": "Current Cryptocurrencies Investment Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "others",
              "value": "Others",
              "fields": {
                "fdAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "gold",
                  "label": "Current Cryptocurrencies Investment Amount?",
                  "value": "",
                  "validations": ""
                }
              }
            }
          ]
        }
      }
    },
    {
      "id": 3,
      "title": "Current Financial Expense Situation",
      "fields": {
        
        "loans": {
          "type": "checkbox",
          "datatype": "string",
          "col": "12",
          "name": "loans",
          "label": "Do you have any outstanding debts? If yes, what type and amount?",
          "value": "",
          "validations": ["required"],
          "options": [
            {
              "key": "personal_loans",
              "value": "Personal Loans"
            },
            {
              "key": "home_loans",
              "value": "Home Loans"
            },
            {
              "key": "vehicle_loans",
              "value": "Vehicle Loans"
            },
            {
              "key": "education_loans",
              "value": "Education Loans"
            },
            {
              "key": "business_loans",
              "value": "Business Loans"
            },
            {
              "key": "agricultural_loans",
              "value": "Agricultural Loans"
            },
            {
              "key": "gold_loans",
              "value": "Gold Loans"
            },
            {
              "key": "loan_against_property",
              "value": "Loan Against Property (LAP)"
            },
            {
              "key": "consumer_durable_loans",
              "value": "Consumer Durable Loans"
            },
            {
              "key": "mudra_loans",
              "value": "Mudra Loans"
            },
            {
              "key": "credit_card",
              "value": "Credit Card"
            },
            {
              "key": "student_loan",
              "value": "Student Loan"
            },
            {
              "key": "mortgage",
              "value": "Mortgage"
            },
            {
              "key": "personal_loan",
              "value": "Personal Loan"
            },
            {
              "key": "others",
              "value": "Others"
            }
          ]
        },
        "Insurance": {
          "type": "checkbox",
          "datatype": "string",
          "col": "12",
          "name": "insurance",
          "label": "Do you have any outstanding debts? If yes, what type and amount?",
          "value": "",
          "validations": ["required"],
          "options": [
            {
              "key": "healthInsurance",
              "value": "Health Insurance"
            },
            {
              "key": "termInsurance",
              "value": "Term Insurance"
            },
            {
              "key": "lifeInsurance",
              "value": "Life Insurance"
            },
            {
              "key": "vehicleInsurance",
              "value": "Vehicle Insurance"
            },
            {
              "key": "otherInsurance",
              "value": "Other Insurance"
            },
          ]
        },
        "regular": {
          "type": "checkbox",
          "datatype": "string",
          "col": "12",
          "name": "expenses",
          "label": "Do you have any regular expense? If yes, what type and amount?",
          "value": "",
          "validations": ["required"],
          "options": _.chain(categories).mapValues('subcategory').values().flatten().map((category) => {
            return {
              key: category.title,
              value: category.title
            }
          }).value()
        },
      
      }
    },
    {
      "id": 2,
      "title": "Financial Goals",
      "completed": false,
      "fields": {
        "goalLongTerm": {
          "type": "checkbox",
          "datatype": "string",
          "col": "12",
          "name": "goals",
          "label": "What are your long-term financial?",
          "value": "",
          "validations": ["required"],
          "options": [
            {
              "key": "Retirement",
              "value": "Retirement",
              "fields": {
                "retirementAge": {
                  "type": "select",
                  "datatype": "numeric",
                  "col": "12",
                  "name": "retirementAge",
                  "label": "At what age do you plan to retire?",
                  "value": "",
                  "validations": "",
                  "options": [
                    {
                      "key": 40,
                      "value": "40 years"
                    },
                    {
                      "key": 45,
                      "value": "45 years"
                    },
                    {
                      "key": 50,
                      "value": "50 years"
                    },
                    {
                      "key": 55,
                      "value": "55 years"
                    },
                    {
                      "key": 60,
                      "value": "60 years"
                    }
                  ]
                },
                "retirementAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "retirementAmount",
                  "label": "Current Monthly expenses, excluding EMI'S?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "Marriage",
              "value": "Self Marriage",
              "fields": {
                "retirementAge": {
                  "type": "select",
                  "datatype": "numeric",
                  "col": "12",
                  "name": "retirementAge",
                  "label": "At what age do you plan to retire?",
                  "value": "",
                  "validations": "",
                  "options": [
                    {
                      "key": 40,
                      "value": "40 years"
                    },
                    {
                      "key": 45,
                      "value": "45 years"
                    },
                    {
                      "key": 50,
                      "value": "50 years"
                    },
                    {
                      "key": 55,
                      "value": "55 years"
                    },
                    {
                      "key": 60,
                      "value": "60 years"
                    }
                  ]
                },
                "retirementAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "retirementAmount",
                  "label": "Current Monthly expenses, excluding EMI'S?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "High Education",
              "value": "High Education",
              "fields": {
                "retirementAge": {
                  "type": "select",
                  "datatype": "numeric",
                  "col": "12",
                  "name": "retirementAge",
                  "label": "At what age do you plan to retire?",
                  "value": "",
                  "validations": "",
                  "options": [
                    {
                      "key": 40,
                      "value": "40 years"
                    },
                    {
                      "key": 45,
                      "value": "45 years"
                    },
                    {
                      "key": 50,
                      "value": "50 years"
                    },
                    {
                      "key": 55,
                      "value": "55 years"
                    },
                    {
                      "key": 60,
                      "value": "60 years"
                    }
                  ]
                },
                "retirementAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "retirementAmount",
                  "label": "Current Monthly expenses, excluding EMI'S?",
                  "value": "",
                  "validations": ""
                }
              }
            },
            {
              "key": "Emergency Fund",
              "value": "Emergency Fund",
              "fields": {
                "retirementAge": {
                  "type": "select",
                  "datatype": "numeric",
                  "col": "12",
                  "name": "retirementAge",
                  "label": "At what age do you plan to retire?",
                  "value": "",
                  "validations": "",
                  "options": [
                    {
                      "key": 40,
                      "value": "40 years"
                    },
                    {
                      "key": 45,
                      "value": "45 years"
                    },
                    {
                      "key": 50,
                      "value": "50 years"
                    },
                    {
                      "key": 55,
                      "value": "55 years"
                    },
                    {
                      "key": 60,
                      "value": "60 years"
                    }
                  ]
                },
                "retirementAmount": {
                  "type": "text",
                  "datatype": "string",
                  "col": "12",
                  "name": "retirementAmount",
                  "label": "Current Monthly expenses, excluding EMI'S?",
                  "value": "",
                  "validations": ""
                }
              }
            }
          ]
        }
      }
    },
    {
      "id": 3,
      "title": "Risk Appetite",
      "fields": {
        "risk_tolerance": {
          "type": "select",
          "datatype": "string",
          "col": "12",
          "name": "risk_tolerance",
          "label": "How would you describe your risk tolerance? (Low, Moderate, High)",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": "low",
              "value": "Low"
            },
            {
              "key": "moderate",
              "value": "Moderate"
            },
            {
              "key": "high",
              "value": "High"
            }
          ]
        },
        "stock_market_experience": {
          "type": "select",
          "datatype": "string",
          "col": "12",
          "name": "stock_market_experience",
          "label": "Have you ever invested in the stock market or other high-risk investments before?",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": 1,
              "value": "Yes"
            },
            {
              "key": 0,
              "value": "No"
            }
          ]
        },
        "market_volatility_reaction": {
          "type": "select",
          "datatype": "string",
          "col": "12",
          "name": "market_volatility_reaction",
          "label": "How do you react to market volatility?",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": "sell",
              "value": "Sell investments (I get anxious and consider selling off investments.)"
            },
            {
              "key": "hold",
              "value": "Hold investments (I stay calm and stick to my plan.)"
            },
            {
              "key": "buy",
              "value": "Buy more investments (I see it as an opportunity to buy more.)"
            }
          ]
        },
        "primary_investment_concern": {
          "type": "select",
          "datatype": "string",
          "col": "12",
          "name": "primary_investment_concern",
          "label": "What is your primary concern when it comes to investing?",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": "losses",
              "value": "Avoiding losses (Preserving capital)"
            },
            {
              "key": "returns",
              "value": "Maximizing returns (Growing wealth over time)"
            },
            {
              "key": "taxes",
              "value": "Minimizing taxes"
            },
            {
              "key": "fees",
              "value": "Minimizing fees"
            },
            {
              "key": "diversification",
              "value": "Diversification"
            },
            {
              "key": "others",
              "value": "Others"
            },
            {
              "key": "passiveRegularIncome",
              "value": "Earning regular income"
            }
          ]
        }
      }
    },
    {
      "id": 3,
      "title": "Investment Preferences",
      "fields": {
        "investment_interest": {
          "type": "checkbox",
          "datatype": "string",
          "col": 12,
          "name": "investment_interest",
          "label": "What type of investments are you interested in?",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": "stocks",
              "value": "Stocks"
            },
            {
              "key": "bonds",
              "value": "Bonds"
            },
            {
              "key": "mutual funds",
              "value": "Mutual Funds"
            },
            {
              "key": "real estate",
              "value": "Real Estate"
            },
            {
              "key": "commodities",
              "value": "Commodities"
            },
            {
              "key": "cryptocurrencies",
              "value": "Cryptocurrencies"
            },
            {
              "key": "others (please specify)",
              "value": "Others (please specify)"
            }
          ]
        },
        "investment_holding_period": {
          "type": "select",
          "datatype": "numeric",
          "col": 6,
          "name": "investment_holding_period",
          "label": "How long are you willing to hold an investment?",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": "0-1",
              "value": "Less than 1 year"
            },
            {
              "key": "1-3",
              "value": "1-3 years"
            },
            {
              "key": "3-5",
              "value": "3-5 years"
            },
            {
              "key": "5+",
              "value": "5+ years"
            }
          ]
        },
        "preferred_investment_style": {
          "type": "select",
          "datatype": "string",
          "col": 6,
          "name": "preferred_investment_style",
          "label": "What is your preferred investment style?",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": "active",
              "value": "Active management"
            },
            {
              "key": "passive",
              "value": "Passive management"
            }
          ]
        },
        "portfolio_review_frequency": {
          "type": "select",
          "datatype": "string",
          "col": 6,
          "name": "portfolio_review_frequency",
          "label": "How frequently do you review your investment portfolio?",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": "Daily",
              "value": "Daily"
            },
            {
              "key": "Weekly",
              "value": "Weekly"
            },
            {
              "key": "Monthly",
              "value": "Monthly"
            },
            {
              "key": "Quarterly",
              "value": "Quarterly"
            },
            {
              "key": "Annually",
              "value": "Annually"
            }
          ]
        },
        "estate_planning_interest": {
          "type": "select",
          "datatype": "string",
          "col": "12",
          "name": "estate_planning_interest",
          "label": "Are you interested in estate planning and leaving an inheritance?",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": 1,
              "value": "Yes"
            },
            {
              "key": 0,
              "value": "No"
            }
          ]
        }
      }
    },
    {
      "id": 3,
      "title": "Financial Knowledge and Experience",
      "fields": {
        "investing_knowledge": {
          "type": "select",
          "datatype": "string",
          "col": "12",
          "name": "investing_knowledge",
          "label": "How would you rate your knowledge of investing and personal finance? (Beginner, Intermediate, Advanced)",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": "beginner",
              "value": "Beginner"
            },
            {
              "key": "intermediate",
              "value": "Intermediate"
            },
            {
              "key": "advanced",
              "value": "Advanced"
            }
          ]
        },
        "financial_news_following": {
          "type": "select",
          "datatype": "string",
          "col": "12",
          "name": "financial_news_following",
          "label": "Do you follow any financial news or publications regularly? If yes, which ones?",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": 1,
              "value": "Yes"
            },
            {
              "key": 0,
              "value": "No"
            }
          ]
        },
        "financial_advisor_experience": {
          "type": "select",
          "datatype": "string",
          "col": "12",
          "name": "financial_advisor_experience",
          "label": "Have you ever worked with a financial advisor or planner before? If yes, how was your experience?",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": 1,
              "value": "Yes"
            },
            {
              "key": 0,
              "value": "No"
            }
          ]
        }
      }
    },
    {
      "id": 3,
      "title": "Miscellaneous",
      "fields": {
        "additional_Information": {
          "type": "textarea",
          "datatype": "string",
          "col": "12",
          "name": "additional_information",
          "label": "Is there anything else you’d like to share about your financial situation or goals that hasn’t been covered?",
          "value": "",
          "validations": ""
        }
      }
    }
  ]
};

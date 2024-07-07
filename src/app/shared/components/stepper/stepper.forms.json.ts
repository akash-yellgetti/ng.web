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
          "fieldtype": "select",
          "datatype": "string",
          "col": "6",
          "name": "marital_status",
          "label": "What is your marital status?",
          "value": "",
          "validations": "",
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
          "fieldtype": "select",
          "datatype": "numeric",
          "col": "6",
          "name": "dependents",
          "label": "Do you have any dependents? If yes, how many?",
          "value": "",
          "validations": "",
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
        "employementType": {
          "fieldtype": "select",
          "datatype": "string",
          "col": "6",
          "name": "employementType",
          "label": "What is your employement type?",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": "salaried",
              "value": "Salaried"
            },
            {
              "key": "self-employed",
              "value": "Self-Employed (Business)"
            }
          ]
        },
        "montlyIncome": {
          "fieldtype": "number",
          "datatype": "numeric",
          "col": "6",
          "name": "montlyIncome",
          "label": "What is your employement montly income?",
          "value": "",
          "validations": ""
        },
        "incomes": {
          "fieldtype": "checkbox",
          "datatype": "string",
          "col": "12",
          "name": "outstanding_debts",
          "label": "Do you have any outstanding debts? If yes, what type and amount?",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": "dividend",
              "value": "Dividend"
            },
            {
              "key": "rental",
              "value": "Rental"
            },
            {
              "key": "deposit-interest",
              "value": "Deposit Interest(FD,RD)"
            }
            
          ]
        },
        
      
      }
    },
    {
      "id": 3,
      "title": "Current Net Worth",
      "fields": {
        "existing_investments": {
          "fieldtype": "checkbox",
          "datatype": "string",
          "col": "12",
          "name": "existing_investments",
          "label": "Do you have any existing investments? If yes, please specify (e.g., stocks, bonds, mutual funds, real estate).",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": "saving",
              "value": "Saving Account"
            },
            {
              "key": "ppf",
              "value": "PPF"
            },
            {
              "key": "epf",
              "value": "ePF"
            },
            {
              "key": "fd",
              "value": "FD"
            },
            {
              "key": "rd",
              "value": "RD"
            },
            {
              "key": "nps",
              "value": "NPS"
            },
            {
              "key": "gold",
              "value": "Gold"
            },
            {
              "key": "silve",
              "value": "Silver"
            },
            {
              "key": "emergencyFund",
              "value": "Emergency Fund"
            },
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
              "key": "others",
              "value": "Others"
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
          "fieldtype": "checkbox",
          "datatype": "string",
          "col": "12",
          "name": "outstanding_debts",
          "label": "Do you have any outstanding debts? If yes, what type and amount?",
          "value": "",
          "validations": "",
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
          "fieldtype": "checkbox",
          "datatype": "string",
          "col": "12",
          "name": "outstanding_debts",
          "label": "Do you have any outstanding debts? If yes, what type and amount?",
          "value": "",
          "validations": "",
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
          "fieldtype": "checkbox",
          "datatype": "string",
          "col": "12",
          "name": "outstanding_debts",
          "label": "Do you have any regular expense? If yes, what type and amount?",
          "value": "",
          "validations": "",
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
          "fieldtype": "checkbox",
          "datatype": "string",
          "col": "12",
          "name": "goalLongTerm",
          "label": "What are your long-term financial?",
          "value": "",
          "validations": "",
          "options": [
            {
              "key": "Retirement",
              "value": "Retirement",
              "fields": {
                "retirementAge": {
                  "fieldtype": "select",
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
                  "fieldtype": "text",
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
                  "fieldtype": "select",
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
                  "fieldtype": "text",
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
                  "fieldtype": "select",
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
                  "fieldtype": "text",
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
                  "fieldtype": "select",
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
                  "fieldtype": "text",
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
          "fieldtype": "select",
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
          "fieldtype": "select",
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
          "fieldtype": "select",
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
          "fieldtype": "select",
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
          "fieldtype": "select",
          "datatype": "string",
          "col": 6,
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
          "fieldtype": "select",
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
          "fieldtype": "select",
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
          "fieldtype": "select",
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
          "fieldtype": "select",
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
          "fieldtype": "select",
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
          "fieldtype": "select",
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
          "fieldtype": "select",
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
          "fieldtype": "textarea",
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

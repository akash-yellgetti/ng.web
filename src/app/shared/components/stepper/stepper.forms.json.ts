export const stepperForm = {
  steps: [
    {
      id: 1,
      title: 'Personal Information',
      fields: {
         
        current_occupation: {
          fieldtype: 'text',
          datatype: 'string',
          col: '6',
          name: 'current_occupation',
          label: 'What is your current occupation?',
          value: '',
          validations: 'required',
        },
        annual_income: {
          fieldtype: 'number',
          datatype: 'numeric',
          col: '6',
          name: 'annual_income',
          label: 'What is your annual income?',
          value: '',
          validations: 'required',
        },
        marital_status: {
          fieldtype: 'select',
          datatype: 'string',
          col: '6',
          name: 'marital_status',
          label: 'What is your marital status?',
          value: '',
          validations: 'required',
          options: ['Single', 'Married', 'Divorced', 'Widowed']
        },
        dependents: {
          fieldtype: 'number',
          datatype: 'numeric',
          col: '6',
          name: 'dependents',
          label: 'Do you have any dependents? If yes, how many?',
          value: '',
          validations: 'required',
        },
       

        
        
      },
    },
    {
      id: 2,
      title: 'Financial Goals',
      fields: {
        short_term_goals: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'short_term_goals',
          label: 'What are your short-term financial goals (within the next 1-3 years)?',
          value: '',
          validations: 'required',
        },
        medium_term_goals: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'medium_term_goals',
          label: 'What are your medium-term financial goals (3-7 years)?',
          value: '',
          validations: 'required',
        },
        long_term_goals: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'long_term_goals',
          label: 'What are your long-term financial goals (7+ years)?',
          value: '',
          validations: 'required',
        },
        financial_milestones: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'financial_milestones',
          label: 'Do you have any specific financial milestones you want to achieve (e.g., buying a house, children\'s education, retirement)?',
          value: '',
          validations: 'required',
        },
      }
    },
    {
      id: 3,
      title: 'Current Financial Situation',
      fields: {
        savings_balance: {
          fieldtype: 'number',
          datatype: 'numeric',
          col: '12',
          name: 'savings_balance',
          label: 'What is your current savings balance?',
          value: '',
          validations: 'required',
        },
        outstanding_debts: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'outstanding_debts',
          label: 'Do you have any outstanding debts? If yes, what type and amount?',
          value: '',
          validations: 'required',
        },
        monthly_expenditure: {
          fieldtype: 'number',
          datatype: 'numeric',
          col: '12',
          name: 'monthly_expenditure',
          label: 'What is your current monthly expenditure?',
          value: '',
          validations: 'required',
        },
        existing_investments: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'existing_investments',
          label: 'Do you have any existing investments? If yes, please specify (e.g., stocks, bonds, mutual funds, real estate).',
          value: '',
          validations: 'required',
        },
        emergency_fund: {
          fieldtype: 'number',
          datatype: 'numeric',
          col: '12',
          name: 'emergency_fund',
          label: 'Do you have an emergency fund? If yes, how many months of living expenses does it cover?',
          value: '',
          validations: 'required',
        },

      }
    },
    {
      id: 3,
      title: 'Risk Appetite',
      fields: {
        risk_tolerance: {
          fieldtype: 'select',
          datatype: 'string',
          col: '12',
          name: 'risk_tolerance',
          label: 'How would you describe your risk tolerance? (Low, Moderate, High)',
          value: '',
          validations: 'required',
          options: ['Low', 'Moderate', 'High']
        },
        stock_market_experience: {
          fieldtype: 'select',
          datatype: 'string',
          col: '12',
          name: 'stock_market_experience',
          label: 'Have you ever invested in the stock market or other high-risk investments before?',
          value: '',
          validations: 'required',
          options: ['Yes', 'No']
        },
        market_volatility_reaction: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'market_volatility_reaction',
          label: 'How do you react to market volatility?',
          value: '',
          validations: 'required',
        },
        primary_investment_concern: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'primary_investment_concern',
          label: 'What is your primary concern when it comes to investing?',
          value: '',
          validations: 'required',
        },

      }
    },
    {
      id: 3,
      title: 'Investment Preferences',
      fields: {
        investment_interest: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'investment_interest',
          label: 'What type of investments are you interested in?',
          value: '',
          validations: 'required',
        },
        investment_holding_period: {
          fieldtype: 'number',
          datatype: 'numeric',
          col: '12',
          name: 'investment_holding_period',
          label: 'How long are you willing to hold an investment?',
          value: '',
          validations: 'required',
        },
        preferred_investment_style: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'preferred_investment_style',
          label: 'What is your preferred investment style?',
          value: '',
          validations: 'required',
        },
        portfolio_review_frequency: {
          fieldtype: 'select',
          datatype: 'string',
          col: '12',
          name: 'portfolio_review_frequency',
          label: 'How frequently do you review your investment portfolio?',
          value: '',
          validations: 'required',
          options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Annually']
        },
        
      }
    },
    {
      id: 3,
      title: 'Financial Knowledge and Experience',
      fields: {
        investing_knowledge: {
          fieldtype: 'select',
          datatype: 'string',
          col: '12',
          name: 'investing_knowledge',
          label: 'How would you rate your knowledge of investing and personal finance? (Beginner, Intermediate, Advanced)',
          value: '',
          validations: 'required',
          options: ['Beginner', 'Intermediate', 'Advanced']
        },
        financial_news_following: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'financial_news_following',
          label: 'Do you follow any financial news or publications regularly? If yes, which ones?',
          value: '',
          validations: 'required',
        },
        financial_advisor_experience: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'financial_advisor_experience',
          label: 'Have you ever worked with a financial advisor or planner before? If yes, how was your experience?',
          value: '',
          validations: 'required',
        },
      }
    },
    {
      id: 3,
      title: 'Future Planning',
      fields: {
        retirement_age: {
          fieldtype: 'number',
          datatype: 'numeric',
          col: '12',
          name: 'retirement_age',
          label: 'At what age do you plan to retire?',
          value: '',
          validations: 'required',
        },
        retirement_savings_plan: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'retirement_savings_plan',
          label: 'Do you have a retirement savings plan (e.g., 401(k), IRA, pension)?',
          value: '',
          validations: 'required',
        },
        estate_planning_interest: {
          fieldtype: 'select',
          datatype: 'string',
          col: '12',
          name: 'estate_planning_interest',
          label: 'Are you interested in estate planning and leaving an inheritance?',
          value: '',
          validations: 'required',
          options: ['Yes', 'No']
        },
        future_financial_expectations: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'future_financial_expectations',
          label: 'What are your expectations for your future financial situation?',
          value: '',
          validations: 'required',
        },
      }
    },
    {
      id: 3,
      title: 'Miscellaneous',
      fields: {
        additional_Information: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'additional_information',
          label: 'Is there anything else you’d like to share about your financial situation or goals that hasn’t been covered?',
          value: '',
          validations: 'required',
        }
      }
    },
  ],
};

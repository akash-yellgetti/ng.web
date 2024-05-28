export const stepperForm = {
  steps: [
    {
      id: 1,
      title: 'Personal Information',
      fields: {
        employementType: {
          fieldtype: 'select',
          datatype: 'string',
          col: '6',
          name: 'employementType',
          label: 'What is your employement type?',
          value: '',
          validations: 'required',
          options: [
            {
              key: 'salaried',
              value: 'Salaried',
            },
            {
              key: 'self-employed',
              value: 'Self-Employed (Business)',
            },
          ],
        },
        annualIncome: {
          fieldtype: 'number',
          datatype: 'numeric',
          col: '6',
          name: 'annualIncome',
          label: 'What is your employement annual income?',
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
          options: [
            {
              key: 'single',
              value: 'Single',
            },
            {
              key: 'married',
              value: 'Married',
            },
            {
              key: 'divorced',
              value: 'Divorced',
            },
            {
              key: 'widowed',
              value: 'Widowed',
            },
          ],
        },
        dependents: {
          fieldtype: 'select',
          datatype: 'numeric',
          col: '6',
          name: 'dependents',
          label: 'Do you have any dependents? If yes, how many?',
          value: '',
          validations: 'required',
          options: [
            {
              key: 0,
              value: 'No',
            },
            {
              key: 1,
              value: 'Yes',
            },
          ],
        },
      },
    },
    {
      id: 2,
      title: 'Financial Goals',
      fields: {
        goalLongTerm: {
          fieldtype: 'checkbox',
          datatype: 'string',
          col: '12',
          name: 'goalLongTerm',
          label: 'What are your long-term financial?',
          value: '',
          validations: 'required',
          options: [
            {
              key: 'Retirement',
              value: 'Retirement',
            },
            {
              key: 'Child Education',
              value: 'Child Education',
            },
            {
              key: 'Child Marriage',
              value: 'Child Marriage',
            },
            {
              key: 'Marriage',
              value: 'Marriage',
            },
            {
              key: 'High Education',
              value: 'High Education',
            },
            {
              key: 'New House',
              value: 'New House',
            },

            {
              key: 'Emergency Fund',
              value: 'Emergency Fund',
            },
          ],
        },
      },
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
          label:
            'Do you have any outstanding debts? If yes, what type and amount?',
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
          label:
            'Do you have any existing investments? If yes, please specify (e.g., stocks, bonds, mutual funds, real estate).',
          value: '',
          validations: 'required',
        },
        emergency_fund: {
          fieldtype: 'number',
          datatype: 'numeric',
          col: '12',
          name: 'emergency_fund',
          label:
            'Do you have an emergency fund? If yes, how many months of living expenses does it cover?',
          value: '',
          validations: 'required',
        },
      },
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
          label:
            'How would you describe your risk tolerance? (Low, Moderate, High)',
          value: '',
          validations: 'required',
          options: [
            {
              key: 'low',
              value: 'Low',
            },
            {
              key: 'moderate',
              value: 'Moderate',
            },
            {
              key: 'high',
              value: 'High',
            },
          ],
        },
        stock_market_experience: {
          fieldtype: 'select',
          datatype: 'string',
          col: '12',
          name: 'stock_market_experience',
          label:
            'Have you ever invested in the stock market or other high-risk investments before?',
          value: '',
          validations: 'required',
          options: [
            {
              key: 1,
              value: 'Yes',
            },
            {
              key: 0,
              value: 'No',
            },
          ],
        },
        market_volatility_reaction: {
          fieldtype: 'select',
          datatype: 'string',
          col: '12',
          name: 'market_volatility_reaction',
          label: 'How do you react to market volatility?',
          value: '',
          validations: 'required',
          options: [
            {
              key: 'sell',
              value:
                'Sell investments (I get anxious and consider selling off investments.)',
            },
            {
              key: 'hold',
              value: 'Hold investments (I stay calm and stick to my plan.)',
            },
            {
              key: 'buy',
              value:
                'Buy more investments (I see it as an opportunity to buy more.)',
            },
          ],
        },
        primary_investment_concern: {
          fieldtype: 'select',
          datatype: 'string',
          col: '12',
          name: 'primary_investment_concern',
          label: 'What is your primary concern when it comes to investing?',
          value: '',
          validations: 'required',
          options: [
            {
              key: 'losses',
              value: 'Avoiding losses (Preserving capital)',
            },
            {
              key: 'returns',
              value: 'Maximizing returns (Growing wealth over time)',
            },
            {
              key: 'taxes',
              value: 'Minimizing taxes',
            },
            {
              key: 'fees',
              value: 'Minimizing fees',
            },
            {
              key: 'diversification',
              value: 'Diversification',
            },
            {
              key: 'others',
              value: 'Others',
            },
            {
              key: 'passiveRegularIncome',
              value: 'Earning regular income',
            },
          ],
        },
      },
    },
    {
      id: 3,
      title: 'Investment Preferences',
      fields: {
        investment_interest: {
          fieldtype: 'select',
          datatype: 'string',
          col: 6,
          name: 'investment_interest',
          label: 'What type of investments are you interested in?',
          value: '',
          validations: 'required',
          options: [
            {
              key: 'stocks',
              value: 'Stocks',
            },
            {
              key: 'bonds',
              value: 'Bonds',
            },
            {
              key: 'mutual funds',
              value: 'Mutual Funds',
            },
            {
              key: 'real estate',
              value: 'Real Estate',
            },
            {
              key: 'commodities',
              value: 'Commodities',
            },
            {
              key: 'cryptocurrencies',
              value: 'Cryptocurrencies',
            },
            {
              key: 'others (please specify)',
              value: 'Others (please specify)',
            },
          ],
        },
        investment_holding_period: {
          fieldtype: 'select',
          datatype: 'numeric',
          col: 6,
          name: 'investment_holding_period',
          label: 'How long are you willing to hold an investment?',
          value: '',
          validations: 'required',
          options: [
            { key: '0-1', value: 'Less than 1 year' },
            { key: '1-3', value: '1-3 years' },
            { key: '3-5', value: '3-5 years' },
            { key: '5+', value: '5+ years' },
          ],
        },
        preferred_investment_style: {
          fieldtype: 'select',
          datatype: 'string',
          col: 6,
          name: 'preferred_investment_style',
          label: 'What is your preferred investment style?',
          value: '',
          validations: 'required',
          options: [
            { key: 'active', value: 'Active management' },
            { key: 'passive', value: 'Passive management' },
          ],
        },
        portfolio_review_frequency: {
          fieldtype: 'select',
          datatype: 'string',
          col: 6,
          name: 'portfolio_review_frequency',
          label: 'How frequently do you review your investment portfolio?',
          value: '',
          validations: 'required',
          options: [
            { key: 'Daily', value: 'Daily' },
            {
              key: 'Weekly',
              value: 'Weekly',
            },
            {
              key: 'Monthly',
              value: 'Monthly',
            },
            {
              key: 'Quarterly',
              value: 'Quarterly',
            },
            {
              key: 'Annually',
              value: 'Annually',
            },
          ],
        },
      },
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
          label:
            'How would you rate your knowledge of investing and personal finance? (Beginner, Intermediate, Advanced)',
          value: '',
          validations: 'required',
          options: [
            {
              key: 'beginner',
              value: 'Beginner',
            },
            {
              key: 'intermediate',
              value: 'Intermediate',
            },
            {
              key: 'advanced',
              value: 'Advanced',
            },
          ],
        },
        financial_news_following: {
          fieldtype: 'select',
          datatype: 'string',
          col: '12',
          name: 'financial_news_following',
          label:
            'Do you follow any financial news or publications regularly? If yes, which ones?',
          value: '',
          validations: 'required',
          options: [
            {
              key: 1,
              value: 'Yes',
            },
            {
              key: 0,
              value: 'No',
            },
          ],
        },
        financial_advisor_experience: {
          fieldtype: 'select',
          datatype: 'string',
          col: '12',
          name: 'financial_advisor_experience',
          label:
            'Have you ever worked with a financial advisor or planner before? If yes, how was your experience?',
          value: '',
          validations: 'required',
          options: [
            {
              key: 1,
              value: 'Yes',
            },
            {
              key: 0,
              value: 'No',
            },
          ],
        },
      },
    },
    {
      id: 3,
      title: 'Future Planning',
      fields: {
        retirement_age: {
          fieldtype: 'select',
          datatype: 'numeric',
          col: '12',
          name: 'retirement_age',
          label: 'At what age do you plan to retire?',
          value: '',
          validations: 'required',
          options: [
            {
              key: 40,
              value: '40 years',
            },
            {
              key: 45,
              value: '45 years',
            },
            {
              key: 50,
              value: '50 years',
            },
            {
              key: 55,
              value: '55 years',
            },
            {
              key: 60,
              value: '60 years',
            },
          ],
        },
        retirement_savings_plan: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'retirement_savings_plan',
          label:
            'Do you have a retirement savings plan (e.g., 401(k), IRA, pension)?',
          value: '',
          validations: 'required',
        },
        estate_planning_interest: {
          fieldtype: 'select',
          datatype: 'string',
          col: '12',
          name: 'estate_planning_interest',
          label:
            'Are you interested in estate planning and leaving an inheritance?',
          value: '',
          validations: 'required',
          options: [
            {
              key: 1,
              value: 'Yes',
            },
            {
              key: 0,
              value: 'No',
            },
          ],
        },
        future_financial_expectations: {
          fieldtype: 'textarea',
          datatype: 'string',
          col: '12',
          name: 'future_financial_expectations',
          label:
            'What are your expectations for your future financial situation?',
          value: '',
          validations: 'required',
        },
      },
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
          label:
            'Is there anything else you’d like to share about your financial situation or goals that hasn’t been covered?',
          value: '',
          validations: 'required',
        },
      },
    },
  ],
};

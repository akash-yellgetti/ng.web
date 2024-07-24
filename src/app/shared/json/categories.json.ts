import * as _ from 'lodash';
interface FinancialCategory {
  code: string;
  parentCode: string | null;
  title: string;
}

const financialCategories: any = [
  { code: 'income', parentCode: null, title: 'Income' },
  { code: 'expense', parentCode: null, title: 'Expense' },
  { code: 'goal', parentCode: null, title: 'Goal' },
  { code: 'investment', parentCode: null, title: 'Investment' },
  { code: 'loan', parentCode: 'expense', title: 'Loan' },
  { code: 'housing', parentCode: 'expense', title: 'Housing' },
  { code: 'transportation', parentCode: 'expense', title: 'Transportation' },
  { code: 'childcare', parentCode: 'expense', title: 'Childcare' },
  { code: 'insurance', parentCode: 'expense', title: 'Insurance' },
  { code: 'maintenance', parentCode: 'expense', title: 'Maintenance' },
  { code: 'food', parentCode: 'expense', title: 'Food' },
  { code: 'health', parentCode: 'expense', title: 'Health' },
  { code: 'entertainment', parentCode: 'expense', title: 'Entertainment' },
  { code: 'pets', parentCode: 'expense', title: 'Pets' },
  { code: 'personal', parentCode: 'expense', title: 'Personal' },
  { code: 'goal-short-term', parentCode: 'goal', title: 'Short Term' },
  { code: 'goal-mid-term', parentCode: 'goal', title: 'Mid Term' },
  { code: 'goal-long-term', parentCode: 'goal', title: 'Long Term' },
  {
    code: 'investment-short-term',
    parentCode: 'investment',
    title: 'Short Term',
  },
  { code: 'investment-mid-term', parentCode: 'investment', title: 'Mid Term' },
  {
    code: 'investment-long-term',
    parentCode: 'investment',
    title: 'Long Term',
  },
  { code: 'rent', parentCode: 'housing', title: 'Rent' },
  { code: 'utilities', parentCode: 'housing', title: 'Utilities' },
  {
    code: 'society-maintenance',
    parentCode: 'maintenance',
    title: 'Society Maintenance',
  },
  {
    code: 'vehicle-maintenance',
    parentCode: 'maintenance',
    title: 'Vehicle Maintenance',
  },
  
  { code: 'hl', parentCode: 'loan', title: 'Housing Loan' },
  { code: 'sl', parentCode: 'loan', title: 'Student Loan' },
  { code: 'gl', parentCode: 'loan', title: 'Gold Loan' },
  { code: 'pl', parentCode: 'loan', title: 'Personal Loan' },
  { code: 'bk', parentCode: 'loan', title: 'Bike Loan' },
  { code: 'cl', parentCode: 'loan', title: 'Car Loan' },
  { code: 'lap', parentCode: 'loan', title: 'Loan Against Property (LAP)' },
  { code: 'lafd', parentCode: 'loan', title: 'Loan Against Fixed Deposit' },
  
  { code: 'gas', parentCode: 'transportation', title: 'Gas and tolls' },
  { code: 'parking', parentCode: 'transportation', title: 'Parking' },
  {
    code: 'public',
    parentCode: 'transportation',
    title: 'Public transportation costs',
  },
  { code: 'travel', parentCode: 'transportation', title: 'Travel' },
  { code: 'cab', parentCode: 'transportation', title: 'Taxis and ride shares' },
  

  { code: 'day', parentCode: 'childcare', title: 'Child Day care' },
  { code: 'after', parentCode: 'childcare', title: 'Child After-school programs' },
  { code: 'tuition', parentCode: 'childcare', title: 'Child Tuition' },
  { code: 'babysitting', parentCode: 'childcare', title: 'Child Babysitting' },
  {
    code: 'clothes',
    parentCode: 'childcare',
    title: 'Clothes, personal care, and related expenses',
  },
  {
    code: 'health-insurance',
    parentCode: 'insurance',
    title: 'Health insurance premiums (if not deducted from your paycheck)',
  },  
  {
    code: 'disability-insurance',
    parentCode: 'insurance',
    title: 'Disability income insurance premiums',
  },
  { code: 'housing-insurance', parentCode: 'housing', title: 'Housing Insurance' },
  { code: 'life-insurance', parentCode: 'insurance', title: 'Life insurance premiums' },
  {
    code: 'vehicle-insurance',
    parentCode: 'insurance',
    title: 'vehicle insurance premiums',
  },

  { code: 'parent-insurance', parentCode: 'insurance', title: 'Parent-insurance' },
  { code: 'pet-insurance', parentCode: 'insurance', title: 'Pet insurance' },
  { code: 'groceries', parentCode: 'food', title: 'Groceries' },
  { code: 'takeout', parentCode: 'food', title: 'Takeout and restaurants' },
  {
    code: 'deductibles',
    parentCode: 'health',
    title: 'Deductibles, copays, and coinsurance',
  },
  
  {
    code: 'prescriptions',
    parentCode: 'health',
    title: 'Prescriptions and over-the-counter drugs',
  },
  {
    code: 'eyeglasses',
    parentCode: 'health',
    title: 'Eyeglasses and contacts',
  },
  {
    code: 'concert',
    parentCode: 'entertainment',
    title: 'Concert, theater, and movie tickets',
  },
  {
    code: 'paid',
    parentCode: 'entertainment',
    title: 'Paid streaming and podcast services',
  },
  { code: 'books', parentCode: 'entertainment', title: 'Books' },
  { code: 'travel', parentCode: 'entertainment', title: 'Travel' },
  {
    code: 'food',
    parentCode: 'pets',
    title: 'Food, equipment and accessories, and toys',
  },
  {
    code: 'medical',
    parentCode: 'pets',
    title: 'Flea and tick prevention/other medications',
  },
  { code: 'vet', parentCode: 'pets', title: 'Vet bills' },
  
  {
    code: 'accessories',
    parentCode: 'personal',
    title: 'Clothing/shoes/accessories',
  },
  {
    code: 'hair',
    parentCode: 'personal',
    title: 'Hair care and other grooming',
  },
  { code: 'toiletries', parentCode: 'personal', title: 'Toiletries/cosmetics' },
  
  { code: 'gym', parentCode: 'personal', title: 'Gym membership' },
  {
    code: 'saving',
    parentCode: 'investment-short-term',
    title: 'Savings Accounts',
  },
  {
    code: 'cd',
    parentCode: 'investment-short-term',
    title: 'Certificates of Deposit (CDs)',
  },
  {
    code: 'mmf',
    parentCode: 'investment-short-term',
    title: 'Money Market Funds',
  },
  {
    code: 'tb',
    parentCode: 'investment-short-term',
    title: 'Treasury Bills (T-Bills)',
  },
  {
    code: 'stbonds',
    parentCode: 'investment-short-term',
    title: 'Short-Term Bond Funds',
  },
  {
    code: 'itbond',
    parentCode: 'investment-mid-term',
    title: 'Intermediate-Term Bonds',
  },
  {
    code: 'ltbond',
    parentCode: 'investment-mid-term',
    title: 'Long-Term Bonds',
  },
  {
    code: 'bmf',
    parentCode: 'investment-mid-term',
    title: 'Balanced Mutual Funds',
  },
  {
    code: 'dmf',
    parentCode: 'investment-mid-term',
    title: 'Dividend-Mutual Funds',
  },

  {
    code: 'reit',
    parentCode: 'investment-mid-term',
    title: 'Real Estate Investment Trusts (REITs)',
  },
  {
    code: 'lending',
    parentCode: 'investment-mid-term',
    title: 'Peer-to-Peer Lending',
  },
  { code: 'stocks', parentCode: 'investment-long-term', title: 'Stocks' },
  {
    code: 'real-estate',
    parentCode: 'investment-long-term',
    title: 'Real Estate',
  },
  {
    code: 'retirement',
    parentCode: 'investment-long-term',
    title: 'Retirement Accounts',
  },
  {
    code: 'indexfund',
    parentCode: 'investment-long-term',
    title: 'Index Funds and ETFs',
  },

  {
    code: 'gmf',
    parentCode: 'investment-long-term',
    title: 'Growth Mutual Funds',
  },
  {
    code: 'ppf',
    parentCode: 'investment-long-term',
    title: 'Public Provident Fund (PPF)',
  },
  {
    code: 'nps',
    parentCode: 'investment-long-term',
    title: 'National Pension System (NPS)',
  },

  { code: 'housing', parentCode: 'expense', title: 'Housing' },
  { code: 'rent', parentCode: 'housing', title: 'Rent or mortgage payments' },
  { code: 'property-taxes', parentCode: 'housing', title: 'Property taxes' },
  
  {
    code: 'maintenance-repairs',
    parentCode: 'housing',
    title: 'Maintenance and repairs',
  },

  { code: 'utilities', parentCode: 'expense', title: 'Utilities' },
  { code: 'electricity', parentCode: 'utilities', title: 'Electricity' },
  { code: 'water', parentCode: 'utilities', title: 'Water' },
  { code: 'gas', parentCode: 'utilities', title: 'Gas' },
  {
    code: 'trash-recycling',
    parentCode: 'utilities',
    title: 'Trash and recycling',
  },
  {
    code: 'internet-cable',
    parentCode: 'utilities',
    title: 'Internet and cable',
  },
  {
    code: 'phone',
    parentCode: 'utilities',
    title: 'Phone (landline and mobile)',
  },

  { code: 'food', parentCode: 'expense', title: 'Food' },
  { code: 'groceries', parentCode: 'food', title: 'Groceries' },
  { code: 'dining-out', parentCode: 'food', title: 'Dining out' },

  { code: 'transportation', parentCode: 'expense', title: 'Transportation' },
  { code: 'car-payments', parentCode: 'transportation', title: 'Car payments' },
  { code: 'fuel', parentCode: 'transportation', title: 'Fuel' },
  {
    code: 'maintenance-repairs',
    parentCode: 'transportation',
    title: 'Maintenance and repairs',
  },
  { code: 'insurance', parentCode: 'transportation', title: 'Insurance' },
  {
    code: 'public-transportation',
    parentCode: 'transportation',
    title: 'Public transportation',
  },
  { code: 'parking-fees', parentCode: 'transportation', title: 'Parking fees' },

  {
    code: 'health-wellness',
    parentCode: 'expense',
    title: 'Health and Wellness',
  },
  {
    code: 'health-insurance',
    parentCode: 'health-wellness',
    title: 'Health insurance',
  },
  {
    code: 'medical-dental',
    parentCode: 'health-wellness',
    title: 'Medical and dental expenses',
  },
  { code: 'medications', parentCode: 'health-wellness', title: 'Medications' },
  {
    code: 'gym-memberships',
    parentCode: 'health-wellness',
    title: 'Gym memberships',
  },

  { code: 'personal-care', parentCode: 'expense', title: 'Personal Care' },
  { code: 'toiletries', parentCode: 'personal-care', title: 'Toiletries' },
  {
    code: 'haircuts-beauty',
    parentCode: 'personal-care',
    title: 'Haircuts and beauty services',
  },

  {
    code: 'children-education',
    parentCode: 'expense',
    title: 'Children and Education',
  },
  {
    code: 'school-fees-supplies',
    parentCode: 'children-education',
    title: 'School fees and supplies',
  },
  {
    code: 'childcare-daycare',
    parentCode: 'children-education',
    title: 'Childcare or daycare',
  },
  {
    code: 'extracurricular-activities',
    parentCode: 'children-education',
    title: 'Extracurricular activities',
  },

  { code: 'debt-payments', parentCode: 'expense', title: 'Debt Payments' },
  {
    code: 'credit-card-payments',
    parentCode: 'loan',
    title: 'Credit card payments',
  },
  

  { code: 'insurance', parentCode: 'expense', title: 'Insurance' },
  { code: 'life-insurance', parentCode: 'insurance', title: 'Life insurance' },
  {
    code: 'disability-insurance',
    parentCode: 'insurance',
    title: 'Disability insurance',
  },
  { code: 'pet-insurance', parentCode: 'insurance', title: 'Pet insurance' },

  {
    code: 'savings-investments',
    parentCode: 'expense',
    title: 'Savings and Investments',
  },
  {
    code: 'emergency-fund',
    parentCode: 'savings-investments',
    title: 'Emergency fund',
  },
  {
    code: 'retirement-accounts',
    parentCode: 'savings-investments',
    title: 'Retirement accounts',
  },
  {
    code: 'investment-accounts',
    parentCode: 'savings-investments',
    title: 'Investment accounts',
  },

  { code: 'miscellaneous', parentCode: 'expense', title: 'Miscellaneous' },
  { code: 'clothing', parentCode: 'miscellaneous', title: 'Clothing' },
  {
    code: 'entertainment-hobbies',
    parentCode: 'miscellaneous',
    title: 'Entertainment and hobbies',
  },
  {
    code: 'subscriptions',
    parentCode: 'miscellaneous',
    title: 'Subscriptions (magazines, streaming services)',
  },
  {
    code: 'gifts-donations',
    parentCode: 'miscellaneous',
    title: 'Gifts and donations',
  },

  { code: 'pets', parentCode: 'expense', title: 'Pets' },
  { code: 'food', parentCode: 'pets', title: 'Food' },
  { code: 'veterinary-care', parentCode: 'pets', title: 'Veterinary care' },
  { code: 'grooming', parentCode: 'pets', title: 'Grooming' },
];

const types = _.filter(financialCategories, { parentCode: null });
// console.log(types)
const category = _.chain(financialCategories)
  .filter((r: any) => {
    return _.find(types, { code: r.parentCode });
  })
  .map((r: any) => {
    const type: any = _.find(types, { code: r.parentCode });
    return { ...type, typeCode: type.code, type: type.title, ...r };
  })
  .value();
// console.log(category)
const subcategory: any = _.chain(financialCategories)
  .filter((r: any) => {
    return _.find(category, { code: r.parentCode });
  })
  .map((r: any) => {
    const cat: any = _.find(category, { code: r.parentCode });

    return {
      ...cat,
      categoryCode: cat.code,
      category: cat.title,
      subcategoryCode: r.code,
      subcategory: r.title,
      ...r,
    };
  })
  .value();
console.log(subcategory);
const categories = [...types, ...category, ...subcategory];

export default { categories, types, category, subcategory };

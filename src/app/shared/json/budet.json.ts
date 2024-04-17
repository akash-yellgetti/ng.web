import * as moment from 'moment';

const items: any = [
    { 
      date: 1,
      category: 'income',
      subCategory: 'salary',
      title: 'Salary',
      description: 'Job',
      amount: 140000,
    },
    {
      date: 1,
      category: 'income',
      subCategory: 'rental',
      title: 'H-102',
      description: 'House rental',
      amount: 22000,
    },
    {
      date: 1,
      category: 'income',
      subCategory: 'rental',
      title: 'A-704',
      description: 'House rental',
      amount: 13000,
    },
    {
      date: 1,
      category: 'expense',
      subCategory: 'bill',
      title: 'Amma',
      description: 'Daily Expense',
      amount: 10000,
    },
    {
      date: 1,
      category: 'expense',
      subCategory: 'bill',
      title: 'Dmart',
      description: 'Daily Expense',
      amount: 5000,
    },
    {
      date: 1,
      category: 'expense',
      subCategory: 'Self',
      title: 'Akash',
      description: 'Daily Expense',
      amount: 5000,
    },
   
    
    {
      date: 1,
      category: 'expense',
      subCategory: 'policy',
      title: 'Term Plan',
      description: 'Max Life ',
      amount: 1700,
    },
    {
      date: 1,
      category: 'expense',
      subCategory: 'bill',
      title: 'Mobile',
      description: 'Akash Panu and Amma',
      amount: 1300,
    },
    {
      date: 1,
      category: 'expense',
      subCategory: 'bill',
      title: 'Fibre',
      description: ' 704 Kashigoan',
      amount: 1200,
    },
    {
      date: 1,
      category: 'expense',
      subCategory: 'bill',
      title: 'maintenance',
      description: 'Society maintenance 704 Kashigoan',
      amount: 2700,
    },
    {
      date: 1,
      category: 'expense',
      subCategory: 'bill',
      title: 'maintenance',
      description: 'Society maintenance 102 Borivali',
      amount: 2700,
    },
    {
      date: 5,
      category: 'investment',
      subCategory: 'invest',
      title: 'PPF',
      description: 'Child Education',
      amount: 5000,
    },
    {
      date: 5,
      category: 'investment',
      subCategory: 'invest',
      title: 'NPS',
      description: 'Retirement',
      amount: 5000,
    },
    // {
    //   date: 5,
    //   category: 'investment',
    //   type: 'invest',
    //   title: 'ETF',
    //   description: 'Long Term Investment',
    //   amount: 15000,
    // },
    // {
    //   date: 5,
    //   category: 'investment',
    //   type: 'invest',
    //   title: 'Debt',
    //   description: 'Emergency Fund',
    //   amount: 15000,
    // },
    // {
    //   date: 5,
    //   category: 'investment',
    //   type: 'invest',
    //   title: 'Debt',
    //   description: 'Debt Settlement Fund',
    //   amount: 50000,
    // },
    {
      date: 5,
      category: 'expense',
      subCategory: 'expense',
      title: 'Bishi',
      description: ' ',
      amount: 10000,
    },
    {
      date: 5,
      category: 'expense',
      subCategory: 'loan',
      title: 'Home',
      description: 'A-704 - Kashigoan',
      amount: 50000,
    },
    {
      date: 5,
      category: 'expense',
      subCategory: 'loan',
      title: 'Scaler',
      description: 'Master\'s',
      amount: 11500,
    },
    {
      date: 5,
      category: 'expense',
      subCategory: 'loan',
      title: 'Home',
      description: 'H-102 - Borivali',
      amount: 59000,
    },
    {
      date: 5,
      category: 'expense',
      subCategory: 'loan',
      title: 'Gold',
      description: 'Panu',
      amount: 4000,
    },
    // {
    //   date: 5,
    //   category: 'need',
    //   type: 'loan',
    //   title: 'Personal',
    //   description: 'Panu',
    //   amount: 6500,
    // }
];
// for (let i in dailyTimeTable) {
//   const timeTable: any = dailyTimeTable[i];
//   const startTime = moment(timeTable.start, 'HH:mm a');
//   const endTime = moment(timeTable.end, 'HH:mm a');
//   const duration = moment.duration(endTime.diff(startTime)).asMinutes();
//   timeTable['duration'] = duration;
// }

export const budget = items;

import * as moment from 'moment';

const items = [
    {
      date: 1,
      category: 'need',
      type: 'bill',
      title: 'Amma',
      description: 'Daily Expense',
      amount: 10000,
    },
    {
      date: 1,
      category: 'need',
      type: 'bill',
      title: 'Dmart',
      description: 'Daily Expense',
      amount: 5000,
    },
    {
      date: 1,
      category: 'need',
      type: 'personal',
      title: 'Akash',
      description: 'Daily Expense',
      amount: 2500,
    },
    {
      date: 1,
      category: 'need',
      type: 'personal',
      title: 'Panu',
      description: 'Daily Expense',
      amount: 2500,
    },
    {
      date: 1,
      category: 'need',
      type: 'policy',
      title: 'Term Plan',
      description: 'Max Life ',
      amount: 1700,
    },
    {
      date: 1,
      category: 'need',
      type: 'bill',
      title: 'Mobile',
      description: 'Akash Panu and Amma',
      amount: 1300,
    },
    {
      date: 1,
      category: 'need',
      type: 'bill',
      title: 'Fibre',
      description: ' 704 Kashigoan',
      amount: 1200,
    },
    {
      date: 1,
      category: 'need',
      type: 'bill',
      title: 'maintenance',
      description: 'Society maintenance 704 Kashigoan',
      amount: 2700,
    },
    {
      date: 1,
      category: 'need',
      type: 'bill',
      title: 'maintenance',
      description: 'Society maintenance 102 Borivali',
      amount: 2700,
    },
    {
      date: 5,
      category: 'investment',
      type: 'invest',
      title: 'PPF',
      description: 'Child Education',
      amount: 7500,
    },
    {
      date: 5,
      category: 'investment',
      type: 'invest',
      title: 'NPS',
      description: 'Retirement',
      amount: 7500,
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
    {
      date: 5,
      category: 'investment',
      type: 'invest',
      title: 'Debt',
      description: 'Debt Settlement Fund',
      amount: 50000,
    },
    {
      date: 5,
      category: 'want',
      type: 'expense',
      title: 'Bishi',
      description: ' ',
      amount: 10000,
    },
    {
      date: 5,
      category: 'need',
      type: 'loan',
      title: 'Home',
      description: '704 - Kashigoan',
      amount: 50000,
    },
    {
      date: 5,
      category: 'need',
      type: 'loan',
      title: 'Home',
      description: 'Addon 704 - Kashigoan',
      amount: 10000,
    },
    {
      date: 5,
      category: 'need',
      type: 'loan',
      title: 'Home',
      description: '102 - Borivali',
      amount: 61000,
    },
    {
      date: 5,
      category: 'need',
      type: 'loan',
      title: 'Gold',
      description: 'Panu',
      amount: 4000,
    },
    {
      date: 5,
      category: 'need',
      type: 'loan',
      title: 'Personal',
      description: 'Panu',
      amount: 6500,
    }
];
// for (let i in dailyTimeTable) {
//   const timeTable: any = dailyTimeTable[i];
//   const startTime = moment(timeTable.start, 'HH:mm a');
//   const endTime = moment(timeTable.end, 'HH:mm a');
//   const duration = moment.duration(endTime.diff(startTime)).asMinutes();
//   timeTable['duration'] = duration;
// }

export const budget = items;

import * as moment from 'moment';

const dailyTimeTable = [
  {
    start: '07:00 AM',
    end: '07:15 AM',
    type: 'Health',
    title: 'Mediation',
  },
  {
    start: '07:15 AM',
    end: '08:00 AM',
    type: 'Learn',
    title: 'Udemy',
  },
  {
    start: '8:00 AM',
    end: '8:30 AM',
    type: 'Health',
    title: 'Exercise',
  },
  {
    start: '8:30 AM',
    end: '8:31 AM',
    type: 'Drink',
    title: 'Water',
  },
  {
    start: '9:30 AM',
    end: '10:00 AM',
    type: 'Food',
    title: 'Breakfast',
  },
  {
    start: '10:00 AM',
    end: '11:00 AM',
    type: 'Travel',
    title: 'To Office',
  },
  {
    start: '11:00 AM',
    end: '11:01 AM',
    type: 'Drink',
    title: 'Water',
  },
  {
    start: '11:00 AM',
    end: '11:15 AM',
    type: 'Work',
    title: 'Scrum',
  },
  {
    start: '11:15 AM',
    end: '11:30 AM',
    type: 'Work',
    title: 'Organize Todo List',
  },
  {
    start: '11:30 AM',
    end: '12:00 PM',
    type: 'Work',
    title: 'Task 1',
  },
  {
    start: '12:00 PM',
    end: '12:01 PM',
    type: 'Drink',
    title: 'Water',
  },
  {
    start: '2:00 PM',
    end: '2:30 PM',
    type: 'Food',
    title: 'Lunch',
  },
  {
    start: '3:30 AM',
    end: '3:31 AM',
    type: 'Drink',
    title: 'Water',
  },
  {
    start: '6:00 PM',
    end: '6:30 PM',
    type: 'Food',
    title: 'Snack',
  },
  {
    start: '7:30 AM',
    end: '7:31 AM',
    type: 'Drink',
    title: 'Water',
  },
  {
    start: '07:30 AM',
    end: '08:30 AM',
    type: 'Travel',
    title: 'To Home',
  },
  {
    start: '8:30 PM',
    end: '9:00 PM',
    type: 'Food',
    title: 'Dinner',
  },
  {
    start: '10:00 PM',
    end: '10:01 PM',
    type: 'Drink',
    title: 'Water',
  },
  {
    start: '10:00 PM',
    end: '10:30 PM',
    type: 'Learn',
    title: 'Reading',
  },
  {
    start: '10:30 AM',
    end: '10:45 AM',
    type: 'Health',
    title: 'Mediation',
  },
  {
    start: '12:00 AM',
    end: '07:00 AM',
    type: 'Sleep',
    title: 'Sleep',
  },
];

for (let i in dailyTimeTable) {
  const timeTable: any = dailyTimeTable[i];
  const startTime = moment(timeTable.start, 'HH:mm a');
  const endTime = moment(timeTable.end, 'HH:mm a');
  const duration = moment.duration(endTime.diff(startTime)).asMinutes();
  timeTable['duration'] = duration;
}

export const routine = dailyTimeTable;

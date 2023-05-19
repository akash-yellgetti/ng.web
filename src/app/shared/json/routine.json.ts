import * as moment from 'moment';

const dailyTimeTable = [
          
 
  {
    start: "06:15 AM",
    end: "06:30 AM",
    type: "Learn",
    title: "Udemy",
  },
  {
    start: "06:30 AM",
    end: "06:31 AM",
    type: "Drink",
    title: "Water",
  },
  {
    start: "06:30 AM",
    end: "06:45 AM",
    type: "hustle",
    title: "Boil Water",
  },
  {
    start: "06:45 AM",
    end: "7:00 AM",
    type: "Drink",
    title: "Water",
  },
  {
    start: "07:00 AM",
    end: "09:30 AM",
    type: "Learn",
    title: "Scaler",
  },
  // {
  //   start: "8:00 AM",
  //   end: "8:15 AM",
  //   type: "Health",
  //   title: "Walk",
  // },
  // {
  //   start: "8:15 AM",
  //   end: "8:30 AM",
  //   type: "Health",
  //   title: "Bath",
  // },
  // {
  //   start: "8:30 AM",
  //   end: "8:31 AM",
  //   type: "Drink",
  //   title: "Water",
  // },
  // {
  //   start: "8:30 AM",
  //   end: "9:30 AM",
  //   type: "Blank",
  //   title: "",
  // },
  {
    start: "9:30 AM",
    end: "10:00 AM",
    type: "Food",
    title: "Breakfast",
    description: "650 kcal (min: 600, max: 700)",
  },
  {
    start: "10:00 AM",
    end: "10:45 AM",
    type: "Travel",
    title: "To Office",
  },
  {
    start: "10:45 AM",
    end: "11:00 AM",
    type: "Work",
    title: "Scrum",
  },
  
  {
    start: "11:00 AM",
    end: "11:15 AM",
    type: "Work",
    title: "Organize Todo List",
  },
  {
    start: "11:15 AM",
    end: "12:30 PM",
    type: "Work",
    title: "Task 1",
  },
  {
    start: "12:30 PM",
    end: "12:45 PM",
    type: "Drink",
    title: "Water",
  }, 
  {
    start: "12:45 PM",
    end: "02:00 PM",
    type: "Blank",
    title: "",
  },

  // {
  //   start: "01:00 PM",
  //   end: "01:01 PM",
  //   type: "Drink",
  //   title: "Water",
  // },
  // {
  //   start: "01:00 PM",
  //   end: "2:00 PM",
  //   type: "Blank",
  //   title: "",
  // },
  {
    start: "2:00 PM",
    end: "2:30 PM",
    type: "Food",
    title: "Lunch",
    description: " 750 kcal (min: 700, max: 800)",
  },
  {
    start: "2:30 PM",
    end: "4:00 PM",
    type: "Blank",
    title: "",
  },
  // {
  //   start: "3:30 PM",
  //   end: "3:31 PM",
  //   type: "Drink",
  //   title: "Water",
  // },
  // {
  //   start: "3:30 PM",
  //   end: "4:30 PM",
  //   type: "Blank",
  //   title: "",
  // },
  {
    start: "4:30 PM",
    end: "4:31 PM",
    type: "Drink",
    title: "Water",
  },
  {
    start: "4:30 PM",
    end: "5:30 PM",
    type: "Blank",
    title: "",
  },
  {
    start: "5:30 PM",
    end: "5:31 PM",
    type: "Drink",
    title: "Water",
  },
  {
    start: "6:00 PM",
    end: "6:30 PM",
    type: "Food",
    title: "Evening Snack",
    description: "150 kcal (min: 100, max: 200)",
  },
  {
    start: "6:30 PM",
    end: "7:30 PM",
    type: "Blank",
    title: "",
  },
  {
    start: "7:30 PM",
    end: "7:31 PM",
    type: "Drink",
    title: "Water",
  },

  {
    start: "07:30 PM",
    end: "08:30 PM",
    type: "Travel",
    title: "To Home",
  },
  {
    start: "8:30 PM",
    end: "9:00 PM",
    type: "Food",
    title: "Dinner",
    description: "450 kcal (min: 500, max: 700)",
  },
  {
    start: "9:00 PM",
    end: "10:00 PM",
    type: "Blank",
    title: "",
  },
  {
    start: "10:00 PM",
    end: "10:01 PM",
    type: "Drink",
    title: "Water",
  },
  {
    start: "10:00 PM",
    end: "10:30 PM",
    type: "Learn",
    title: "Reading",
  },
  {
    start: "10:30 PM",
    end: "10:45 PM",
    type: "Health",
    title: "Mediation",
  },
  {
    start: "11:00 PM",
    end: "11:01 PM",
    type: "Drink",
    title: "Water",
  },
  {
    start: "12:00 AM",
    end: "07:00 AM",
    type: "Sleep",
    title: "Sleep",
  },
];

const format = 'HH:mm a';
const currentTime = moment(moment().format(format), format);
for (let i in dailyTimeTable) {
  const timeTable: any = dailyTimeTable[i];
  const startTime = moment(timeTable.start, format);
  const endTime = moment(timeTable.end, format);
  const duration = moment.duration(endTime.diff(startTime)).asMinutes();
  const currentSlot = currentTime.isBetween(startTime, endTime);
  timeTable['currentSlot'] = currentSlot;
  timeTable['duration'] = duration;
}

export const routine = dailyTimeTable;

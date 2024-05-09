import { Component, OnInit } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import * as _ from 'lodash';
@Component({
  selector: 'app-routine-scheduler',
  templateUrl: './routine-scheduler.component.html',
  styleUrls: ['./routine-scheduler.component.scss']
})
export class RoutineSchedulerComponent {
  updateFlag: any = 0;
  public pieChartOptions: any = { 
    
    chart: {
        type: 'pie',
        renderTo: 'pie-chart-container'
    },
    title: {
        text: 'Browser Market Share'
    },
    series: [{
        name: 'Investment',
        data: []
    }],
    plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name} ({point.y}) </b>: {point.percentage:.1f} %'
          }
      }
  },
  legend: {
      enabled: true,
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 1
  }
};;
  SelectionType = SelectionType;
  form: any = {
    dayStartTime: {
      value: '05:30'
    },
    startTime: {
      value: '05:30'
    },
    title: {
      value: "Task 1"
    },
    duration: {
      value: 15
    }
  }
  startTime: string = '05:30';
  tasks: any[] =  [
    { title: "Morning Walk", type: 'Health',duration: 15 },
    { title: "Morning Meditation", type: 'Health', duration: 15 },
    { title: "Water", type: 'Water', duration: 5 },
    // { title: "Scaler", duration: 150 },
    { title: "Exercise #1", type: 'Health', duration: 20 },
    { title: "Drink Salt Water",  type: 'Water', duration: 15 },
    // { title: "Exercise #2", duration: 45 },
    { title: "Scaler", type: 'Learn', duration: 150 },
    { title: "Prep Breakfast",  type: 'Food', duration: 10 },
    { title: "Morning Bath", type: 'Routine', duration: 15 },
    { title: "Breakfast",  type: 'Food', duration: 10 },
    { title: "Home To Metro", type: 'Routine', duration: 15 },
    { title: "Metro", type: 'Routine', duration: 40 },
    { title: "Office To Metro", type: 'Routine', duration: 20 },
    { title: "Work #1", type: 'Work', duration: 60 },
    { title: "Hydrate #2", type: 'Water', duration: 5 },
    { title: "Work #2", type: 'Work', duration: 60 },
    { title: "Hydrate #3", type: 'Water', duration: 5 },
    { title: "Work #3", type: 'Work', duration: 50 },
    { title: "Lunch", type: 'Food', duration: 30 },
    { title: "Nap", type: 'Break', duration: 15 },
    { title: "Break", type: 'Break',  duration: 15 },
    { title: "Work #5: Scrum", type: 'Work', duration: 45 },
    { title: "Break", type: 'Break', duration: 15 },
    { title: "Hydrate #4", type: 'Water',duration: 5 },
    { title: "Work #3", type: 'Work', duration: 80 },
    { title: "Break", type: 'Break',  duration: 30 },
    { title: "Hydrate #4", type: 'Water', duration: 5 },
    { title: "Work #3", type: 'Work', duration: 60 },
    { title: "Metro To Office", type: 'Work', duration: 20 },
    { title: "Metro", type: 'Work', duration: 40 },
    { title: "Metro To Home", type: 'Work', duration: 15 },
    { title: "Freshen Up", type: 'Routine', duration: 15 },
    { title: "Dinner", type: 'Food', duration: 15 },
    { title: "Dish Cleaning", type: 'Routine', duration: 10 },
    { title: "Reading", type: 'Learn', duration: 15 },
    { title: "Next Day Prep", type: 'Learn',  duration: 45 },
    { title: "Set Bed", type: 'Routine', duration: 15 },
    { title: "Night Bath", type: 'Personal-Care', duration: 15 },
    { title: "Facial Care", type: 'Personal-Care', duration: 10 },
    { title: "Hair Care", type: 'Personal-Care', duration: 10 },
    { title: "Skin Care", type: 'Personal-Care', duration: 10 },
    { title: "Night Meditation", type: 'Health', duration: 15 },
    { title: "Sleep", type: 'Sleep', duration: 420 },  
];
public columns: any = [
  {
    'name': 'title',
    'title': 'title',
    'data': 'title',
  },{
    'name': 'type', 
    'title': 'type', 
    'data': 'type', 
  },{
    'name': 'duration', 
    'title': 'duration', 
    'data': 'duration', 
  }, {
  'name': 'startTime',
  'title': 'startTime',
  'data': 'startTime',
},{
  'name': 'endTime', 
  'title': 'endTime', 
  'data': 'endTime', 
} 

];
selected: any = [];
  schedule: any[] = [];

  addTask() {
    this.tasks.push({ title: new Date().getTime(), duration: 15 });
    console.log(this.tasks)
  }

  calculate() {
    const _startTime = this.form.dayStartTime.value;
    const startTimeParts = _startTime.split(':').map(Number);
    const startTime = new Date(0, 0, 0, startTimeParts[0], startTimeParts[1]);
    let currentTime = new Date(startTime);
    let nowTime = new Date(0, 0, 0, new Date().getHours(), new Date().getMinutes());

    this.schedule = [];

    // this.tasks.forEach(task => {
    //   const endTime = new Date(currentTime.getTime() + task.duration * 60000);
    //   this.schedule.push({ ...task, startTime: this.formatTime(currentTime), endTime: this.formatTime(endTime) });
    //   currentTime = endTime;
    // });
    this.tasks.forEach(task => {
      const endTime = new Date(startTime.getTime() + task.duration * 60000);
      const isRunning = nowTime >= startTime && nowTime <= endTime;
      const d = { ...task, startTime: this.formatTime(startTime), endTime: this.formatTime(endTime), isRunning };
      this.schedule.push(d);
      if(isRunning) {
        this.selected.push(d)
      }
      startTime.setTime(endTime.getTime());
    });

    const groupBy = _.reduce(_.groupBy(this.schedule, 'type'), (arr: any, value, key) => {

      arr.push({ name: key, y: _.sumBy(value, 'duration') });

      return arr;
    }, []);
    this.pieChartOptions.series[0].data = groupBy;
    this.updateFlag = !this.updateFlag;
    console.log(groupBy)
  }

  formatTime(date: Date): string {
    return date.toTimeString().slice(0, 5);
  }

  onSelect({ selected } : any) {
    console.log('Select Event', selected, this.selected);
  }
}

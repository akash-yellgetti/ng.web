import { Component, OnInit } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-routine-scheduler',
  templateUrl: './routine-scheduler.component.html',
  styleUrls: ['./routine-scheduler.component.scss']
})
export class RoutineSchedulerComponent {
  SelectionType = SelectionType;
  form: any = {
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
    { title: "Morning Walk", duration: 15 },
    { title: "Morning Meditation", duration: 15 },
    { title: "Water", duration: 5 },
    // { title: "Scaler", duration: 150 },
    { title: "Exercise #1", duration: 20 },
    { title: "Drink Salt Water", duration: 15 },
    // { title: "Exercise #2", duration: 45 },
    { title: "Scaler", duration: 150 },
    { title: "Prep Breakfast", duration: 10 },
    { title: "Morning Bath", duration: 15 },
    { title: "Breakfast", duration: 10 },
    { title: "Home To Metro", duration: 15 },
    { title: "Metro", duration: 40 },
    { title: "Office To Metro", duration: 20 },
    { title: "Work #1", duration: 60 },
    { title: "Hydrate #2", duration: 5 },
    { title: "Work #2", duration: 60 },
    { title: "Hydrate #3", duration: 5 },
    { title: "Work #3", duration: 50 },
    { title: "Lunch", duration: 30 },
    { title: "Nap", duration: 15 },
    { title: "Break", duration: 15 },
    { title: "Work #5: Scrum", duration: 45 },
    { title: "Break", duration: 15 },
    { title: "Hydrate #4", duration: 5 },
    { title: "Work #3", duration: 80 },
    { title: "Break", duration: 30 },
    { title: "Hydrate #4", duration: 5 },
    { title: "Work #3", duration: 60 },
    { title: "Metro To Office", duration: 20 },
    { title: "Metro", duration: 40 },
    { title: "Metro To Home", duration: 15 },
    { title: "Freshen Up", duration: 15 },
    { title: "Dinner", duration: 15 },
    { title: "Dish Cleaning", duration: 10 },
    { title: "Reading", duration: 15 },
    { title: "Next Day Prep", duration: 45 },
    { title: "Set Bed", duration: 15 },
    { title: "Night Bath", duration: 15 },
    { title: "Facial Care", duration: 10 },
    { title: "Hair Care", duration: 10 },
    { title: "Skin Care", duration: 10 },
    { title: "Night Meditation", duration: 15 },
    { title: "Sleep", duration: 420 },  
];
public columns: any = [
  {
    'name': 'title',
  },{
    'name': 'duration', 
  }, {
  'name': 'startTime',
},{
  'name': 'endTime', 
} 

];
selected: any = [];
  schedule: any[] = [];

  addTask() {
    this.tasks.push({ title: new Date().getTime(), duration: 15 });
    console.log(this.tasks)
  }

  calculateSchedule() {
    this.startTime = this.form.startTime.value;
    const startTimeParts = this.startTime.split(':').map(Number);
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
  }

  formatTime(date: Date): string {
    return date.toTimeString().slice(0, 5);
  }

  onSelect({ selected } : any) {
    console.log('Select Event', selected, this.selected);
  }
}

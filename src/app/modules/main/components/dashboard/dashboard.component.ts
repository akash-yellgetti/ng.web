import { Component, OnInit } from '@angular/core';
import { slides } from 'src/app/shared/json/dashboard/slides.json';
import { ModuleService } from '../../core/services/module.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataArray: any = [
    {
      id: 20, title: 'Match', desc: 'BL Match',
      startDate: new Date(), endDate: new Date(), createdBy: 'Mark',
      createdAt: new Date("2019-11-10T10:00:00"), type: 2, color: 'red'
    },

  ];;
  slides: any = [];
  circumference = 2 * Math.PI * 50;
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "arrows": false };
  notes: any[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
  products = [
    {
      title: 'Start Your Financial Plan',
      description: 'description',
    },
    {
      title: 'Start Your Income Tax Saving',
      description: 'description',
    },
    {
      title: 'Explore Stocks',
      description: 'description',
    },
    {
      title: 'Learn basic rules of Financial Planning ' ,
      description: 'description',
    }
  ]
  contentCatergory = [
    {
      title: 'Insurance',
      description: '',
      children:  [
        {
          title: 'Home',
          description: '',
          icon: 'icon-home-01'
        },
        {
          title: 'Health',
          description: '',
        },
        {
          title: 'Life',
          description: '',
        }
      ]
    },
    {
      title: 'Loan',
      description: '',
      children:  [
        {
          title: 'Home',
          description: '',
          icon: 'icon-home-01'
        },
        {
          title: 'Business',
          description: '',
          icon: 'icon-business-01'
        },
        {
          title: 'Personal',
          description: '',
        },
        {
          title: 'Eduction',
          description: '',
        },
        {
          title: 'Mortgage',
          description: '',
        },
        {
          title: 'Gold',
          description: '',
        }
         
      ]
    },
    {
      title: 'Share Market',
      description: '',
      children:  [
        {
          title: 'Stocks',
          description: '',
        },
        {
          title: 'Multual Fund',
          description: '',
        },
        {
          title: 'Futures',
          description: '',
        },
        {
          title: 'Options Trading',
          description: '',
        }
      ]
    },
    {
      title: 'Goal',
      description: '',
      children:  [
        {
          title: 'Retirement',
          description: '',
        },
        {
          title: 'Child Education',
          description: '',
        },
        {
          title: 'Marriage',
          description: '',
        },
        {
          title: 'High Education',
          description: '',
        },
        {
          title: 'New House',
          description: '',
        },
        {
          title: 'Emergency Fund',
          description: '',
        }
      ]
    },
    {
      title: 'Investment',
      description: '',
      children:  [
        {
          title: 'ePF',
          description: '',
        },
        {
          title: 'Stocks',
          description: '',
        },
        {
          title: 'MF',
          description: '',
        },
        {
          title: 'PPF',
          description: '',
        },
        {
          title: 'NPS',
          description: '',
        },
        
        {
          title: 'FD',
          description: '',
        },
        {
          title: 'RD',
          description: '',
        },
        {
          title: 'Property',
          description: '',
        },
        {
          title: 'Gold',
          description: '',
        }
      ]
    }
  ]

  courses = [
    {
      title: "Basics of Personal Finance",
      description: "Learn the basic of money in 5 minutes",
    },
    {
      title: "7 Baby Steps To Finance Freedom",
      description: "Learn the basic of money in 5 minutes",
    },
    {
      title: "Financial independence, retire early (FIRE)",
      description: "Learn the basic of money in 5 minutes",
    }
  ]

  constructor(public moduleService: ModuleService) {
    this.moduleService.mainTitle.next("Dashboard");
    this.slides = slides;
    
  }

  ngOnInit(): void {
  }

  calc(value: any) {
    const progress = value / 100;
    return this.circumference * (1 - value);
  }

  selectDay = (evt: any) => {
    console.log(evt);
  }

  addEvent = (evt: any) => {
    console.log(evt);
  }

}

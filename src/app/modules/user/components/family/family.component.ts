import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { ModuleService } from '../../../main/core/services/module.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FamilyComponent implements OnInit {
  public maxSize: number = 7;
  page = 1;
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 3,
    currentPage: 1
  };
  public tabs = [
    {
      code: 'profile',
      name: 'Profile',
      link: '/main/user/profile'
    },
    {
      code: 'family',
      name: 'Family',
      link: '/main/user/family'
    },
    {
      code: 'vehicle',
      name: 'Vehicle',
      link: '/main/user/vehicle'
    },
    {
      code: 'visitor',
      name: 'Visitor',
      link: '/main/user/visitor'
    },
    {
      code: 'vendor',
      name: 'Vendor',
      link: '/main/user/vendor'
    },
    {
      code: 'payment',
      name: 'Payment',
      link: '/main/user/payment'
    }
  ];
  showGrid = false;
  sortBy = 'sort';
  public columns: any = [
  {
    'title': '',
    'name': 'user_img',
  }, {
    'title': 'Name',
    'name': 'username',
  },{
    'title': 'Date of birth',
    'name': 'dob', 
  },{
    'title': 'Gender',
    'name': 'gender', 
  },{
    'title': 'Telephone',
    'name': 'telephone', 
  },{
    'title': 'Actions',
    'name': 'actions',
  }
  ];
  public familyList: any = [
    {
      "user_img": "cv",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453683",
      "actions": "",
    },
    {
      "user_img": "ay",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453684",
      "actions": "",
    },
    {
      "user_img": "cv",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453685",
      "actions": "",
    },
    {
      "user_img": "cv",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453683",
      "actions": "",
    },
    {
      "user_img": "ay",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453684",
      "actions": "",
    },
    {
      "user_img": "cv",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453685",
      "actions": "",
    },
    {
      "user_img": "cv",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453683",
      "actions": "",
    },
    {
      "user_img": "ay",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453684",
      "actions": "",
    },
    {
      "user_img": "cv",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453685",
      "actions": "",
    },
    {
      "user_img": "cv",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453683",
      "actions": "",
    },
    {
      "user_img": "ay",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453684",
      "actions": "",
    },
    {
      "user_img": "cv",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453685",
      "actions": "",
    },
    {
      "user_img": "cv",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453683",
      "actions": "",
    },
    {
      "user_img": "ay",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453684",
      "actions": "",
    },
    {
      "user_img": "cv",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453685",
      "actions": "",
    },
    {
      "user_img": "cv",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453683",
      "actions": "",
    },
    {
      "user_img": "ay",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453684",
      "actions": "",
    },
    {
      "user_img": "cv",
      "username": "Chirag Vartak",
      "dob": "26-09-1991",
      "gender": "Male",
      "telephone": "7276453685",
      "actions": "",
    }
  ]

  constructor(private router: Router, public moduleService: ModuleService) { 
    this.moduleService.mainTitle.next("Profile");
  }

  

  ngOnInit(): void {
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  redirect = (route: any) => {
    const navigationExtras: NavigationExtras = {
      state: {
        refresh: new Date().getTime()
      }
    }
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([route.link], navigationExtras));
  }

}

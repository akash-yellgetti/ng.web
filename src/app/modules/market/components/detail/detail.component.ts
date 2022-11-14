import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoneyControlService } from '../../services/money-control/money-control.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  
  public data: any = null;
  constructor(private activatedRoute: ActivatedRoute, private moneyControl: MoneyControlService) {
    this.data = this.activatedRoute.snapshot.data.stock.data;
    
    
  }
 
  ngOnInit(): void {
    this.moneyControl.intraday("IOC").subscribe((r) => {
      console.log(r)
    })
    console.log(
      'Activated route data in Component:::',
      
    );
      console.log(this.data)
    // this.activatedRoute.st.subscribe((response: any) => {
    //   console.log('PRODUCT FETCHING', response);
      
    // });
  }

}

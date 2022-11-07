import {Component, OnInit} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';
import { MoneyControlService } from '../../services/money-control/money-control.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  public data = {
    share: {},
    search: {
      text: new UntypedFormControl('')
    }
  }
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: any;

  constructor(public router:Router, public activatedRoute: ActivatedRoute, private moneyControl: MoneyControlService) { }

  ngOnInit() {
    const control = this.data.search.text;
    this.filteredOptions = control.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
            return this._filter(val || '')
       }) 
    )
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

  _filter(val: string): any {

    return this.moneyControl.search(val)
     .pipe(
       map((response: any) => {
        return response
      })
     )
   }  

  

 
   getOption = (stock: any) => {
    
    this.moneyControl.info(stock).subscribe((res) => {
      this.data.share = res.data;
      const symbol = res.data.symbol;
      // this.router.navigate([symbol, 'detail'], {relativeTo: this.activatedRoute,  state: {refresh: new Date().getTime()}});
      this.router.navigateByUrl('/main/market/stock/'+symbol+'/detail')
    })
  }

}

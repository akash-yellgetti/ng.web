import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
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
      text: new FormControl('')
    }
  }
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: any;

  constructor(private moneyControl: MoneyControlService) { }

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
    })
  }

}

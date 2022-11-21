import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
// import { ColumnMode, SortType } from '@swimlane/ngx-datatable/public-api';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog/dialog.component';
import { emiCalculator } from 'src/app/shared/json/emi-calculator.json';
import { user } from 'src/app/shared/json/user.json';
import { EmiCalculatorService } from 'src/app/shared/services/emi-calculator/emi-calculator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  ColumnMode = ColumnMode;
  SortType = SortType;

  rows: any = [];
  columns = [
    {
      name: 'month',
    },
    {
      name: 'interestAmount',
    },
    {
      name: 'principalAmount',
    },
    {
      name: 'totalAmount',
    },
    {
      name: 'remainingAmount',
    }
  ];
  constructor(public dialog: MatDialog, public emiCalculatorService: EmiCalculatorService) {}

  ngOnInit(): void {
  }


  createDialog = () => {
    const dialogRef = this.dialog.open(DialogComponent, { data: emiCalculator, width: '100%' });

    dialogRef.afterClosed().subscribe((result: any) => {
      // console.log(result)
      const data = this.emiCalculatorService.calculate(result.amount, result.rateOfInterest, result.noOfMonths)
      this.rows = data.iterationOfEmis;
      console.log(this.rows);
      // console.log(data);
      
      // console.log(`Dialog result: ${result}`);
    });
  }
}

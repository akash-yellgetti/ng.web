import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
// import { ColumnMode, SortType } from '@swimlane/ngx-datatable/public-api';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog/dialog.component';
import { countries } from 'src/app/shared/json/charts.json';
import { emiCalculator } from 'src/app/shared/json/emi-calculator.json';
import { user } from 'src/app/shared/json/user.json';
import { EmiCalculatorService } from 'src/app/shared/services/emi-calculator/emi-calculator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Card View Demo';

  gridColumns = 4;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
  tiles: any = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  single: any[] = countries;
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

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
    const data = this.emiCalculatorService.calculate(1000000, 10.5, 120)
      this.rows = data.iterationOfEmis;
      console.log(this.rows);
      // console.log(data);

      this.single = [
        {
          "name": "Principal",
          "value": data.principalAmount
        },
        {
          "name": "Interest",
          "value": data.totalInterestAmount
        },
      ]
  }


  createDialog = () => {
    const dialogRef = this.dialog.open(DialogComponent, { data: emiCalculator, width: '100%' });

    dialogRef.afterClosed().subscribe((result: any) => {
      // console.log(result)
      const data = this.emiCalculatorService.calculate(result.amount, result.rateOfInterest, result.noOfMonths)
      this.rows = data.iterationOfEmis;
      console.log(this.rows);
      // console.log(data);

      this.single = [
        {
          "name": "Principal",
          "value": data.principalAmount
        },
        {
          "name": "Interest",
          "value": data.totalInterestAmount
        },
      ]
      
      // console.log(`Dialog result: ${result}`);
    });
  }
}

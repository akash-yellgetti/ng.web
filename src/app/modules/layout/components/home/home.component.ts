import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  constructor(public dialog: MatDialog, public emiCalculatorService: EmiCalculatorService) {}

  ngOnInit(): void {
  }


  createDialog = () => {
    const dialogRef = this.dialog.open(DialogComponent, { data: emiCalculator, width: '100%' });

    dialogRef.afterClosed().subscribe((result: any) => {
      // console.log(result)
      const data = this.emiCalculatorService.calculate(result.amount, result.rateOfInterest, result.noOfMonths)
      console.log(data);
      // console.log(`Dialog result: ${result}`);
    });
  }
}

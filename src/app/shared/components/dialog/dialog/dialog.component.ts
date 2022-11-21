import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { FieldService } from 'src/app/shared/services/field/field.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(
    private cdr: ChangeDetectorRef,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private fieldService: FieldService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'always';
  }

  save = () => {
    const json = this.fieldService.json(this.data.fields);
    // console.log(json)
    // console.log(this.data.fields)
    this.dialogRef.close(json)
  }

}

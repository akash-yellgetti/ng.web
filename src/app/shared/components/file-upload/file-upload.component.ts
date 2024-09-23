import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.formGroup.patchValue({
        [this.controlName]: file
      });
    }
  }

  get fileControl(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;  // Type assertion
  }
}

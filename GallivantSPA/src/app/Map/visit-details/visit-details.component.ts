import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Visit } from 'src/app/Models/visit.model';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.css']
})
export class VisitDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<VisitDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Visit,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

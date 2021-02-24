import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-more-info-dialog',
  templateUrl: './more-info-dialog.component.html',
  styleUrls: ['./more-info-dialog.component.scss']
})
export class MoreInfoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MoreInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
  }

  onMentes(): void {
    this.dialogRef.close();
  }

  onNoClose(){
    this.dialogRef.close();
  }

}

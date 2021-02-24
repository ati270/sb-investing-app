import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-calendar-dialog',
  templateUrl: './confirm-delete-calendar-dialog.component.html',
  styleUrls: ['./confirm-delete-calendar-dialog.component.scss']
})
export class ConfirmDeleteCalendarDialogComponent implements OnInit {

  ok: boolean;

  constructor(public dialogRef: MatDialogRef<ConfirmDeleteCalendarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.disableClose = true;
  }


  ngOnInit(): void {

    this.ok = false;
  }

  torles(){
    this.ok = true;
    this.dialogRef.close(this.ok);
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-confirm-uj-cel-dialog',
  templateUrl: './confirm-uj-cel-dialog.component.html',
  styleUrls: ['./confirm-uj-cel-dialog.component.scss']
})
export class ConfirmUjCelDialogComponent implements OnInit {

  isYesorNo: boolean;

  constructor(public dialogRef: MatDialogRef<ConfirmUjCelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.isYesorNo = false;
  }

  noUjCel(){
    this.isYesorNo = false;
    this.dialogRef.close();
  }

  ujCel(){
    this.isYesorNo = true;
    this.dialogRef.close(this.isYesorNo);
  }
}

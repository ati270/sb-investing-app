import { Component, OnInit, Inject, Output, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-add-eredmeny-dialog',
  templateUrl: './add-eredmeny-dialog.component.html',
  styleUrls: ['./add-eredmeny-dialog.component.scss']
})
export class AddEredmenyDialogComponent implements OnInit {

  @ViewChild('input')
  input: ElementRef;

  constructor(public dialogRef: MatDialogRef<AddEredmenyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onMentes(): void {
      this.dialogRef.close(this.input.nativeElement.value);
    }

    
  ngOnInit(): void {
  }

}

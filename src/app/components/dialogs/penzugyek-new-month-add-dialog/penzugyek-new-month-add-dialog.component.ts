import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-penzugyek-new-month-add-dialog',
  templateUrl: './penzugyek-new-month-add-dialog.component.html',
  styleUrls: ['./penzugyek-new-month-add-dialog.component.scss']
})
export class PenzugyekNewMonthAddDialogComponent implements OnInit {

  osszHonapok: string[] = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december']
  maradekHonapok: string[] = [];
  selected: string;

  constructor(public dialogRef: MatDialogRef<PenzugyekNewMonthAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<string>) { }

  ngOnInit(): void {

    this.modifiedHonapok();
  }

  modifiedHonapok(){
    let isVolt = false;

    for(let i = 0; i<this.osszHonapok.length;i++){
      isVolt = false;
      // Megjünk végig a kitörölt listán és azokat ne engedjük bele
      for(let j = 0; j< this.data.length;j++){
          // ha a szám benne van -akkor az volt már és nem kerülhet bele
          if(this.data.includes(this.osszHonapok[i] + "")){
              isVolt = true;
          }
      }
      if(!isVolt){
        this.maradekHonapok.push(this.osszHonapok[i] + "");
      }
    }

  }

  onMentes(value: string): void {
    this.selected = value;

    this.dialogRef.close(this.selected);
  }

  

}

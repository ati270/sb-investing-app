import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-penzugyek-new-year-add-dialog',
  templateUrl: './penzugyek-new-year-add-dialog.component.html',
  styleUrls: ['./penzugyek-new-year-add-dialog.component.scss']
})
export class PenzugyekNewYearAddDialogComponent implements OnInit {

  selected: string;
  evek: string[];
  fromYear = 1980;
  
  constructor(public dialogRef: MatDialogRef<PenzugyekNewYearAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<string>) { }

  ngOnInit(): void {
    this.evek = new Array();
    this.filledEvek();
  }

  filledEvek(){
   let actualYear = new Date().getFullYear(); 
    let isVolt = false;
    for(let i= actualYear; i>= this.fromYear; i--){
        isVolt = false;
      // Megjünk végig a kitörölt listán és azokat ne engedjük bele
      for(let j = 0; j< this.data.length;j++){
          // ha a szám benne van -akkor az volt már és nem kerülhet bele
          if(this.data.includes(i + "")){
              isVolt = true;
          }
      }
      if(!isVolt){
        this.evek.push(i + "");
      }
    }
  }

  onMentes(value: string): void {
    this.selected = value;

    let index = this.evek.indexOf(this.selected);
    let removed = this.evek.splice(index, 1);

    this.dialogRef.close(this.selected);
  }


}

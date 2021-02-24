import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Inject } from '@angular/core';
import { Feladat } from 'src/app/models/celok/feladatok/feladat.model';

@Component({
  selector: 'app-add-datetime-dialog',
  templateUrl: './add-datetime-dialog.component.html',
  styleUrls: ['./add-datetime-dialog.component.scss']
})
export class AddDatetimeDialogComponent implements OnInit {

  feladatFormGroup: FormGroup;
  sendFeladat: Feladat;
  startTime: string;
  endTime: string;
  title;
  colors: string[] = ['red', 'orange', 'blue', 'violet'];
  selectedColor: string;


  constructor(public dialogRef: MatDialogRef<AddDatetimeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public feladat: Feladat,
    public fb: FormBuilder) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.createFormGroup();
    this.sendFeladat = this.feladat;
    this.title = this.feladat.$title;
  }

  createFormGroup() {

    this.feladatFormGroup = this.fb.group({
        startCtrl: new FormControl('', Validators.required),
        endCtrl: new FormControl('', Validators.required),
    });

    // A kpott feladatot ki kell egészitnei a dátummal és visszaküldeni: készen van: besolorás, határidő, title
    // hozzáadni: A datumot

  }

  setColor(besorolas: string, hatarido: string) {

    console.log(besorolas);
    console.log(hatarido);
    if (besorolas === 'fontos' && hatarido === 'sürgős') {
        this.selectedColor = this.colors[0];
    }
    else if(besorolas === 'kevésbé fontos' && hatarido === 'sürgős'){
        this.selectedColor = this.colors[1];
    }

    else if(besorolas === 'fontos' && hatarido === 'kevésbé sürgős'){
      this.selectedColor = this.colors[2];
  }
  else if(besorolas === 'kevésbé fontos' && hatarido === 'kevésbé sürgős'){
    this.selectedColor = this.colors[3];
}
  }

  submitFeladat(){
    const startTime = this.feladatFormGroup.get('startCtrl').value;
    const endTime = this.feladatFormGroup.get('endCtrl').value;

    this.setColor(this.sendFeladat.$besorolas, this.sendFeladat.$hatarido);
    this.sendFeladat.$color = this.selectedColor;

    this.sendFeladat.start = startTime;
    this.sendFeladat.end = endTime;

    this.dialogRef.close(this.sendFeladat);
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Feladat } from 'src/app/models/celok/feladatok/feladat.model';

@Component({
  selector: 'app-add-bes-hat-dialog',
  templateUrl: './add-bes-hat-dialog.component.html',
  styleUrls: ['./add-bes-hat-dialog.component.scss']
})
export class AddBesHatDialogComponent implements OnInit {

  besorolasFormGroup: FormGroup;


  besorolasok: string[] = ['fontos', 'kevésbé fontos'];
  hataridok: string[] = ['sürgős', 'kevésbé sürgős'];
  colors: string[] = ['warn', 'accent', 'primary', 'violet'];
  selectedColor: string;



  feladat: Feladat;

  constructor(public dialogRef: MatDialogRef<AddBesHatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public title: string,
    public fb: FormBuilder) {
      dialogRef.disableClose = true;
     }

  ngOnInit(): void {
    this.feladat = new Feladat();
    this.createBesorolasFromGroup();
  }

  createBesorolasFromGroup() {
    this.besorolasFormGroup = this.fb.group({
      hataridoCtrl: new FormControl('', Validators.required),
      besorolasCtrl: new FormControl('', Validators.required)
    });
  }

  // set color
  setColor(besorolas: string, hatarido: string) {

    console.log(besorolas);
    console.log(hatarido);
    if (besorolas === 'fontos' && hatarido === 'sürgős') {
      this.selectedColor = this.colors[0];
    }
    else if (besorolas === 'kevésbé fontos' && hatarido === 'sürgős') {
      this.selectedColor = this.colors[1];
    }

    else if (besorolas === 'fontos' && hatarido === 'kevésbé sürgős') {
      this.selectedColor = this.colors[2];
    }
    /*
    else if (besorolas === 'kevésbé fontos' && hatarido === 'kevésbé sürgős') {
      this.selectedColor = this.colors[3];
    }*/
  }

  submitBesorolasHatarido() {
    const bes = this.besorolasFormGroup.get('besorolasCtrl').value;
    const hatarido = this.besorolasFormGroup.get('hataridoCtrl').value;

    this.setColor(bes, hatarido);

    this.feladat.$besorolas = bes;
    this.feladat.$hatarido = hatarido;
    this.feladat.$color = this.selectedColor;

    this.dialogRef.close(this.feladat);
  }

}

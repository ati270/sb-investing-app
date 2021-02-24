import { Feladat } from './../../../models/celok/feladatok/feladat.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EventInput } from '@fullcalendar/angular';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-add-event-to-calendar',
  templateUrl: './add-event-to-calendar.component.html',
  styleUrls: ['./add-event-to-calendar.component.scss']
})
export class AddEventToCalendarComponent implements OnInit {

  eventFormGroup: FormGroup;
  sendFeladat: Feladat;

  besorolasok: string[] = ['fontos', 'kevésbé fontos'];
  hataridok: string[] = ['sürgős', 'kevésbé sürgős'];
  colors: string[] = ['red', 'orange', 'blue', 'violet'];
  selectedColor: string;

  constructor(public dialogRef: MatDialogRef<AddEventToCalendarComponent>,
    @Inject(MAT_DIALOG_DATA) public feladat: Feladat,
    public fb: FormBuilder) { }

  ngOnInit(): void {

    this.createFromGroup();
    this.sendFeladat = new Feladat();
  }

  createFromGroup() {
    this.eventFormGroup = this.fb.group({
      eventMegnevezesCtrl: new FormControl('', Validators.required),
      besorolasCtrl: new FormControl('', Validators.required),
      hataridoCtrl: new FormControl('', Validators.required),
        startCtrl: new FormControl('', Validators.required),
        endCtrl: new FormControl('', Validators.required)
    });
  }

  setColor() {

    const besorolas = this.eventFormGroup.get('besorolasCtrl').value;
    const hatarido = this.eventFormGroup.get('hataridoCtrl').value;

    console.log(besorolas);
    console.log(hatarido);
    if (besorolas === 'fontos' && hatarido === 'sürgős') {
        this.selectedColor = this.colors[0];
    }
    else if (besorolas === 'kevésbé fontos' && hatarido === 'sürgős'){
        this.selectedColor = this.colors[1];
    }

    else if (besorolas === 'fontos' && hatarido === 'kevésbé sürgős'){
      this.selectedColor = this.colors[2];
  }
  else if (besorolas === 'kevésbé fontos' && hatarido === 'kevésbé sürgős'){
    this.selectedColor = this.colors[3];
}
  }

  saveEvent() {
    const startTime = this.eventFormGroup.get('startCtrl').value;
    const endTime = this.eventFormGroup.get('endCtrl').value;
    const title = this.eventFormGroup.get('eventMegnevezesCtrl').value;
    const besorolas = this.eventFormGroup.get('besorolasCtrl').value;
    const hatarido = this.eventFormGroup.get('hataridoCtrl').value;

    this.setColor();
    this.sendFeladat.$color = this.selectedColor;

    this.sendFeladat.start = startTime;
    this.sendFeladat.end = endTime;

    this.sendFeladat.$title = title;

    this.sendFeladat.$besorolas = besorolas;
    this.sendFeladat.$hatarido = hatarido;

    this.dialogRef.close(this.sendFeladat);
  }


}

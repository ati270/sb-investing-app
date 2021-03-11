import { ConfirmDeleteCalendarDialogComponent } from './../../dialogs/confirm-delete-calendar-dialog/confirm-delete-calendar-dialog.component';
import { AddDatetimeDialogComponent } from './../../dialogs/add-datetime-dialog/add-datetime-dialog.component';
import { AddBesHatDialogComponent } from './../../dialogs/add-bes-hat-dialog/add-bes-hat-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AddEventToCalendarComponent } from './../../dialogs/add-event-to-calendar/add-event-to-calendar.component';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChip, MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { CalendarOptions, EventInput, EventSourceInput, FullCalendarComponent } from '@fullcalendar/angular';
import huLocale from '@fullcalendar/core/locales/hu';
import { Feladat } from 'src/app/models/celok/feladatok/feladat.model';
import * as $ from 'jquery';


/*export interface EventData {
  title: string;
  start: string;
  end: string;
  besorolas?: string;
  hatarido?: string;
  color?: string;
}*/

@Component({
  selector: 'app-celkituzes',
  templateUrl: './celkituzes.component.html',
  styleUrls: ['./celkituzes.component.scss']
})
export class CelkituzesComponent implements OnInit {

  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;
  @ViewChild("chipList") chipList: MatChipList;
  @ViewChild('chip') chip: MatChip;
  @ViewChild('feladatTitle') feladatTitle: ElementRef;
  @ViewChild('lezarBtn') lezartBtn: ElementRef;

  selectedColor;
  // FormGroups
  celkituzesFormGroup: FormGroup;
  haviTervFormGroup: FormGroup;
  vizsgalatFromGroup: FormGroup;
  vizsgalatArr: FormArray;


  // Arrays
  celEleresiNehezseg: string[] = ['könnyű', 'közepes', 'nehéz', 'nagyon nehéz'];
  celElerhetoE: string[] = ['igen', 'nem', 'nem tudom'];
  celKituzesOka: string[] = ['saját igényeimet elégítem ki', 'mások igényeit elégítem ki'];
  celIgenyek: string[] = ['van rá igény', 'nincs ráigény, de én el akarom érni',
    'nem néztem utána, hogy van-e rá igény'];
  celBesorolasok: string[] = ['fontos', 'kevésbé fontos'];
  celHataridok: string[] = ['sürgős', 'kevésbé sürgős'];
  private haviSzintuFeladatok: Feladat[] = [];

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  osszChips: string[] = [];
  elofeltetelek: string[] = [];
  segitsegek: string[] = [];
  akadalyok: string[] = [];
  specialisTudas: string[] = [];
  targyak: string[] = [];
  akadalyFeladatok: string[] = [];
  penzek: string[] = [];
  lepesek1: string[] = [];
  lepesek2: string[] = [];
  lepesek3: string[] = [];
  lepesek4: string[] = [];
  lepesek5: string[] = [];
  lepesek6: string[] = [];
  lepesek7: string[] = [];
  lepesek8: string[] = [];
  lepesek9: string[] = [];
  lepesek10: string[] = [];
  lepesek11: string[] = [];
  lepesek12: string[] = [];
  lepesek13: string[] = [];
  lepesek14: string[] = [];
  lepesek15: string[] = [];
  lepesek16: string[] = [];
  lepesek17: string[] = [];
  lepesek18: string[] = [];
  lepesek19: string[] = [];
  lepesek20: string[] = [];
  lepesek21: string[] = [];
  lepesek22: string[] = [];
  lepesek23: string[] = [];
  lepesek24: string[] = [];
  lepesek25: string[] = [];
  lepesek26: string[] = [];
  lepesek27: string[] = [];
  lepesek28: string[] = [];
  lepesek29: string[] = [];
  lepesek30: string[] = [];

  ev: EventInput[] = [];
  magyarazatok: string[] = [
    'Fontos és sürgős feladatok',
    'Kevésbé fontos, sürgős feladatok',
    'Fontos, kevésbé sürgős feladatok',
    'Kevésbé fontos és kevésbé sürgős feladatok'
  ];

  // Vizsgalat: igen-nem tömbök
  VizsgIgenNem: string[] = ['igen', 'nem'];


  // variables
  private feladatok: Feladat[] = [];
  files: File[] = [];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // disable or enable table data
  isDisableFirst: boolean;
  isDisableSecond: boolean;
  isDisable3: boolean;
  isDisable4: boolean;
  isDisable5: boolean;
  isDisable6: boolean;

  isLinear = false;
  isUtemezett = false;

  calendarOptions: CalendarOptions;
  isLezartBtn: boolean = false;

  constructor(public fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.createCelkituzesFormGroup();
    this.createHaviTervFormGroup();
    this.createVizsgalatFormGroup();

    // isDisable : false
    this.isDisableFirst = true;
    this.isDisableSecond = true;
    this.isDisable3 = true;
    this.isDisable4 = true;
    this.isDisable5 = true;
    this.isDisable6 = true;


    // Set calendar
    this.setCalendarOption();

  }

  createCelkituzesFormGroup() {
    this.celkituzesFormGroup = this.fb.group({
      celMegnevezesCtrl: new FormControl('', Validators.required),
      mikorraDatumCtrl: new FormControl('', Validators.required),
      celEleresiSzintCtrl: new FormControl('', Validators.required),
      celElerhetoECtrl: new FormControl('', Validators.required),
      celIgenyCtrl: new FormControl('', Validators.required),
      celOkCtrl: new FormControl('', Validators.required),
    });
  }

  createHaviTervFormGroup() {
    this.haviTervFormGroup = this.fb.group({

    });
  }

  createVizsgalatFormGroup() {
    this.vizsgalatFromGroup = this.fb.group({
      vizsgalatArray: this.fb.group({
        elsoIgenNemCtrl: new FormControl('', Validators.required),
        masodikIgenNemCtrl: new FormControl('', Validators.required),
        harmadikIgenNemCtrl: new FormControl('', Validators.required),
        negyedikIgenNemCtrl: new FormControl('', Validators.required),
        szuksegesOsszegCtrl: new FormControl('', Validators.required),
      }),
      lepesekArray: this.fb.group({
        lepes1Ctrl: new FormControl(''),
        lepes2Ctrl: new FormControl(''),
        lepes3Ctrl: new FormControl(''),
        lepes4Ctrl: new FormControl(''),
        lepes5Ctrl: new FormControl(''),
        lepes6Ctrl: new FormControl(''),
        lepes7Ctrl: new FormControl(''),
        lepes8Ctrl: new FormControl(''),
        lepes9Ctrl: new FormControl(''),
        lepes10Ctrl: new FormControl(''),
      })
    });
  }

  submitCelkituzes() {
    console.log(this.vizsgalatFromGroup.value);
    console.log(this.elofeltetelek);
  }


  /* initRows() {
     return this.fb.group({
       lepesCtrl: new FormControl(''),
       lepesFeladatokArray: this.fb.group({
         feladatCtrl: new FormControl('', Validators.required)
       })
     });
   }

   getTableControls() {
     return (this.vizsgalatFromGroup.get('lepesekArray') as FormArray).controls;
   }

   addNewLepes() {
     const control = this.vizsgalatFromGroup.controls['lepesekArray'] as FormArray;
     control.push(this.initRows());
   }*/

  // Add new event dialog: gridview
  /*openAddEventDialog(startDate: string): void {
    let eventInput: EventInput;
    const event: Feladat = new Feladat();


    const dialogRef = this.dialog.open(AddEventToCalendarComponent, {
      width: '40%',
      data: startDate
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Itt fogjuk létrehozni az EventInput objektumot és adjuk az events-höz

        event.$title = result[0].eventMegnevezesCtrl;
        event.start = startDate;
        event.end = result[0].range.endCtrl;
        event.$besorolas = result[0].besorolasCtrl;
        event.$hatarido = result[0].hataridoCtrl;
        event.$color = result[1];

        console.log(event.end);
        // Convert date + 1 day
        const strDate: Date = new Date(event.end);
        strDate.setHours(23);
        console.log("######:" + strDate);
        //strDate.setDate(strDate.getDate() + 1);

        event.end = strDate.toString();
        if (strDate.getDate() > 9 && strDate.getMonth() + 1 > 9) {
          event.end = strDate.getFullYear() + "-" + (strDate.getMonth() + 1)
            + '-' + strDate.getDate() + " 23:59:00";
        }
        else if (strDate.getDate() > 9) {
          event.end = strDate.getFullYear() + "-0" + (strDate.getMonth() + 1)
            + '-' + strDate.getDate() + " 23:59:00";
        }
        else if (strDate.getMonth() + 1 > 9) {
          event.end = strDate.getFullYear() + "-" + (strDate.getMonth() + 1)
            + '-0' + strDate.getDate() + " 23:59:00";
        }

        else {
          event.end = strDate.getFullYear() + "-0" + (strDate.getMonth() + 1)
            + '-0' + strDate.getDate() + " 23:59:00";
        }

        console.log("**********: " + event.end);
        // console.log(event);

        eventInput = {
          title: event.$title,
          resourceId: event.$title,
          start: event.start,
          end: event.end,
          color: event.$color
        };

        console.log(eventInput);
        //this.addCalendarEvent(eventInput);

      }
    });
  }*/

  openAddTimePickerDialog(feladat: Feladat) {
    let eventInput: EventInput;
    let event: Feladat = new Feladat();

    const dialogRef = this.dialog.open(AddDatetimeDialogComponent, {
      width: '40%',
      data: feladat
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        event = result;
        this.fullcalendar.getApi().addResource({
          id: event.$title,
          title: event.$title
        });

        eventInput = {
          title: event.$title,
          resourceId: event.$title,
          start: event.start,
          end: event.end,
          color: event.$color
        };
        console.log(eventInput);
        this.addCalendarEvent(eventInput);
        console.log(result);
        console.log(this.$feladatok);
        this.fullcalendar.getApi().refetchEvents()
      }
    });
  }

  openAddBesorolasHataridoDialog(chipTitle: string) {

    let feladat: Feladat = new Feladat();

    const dialogRef = this.dialog.open(AddBesHatDialogComponent, {
      width: '40%',
      data: chipTitle
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        feladat = result;
        feladat.$title = chipTitle;
        feladat.$isUtemezett = false;
        console.log(feladat);
        // adjuk hozzá az össz feladathoz
        this.feladatok.push(feladat);
        console.log(this.feladatok);

      }
    });
  }

  // timeline. [resources]
  openResourceEventDialog() {
    let eventInput: EventInput;
    let event: Feladat = new Feladat();

    const dialogRef = this.dialog.open(AddEventToCalendarComponent, {
      width: '40%',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        event = result;
        this.haviSzintuFeladatok.push(event);

        this.fullcalendar.getApi().addResource({
          id: event.$title,
          title: event.$title
        });

        eventInput = {
          title: event.$title,
          resourceId: event.$title,
          start: event.start,
          end: event.end,
          color: event.$color
        };
        console.log(eventInput);
        this.addCalendarEvent(eventInput);
      }
    });
  }

  /*handleDateClick(arg) {
    this.openAddEventDialog(arg.dateStr);
  }*/


  /* this.chipList.chips.forEach(chip => {
     if(chip.value === value2) {
       chip.selected = true;
       chip.color = 'primary';
     } else {
       chip.selected = false;
       chip.color = null;
     }
   });*/


  setCalendarOption() {

    this.calendarOptions = {
      initialView: 'resourceTimelineMonth',
      //dateClick: this.handleDateClick.bind(this),
      locale: huLocale,
      resourceOrder: 'resourceId',
      // google sync
      /* googleCalendarApiKey: 'AIzaSyD4oA-ioe4XJuf0o-rqrus1FPfzW8L6WZ0',
       resources: [
         {
           id: 'dattila9006@gmail.com'
         }
       ],
       eventSources:  [{
         googleCalendarId: 'dattila9006@gmail.com',
         backgroundColor: 'green',
         color: 'green'

       }],*/
      schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      height: 500,
      weekends: true,
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'resourceTimelineMonth,dayGridWeek,dayGridDay'
      },
      resourceAreaColumns: [
        {
          headerContent: 'Egyéb feladat'
        },
      ],
    };
  }


  addCalendarEvent(eventInput: EventInput) {
    this.fullcalendar.getApi().addEvent(eventInput);
  }

  refreshCalendar() {
    this.fullcalendar.getApi().refetchEvents();
  }

  updateCalendar(start, end){
    this.fullcalendar.getApi().getEvents().forEach(element => {
      console.log(element);
      element._instance.range.start = start;
      element._instance.range.end = end;

      console.log(element);
    });


  }

  // DRag and drop images: added and remove methods
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  // Changes for igen-nem
  elsoChange(selectchange) {
    if (selectchange.value === 'igen') {
      this.isDisableFirst = false;
    }
    else {
      this.isDisableFirst = true;
    }
  }

  masodikChange(selectchange) {
    if (selectchange.value === 'igen') {
      this.isDisableSecond = false;
    }
    else {
      this.isDisableSecond = true;
    }
  }

  harmadikChange(selectchange) {
    if (selectchange.value === 'igen') {
      this.isDisable3 = false;
    }
    else {
      this.isDisable3 = true;
    }
  }

  negyedikChange(selectchange) {
    if (selectchange.value === 'igen') {
      this.isDisable4 = false;
    }
    else {
      this.isDisable4 = true;
    }
  }



  // Chips methods

  addElofeltetel(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      if (!this.elofeltetelek.includes(value.trim())) {
        this.elofeltetelek.push(value.trim());
        this.osszChips.push(value.trim());
        this.openAddBesorolasHataridoDialog(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeElofeltetelek(elofeltetel: any): void {
    const index = this.elofeltetelek.indexOf(elofeltetel);

    if (index >= 0) {
      this.elofeltetelek.splice(index, 1);
      console.log("törölve: előfeltételek" + elofeltetel.$title);
      // kitörölni a listából
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === elofeltetel) {
          this.$feladatok.splice(i, 1);
        }
      }

    }
  }

  // 2. Segitség
  addSegitseg(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      if (!this.segitsegek.includes(value.trim())) {
        this.segitsegek.push(value.trim());
        this.osszChips.push(value.trim());
        this.openAddBesorolasHataridoDialog(value.trim());
      }


    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeSegitseg(segitseg: any): void {
    const index = this.segitsegek.indexOf(segitseg);

    if (index >= 0) {
      this.segitsegek.splice(index, 1);
      console.log("törölve: segitseg" + segitseg.$title);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === segitseg) {
          this.$feladatok.splice(i, 1);
        }
      }
    }
  }
  // 3. akadályok
  addAkadaly(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      if (!this.akadalyok.includes(value.trim())) {
        this.akadalyok.push(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
      // hozzáadtuk
      this.isDisable5 = false;
    }
  }

  removeAkadaly(akadaly: any): void {
    const index = this.akadalyok.indexOf(akadaly);

    if (index >= 0) {
      this.akadalyok.splice(index, 1);
    }

    if (this.akadalyok.length < 1) {
      this.isDisable5 = true;
    }
  }

  // speciális tudás
  addSpecialis(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!this.specialisTudas.includes(value.trim())) {
        this.specialisTudas.push(value.trim());
        this.osszChips.push(value.trim());
        this.openAddBesorolasHataridoDialog(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeSpecialis(specialis: any): void {
    const index = this.specialisTudas.indexOf(specialis);

    if (index >= 0) {
      this.specialisTudas.splice(index, 1);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === specialis) {
          this.$feladatok.splice(i, 1);
        }
      }
    }
  }

  // tárgyak
  addTargy(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!this.targyak.includes(value.trim())) {
        this.targyak.push(value.trim());
        this.osszChips.push(value.trim());
        this.openAddBesorolasHataridoDialog(value.trim());
      }

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTargy(targy: any): void {
    const index = this.targyak.indexOf(targy);

    if (index >= 0) {
      this.targyak.splice(index, 1);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === targy) {
          this.$feladatok.splice(i, 1);
        }
      }
    }
  }

  // feladatok : akadályban
  addAkadalyFeladat(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!this.akadalyFeladatok.includes(value.trim())) {
        this.akadalyFeladatok.push(value.trim());
        this.osszChips.push(value.trim());
        this.openAddBesorolasHataridoDialog(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeAkadalyFeladat(akadalyFeladat: any): void {
    const index = this.akadalyFeladatok.indexOf(akadalyFeladat);

    if (index >= 0) {
      this.akadalyFeladatok.splice(index, 1);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === akadalyFeladat) {
          this.$feladatok.splice(i, 1);
        }
      }

    }
  }

  // feladatok : akadályban
  addPenz(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!this.penzek.includes(value.trim())) {
        this.penzek.push(value.trim());
        this.osszChips.push(value.trim());
        this.openAddBesorolasHataridoDialog(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removePenz(penz: any): void {
    const index = this.penzek.indexOf(penz);

    if (index >= 0) {
      this.penzek.splice(index, 1);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === penz) {
          this.$feladatok.splice(i, 1);
        }
      }

    }
  }

  addedPenz() {
    this.isDisable6 = false;
  }

  // feladatok : akadályban
  addLepes1(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!this.lepesek1.includes(value.trim())) {
        this.lepesek1.push(value.trim());
        this.osszChips.push(value.trim());

        this.openAddBesorolasHataridoDialog(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLepes1(lepes: any): void {
    const index = this.lepesek1.indexOf(lepes);

    if (index >= 0) {
      this.lepesek1.splice(index, 1);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === lepes) {
          this.$feladatok.splice(i, 1);
        }
      }
    }
  }

  addLepes2(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!this.lepesek2.includes(value.trim())) {

        this.lepesek2.push(value.trim());
        this.osszChips.push(value.trim());

        this.openAddBesorolasHataridoDialog(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLepes2(lepes: any): void {
    const index = this.lepesek2.indexOf(lepes);

    if (index >= 0) {
      this.lepesek2.splice(index, 1);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === lepes) {
          this.$feladatok.splice(i, 1);
        }
      }
    }
  }

  // 3. lépés
  addLepes3(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!this.lepesek3.includes(value.trim())) {
        this.lepesek3.push(value.trim());
        this.osszChips.push(value.trim());

        this.openAddBesorolasHataridoDialog(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLepes3(lepes: any): void {
    const index = this.lepesek3.indexOf(lepes);

    if (index >= 0) {
      this.lepesek3.splice(index, 1);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === lepes) {
          this.$feladatok.splice(i, 1);
        }
      }
    }
  }


  // 4. lépés
  addLepes4(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!this.lepesek4.includes(value.trim())) {

        this.lepesek4.push(value.trim());
        this.osszChips.push(value.trim());

        this.openAddBesorolasHataridoDialog(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLepes4(lepes: any): void {
    const index = this.lepesek4.indexOf(lepes);

    if (index >= 0) {
      this.lepesek4.splice(index, 1);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === lepes) {
          this.$feladatok.splice(i, 1);
        }
      }
    }
  }


  // 5. lépés
  addLepes5(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!this.lepesek5.includes(value.trim())) {

        this.lepesek5.push(value.trim());
        this.osszChips.push(value.trim());

        this.openAddBesorolasHataridoDialog(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLepes5(lepes: any): void {
    const index = this.lepesek5.indexOf(lepes);

    if (index >= 0) {
      this.lepesek5.splice(index, 1);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === lepes) {
          this.$feladatok.splice(i, 1);
        }
      }
    }
  }


  // 6. lépés
  addLepes6(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!this.lepesek6.includes(value.trim())) {

        this.lepesek6.push(value.trim());
        this.osszChips.push(value.trim());

        this.openAddBesorolasHataridoDialog(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLepes6(lepes: any): void {
    const index = this.lepesek6.indexOf(lepes);

    if (index >= 0) {
      this.lepesek6.splice(index, 1);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === lepes) {
          this.$feladatok.splice(i, 1);
        }
      }
    }
  }

  // 7. lépés
  addLepes7(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!this.lepesek7.includes(value.trim())) {

        this.lepesek7.push(value.trim());
        this.osszChips.push(value.trim());

        this.openAddBesorolasHataridoDialog(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLepes7(lepes: any): void {
    const index = this.lepesek7.indexOf(lepes);

    if (index >= 0) {
      this.lepesek7.splice(index, 1);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === lepes) {
          this.$feladatok.splice(i, 1);
        }
      }
    }
  }


  // 8. lépés
  addLepes8(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!this.lepesek8.includes(value.trim())) {

        this.lepesek8.push(value.trim());
        this.osszChips.push(value.trim());

        this.openAddBesorolasHataridoDialog(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLepes8(lepes: any): void {
    const index = this.lepesek8.indexOf(lepes);

    if (index >= 0) {
      this.lepesek8.splice(index, 1);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === lepes) {
          this.$feladatok.splice(i, 1);
        }
      }
    }
  }


  // 9. lépés
  addLepes9(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!this.lepesek9.includes(value.trim())) {
        this.lepesek9.push(value.trim());
        this.osszChips.push(value.trim());

        this.openAddBesorolasHataridoDialog(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLepes9(lepes: any): void {
    const index = this.lepesek9.indexOf(lepes);

    if (index >= 0) {
      this.lepesek9.splice(index, 1);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === lepes) {
          this.$feladatok.splice(i, 1);
        }
      }
    }
  }


  // 10. lépés
  addLepes10(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (!this.lepesek10.includes(value.trim())) {
        this.lepesek10.push(value.trim());
        this.osszChips.push(value.trim());

        this.openAddBesorolasHataridoDialog(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLepes10(lepes: any): void {
    const index = this.lepesek10.indexOf(lepes);

    if (index >= 0) {
      this.lepesek10.splice(index, 1);
      for (let i = 0; i < this.$feladatok.length; i++) {
        if (this.$feladatok[i].$title === lepes) {
          this.$feladatok.splice(i, 1);
        }
      }
    }
  }


  // kiüríti a feladato tömböt
  resetFeladatok() {

    this.openConfirmResetCelkDialog();

  }

  openConfirmResetCelkDialog() {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {

        this.feladatok = [];
        this.celkituzesFormGroup.reset();
        this.vizsgalatFromGroup.reset();

        // delete chips;
        this.elofeltetelek = [];
        this.segitsegek = [];
        this.specialisTudas = [];
        this.targyak = [];
        this.akadalyFeladatok = [];
        this.akadalyok = [];
        this.penzek = [];
        this.lepesek1 = [];
        this.lepesek2 = [];
        this.lepesek3 = [];
        this.lepesek4 = [];
        this.lepesek5 = [];
        this.lepesek6 = [];
        this.lepesek7 = [];
        this.lepesek8 = [];
        this.lepesek9 = [];
        this.lepesek10 = [];

        // naptart is törölni
        this.fullcalendar.getApi().removeAllEventSources();
        /*for (let i = 0; i < this.fullcalendar.getApi().getResources().length; i++) {

          this.fullcalendar.getApi().getResourceById("").remove();
        }*/
        this.fullcalendar.getApi().refetchResources();
        this.files = [];
        this.haviSzintuFeladatok = [];
      }
    });
  }

  openConfirmDeleteHaviDialog(feladat: Feladat) {
    let titleIndex: number = 0;


    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {

        // Feladat törlése
        this.$haviSzintuFeladatok.forEach((item, index) => {
          if (item === feladat) {
            this.$haviSzintuFeladatok.splice(index, 1);
          }
        });




        // chip törlése
        // megkeresni, melyik feladatnak a neve egyezik meg és törölni



        console.log("FELADATOK " + this.$haviSzintuFeladatok.length);
      }
    });
  }

  openConfirmDeleteCalDialog(feladat: Feladat) {

    let titleIndex: number = 0;


    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {

        // Feladat törlése
        this.$feladatok.forEach((item, index) => {
          if (item === feladat) {
            this.$feladatok.splice(index, 1);
          }
        });

        // Keressük meg melyikben van és töröljük
        this.removeElofeltetelek(feladat.$title);
        this.removeSegitseg(feladat.$title);
        this.removeSpecialis(feladat.$title);
        this.removeTargy(feladat.$title);
        this.removeAkadalyFeladat(feladat.$title);
        this.removePenz(feladat.$title);
        this.removeLepes1(feladat.$title);
        this.removeLepes2(feladat.$title);
        this.removeLepes3(feladat.$title);
        this.removeLepes4(feladat.$title);
        this.removeLepes5(feladat.$title);
        this.removeLepes6(feladat.$title);
        this.removeLepes7(feladat.$title);
        this.removeLepes8(feladat.$title);
        this.removeLepes9(feladat.$title);
        this.removeLepes10(feladat.$title);


        // chip törlése
        // megkeresni, melyik feladatnak a neve egyezik meg és törölni



        console.log("FELADATOK " + this.$feladatok.length);
      }
    });
  }
  feladatHaviModositas(feladat: Feladat) {
    this.removeOldEvent(feladat);
    let eventInput: EventInput;
    let event: Feladat = new Feladat();

    const dialogRef = this.dialog.open(AddDatetimeDialogComponent, {
      width: '40%',
      data: feladat
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        event = result;
        // Módositás miatt törölni előző dátumot naptárbol
        this.fullcalendar.getApi().addResource({
          id: event.$title,
          title: event.$title
        });

        eventInput = {
          title: event.$title,
          resourceId: event.$title,
          start: event.start,
          end: event.end,
          color: event.$color
        };
        console.log(eventInput);
        this.addCalendarEvent(eventInput);
        console.log(result);
        console.log(this.$feladatok);
      }
    });
   }

  removeOldEvent(feladat){
    this.fullcalendar.getApi().getResourceById(feladat.$title).remove();
    this.fullcalendar.getApi().getEventSourceById(feladat.$title).remove();
  }

  feladatModositas(feladat: Feladat) {
    // a listában levő feladatot kell törölni
    let eventInput: EventInput;
    let event: Feladat = new Feladat();

    const dialogRef = this.dialog.open(AddDatetimeDialogComponent, {
      width: '40%',
      data: feladat
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        event = result;
        // Módositás miatt törölni előző dátumot naptárbol
        this.fullcalendar.getApi().addResource({
          id: event.$title,
          title: event.$title
        });

        eventInput = {
          title: event.$title,
          resourceId: event.$title,
          start: event.start,
          end: event.end,
          color: event.$color
        };
        console.log(eventInput);
        this.addCalendarEvent(eventInput);
        console.log(result);
      }
    });
  }

  feladatLezaras(feladat: Feladat) {

    this.openConfirmDeleteCalDialog(feladat);
    // törö
  }

  feladatHaviLezaras(feladat: Feladat) {
    this.openConfirmDeleteHaviDialog(feladat);
  }

  // getters, setter


  /**
   * Getter $feladatok
   * @return {Feladat[] }
   */
  public get $feladatok(): Feladat[] {
    return this.feladatok;
  }

  /**
   * Setter $feladatok
   * @param {Feladat[] } value
   */
  public set $feladatok(value: Feladat[]) {
    this.feladatok = value;
  }


  /**
   * Getter $haviSzintuFeladatok
   * @return {Feladat[] }
   */
  public get $haviSzintuFeladatok(): Feladat[] {
    return this.haviSzintuFeladatok;
  }

  /**
   * Setter $haviSzintuFeladatok
   * @param {Feladat[] } value
   */
  public set $haviSzintuFeladatok(value: Feladat[]) {
    this.haviSzintuFeladatok = value;
  }

}

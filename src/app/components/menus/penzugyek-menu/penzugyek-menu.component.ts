import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUjCelDialogComponent } from '../../dialogs/add-uj-cel-dialog/add-uj-cel-dialog.component';
import { UjCel } from 'src/app/models/celok/uj-cel.model';
import { ConfirmUjCelDialogComponent } from '../../dialogs/confirm-uj-cel-dialog/confirm-uj-cel-dialog.component';

export interface dataArguments {
  szuksMegtakaritas: number;
  kezdoDatum: string;
  vegDatum: number;
}
@Component({
  selector: 'app-penzugyek-menu',
  templateUrl: './penzugyek-menu.component.html',
  styleUrls: ['./penzugyek-menu.component.scss']
})
export class PenzugyekMenuComponent implements OnInit {


  @Output() emitCelok = new EventEmitter<UjCel>();

  celok: Array<any>;
  isTorolhetoCel: boolean;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.celok = new Array<UjCel>();
    this.isTorolhetoCel = false;
  }

  addUjCel() {
    if (this.celok.length > 0) {
      this.celok = [];
    }
    this.openUjCelDialog();


    // Tegyük fel a kérdést , biztosasn szeretnénk-e új célt
    // todo
    /*this.ujCelHozzadasMegerositesDialog();
    if(this.isTorolhetoCel){
      console.log("törölhető");
      this.openUjCelDialog();
    }
    else{
      console.log("Marad a régi");
    }*/

  }

  openUjCelDialog() {
    let ujCelModel = new UjCel();
    const dialogRef = this.dialog.open(AddUjCelDialogComponent, {
      width: '40%',
      // TODO: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        ujCelModel = result;
        this.celok.push(ujCelModel);
        console.log(this.celok);

        this.emitCelok.emit(ujCelModel);
      }
    });
  }

  ujCelHozzadasMegerositesDialog() {

    const dialogRef = this.dialog.open(ConfirmUjCelDialogComponent, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isTorolhetoCel = result;
      console.log(result);
    });

  }
}

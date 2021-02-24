import { Component, OnInit, Inject, KeyValueDiffers } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEredmenyDialogComponent } from '../add-eredmeny-dialog/add-eredmeny-dialog.component';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UjCel } from 'src/app/models/celok/uj-cel.model';

@Component({
  selector: 'app-add-uj-cel-dialog',
  templateUrl: './add-uj-cel-dialog.component.html',
  styleUrls: ['./add-uj-cel-dialog.component.scss']
})
export class AddUjCelDialogComponent implements OnInit {

  celFromGroup: FormGroup;
  private szuksegesOsszeg: number;
  private idotartam: number;
  private szuksegesMegtakaritas: number;
  private megtakaritasKezdete: string;
  private celMegnevezes: string;

  lehetsegesFutamidok: number[] =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 24, 30, 36, 48, 60, 72, 84];

  constructor(public dialogRef: MatDialogRef<AddUjCelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UjCel, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup(){
    this.celFromGroup = this._fb.group({
      celMegnevezesCtrl: new FormControl('', Validators.required),
      celOsszegCtrl: new FormControl('', Validators.required),
      futamidoCtrl: new FormControl('', Validators.required),
      megtakaritasKezdeteCtrl: new FormControl('', Validators.required)
    })
  }

  addUjCel(){
    let ujCelModel = new UjCel();
    ujCelModel.$celMegnevezes = this.$celMegnevezes;
    ujCelModel.$celOsszeg = this.$szuksegesOsszeg;
    ujCelModel.$celFutamido = this.$idotartam;
    ujCelModel.$megtakaritasKezdete = this.$megtakaritasKezdete;
    ujCelModel.$szuksegesMegtakaritas = this.$szuksegesMegtakaritas;

    this.dialogRef.close(ujCelModel);
  }


    /**
     * Getter $megtakaritasKezdete
     * @return {string}
     */
	public get $megtakaritasKezdete(): string {

    this.megtakaritasKezdete = this.celFromGroup.get("megtakaritasKezdeteCtrl").value;
		return this.megtakaritasKezdete;
	}

    /**
     * Getter $celMegnevezes
     * @return {string}
     */
	public get $celMegnevezes(): string {

    this.celMegnevezes = this.celFromGroup.get("celMegnevezesCtrl").value;
		return this.celMegnevezes;
	}

    /**
     * Setter $megtakaritasKezdete
     * @param {string} value
     */
	public set $megtakaritasKezdete(value: string) {
		this.megtakaritasKezdete = value;
	}

    /**
     * Setter $celMegnevezes
     * @param {string} value
     */
	public set $celMegnevezes(value: string) {
		this.celMegnevezes = value;
	}



    /**
     * Getter $szuksegesMegtakaritas
     * @return {number}
     */
	public get $szuksegesMegtakaritas(): number {

    this.szuksegesMegtakaritas = this.$szuksegesOsszeg/this.$idotartam;

		return this.szuksegesMegtakaritas;
	}

    /**
     * Setter $szuksegesMegtakaritas
     * @param {number} value
     */
	public set $szuksegesMegtakaritas(value: number) {
		this.szuksegesMegtakaritas = value;
	}


    /**
     * Getter $szuksegesOsszeg
     * @return {number}
     */
	public get $szuksegesOsszeg(): number {

    this.szuksegesOsszeg = this.celFromGroup.get("celOsszegCtrl").value;

		return this.szuksegesOsszeg;
	}

    /**
     * Getter $idotartam
     * @return {number}
     */
	public get $idotartam(): number {

    this.idotartam = this.celFromGroup.get('futamidoCtrl').value;

		return this.idotartam;
  }
  

    /**
     * Setter $szuksegesOsszeg
     * @param {number} value
     */
	public set $szuksegesOsszeg(value: number) {
		this.szuksegesOsszeg = value;
	}

    /**
     * Setter $idotartam
     * @param {number} value
     */
	public set $idotartam(value: number) {
		this.idotartam = value;
	}


}

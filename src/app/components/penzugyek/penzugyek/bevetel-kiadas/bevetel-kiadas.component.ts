import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges, Output, EventEmitter, Input } from '@angular/core';
import { AbstractControl, FormControl, Validators, FormArray, FormGroup, FormBuilder } from '@angular/forms';

export interface dataArguments {
  datum: string;
  osszeg: number[];
  zarva?: boolean;
  isNoClosedMonth: boolean;
}
@Component({
  selector: 'app-bevetel-kiadas',
  templateUrl: './bevetel-kiadas.component.html',
  styleUrls: ['./bevetel-kiadas.component.scss']
})
export class BevetelKiadasComponent implements OnInit {

  @ViewChild('bevetelInput') bevetelInput: ElementRef;

  @ViewChild('lezarasBtn') lezarasBtn: ElementRef;

  // Emitterek ami átmegy adat a diagramokhoz
  @Output() emitBevetelekKiadasok = new EventEmitter<dataArguments>();

  @Input('rezsi') rezsiDate: string;

  isDisable: boolean = false;


  private osszBevetel: number = 0;
  private osszKiadas: number = 0;
  private osszFennmarado: number = 0;
  // Kiadasok osszesitese
  private osszMegtakaritas: number = 0;
  private osszRezsi: number = 0;
  private osszElvCikkek: number = 0;
  private osszUtazasiKtg: number = 0;
  private osszFogyCikkek: number = 0;
  private osszRuhazkodas: number = 0;
  private osszEgyeb: number = 0;

  private osszegek: number[];

  bevetelekArr: number[] = [];
  rezsiKiadasArr: number[] = [];
  megtakaritasKiadasArr: number[] = [];
  elvCikkekKiadasArr: number[] = [];
  utazasiKtgKiadasArr: number[] = [];
  fogyCikkekKiadasArr: number[] = [];
  ruhazkodasKiadasArr: number[] = [];
  egyebKiadasArr: number[] = [];

  actualRezsiValue: number;

  penzugyekBevetelFormGroup: FormGroup;
  penzugyKiadasFormGroup: FormGroup;
  constructor(private _fb: FormBuilder) { }


  ngOnInit(): void {
    this.createBevetelFormGroup();
    this.createKiadasFormGroup();
    /*this.bevetelekArr = new Array();
    //this.rezsiKiadasArr = new Array();
    this.megtakaritasKiadasArr = new Array();
    this.elvCikkekKiadasArr = new Array();
    this.utazasiKtgKiadasArr = new Array();
    this.fogyCikkekKiadasArr = new Array();
    this.ruhazkodasKiadasArr = new Array();
    this.egyebKiadasArr = new Array();*/

    this.actualRezsiValue = 0;

    this.osszegek = new Array();

  }


  onChanges() {
    this.osszBevetel = 0;
    for (let item of this.bevetelekArr) {
      if (typeof item != "number") {
        item = 0;
    }
      this.osszBevetel += item;
    }

    console.log(this.bevetelekArr);
  }

  // Changes
  rezsiKiadChanges() {
    this.osszRezsi = 0;
    console.log("KIADAS::::: "+ this.rezsiKiadasArr);
    for (let item of this.rezsiKiadasArr) {
      if (typeof item != "number") {
        item = 0;
    }
      this.osszRezsi += item;
    }


  }

  megtakaritasKiadChanges() {
    this.osszMegtakaritas = 0;

    for (let item of this.megtakaritasKiadasArr) {
      if (typeof item != "number") {
        item = 0;
    }
      this.osszMegtakaritas += item;
    }
  }

  elvCikkekChanges() {
    this.osszElvCikkek = 0;

    for (let item of this.elvCikkekKiadasArr) {
      if (typeof item != "number") {
        item = 0;
    }
      this.osszElvCikkek += item;
    }
  }

  utazasiKtgChanges() {
    this.osszUtazasiKtg = 0;

    for (let item of this.utazasiKtgKiadasArr) {
      if (typeof item != "number") {
        item = 0;
    }
      this.osszUtazasiKtg += item;
    }
  }

  fogyCikkekChanges() {
    this.osszFogyCikkek = 0;

    for (let item of this.fogyCikkekKiadasArr) {
      if (typeof item != "number") {
        item = 0;
    }
      this.osszFogyCikkek += item;
    }
  }

  ruhazkodasChanges() {
    this.osszRuhazkodas = 0;

    for (let item of this.ruhazkodasKiadasArr) {
      if (typeof item != "number") {
        item = 0;
    }
      this.osszRuhazkodas += item;
    }
  }

  egyebChanges() {
    this.osszEgyeb = 0;

    for (let item of this.egyebKiadasArr) {
      if (typeof item != "number") {
        item = 0;
    }
      this.osszEgyeb += item;
    }
  }


  createBevetelFormGroup() {
    this.penzugyekBevetelFormGroup = this._fb.group({
      tableBevetelRows: this._fb.array([this.initBevetelRows()])
    });
  }

  createKiadasFormGroup() {
    this.penzugyKiadasFormGroup = this._fb.group({
      tableKiadasRows: this._fb.array([this.initKiadasRows()])
    });
  }

  // Init
  initBevetelRows(): AbstractControl {
    return this._fb.group({
      bevetelCtrl: new FormControl(''),
    });
  }

  initKiadasRows(): AbstractControl {
    return this._fb.group({
      napCtrl: new FormControl('', [Validators.min(1), Validators.max(31)]),
      rezsiCtrl: new FormControl(''),
      megtakaritasCtrl: new FormControl(''),
      elvCikkekCtrl: new FormControl(''),
      utazasKtgCtrl: new FormControl(''),
      fogyasztasCikkCtrl: new FormControl(''),
      ruhazkodasCtrl: new FormControl(''),
      egyebCtrl: new FormControl('')
    });
  }

  getBevetelTableControls() {
    return (this.penzugyekBevetelFormGroup.get('tableBevetelRows') as FormArray).controls;
  }

  getKiadasTableControls() {
    return (this.penzugyKiadasFormGroup.get('tableKiadasRows') as FormArray).controls;
  }

  honapZaras() {
    console.log(this.penzugyekBevetelFormGroup.value);
    console.log(this.penzugyKiadasFormGroup.value);

    this.osszegek = [];
    this.osszegek.push(this.$osszRezsi);
    this.osszegek.push(this.$osszMegtakaritas);
    this.osszegek.push(this.$osszBevetel);
    this.osszegek.push(this.$osszElvCikkek);
    this.osszegek.push(this.$osszUtazasiKtg);
    this.osszegek.push(this.$osszFogyCikkek);
    this.osszegek.push(this.$osszRuhazkodas);
    this.osszegek.push(this.$osszEgyeb);

    this.osszKiadas = 0;

    for (let i = 0; i < this.osszegek.length; i++) {
      this.osszKiadas += this.osszegek[i];
    }
    this.$osszKiadas = this.$osszKiadas - this.$osszBevetel;
    this.osszegek.push(this.$osszKiadas);

    this.isDisable = true;
    this.lezarasBtn.nativeElement.value = "Hónap lezárva";
    // Küldjük át az adatot
    this.emitBevetelekKiadasok.emit(
      {
        // dátum az adott év + honap
        datum: this.rezsiDate,
        osszeg: this.$osszegek,
        zarva: this.isDisable,
        isNoClosedMonth:false
      }
    );



  }

  deleteBevetelRow(index: number) {
    let totalRow = 0;
    console.log(index);

    const control = <FormArray>this.penzugyekBevetelFormGroup.controls['tableBevetelRows'];

    if (control !== null) {
      totalRow = control.value.length;
    }
    if (totalRow > 0) {
      control.removeAt(index);
      this.bevetelekArr.splice(index, 1);
      this.osszBevetel = 0;
      for (let item of this.bevetelekArr) {
        this.osszBevetel += item;
      }
    }
  }

  deleteKiadasRow(index: number) {
    let totalRow = 0;

    // tslint:disable-next-line: no-angle-bracket-type-assertion
    const control = <FormArray>this.penzugyKiadasFormGroup.controls["tableKiadasRows"];

    if (control !== null) {
      totalRow = control.value.length;
    }
    if (totalRow > 0) {
      control.removeAt(index);
      // Minden értéket ujraszámolni
      this.rezsiKiadasArr.splice(index, 1);
      this.megtakaritasKiadasArr.splice(index, 1);
      this.elvCikkekKiadasArr.splice(index, 1);
      this.fogyCikkekKiadasArr.splice(index, 1);
      this.utazasiKtgKiadasArr.splice(index, 1);
      this.ruhazkodasKiadasArr.splice(index, 1);
      this.egyebKiadasArr.splice(index, 1);

      this.newCalcAfterDeleteKiadasok();

      this.osszegek = [];
      this.osszegek.push(this.$osszRezsi);
      this.osszegek.push(this.$osszMegtakaritas);
      this.osszegek.push(this.$osszBevetel);
      this.osszegek.push(this.$osszElvCikkek);
      this.osszegek.push(this.$osszUtazasiKtg);
      this.osszegek.push(this.$osszFogyCikkek);
      this.osszegek.push(this.$osszRuhazkodas);
      this.osszegek.push(this.$osszEgyeb);

      this.osszKiadas = 0;

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.osszegek.length; i++) {
        this.osszKiadas += this.osszegek[i];
      }
      this.$osszKiadas = this.$osszKiadas - this.$osszBevetel;

    }
  }

  newCalcAfterDeleteKiadasok(){
    this.osszRezsi = 0;
    for (let item of this.rezsiKiadasArr) {
      this.osszRezsi += item;
    }

    this.osszMegtakaritas = 0;

    for (let item of this.megtakaritasKiadasArr) {
      this.osszMegtakaritas += item;
    }

    this.osszElvCikkek = 0;

    for (let item of this.elvCikkekKiadasArr) {
      this.osszElvCikkek += item;
    }



    this.osszUtazasiKtg = 0;

    for (let item of this.utazasiKtgKiadasArr) {
      this.osszUtazasiKtg += item;
    }



    this.osszFogyCikkek = 0;

    for (let item of this.fogyCikkekKiadasArr) {
      this.osszFogyCikkek += item;

  }

    this.osszRuhazkodas = 0;

    for (let item of this.ruhazkodasKiadasArr) {
      this.osszRuhazkodas += item;

  }

    this.osszEgyeb = 0;

    for (let item of this.egyebKiadasArr) {
      this.osszEgyeb += item;

    }
  }


  addNewBevetelRow() {
    const control = <FormArray>this.penzugyekBevetelFormGroup.controls['tableBevetelRows'];

    control.push(this.initBevetelRows());
  }

  addNewKiadasRow() {
    const control = <FormArray>this.penzugyKiadasFormGroup.controls['tableKiadasRows'];
    control.push(this.initKiadasRows());
  }



  // GETTERS ; SETTERS


  /**
   * Getter $osszBevetel
   * @return {number}
   */
  public get $osszBevetel(): number {
    return this.osszBevetel;
  }


  /**
   * Getter $osszRezsi
   * @return {number }
   */
  public get $osszRezsi(): number {
    return this.osszRezsi;
  }


  /**
   * Getter $osszMegtakaritas
   * @return {number }
   */
  public get $osszMegtakaritas(): number {
    return this.osszMegtakaritas;
  }



  /**
   * Getter $osszKiadas
   * @return {number }
   */
  public get $osszKiadas(): number {
    return this.osszKiadas;
  }


  /**
   * Getter $osszElvCikkek
   * @return {number }
   */
  public get $osszElvCikkek(): number {
    return this.osszElvCikkek;
  }

  /**
   * Getter $osszUtazasiKtg
   * @return {number }
   */
  public get $osszUtazasiKtg(): number {
    return this.osszUtazasiKtg;
  }

  /**
   * Getter $osszFogyCikkek
   * @return {number }
   */
  public get $osszFogyCikkek(): number {
    return this.osszFogyCikkek;
  }

  /**
   * Getter $osszRuhazkodas
   * @return {number }
   */
  public get $osszRuhazkodas(): number {
    return this.osszRuhazkodas;
  }

  /**
   * Getter $osszEgyeb
   * @return {number }
   */
  public get $osszEgyeb(): number {
    return this.osszEgyeb;
  }

  /**
   * Setter $osszElvCikkek
   * @param {number } value
   */
  public set $osszElvCikkek(value: number) {
    this.osszElvCikkek = value;
  }

  /**
   * Setter $osszUtazasiKtg
   * @param {number } value
   */
  public set $osszUtazasiKtg(value: number) {
    this.osszUtazasiKtg = value;
  }

  /**
   * Setter $osszFogyCikkek
   * @param {number } value
   */
  public set $osszFogyCikkek(value: number) {
    this.osszFogyCikkek = value;
  }

  /**
   * Setter $osszRuhazkodas
   * @param {number } value
   */
  public set $osszRuhazkodas(value: number) {
    this.osszRuhazkodas = value;
  }

  /**
   * Setter $osszEgyeb
   * @param {number } value
   */
  public set $osszEgyeb(value: number) {
    this.osszEgyeb = value;
  }




  /**
   * Getter $osszegek
   * @return {number[]}
   */
  public get $osszegek(): number[] {
    return this.osszegek;
  }



  /**
   * Setter $osszegek
   * @param {number[]} value
   */
  public set $osszegek(value: number[]) {
    this.osszegek = value;
  }

  /**
   * Setter $osszMegtakaritas
   * @param {number } value
   */
  public set $osszMegtakaritas(value: number) {
    this.osszMegtakaritas = value;
  }


  /**
   * Getter $osszFennmarado
   * @return {number }
   */
  public get $osszFennmarado(): number {

    if (this.$osszKiadas < this.$osszBevetel) {
      this.osszFennmarado = this.$osszBevetel - this.$osszKiadas;

    }
    else {
      this.$osszFennmarado = 0;
    }
    return this.osszFennmarado;
  }

  /**
   * Setter $osszFennmarado
   * @param {number } value
   */
  public set $osszFennmarado(value: number) {
    this.osszFennmarado = value;
  }


  /**
   * Setter $osszKiadas
   * @param {number } value
   */
  public set $osszKiadas(value: number) {
    this.osszKiadas = value;
  }


  /**
   * Setter $osszRezsi
   * @param {number } value
   */
  public set $osszRezsi(value: number) {
    this.osszRezsi = value;
  }


  /**
   * Setter $osszBevetel
   * @param {number} value
   */
  public set $osszBevetel(value: number) {
    this.osszBevetel = value;
  }


}

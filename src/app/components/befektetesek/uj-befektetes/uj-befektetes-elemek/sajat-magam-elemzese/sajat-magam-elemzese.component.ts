import { Component, OnInit, Output, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { EventEmitter } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MentalisElemzes } from 'src/app/models/uj-befektetes-models/mentalis-elemzes/mentalis-elemzes.model';
import { MentalisElemzesService } from 'src/app/services/befektetesek/uj-befektetes-services/mentalis-elemzes/mentalis-elemzes.service';
import { MessageService } from 'primeng/api';


export interface dataArguments {
  filled: boolean;
  mentalisElemzes: MentalisElemzes;
}

@Component({
  selector: 'app-sajat-magam-elemzese',
  templateUrl: './sajat-magam-elemzese.component.html',
  styleUrls: ['./sajat-magam-elemzese.component.scss'],
  providers: [MessageService]
})


export class SajatMagamElemzeseComponent implements OnInit, AfterViewInit {

  @Output() filledSaveSajatEmitter: EventEmitter<MentalisElemzes> = new EventEmitter();
  allFilled: boolean;

  mentalisElemzes: MentalisElemzes;

  elvegezveArr = ['elv1', 'elv2', 'elv3', 'elv4', 'elv5', 'elv6', 'elv7', 'elv8', 'elv9', 'elv10'];

  private isFokozottElv: boolean = false;
  private isKavargoElv: boolean = false;
  private isIndokolatlanElv: boolean = false;

  private isKellemetlenElv: boolean = false;

  private isEllensegessegElv: boolean = false;

  private isOnbizalomElv: boolean = false;

  private isFelelemElv: boolean = false;

  private isKimerultsegElv: boolean = false;

  private isIntrovertaltElv: boolean = false;

  private isSzomorusagElv: boolean = false;


  // table items

  private fokozott: string;
    private fokozottElv: boolean[];

    private kavargo: string;
    private kavargoElv: boolean[];

    private indokolatlan: string;
    private indokolatlanElv: boolean[];

    private kellemetlen: string;
    private kellemetlenElv: boolean[];

    private ellensegesseg: string;
    private ellensegessegElv: boolean[];

    private onbizalom: string;
    private onbizalomElv: boolean[];

    private felelem : string;
    private felelemElv: boolean[];

    private kimerultseg: string;
    private kimerultsegElv: boolean[];

    private introvertalt: string;
    private introvertaltElv: boolean[];

    private szomorusag: string;
    private szomorusagElv: boolean[];


  constructor(private _formBuilder: FormBuilder,
    private mentalisElemzesService: MentalisElemzesService, private messageService: MessageService) { }



  sajatMagamElemzesFormGroup: FormGroup;

  ngOnInit(): void {
    this.createFormGroup();
  }

  ngAfterViewInit(): void {
    this.loadMentalisElemzes();
  }

  addElvegezveControls() {
    const arr = this.elvegezveArr.map(element => {
      return new FormControl(false);
    });
    return new FormArray(arr);
  }

  loadMentalisElemzes() {
    let mentalisElemzes = this.mentalisElemzesService.$updatedMentalisElemzes;

    this.sajatMagamElemzesFormGroup.patchValue({
      fokozottCtrl: mentalisElemzes.$fokozott,
      fokozottElvegezve: mentalisElemzes.$fokozottElv,

      kavargoCtrl: mentalisElemzes.$kavargo,
      kavargoElvegezve: mentalisElemzes.$kavargoElv,

      indokolatlanCtrl: mentalisElemzes.$indokolatlan,
      indokolatlanElvegezve: mentalisElemzes.$indokolatlanElv,

      kellemetlenCtrl: mentalisElemzes.$kellemetlen,
      kellemetlenElvegezve:mentalisElemzes.$kellemetlenElv,

      ellensegessegCtrl: mentalisElemzes.$ellensegesseg,
      ellensegessegElvegezve: mentalisElemzes.$ellensegessegElv,

      onbizalomCtrl: mentalisElemzes.$onbizalom,
      onbizalomElvegezve:mentalisElemzes.$onbizalomElv ,

      felelemCtrl: mentalisElemzes.$felelem,
      felelemElvegezve: mentalisElemzes.$felelemElv,

      kimerultsegCtrl: mentalisElemzes.$kimerultseg,
      kimerultsegElvegezve: mentalisElemzes.$kimerultsegElv,

      introvertaltCtrl: mentalisElemzes.$introvertalt,
      introvertaltElvegezve: mentalisElemzes.$introvertaltElv,

      szomorusagCtrl: mentalisElemzes.$szomorusag,
      szomorusagElvegezve: mentalisElemzes.$szomorusagElv,

    });
  }

  createFormGroup() {

    this.sajatMagamElemzesFormGroup = this._formBuilder.group({
      fokozottCtrl: new FormControl('', Validators.required),
      fokozottElvegezve: this.addElvegezveControls(),

      kavargoCtrl: new FormControl('', Validators.required),
      kavargoElvegezve: this.addElvegezveControls(),

      indokolatlanCtrl: new FormControl('', Validators.required),
      indokolatlanElvegezve: this.addElvegezveControls(),

      kellemetlenCtrl: new FormControl('', Validators.required),
      kellemetlenElvegezve: this.addElvegezveControls(),

      ellensegessegCtrl: new FormControl('', Validators.required),
      ellensegessegElvegezve: this.addElvegezveControls(),

      onbizalomCtrl: new FormControl('', Validators.required),
      onbizalomElvegezve: this.addElvegezveControls(),

      felelemCtrl: new FormControl('', Validators.required),
      felelemElvegezve: this.addElvegezveControls(),

      kimerultsegCtrl: new FormControl('', Validators.required),
      kimerultsegElvegezve: this.addElvegezveControls(),

      introvertaltCtrl: new FormControl('', Validators.required),
      introvertaltElvegezve: this.addElvegezveControls(),

      szomorusagCtrl: new FormControl('', Validators.required),
      szomorusagElvegezve: this.addElvegezveControls(),

    })
  };

  // radio-buttons CHANGES

  // FOKOZOTT
  radioFokozottIgenChange($event: MatRadioChange) {
    this.isFokozottElv = true;
  }

  radioFokozottNemChange($event: MatRadioChange) {
    this.isFokozottElv = false;
  }

  // KAVARGO
  radioKavargoIgenChange($event: MatRadioChange) {
    this.isKavargoElv = true;
  }

  radioKavargoNemChange($event: MatRadioChange) {
    this.isKavargoElv = false;

  }

  // INDOKOLATLAN
  radioIndokolatlanIgenChange($event: MatRadioChange) {
    this.isIndokolatlanElv = true;
  }

  radioIndokolatlanNemChange($event: MatRadioChange) {
    this.isIndokolatlanElv = false;

  }

  // KELLEMETLEN
  radioKellemetlenIgenChange($event: MatRadioChange) {
    this.isKellemetlenElv = true;
  }

  radioKellemetlenNemChange($event: MatRadioChange) {
    this.isKellemetlenElv = false;
  }

  //ELLENSEGESSEG
  radioEllensegessegIgenChange($event: MatRadioChange) {
    this.isEllensegessegElv = true;
  }

  radioEllensegessegNemChange($event: MatRadioChange) {
    this.isEllensegessegElv = false;
  }

  // ONBIZALOM
  radioOnbizalomIgenChange($event: MatRadioChange) {
    this.isOnbizalomElv = true;
  }

  radioOnbizalomNemChange($event: MatRadioChange) {
    this.isOnbizalomElv = false;

  }

  //FELELEM
  radioFelelemIgenChange($event: MatRadioChange) {
    this.isFelelemElv = true;
  }

  radioFelelemNemChange($event: MatRadioChange) {
    this.isFelelemElv = false;

  }

  //KIMERULTSEG
  radioKimerultsegIgenChange($event: MatRadioChange) {
    this.isKimerultsegElv = true;
  }

  radioKimerultsegNemChange($event: MatRadioChange) {
    this.isKimerultsegElv = false;

  }

  // INTROVERTALTSAG
  radioIntrovertaltIgenChange($event: MatRadioChange) {
    this.isIntrovertaltElv = true;
  }

  radioIntrovertaltNemChange($event: MatRadioChange) {
    this.isIntrovertaltElv = false;

  }

  // SZOMORUSAG
  radioSzomorusagIgenChange($event: MatRadioChange) {
    this.isSzomorusagElv = true;
  }

  radioSzomorusagNemChange($event: MatRadioChange) {
    this.isSzomorusagElv = false;

  }

  // GETTERS
  // table items

    /**
     * Getter $fokozott
     * @return {string}
     */
	public get $fokozott(): string {

    this.fokozott = this.sajatMagamElemzesFormGroup.get('fokozottCtrl').value;
		return this.fokozott;
	}

    /**
     * Getter $fokozottElv
     * @return {boolean[]}
     */
	public get $fokozottElv(): boolean[] {

    this.fokozottElv = this.sajatMagamElemzesFormGroup.get('fokozottElvegezve').value;

		return this.fokozottElv;
	}

    /**
     * Getter $kavargo
     * @return {string}
     */
	public get $kavargo(): string {

    this.kavargo = this.sajatMagamElemzesFormGroup.get('kavargoCtrl').value;

		return this.kavargo;
	}

    /**
     * Getter $kavargoElv
     * @return {boolean[]}
     */
	public get $kavargoElv(): boolean[] {

    this.kavargoElv = this.sajatMagamElemzesFormGroup.get('kavargoElvegezve').value;

		return this.kavargoElv;
	}

    /**
     * Getter $indokolatlan
     * @return {string}
     */
	public get $indokolatlan(): string {

    this.indokolatlan = this.sajatMagamElemzesFormGroup.get('indokolatlanCtrl').value;

		return this.indokolatlan;
	}

    /**
     * Getter $indokolatlanElv
     * @return {boolean[]}
     */
	public get $indokolatlanElv(): boolean[] {

    this.indokolatlanElv = this.sajatMagamElemzesFormGroup.get('indokolatlanElvegezve').value;

		return this.indokolatlanElv;
	}

    /**
     * Getter $kellemetlen
     * @return {string}
     */
	public get $kellemetlen(): string {

    this.kellemetlen = this.sajatMagamElemzesFormGroup.get('kellemetlenCtrl').value;

		return this.kellemetlen;
	}

    /**
     * Getter $kellemetlenElv
     * @return {boolean[]}
     */
	public get $kellemetlenElv(): boolean[] {

    this.kellemetlenElv = this.sajatMagamElemzesFormGroup.get('kellemetlenElvegezve').value;

		return this.kellemetlenElv;
	}

    /**
     * Getter $ellensegesseg
     * @return {string}
     */
	public get $ellensegesseg(): string {

    this.ellensegesseg = this.sajatMagamElemzesFormGroup.get('ellensegessegCtrl').value;

		return this.ellensegesseg;
	}

    /**
     * Getter $ellensegessegElv
     * @return {boolean[]}
     */
	public get $ellensegessegElv(): boolean[] {

    this.ellensegessegElv = this.sajatMagamElemzesFormGroup.get('ellensegessegElvegezve').value;

		return this.ellensegessegElv;
	}

    /**
     * Getter $onbizalom
     * @return {string}
     */
	public get $onbizalom(): string {

    this.onbizalom = this.sajatMagamElemzesFormGroup.get('onbizalomCtrl').value;

		return this.onbizalom;
	}

    /**
     * Getter $onbizalomElv
     * @return {boolean[]}
     */
	public get $onbizalomElv(): boolean[] {

    this.onbizalomElv = this.sajatMagamElemzesFormGroup.get('onbizalomElvegezve').value;

		return this.onbizalomElv;
	}

    /**
     * Getter $felelem
     * @return {string}
     */
	public get $felelem(): string {

    this.felelem = this.sajatMagamElemzesFormGroup.get('felelemCtrl').value;

		return this.felelem;
	}

    /**
     * Getter $felelemElv
     * @return {boolean[]}
     */
	public get $felelemElv(): boolean[] {

    this.felelemElv = this.sajatMagamElemzesFormGroup.get('felelemElvegezve').value;

		return this.felelemElv;
	}

    /**
     * Getter $kimerultseg
     * @return {string}
     */
	public get $kimerultseg(): string {

    this.kimerultseg = this.sajatMagamElemzesFormGroup.get('kimerultsegCtrl').value;

		return this.kimerultseg;
	}

    /**
     * Getter $kimerultsegElv
     * @return {boolean[]}
     */
	public get $kimerultsegElv(): boolean[] {

    this.kimerultsegElv = this.sajatMagamElemzesFormGroup.get('kimerultsegElvegezve').value;

		return this.kimerultsegElv;
	}

    /**
     * Getter $introvertalt
     * @return {string}
     */
	public get $introvertalt(): string {

    this.introvertalt = this.sajatMagamElemzesFormGroup.get('introvertaltCtrl').value;

		return this.introvertalt;
	}

    /**
     * Getter $introvertaltElv
     * @return {boolean[]}
     */
	public get $introvertaltElv(): boolean[] {

    this.introvertaltElv = this.sajatMagamElemzesFormGroup.get('introvertaltElvegezve').value;

		return this.introvertaltElv;
	}

    /**
     * Getter $szomorusag
     * @return {string}
     */
	public get $szomorusag(): string {

    this.szomorusag = this.sajatMagamElemzesFormGroup.get('szomorusagCtrl').value;

		return this.szomorusag;
	}

    /**
     * Getter $szomorusagElv
     * @return {boolean[]}
     */
	public get $szomorusagElv(): boolean[] {

    this.szomorusagElv = this.sajatMagamElemzesFormGroup.get('szomorusagElvegezve').value;

		return this.szomorusagElv;
	}


  // ************ //


  /**
   * Getter $isFokozottElv
   * @return {boolean }
   */
  public get $isFokozottElv(): boolean {
    return this.isFokozottElv;
  }

  /**
   * Getter $isKavargoElv
   * @return {boolean }
   */
  public get $isKavargoElv(): boolean {
    return this.isKavargoElv;
  }

  /**
   * Getter $isIndokolatlanElv
   * @return {boolean }
   */
  public get $isIndokolatlanElv(): boolean {
    return this.isIndokolatlanElv;
  }

  /**
   * Getter $isKellemetlenElv
   * @return {boolean }
   */
  public get $isKellemetlenElv(): boolean {
    return this.isKellemetlenElv;
  }

  /**
   * Getter $isEllensegessegElv
   * @return {boolean }
   */
  public get $isEllensegessegElv(): boolean {
    return this.isEllensegessegElv;
  }

  /**
   * Getter $isOnbizalomElv
   * @return {boolean }
   */
  public get $isOnbizalomElv(): boolean {
    return this.isOnbizalomElv;
  }

  /**
   * Getter $isFelelemElv
   * @return {boolean }
   */
  public get $isFelelemElv(): boolean {
    return this.isFelelemElv;
  }

  /**
   * Getter $isKimerultsegElv
   * @return {boolean }
   */
  public get $isKimerultsegElv(): boolean {
    return this.isKimerultsegElv;
  }

  /**
   * Getter $isIntrovertaltElv
   * @return {boolean }
   */
  public get $isIntrovertaltElv(): boolean {
    return this.isIntrovertaltElv;
  }

  /**
   * Getter $isSzomorusagElv
   * @return {boolean }
   */
  public get $isSzomorusagElv(): boolean {
    return this.isSzomorusagElv;
  }



  // SETTERS

  /**
   * Setter $isFokozottElv
   * @param {boolean } value
   */
  public set $isFokozottElv(value: boolean) {
    this.isFokozottElv = value;
  }


  /**
   * Setter $isKavargoElv
   * @param {boolean } value
   */
  public set $isKavargoElv(value: boolean) {
    this.isKavargoElv = value;
  }

  /**
   * Setter $isIndokolatlanElv
   * @param {boolean } value
   */
  public set $isIndokolatlanElv(value: boolean) {
    this.isIndokolatlanElv = value;
  }

  /**
   * Setter $isKellemetlenElv
   * @param {boolean } value
   */
  public set $isKellemetlenElv(value: boolean) {
    this.isKellemetlenElv = value;
  }

  /**
   * Setter $isEllensegessegElv
   * @param {boolean } value
   */
  public set $isEllensegessegElv(value: boolean) {
    this.isEllensegessegElv = value;
  }

  /**
   * Setter $isOnbizalomElv
   * @param {boolean } value
   */
  public set $isOnbizalomElv(value: boolean) {
    this.isOnbizalomElv = value;
  }

  /**
   * Setter $isFelelemElv
   * @param {boolean } value
   */
  public set $isFelelemElv(value: boolean) {
    this.isFelelemElv = value;
  }

  /**
   * Setter $isKimerultsegElv
   * @param {boolean } value
   */
  public set $isKimerultsegElv(value: boolean) {
    this.isKimerultsegElv = value;
  }

  /**
   * Setter $isIntrovertaltElv
   * @param {boolean } value
   */
  public set $isIntrovertaltElv(value: boolean) {
    this.isIntrovertaltElv = value;
  }

  /**
   * Setter $isSzomorusagElv
   * @param {boolean } value
   */
  public set $isSzomorusagElv(value: boolean) {
    this.isSzomorusagElv = value;
  }



  // Get controls

  getFokozottControl() {
    //this.sajatMagamElemzesFormGroup.get('fokozottElvegezve').disable();
    return (this.sajatMagamElemzesFormGroup.get('fokozottElvegezve') as FormArray).controls;
  }

  getKavargoControl() {
    return (this.sajatMagamElemzesFormGroup.get('kavargoElvegezve') as FormArray).controls;
  }

  getIndokolatlanControl() {
    return (this.sajatMagamElemzesFormGroup.get('indokolatlanElvegezve') as FormArray).controls;
  }

  getKellemetlenControl() {
    return (this.sajatMagamElemzesFormGroup.get('kellemetlenElvegezve') as FormArray).controls;
  }

  getEllensegessegControl() {
    return (this.sajatMagamElemzesFormGroup.get('ellensegessegElvegezve') as FormArray).controls;
  }

  getOnbizalomControl() {
    return (this.sajatMagamElemzesFormGroup.get('onbizalomElvegezve') as FormArray).controls;
  }

  getFelelemControl() {
    return (this.sajatMagamElemzesFormGroup.get('felelemElvegezve') as FormArray).controls;
  }

  getKimerultsegControl() {
    return (this.sajatMagamElemzesFormGroup.get('kimerultsegElvegezve') as FormArray).controls;
  }

  getIntrovertaltControl() {
    return (this.sajatMagamElemzesFormGroup.get('introvertaltElvegezve') as FormArray).controls;
  }

  getSzomorusagControl() {
    return (this.sajatMagamElemzesFormGroup.get('szomorusagElvegezve') as FormArray).controls;
  }

  createMentalisElemzes(){

    this.mentalisElemzesService.createMentalisElemzes(
      this.$fokozott, this.$fokozottElv, this.$kavargo, this.$kavargoElv,
      this.$indokolatlan, this.$indokolatlanElv, this.$kellemetlen, this.$kellemetlenElv,
      this.$ellensegesseg, this.$ellensegessegElv, this.$onbizalom, this.$onbizalomElv,
      this.$felelem, this.$felelemElv, this.$kimerultseg, this.$kimerultsegElv,
      this.$introvertalt, this.$introvertaltElv, this.$szomorusag, this.$szomorusagElv
    )

  }

  getMentalisElemzes(){
    this.mentalisElemzesService.getMentalisElemzes().subscribe(
      adatok => {
        this.mentalisElemzes = adatok;
      }
    )
  }

  // **** Submit form ****

  sajatMagamElemzeseSubmit() {

    // create mentalis-elemzes model and save in service
    this.createMentalisElemzes();
    this.getMentalisElemzes();

    this.filledSaveSajatEmitter.emit(this.mentalisElemzes);

    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Mentális elemzés sikeresen hozzáadva!'});

  }

  redirectToBlog(){
    let url = "https://blog.sb-investing.com/mentalis-elemzes/";
    window.open(url, "_blank");
  }

  // redirect to blog pages
  redirectToBlogFokozott(){
    let url = "https://blog.sb-investing.com/fokozott-erzelmi-hangulat-kezelese/";
    window.open(url, "_blank");
  }

  redirectToBlogKavargo(){
    let url = "https://blog.sb-investing.com/kavargo-gondolatok-kezelese/";
    window.open(url, "_blank");
  }

  redirectToBlogIndokolatlan(){
    let url = "https://blog.sb-investing.com/indokolatlan-rossz-erzes-kezelese/";
    window.open(url, "_blank");
  }

  redirectToBlogKellemetlen(){
    let url = "https://blog.sb-investing.com/kellemetlen-esemenyek-es-duh-kezelese/";
    window.open(url, "_blank");
  }

  redirectToBlogEllensegesseg(){
    let url = "https://blog.sb-investing.com/ellensegesseg-erzesenek-kezelese/";
    window.open(url, "_blank");
  }

  redirectToBlogOnbizalom(){
    let url = "https://blog.sb-investing.com/onbizalomhiany-erzesenek-kezelese/";
    window.open(url, "_blank");
  }

  redirectToBlogFelelem(){
    let url = "https://blog.sb-investing.com/felelem-kezelese/";
    window.open(url, "_blank");
  }

  redirectToBlogKimerultseg(){
    let url = "https://blog.sb-investing.com/kimerultseg-kezelese/";
    window.open(url, "_blank");
  }

  redirectToBlogIntrovertalt(){
    let url = "https://blog.sb-investing.com/introvertaltsag-kezelese/";
    window.open(url, "_blank");
  }

  redirectToBlogSzomorusag(){
    let url = "https://blog.sb-investing.com/szomorusag-kezelese/";
    window.open(url, "_blank");
  }


}




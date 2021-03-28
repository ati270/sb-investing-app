import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BefektetesAdatok } from 'src/app/models/uj-befektetes-models/befektetes-adatok/bef-adatok.model';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { AddEredmenyDialogComponent } from 'src/app/components/dialogs/add-eredmeny-dialog/add-eredmeny-dialog.component';
import { CelarMeghatarozasModule } from '../celar-meghatarozas/celar-meghatarozas.module';
import { CelarMeghatarozas } from 'src/app/models/uj-befektetes-models/celar-meghatarozas/celar-meghatarozas.model';
import { Observable , of} from 'rxjs';
import { Manageles } from 'src/app/models/uj-befektetes-models/manageles/manageles.model';
import { BefAdatokService } from 'src/app/services/befektetesek/uj-befektetes-services/befektetes-adatok/bef-adatok.service';
import { CelarMeghatarozasService } from 'src/app/services/befektetesek/uj-befektetes-services/celar-meghatarozas/celar-meghatarozas.service';
import { ManagelesService } from 'src/app/services/befektetesek/uj-befektetes-services/manageles/manageles.service';
import { SaveReszvenyDialogComponent } from 'src/app/components/dialogs/save-reszveny-dialog/save-reszveny-dialog.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manageles',
  templateUrl: './manageles.component.html',
  styleUrls: ['./manageles.component.scss'],
  providers: [MessageService]
})
export class ManagelesComponent implements OnInit, AfterViewInit {

  manageles: Manageles;

  @Output() filledManagelesEmitter: EventEmitter<Manageles> = new EventEmitter();


  @ViewChild('egyebSzektor') egyebSzektorInput: ElementRef;

  @ViewChild('gazdIngadozasInput') gazdIngadozasInput: ElementRef;

  @ViewChild('magasRizikoInput') magasRizikoInput: ElementRef;

  @ViewChild('rosszPenzInput') rosszPenzInput: ElementRef;

  @ViewChild('rosszHatInput') rosszHatInput: ElementRef;


  @ViewChild('hosszuTavEladInput') hosszuTavEladInput: ElementRef;


  @ViewChild('rovidTavEladInput') rovidTavEladInput: ElementRef;


  @ViewChild('piaciMutInput') piaciMutInput: ElementRef;


  @ViewChild('magasReszvenyInput') magasReszvenyInput: ElementRef;


  @ViewChild('nettoJelenNegativInput') nettoJelenNegativInput: ElementRef;


  @ViewChild('egyebInput') egyebInput: ElementRef;

  @ViewChild('arfolyamEsesInput') arfolyamEsesEgyebInput: ElementRef;

  @ViewChild('arfolyamCelarInput') arfolyamCelarEgyebInput: ElementRef;

  @ViewChild('rizikoFaktorNottInput') rizikoFaktorNottEgyebInput: ElementRef;

  @ViewChild('jovRomlottInput') jovedelemRomlottEgyebInput: ElementRef;

  @ViewChild('hitelRomlottInput') hitelRomlottEgyebInput: ElementRef;

  @ViewChild('gazdRomlottInput') gazdasagRomlottEgyebInput: ElementRef;

  @ViewChild('arfolyamEmelkedesInput') arfolyamEmelkedesEgyebInput: ElementRef;

  @ViewChild('vallRizikoIcon') vallRizikoEdit: ElementRef;

  @ViewChild('gazdasagiIcon') gazdasagIngEdit: ElementRef;


  private piaciKapitalizacio: string[] = ['Mega', 'Nagy', 'Közepes', 'Kicsi', 'Mikro', 'Nano'];
  private strategiak: string[] = ['Válság', 'Normál', 'Bőség'];
  private szektorok: string[] = [
    'Alapanyag gyártó cégek', 'Energiai szektor', 'Iperi termelési szektor',
    'Technológiai szektor', 'Fogyasztási javak', 'Termékek gyártása', 'Szolgáltatást nyújtó vállalatok',
    'Ingatlan', 'Egészségügyi szolgáltatás', 'Közszolgáltatást végző vállalatok / Segédprogramok',
    'Pénzügyi szektor', 'Konglomerátumok Holdingok'
  ];

  private vasarlas: string[] = ['Három részre osztott vásárlás',
    'Egyösszegű vásárlás', 'Kis összegű tőkeáttételes vásárlás'];

  private eszkozok: string[] = ['Törzsrészvény', 'Tőkeáttételes CFD'];
  $allItems: Observable<number[]>;
  private megterules: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  private stopSzintek: string[] = ['Van', 'Nincs'];

  private mikorVasarol: string[] = ['Vásárlás azonnal lehetséges', 'Figyelőlistára rakom', 'Elvetem a vásárlást'];

  private arfolyamEsesek: string[] = ['Nem csinálok semmit', 'Eladom a részvényeket, és alacsonyabb áron visszavásárolom',
    'Rávásárolok alacsonyabb árfolyamon', 'Eladom a részvények 70 % -át és alacsonnyabb árfolyamon visszavásárolom ',
    'Eladom a részvényeket az előre megadott stop szinten'];

  private arfolyamEmelkedesek: string[] = ['Nem csinálok semmit','Eladom a részvények egy részét',
    'Stop szinttel védem a befektetésem'];

  private arfolyamCelarak: string[] = ['Eladom a részvényeket','Eladom a részvények egy részét',
    'Stop szinttel védem a befektetésemet'];

  private rizikoFaktorok: string[] = ['Nem csinálok semmit','Eladom a részvények egy részét',
    'Eladom a részvényeket', 'Stop szinttel védem a befektetésemet'];

  private jovRomottak: string[] = ['Nem csinálok semmit', 'Stop szinttel védem a befektetésemet',
    'Eladom a részvények egy részét', 'Eladom a részvényeket'];

  private hitelRomlottak: string[] = ['Nem csinálok semmit',
    'A részvények egy részét eladom', 'Stop szinttel védem a befektetésemet'];

  private gazdRomlottak: string[] = ['Eladom a részvényeket', 'Stop szinttel védem a befektetésemet'];

  private befektetesMenedzselesTable: string[] = ['a', 'b', 'c'];

  private evesMegtakaritas: number;
  private befektethetoOsszeg: number = 0;

  private gazdasagiMagyarazatIngadozas: string;
  private magasRizikoMagyarazat: string;
  private rosszPenzugyiMutatoMagyarazat: string;
  private rosszHatekonysagiMutatoMagyarazat: string;
  private hosszuTavuEladosodasMagyarazat: string;
  private rovidTavuEladosodasMagyarazat: string;
  private piaciMutatoMagyarazat: string;
  private magasReszvenyArfolyamMagyarazat: string;
  private befektetesNettoJelenNegativMagyarazat: string;
  private egyebMagyarazat: string;
  penznemElemzes: string;
  penznemCelar: string;

  isLinear = false;
  isHasAdat: boolean = false;

  managelesAdatokFormGroup: FormGroup;
  managelesReszvenyFormGroup: FormGroup;
  managelesKulonbozoFormGroup: FormGroup;
  befManagelesFormGroup: FormGroup;

  befAdatok: BefektetesAdatok;
  celarMeghatarozas: Observable<CelarMeghatarozas>;
  val: number = 0;


  private gazdIngadozas: string = "";
  private magasRiziko: string = "";
  private rosszPenz: string = "";
  private rosszHat: string = "";
  private hosszuTavElad: string = "";
  private rovidTavElad: string = "";
  private piaciMutato: string = "";
  private magasReszveny: string = "";
  private nettoJelenNegativ: string = "";
  private egyeb: string = "";
  private evek: number[] = [1,2, 3, 4, 5, 6, 8, 10];


  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private egyebSelectSnackBar: MatSnackBar,
    private befektetesAdatokService: BefAdatokService,
    private celarService: CelarMeghatarozasService, private managelesService: ManagelesService,
    private router: Router, public location: Location,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.createAdatokFormGroup();
    this.createReszvenyFormGroup();
    this.createManagelesKulonbozoFormGroup();
    this.createBefManagelesFormGroup();
    this.onChanges();
    this.managelesService.getStoreValues();
  }

  ngAfterViewInit(): void {

  }

  getKotesek(): Observable<Array<number>>{
    return of(this.managelesService.$kotesek);
  }


  createAdatokFormGroup() {
    this.managelesAdatokFormGroup = this.formBuilder.group({
      altalanosMenegelesAdatok: this.formBuilder.group({
        vallNeveCtrl: new FormControl('', Validators.required),
        reszvenyRovJeleCtrl: new FormControl('', Validators.required),
        piaciKapCtrl: new FormControl('', Validators.required),
        strategiaCtrl: new FormControl('', Validators.required),
        szektorCtrl: new FormControl('', Validators.required),
        elemzesiArfolyamCtrl: new FormControl('', Validators.required),
        celarArfolyamCtrl: new FormControl('', Validators.required),
        elemzesPenznemCtrl: new FormControl('', Validators.required),
        evesMegtakaritasCtrl: new FormControl('', Validators.required),
        celarPenznemCtrl: new FormControl('', Validators.required)
      })
    })
  }

  createReszvenyFormGroup() {
    this.managelesReszvenyFormGroup = this.formBuilder.group({
      reszvenyMenegelesAdatok: this.formBuilder.group({
        vasarlasCtrl: new FormControl('', Validators.required),
        eszkozCtrl: new FormControl('', Validators.required),
        //megterulesCtrl: new FormControl('', Validators.required),
        stopSzintCtrl: new FormControl('', Validators.required),
        rizikoFaktorCtrl: new FormControl('', Validators.required),
        befTokeCtrl: new FormControl('', Validators.required),
        mikorVasarolniCtrl: new FormControl('', Validators.required),
        halasztasAdatok: this.formBuilder.group({
          gazdasagiIngadozasCtrl: new FormControl(false),
          gazdasagiIngadozasMagyarazatCtrl: new FormControl({ value: '', disabled: true }),

          vallalatiRizikoCtrl: new FormControl(false),
          valallatiRizikoMagyarazatCtrl: new FormControl({ value: '', disabled: true }),

          vallalatiRosszPenzMutatoCtrl: new FormControl(false),
          vallalatiRosszPenzMutatoMagyCtrl: new FormControl({ value: '', disabled: true }),

          vallRosszHatMutCtrl: new FormControl(false),
          vallalatRosszHatMutMagyarazatCtrl: new FormControl({ value: '', disabled: true }),

          vallHosszuEladosodasCtrl: new FormControl(false),
          vallalatHosszuEladosodasMagyarazatCtrl: new FormControl({ value: '', disabled: true }),

          vallRovidEladosodasCtrl: new FormControl(false),
          vallalatRovidEladosodasMagyarazatCtrl: new FormControl({ value: '', disabled: true }),

          vallPiaciMutCtrl: new FormControl(false),
          vallalatPiaciMutMagyarazatCtrl: new FormControl({ value: '', disabled: true }),

          vallMagasReszvenyCtrl: new FormControl(false),
          vallalatMagasReszvenyMagyarazatCtrl: new FormControl({ value: '', disabled: true }),

          BefNettoJelenCtrl: new FormControl(false),
          befNettoJelenMagyarazatCtrl: new FormControl({ value: '', disabled: true }),

          egyebCtrl: new FormControl(false),
          egyebMagyarazatCtrl: new FormControl({ value: '', disabled: true }),
        })
      })
    })
  }

  createManagelesKulonbozoFormGroup() {
    this.managelesKulonbozoFormGroup = this.formBuilder.group({
      menegelesStrategiaAdatok: this.formBuilder.group({
        arfolyamEsesCtrl: new FormControl('', Validators.required),
        arfolyamEmelkedesCtrl: new FormControl('', Validators.required),
        arfolyamCelarCtrl: new FormControl('', Validators.required),
        rizikoFaktorNottCtrl: new FormControl('', Validators.required),
        jovRomlottCtrl: new FormControl('', Validators.required),
        hitelRomlottCtrl: new FormControl('', Validators.required),
        gazdRomlottCtrl: new FormControl('', Validators.required)
      })
    })
  }

  createBefManagelesFormGroup() {
    this.befManagelesFormGroup = this.formBuilder.group({
      tableRows: this.formBuilder.array([this.initRows()])
    });
  }

  initRows() {
    return this.formBuilder.group({
      kovDatum: new FormControl(''),
      arfolyam: new FormControl(''),
      bekValtozasok: new FormControl(''),
      intezkedeseim: new FormControl('')
    });
  }

  addNewRow() {
    const control = <FormArray>this.befManagelesFormGroup.controls['tableRows'];
    control.push(this.initRows());
  }

  deleteRow(index: number) {
    let totalRow = 0;

    const control = <FormArray>this.befManagelesFormGroup.controls['tableRows'];

    if (control !== null) {
      totalRow = control.value.length;
    }
    if (totalRow > 0) {
      control.removeAt(index);
    }
  }

  getTableControls() {
    return (this.befManagelesFormGroup.get('tableRows') as FormArray).controls;
  }

  onChanges() {
    this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok').get('gazdasagiIngadozasMagyarazatCtrl').valueChanges.subscribe(val => {
      this.gazdIngadozas = val;
    })
    this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok').get('valallatiRizikoMagyarazatCtrl').valueChanges.subscribe(val => {
      this.magasRiziko = val;
    })

    this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok').get('vallalatiRosszPenzMutatoMagyCtrl').valueChanges.subscribe(val => {
      this.rosszPenz = val;
    })

    this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok').get('vallalatRosszHatMutMagyarazatCtrl').valueChanges.subscribe(val => {
      this.rosszHat = val;
    })

    this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok').get('vallalatHosszuEladosodasMagyarazatCtrl').valueChanges.subscribe(val => {
      this.hosszuTavElad = val;
    })

    this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok').get('vallalatRovidEladosodasMagyarazatCtrl').valueChanges.subscribe(val => {
      this.rovidTavElad = val;
    })

    this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok').get('vallalatPiaciMutMagyarazatCtrl').valueChanges.subscribe(val => {
      this.piaciMutato = val;
    })

    this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok').get('vallalatMagasReszvenyMagyarazatCtrl').valueChanges.subscribe(val => {
      this.magasReszveny = val;
    })


    this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok').get('befNettoJelenMagyarazatCtrl').valueChanges.subscribe(val => {
      this.nettoJelenNegativ = val;
    })

    this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok').get('egyebMagyarazatCtrl').valueChanges.subscribe(val => {
      this.egyeb = val;
    })

  }

  // DIALOGS
  openGazdasagiIngadozasDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',
      data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.gazdIngadozas = result;
        console.log(result);
        console.log(this.$gazdIngadozas);
        this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
          .get('gazdasagiIngadozasMagyarazatCtrl').setValue(this.$gazdIngadozas);

        this.gazdIngadozasInput.nativeElement.value = this.$gazdIngadozas;
      }
    });
  }

  openMagasRizikoDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',
      data: { eredmeny: this.magasRiziko, megnevezes: "A vállalati tizikó túl magas" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.magasRiziko = result;
        console.log(result);
        console.log(this.$magasRiziko);
        this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
          .get('valallatiRizikoMagyarazatCtrl').setValue(this.$magasRiziko);

        this.magasRizikoInput.nativeElement.value = this.$magasRiziko;
      }
    });
  }

  openRosszPenzMutatoDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',
      data: { eredmeny: this.rosszPenz, megnevezes: "Vállalat rossz pénzügyi mutatója" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rosszPenz = result;
        console.log(result);
        console.log(this.$rosszPenz);
        this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
          .get('vallalatiRosszPenzMutatoMagyCtrl').setValue(this.$rosszPenz);

        this.rosszPenzInput.nativeElement.value = this.$rosszPenz;
      }
    });
  }

  openRosszHatekonysagDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',
      data: { eredmeny: this.rosszHat, megnevezes: "Vállalat rossz hatékonysági mutatója" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rosszHat = result;
        console.log(result);
        console.log(this.$rosszHat);
        this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
          .get('vallalatRosszHatMutMagyarazatCtrl').setValue(this.$rosszHat);

        this.rosszHatInput.nativeElement.value = this.$rosszHat;
      }
    });
  }

  openHosszuTavEladDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',
      data: { eredmeny: this.hosszuTavElad, megnevezes: "Válallat hosszú távú eladósodottsága" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.hosszuTavElad = result;
        console.log(result);
        console.log(this.$hosszuTavElad);
        this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
          .get('vallalatHosszuEladosodasMagyarazatCtrl').setValue(this.$hosszuTavElad);

        this.hosszuTavEladInput.nativeElement.value = this.$hosszuTavElad;
      }
    });

  }

  openRovidTavEladDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',
      data: { eredmeny: this.rovidTavElad, megnevezes: " Válallat rövid távú eladósodottsága" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rovidTavElad = result;
        console.log(result);
        console.log(this.$rovidTavElad);
        this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
          .get('vallalatRovidEladosodasMagyarazatCtrl').setValue(this.$rovidTavElad);

        this.rovidTavEladInput.nativeElement.value = this.$rovidTavElad;
      }
    });
  }

  openPiaciMutatoDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',
      data: { eredmeny: this.piaciMutato, megnevezes: "Vállalat piaci mutatói túlértékeltek" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.piaciMutato = result;
        console.log(result);
        console.log(this.$piaciMutato);
        this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
          .get('vallalatPiaciMutMagyarazatCtrl').setValue(this.$piaciMutato);

        this.piaciMutInput.nativeElement.value = this.$piaciMutato;
      }
    });

  }

  redirectToBlog(){
    let url = "https://blog.sb-investing.com/menedzseles/";
    window.open(url, "_blank");
  }

  openMagasReszvenyDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',
      data: { eredmeny: this.magasReszveny, megnevezes: "Túl magas részvény árfolyam" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.magasReszveny = result;
        console.log(result);
        console.log(this.$magasReszveny);
        this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
          .get('vallalatMagasReszvenyMagyarazatCtrl').setValue(this.$magasReszveny);

        this.magasReszvenyInput.nativeElement.value = this.$magasReszveny;
      }
    });
  }

  openNettoJelenNegativDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',
      data: { eredmeny: this.nettoJelenNegativ, megnevezes: "Befektetés nettó jelenértéke negatív" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.nettoJelenNegativ = result;
        console.log(result);
        console.log(this.$nettoJelenNegativ);
        this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
          .get('befNettoJelenMagyarazatCtrl').setValue(this.$nettoJelenNegativ);

        this.nettoJelenNegativInput.nativeElement.value = this.$nettoJelenNegativ;
      }
    });

  }

  openEgyebDialog(): void {

    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',
      data: { eredmeny: this.egyeb, megnevezes: "Egyéb" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.egyeb = result;
        console.log(result);
        console.log(this.$egyeb);
        this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
          .get('egyebMagyarazatCtrl').setValue(this.$egyeb);

        this.egyebInput.nativeElement.value = this.$egyeb;
      }
    });

  }


  // Checkboxes events


  gazdasagiIngChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
        .get('gazdasagiIngadozasMagyarazatCtrl').enable();

      //this.gazdasagIngEdit.nativeElement.disable = false;
    }
    else {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok')
        .get('halasztasAdatok').get('gazdasagiIngadozasMagyarazatCtrl').disable();

      //this.gazdasagIngEdit.nativeElement.disable = true;
    }
  }

  vallRizikoChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
        .get('valallatiRizikoMagyarazatCtrl').enable();

      //this.vallRizikoEdit.nativeElement.disable = false;
    }
    else {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok')
        .get('halasztasAdatok').get('valallatiRizikoMagyarazatCtrl').disable();

      //this.vallRizikoEdit.nativeElement.disable = true;
    }
  }

  vallRosszPenzMutatoChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
        .get('vallalatiRosszPenzMutatoMagyCtrl').enable();

    }
    else {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok')
        .get('halasztasAdatok').get('vallalatiRosszPenzMutatoMagyCtrl').disable();

    }
  }

  vallalatRosszHAtMutatoChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
        .get('vallalatRosszHatMutMagyarazatCtrl').enable();

    }
    else {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok')
        .get('halasztasAdatok').get('vallalatRosszHatMutMagyarazatCtrl').disable();

    }
  }

  vallalatHosszuEladosodasChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
        .get('vallalatHosszuEladosodasMagyarazatCtrl').enable();

    }
    else {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok')
        .get('halasztasAdatok').get('vallalatHosszuEladosodasMagyarazatCtrl').disable();

    }
  }

  vallalatRovidEladosodasChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
        .get('vallalatRovidEladosodasMagyarazatCtrl').enable();

    }
    else {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok')
        .get('halasztasAdatok').get('vallalatRovidEladosodasMagyarazatCtrl').disable();

    }
  }

  vallalatPiaciMutChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
        .get('vallalatPiaciMutMagyarazatCtrl').enable();

    }
    else {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok')
        .get('halasztasAdatok').get('vallalatPiaciMutMagyarazatCtrl').disable();

    }
  }

  vallalatMagasReszvenyChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
        .get('vallalatMagasReszvenyMagyarazatCtrl').enable();

    }
    else {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok')
        .get('halasztasAdatok').get('vallalatMagasReszvenyMagyarazatCtrl').disable();

    }
  }

  befNettoJelenChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
        .get('befNettoJelenMagyarazatCtrl').enable();

    }
    else {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok')
        .get('halasztasAdatok').get('befNettoJelenMagyarazatCtrl').disable();

    }
  }

  egyebChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok').get('halasztasAdatok')
        .get('egyebMagyarazatCtrl').enable();

    }
    else {
      this.managelesReszvenyFormGroup.get('reszvenyMenegelesAdatok')
        .get('halasztasAdatok').get('egyebMagyarazatCtrl').disable();

    }
  }


  createManageles() {
    this.managelesService.createManageles(
      this.managelesAdatokFormGroup.value,
      this.managelesReszvenyFormGroup.value,
      this.managelesKulonbozoFormGroup.value,
      this.befManagelesFormGroup.value
    )
  }

  getManageles() {

    this.managelesService.getManageles().subscribe(
      adatok => {
        this.manageles = adatok;
      }
    )
  }

  saveManageles() {
    this.createManageles();
    this.getManageles();

    this.filledManagelesEmitter.emit(this.manageles);

    console.log(this.manageles);

    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Managelés sikeresen hozzáadva!' });
  }





  addSelectNewSzektor(egyebSelect: string) {
    console.log(egyebSelect);
    this.szektorok.push(egyebSelect);
    // Popup
    this.egyebSelectSnackBar.open('Sikeresen hozzáadva:', egyebSelect,
      {
        duration: 5000,
        panelClass: ['mat-access']
      })
    // Clear data from input field
    this.egyebSzektorInput.nativeElement.value = '';
  }

  onValChange(value) {
    if (value !== 'nem') {
      this.befektethetoOsszeg = (( this.$evesMegtakaritas / 100) *Number(value));
    }
    else {
      this.$befektethetoOsszeg = 0;
    }
    console.log(value)
  }

  addValueToArfolyamEses(value: string) {
    this.$arfolyamEsesek.push(value);

    // Popup
    this.egyebSelectSnackBar.open('Sikeresen hozzáadva:', value,
      {
        duration: 5000,
        panelClass: ['blue-snackbar']
      })
    // Clear data from input field
    this.arfolyamEsesEgyebInput.nativeElement.value = '';
  }

  addValueToArfolyamEmelkedes(value: string) {
    this.$arfolyamEmelkedesek.push(value);

    this.egyebSelectSnackBar.open('Sikeresen hozzáadva:', value,
      {
        duration: 5000,
        panelClass: ['blue-snackbar']
      })
    // Clear data from input field
    this.arfolyamEmelkedesEgyebInput.nativeElement.value = '';
  }

  addValueToArfolyamCelar(value: string) {
    this.$arfolyamCelarak.push(value);

    this.egyebSelectSnackBar.open('Sikeresen hozzáadva:', value,
      {
        duration: 5000,
        panelClass: ['blue-snackbar']
      })
    // Clear data from input field
    this.arfolyamCelarEgyebInput.nativeElement.value = '';
  }

  addValueToRizikoFaktorNott(value: string) {
    this.$rizikoFaktorok.push(value);

    this.egyebSelectSnackBar.open('Sikeresen hozzáadva:', value,
      {
        duration: 5000,
        panelClass: ['blue-snackbar']
      })
    // Clear data from input field
    this.rizikoFaktorNottEgyebInput.nativeElement.value = '';

  }

  addValueToJovRomlott(value: string) {
    this.$jovRomottak.push(value);

    this.egyebSelectSnackBar.open('Sikeresen hozzáadva:', value,
      {
        duration: 5000,
        panelClass: ['blue-snackbar']
      })
    // Clear data from input field
    this.jovedelemRomlottEgyebInput.nativeElement.value = '';

  }

  addValueToHitelRomlott(value: string) {
    this.$hitelRomlottak.push(value);

    this.egyebSelectSnackBar.open('Sikeresen hozzáadva:', value,
      {
        duration: 5000,
        panelClass: ['blue-snackbar']
      })
    // Clear data from input field
    this.hitelRomlottEgyebInput.nativeElement.value = '';
  }

  addValueToGazdRomlott(value: string) {

    this.$gazdRomlottak.push(value);

    this.egyebSelectSnackBar.open('Sikeresen hozzáadva:', value,
      {
        duration: 5000,
        panelClass: ['blue-snackbar']
      })
    // Clear data from input field
    this.gazdasagRomlottEgyebInput.nativeElement.value = '';

  }
  // GETTERS

  // ******** FORM Getters *******


  // ********* magyarazat dialogs ***********
  /**
   * Getter $gazdIngadozas
   * @return {string }
   */
  public get $gazdIngadozas(): string {
    return this.gazdIngadozas;
  }


  /**
   * Getter $magasRiziko
   * @return {any}
   */
  public get $magasRiziko(): any {
    return this.magasRiziko;
  }


  /**
   * Getter $rosszPenz
   * @return {any}
   */
  public get $rosszPenz(): any {
    return this.rosszPenz;
  }


  /**
   * Getter $rosszHat
   * @return {string }
   */
  public get $rosszHat(): string {
    return this.rosszHat;
  }

  /**
   * Getter $hosszuTavElad
   * @return {string }
   */
  public get $hosszuTavElad(): string {
    return this.hosszuTavElad;
  }

  /**
   * Getter $rovidTavElad
   * @return {string }
   */
  public get $rovidTavElad(): string {
    return this.rovidTavElad;
  }

  /**
   * Getter $piaciMutato
   * @return {string }
   */
  public get $piaciMutato(): string {
    return this.piaciMutato;
  }

  /**
   * Getter $magasReszveny
   * @return {string }
   */
  public get $magasReszveny(): string {
    return this.magasReszveny;
  }

  /**
   * Getter $nettoJelenNegativ
   * @return {string }
   */
  public get $nettoJelenNegativ(): string {
    return this.nettoJelenNegativ;
  }

  /**
   * Getter $egyeb
   * @return {string }
   */
  public get $egyeb(): string {
    return this.egyeb;
  }



    /**
     * Getter $megterules
     * @return {number[] }
     */
	public get $megterules(): number[]  {
		return this.megterules;
	}

    /**
     * Setter $megterules
     * @param {number[] } value
     */
	public set $megterules(value: number[] ) {
		this.megterules = value;
	}


    /**
     * Getter $evek
     * @return {number[] }
     */
	public get $evek(): number[]  {
		return this.evek;
	}

    /**
     * Setter $evek
     * @param {number[] } value
     */
	public set $evek(value: number[] ) {
		this.evek = value;
	}


  //***************************** */
  /**
   * Getter $evesMegtakaritas
   * @return {number}
   */
  public get $evesMegtakaritas(): number {
    this.evesMegtakaritas = this.managelesAdatokFormGroup.get('altalanosMenegelesAdatok').get('evesMegtakaritasCtrl').value;
    return this.evesMegtakaritas;
  }


  // ******* other Getters ******

  // ********* Input field getters ************

  /**
   * Getter $gazdasagiIngadozas
   * @return {string}
   */
  public get $gazdasagiMagyarazatIngadozas(): string {

    this.gazdasagiMagyarazatIngadozas = this.managelesReszvenyFormGroup.get('halasztasAdatok').get('gazdasagiIngadozasMagyarazatCtrl').value;

    return this.gazdasagiMagyarazatIngadozas;
  }


  /**
   * Getter $magasRiziko
   * @return {string}
   */
  public get $magasRizikoMagyarazat(): string {

    this.magasRizikoMagyarazat = this.managelesReszvenyFormGroup.get('halasztasAdatok').get('valallatiRizikoMagyarazatCtrl').value;

    return this.magasRizikoMagyarazat;
  }


  /**
   * Getter $rosszPenzugyiMutatoMagyarazat
   * @return {string}
   */
  public get $rosszPenzugyiMutatoMagyarazat(): string {

    this.rosszPenzugyiMutatoMagyarazat = this.managelesReszvenyFormGroup.get('halasztasAdatok').get('vallalatiRosszPenzMutatoMagyCtrl').value;

    return this.rosszPenzugyiMutatoMagyarazat;
  }

  /**
   * Getter $rosszHatekonysagiMutatoMagyarazat
   * @return {string}
   */
  public get $rosszHatekonysagiMutatoMagyarazat(): string {

    this.rosszHatekonysagiMutatoMagyarazat = this.managelesReszvenyFormGroup.get('halasztasAdatok').get('vallalatRosszHatMutMagyarazatCtrl').value;

    return this.rosszHatekonysagiMutatoMagyarazat;
  }

  /**
   * Getter $hosszuTavuEladosodasMagyarazat
   * @return {string}
   */
  public get $hosszuTavuEladosodasMagyarazat(): string {

    this.hosszuTavuEladosodasMagyarazat = this.managelesReszvenyFormGroup.get('halasztasAdatok').get('vallalatHosszuEladosodasMagyarazatCtrl').value;

    return this.hosszuTavuEladosodasMagyarazat;
  }

  /**
   * Getter $rovidTavuEladosodasMagyarazat
   * @return {string}
   */
  public get $rovidTavuEladosodasMagyarazat(): string {

    this.rovidTavuEladosodasMagyarazat = this.managelesReszvenyFormGroup.get('halasztasAdatok').get('vallalatRovidEladosodasMagyarazatCtrl').value;

    return this.rovidTavuEladosodasMagyarazat;
  }

  /**
   * Getter $piaciMutatoMagyarazat
   * @return {string}
   */
  public get $piaciMutatoMagyarazat(): string {

    this.piaciMutatoMagyarazat = this.managelesReszvenyFormGroup.get('halasztasAdatok').get('vallalatPiaciMutMagyarazatCtrl').value;

    return this.piaciMutatoMagyarazat;
  }

  /**
   * Getter $magasReszvenyArfolyamMagyarazat
   * @return {string}
   */
  public get $magasReszvenyArfolyamMagyarazat(): string {

    this.magasRizikoMagyarazat = this.managelesReszvenyFormGroup.get('halasztasAdatok').get('vallalatMagasReszvenyMagyarazatCtrl').value;

    return this.magasReszvenyArfolyamMagyarazat;
  }

  /**
   * Getter $befektetesNettoJelenNegativMagyarazat
   * @return {string}
   */
  public get $befektetesNettoJelenNegativMagyarazat(): string {

    this.befektetesNettoJelenNegativMagyarazat = this.managelesReszvenyFormGroup.get('halasztasAdatok').get('befNettoJelenMagyarazatCtrl').value;

    return this.befektetesNettoJelenNegativMagyarazat;
  }

  /**
   * Getter $egyebMagyarazat
   * @return {string}
   */
  public get $egyebMagyarazat(): string {

    this.egyebMagyarazat = this.managelesReszvenyFormGroup.get('halasztasAdatok').get('egyebMagyarazatCtrl').value;

    return this.egyebMagyarazat;
  }

  //*************************************************** */
  /**
   * Getter $befektethetoOsszeg
   * @return {number}
   */
  public get $befektethetoOsszeg(): number {

    return this.befektethetoOsszeg;
  }


  /**
   * Getter $mikorVasarol
   * @return {string[] }
   */
  public get $mikorVasarol(): string[] {
    return this.mikorVasarol;
  }

  /**
   * Getter $stopSzintek
   * @return {string[] }
   */
  public get $stopSzintek(): string[] {
    return this.stopSzintek;
  }




  /**
   * Getter $eszkozok
   * @return {string[] }
   */
  public get $eszkozok(): string[] {
    return this.eszkozok;
  }


  /**
   * Getter $vasarlas
   * @return {string[] }
   */
  public get $vasarlas(): string[] {
    return this.vasarlas;
  }


  /**
   * Getter $piaciKapitalizacio
   * @return {string[] }
   */
  public get $piaciKapitalizacio(): string[] {
    return this.piaciKapitalizacio;
  }

  /**
   * Getter $strategiak
   * @return {string[] }
   */
  public get $strategiak(): string[] {
    return this.strategiak;
  }


  /**
   * Getter $szektorok
   * @return {string[] }
   */
  public get $szektorok(): string[] {
    return this.szektorok;
  }

  // SETTERS


  /**
   * Setter $szektorok
   * @param {string[] } value
   */
  public set $szektorok(value: string[]) {
    this.szektorok = value;
  }


  /**
   * Setter $befektethetoOsszeg
   * @param {number} value
   */
  public set $befektethetoOsszeg(value: number) {
    this.befektethetoOsszeg = value;
  }


  /**
   * Getter $arfolyamEsesek
   * @return {string[] }
   */
  public get $arfolyamEsesek(): string[] {
    return this.arfolyamEsesek;
  }


  /**
   * Getter $afolyamEmelkedesek
   * @return {string[] }
   */
  public get $arfolyamEmelkedesek(): string[] {
    return this.arfolyamEmelkedesek;
  }


  /**
   * Getter $arfolyamCelarak
   * @return {string[] }
   */
  public get $arfolyamCelarak(): string[] {
    return this.arfolyamCelarak;
  }


  /**
   * Getter $rizikoFaktorok
   * @return {string[] }
   */
  public get $rizikoFaktorok(): string[] {
    return this.rizikoFaktorok;
  }

  /**
   * Getter $jovRomottak
   * @return {string[] }
   */
  public get $jovRomottak(): string[] {
    return this.jovRomottak;
  }

  /**
   * Getter $hitelRomlottak
   * @return {string[] }
   */
  public get $hitelRomlottak(): string[] {
    return this.hitelRomlottak;
  }

  /**
   * Getter $gazdRomlottak
   * @return {string[] }
   */
  public get $gazdRomlottak(): string[] {
    return this.gazdRomlottak;
  }


  /**
   * Getter $befektetesMenedzselesTable
   * @return {string[]}
   */
  public get $befektetesMenedzselesTable(): string[] {
    return this.befektetesMenedzselesTable;
  }

  // SETTERS


  /**
   * Setter $gazdasagiMagyarazatIngadozas
   * @param {string} value
   */
  public set $gazdasagiMagyarazatIngadozas(value: string) {
    this.gazdasagiMagyarazatIngadozas = value;
  }

  /**
   * Setter $befektetesNettoJelenNegativMagyarazat
   * @param {string} value
   */
  public set $befektetesNettoJelenNegativMagyarazat(value: string) {
    this.befektetesNettoJelenNegativMagyarazat = value;
  }

  /**
   * Setter $egyebMagyarazat
   * @param {string} value
   */
  public set $egyebMagyarazat(value: string) {
    this.egyebMagyarazat = value;
  }

  /**
   * Setter $hosszuTavuEladosodasMagyarazat
   * @param {string} value
   */
  public set $hosszuTavuEladosodasMagyarazat(value: string) {
    this.hosszuTavuEladosodasMagyarazat = value;
  }

  /**
   * Setter $magasReszvenyArfolyamMagyarazat
   * @param {string} value
   */
  public set $magasReszvenyArfolyamMagyarazat(value: string) {
    this.magasReszvenyArfolyamMagyarazat = value;
  }

  /**
   * Setter $magasRizikoMagyarazat
   * @param {string} value
   */
  public set $magasRizikoMagyarazat(value: string) {
    this.magasRizikoMagyarazat = value;
  }

  /**
   * Setter $piaciMutatoMagyarazat
   * @param {string} value
   */
  public set $piaciMutatoMagyarazat(value: string) {
    this.piaciMutatoMagyarazat = value;
  }

  /**
   * Setter $rosszHatekonysagiMutatoMagyarazat
   * @param {string} value
   */
  public set $rosszHatekonysagiMutatoMagyarazat(value: string) {
    this.rosszHatekonysagiMutatoMagyarazat = value;
  }

  /**
   * Setter $rosszPenzugyiMutatoMagyarazat
   * @param {string} value
   */
  public set $rosszPenzugyiMutatoMagyarazat(value: string) {
    this.rosszPenzugyiMutatoMagyarazat = value;
  }

  /**
   * Setter $rovidTavuEladosodasMagyarazat
   * @param {string} value
   */
  public set $rovidTavuEladosodasMagyarazat(value: string) {
    this.rovidTavuEladosodasMagyarazat = value;
  }


}

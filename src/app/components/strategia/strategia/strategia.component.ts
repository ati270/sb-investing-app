import { MatDialog } from '@angular/material/dialog';
import { dataArguments } from './../../penzugyek/penzugyek/bevetel-kiadas/bevetel-kiadas.component';
import { ViewChild, AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import * as Chart from 'chart.js';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { ConfirmDeleteCalendarDialogComponent } from '../../dialogs/confirm-delete-calendar-dialog/confirm-delete-calendar-dialog.component';


export interface DataPMI {
  eredmeny: number;
  date: string;
}

export interface DataAgazat {
  teljesitmeny: number;
  PE: number;
  PB: number;
  date: string;
}

@Component({
  selector: 'app-strategia',
  templateUrl: './strategia.component.html',
  styleUrls: ['./strategia.component.scss']
})
export class StrategiaComponent implements OnInit, AfterViewInit {
  panelOpenState = false;

  strategy;

  isPMIDisabled: boolean = false;
  isUzletiDisabled: boolean = false;
  isIpariDisabled: boolean = false;
  isKapacitasDisabled: boolean = false;
  isGDPDisabled: boolean = false;
  isPenzmennyisegDisabled: boolean = false;
  isFiskalisDisabled: boolean = false;
  isKamatlabDisabled: boolean = false;
  isAllamDisabled: boolean = false;
  isLakossagDisabled: boolean = false;
  isInflacioDisabled: boolean = false;
  isMunkanelkuliDisabled: boolean = false;
  isBernovekedesDisabled: boolean = false;
  isFogyasztoDisabled: boolean = false;
  isNyersolajDisabled: boolean = false;

  isBasicDisabled: boolean = false;
  isEnergyDisabled: boolean = false;
  isIndustrialDisabled: boolean = false;
  isConsumerDisabled: boolean = false;
  isCommunicationDisabled: boolean = false;
  isTechnologyDisabled: boolean = false;
  isRealDisabled: boolean = false;
  isHealthDisabled: boolean = false;
  isUtilitiesDisabled: boolean = false;
  isFinancialDisabled: boolean = false;
  isDefensiveDisabled: boolean = false;


  @ViewChild('canvasPMI') canvasPMI: ElementRef;
  @ViewChild('canvasUzleti') canvasUzleti: ElementRef;
  @ViewChild('canvasIpari') canvasIpari: ElementRef;
  @ViewChild('canvasKapacitas') canvasKapacitas: ElementRef;
  @ViewChild('canvasGDP') canvasGDP: ElementRef;


  @ViewChild('canvasPenzmennyiseg') canvasPenzmennyiseg: ElementRef;
  @ViewChild('canvasFiskalis') canvasFiskalis: ElementRef;
  @ViewChild('canvasKamatlab') canvasKamatlab: ElementRef;


  @ViewChild('canvasAllam') canvasAllam: ElementRef;
  @ViewChild('canvasLakossag') canvasLakossag: ElementRef;
  @ViewChild('canvasInflacio') canvasInflacio: ElementRef;
  @ViewChild('canvasMunkanelkuli') canvasMunkanelkuli: ElementRef;
  @ViewChild('canvasBernovekedes') canvasBernovekedes: ElementRef;
  @ViewChild('canvasFogyaszto') canvasFogyaszto: ElementRef;
  @ViewChild('canvasNyersolaj') canvasNyersolaj: ElementRef;



  @ViewChild('canvasBasicMaterial') canvasBasicMaterial: ElementRef;
  @ViewChild('canvasEnergy') canvasEnergy: ElementRef;
  @ViewChild('canvasIndustrial') canvasIndustrial: ElementRef;
  @ViewChild('canvasTechnology') canvasTechnology: ElementRef;
  @ViewChild('canvasConsumer') canvasConsumer: ElementRef;
  @ViewChild('canvasCommunication') canvasCommunication: ElementRef;
  @ViewChild('canvasReal') canvasReal: ElementRef;
  @ViewChild('canvasHealth') canvasHealth: ElementRef;
  @ViewChild('canvasUtilities') canvasUtilities: ElementRef;
  @ViewChild('canvasFinancial') canvasFinancial: ElementRef;
  @ViewChild('canvasDefensive') canvasDefensive: ElementRef;

  // Gazdasági

  @ViewChild('addEredmenyPMI') eredmenyPMIinput: ElementRef;
  @ViewChild('addEredmenyDatePMI') eredmenyPMIDateinput: ElementRef;

  @ViewChild('addEredmenyUzleti') eredmenyIparinput: ElementRef;
  @ViewChild('addEredmenyDateUzleti') eredmenyUzletiDateinput: ElementRef;

  @ViewChild('addEredmenyIpari') eredmenyIpariinput: ElementRef;
  @ViewChild('addEredmenyDateIpari') eredmenyIpariDateinput: ElementRef;

  @ViewChild('addEredmenyKapacitas') eredmenyKapacitasinput: ElementRef;
  @ViewChild('addEredmenyDateKapacitas') eredmenyKapacitasDateinput: ElementRef;

  @ViewChild('addEredmenyGDP') eredmenyGDPinput: ElementRef;
  @ViewChild('addEredmenyDateGDP') eredmenyGDPDateinput: ElementRef;

  @ViewChild('addEredmenyPenzmennyiseg') eredmenyPenzmennyiseginput: ElementRef;
  @ViewChild('addEredmenyDatePenzmennyiseg') eredmenyPenzmennyisegDateinput: ElementRef;

  @ViewChild('addEredmenyFiskalis') eredmenyFiskalisinput: ElementRef;
  @ViewChild('addEredmenyDateFiskalis') eredmenyFiskalisDateinput: ElementRef;

  @ViewChild('addEredmenyKamatlab') eredmenyKamatlabinput: ElementRef;
  @ViewChild('addEredmenyDateKamatlab') eredmenyKamatlabDateinput: ElementRef;

  @ViewChild('addEredmenyAllam') eredmenyAllaminput: ElementRef;
  @ViewChild('addEredmenyDateAllam') eredmenyAllamDateinput: ElementRef;

  @ViewChild('addEredmenyLakossag') eredmenyLakossaginput: ElementRef;
  @ViewChild('addEredmenyDateLakossag') eredmenyLakossagDateinput: ElementRef;

  @ViewChild('addEredmenyInflacio') eredmenyInflacioinput: ElementRef;
  @ViewChild('addEredmenyDateInflacio') eredmenyInflacioDateinput: ElementRef;

  @ViewChild('addEredmenyMunkanelkuli') eredmenyMunkanelkuliinput: ElementRef;
  @ViewChild('addEredmenyDateMunkanelkuli') eredmenyMunkanelkuliDateinput: ElementRef;

  @ViewChild('addEredmenyBernovekedes') eredmenyBernovekedesinput: ElementRef;
  @ViewChild('addEredmenyDateBernovekedes') eredmenyBernovekedesDateinput: ElementRef;

  @ViewChild('addEredmenyFogyaszto') eredmenyFogyasztoinput: ElementRef;
  @ViewChild('addEredmenyDateFogyaszto') eredmenyFogyasztoDateinput: ElementRef;

  @ViewChild('addEredmenyNyersolaj') eredmenyNyersolajinput: ElementRef;
  @ViewChild('addEredmenyDateNyersolaj') eredmenyNyersolajDateinput: ElementRef;

  // Ágazati

  @ViewChild('addTeljesitmenyBasicMaterial') teljesitmenyBasicinput: ElementRef;
  @ViewChild('addPEBasicMaterial') PEBasicinput: ElementRef;
  @ViewChild('addPBBasicMaterial') PBBasicinput: ElementRef;
  @ViewChild('addBasicDate') BasicDateinput: ElementRef;

  @ViewChild('addTeljesitmenyEnergy') teljesitmenyEnergyinput: ElementRef;
  @ViewChild('addPEEnergy') PEEnergyinput: ElementRef;
  @ViewChild('addPBEnergy') PBEnergyinput: ElementRef;
  @ViewChild('addEnergyDate') EnergyDateinput: ElementRef;

  @ViewChild('addTeljesitmenyIndustrial') teljesitmenyIndustrialinput: ElementRef;
  @ViewChild('addPEIndustrial') PEIndustrialinput: ElementRef;
  @ViewChild('addPBIndustrial') PBIndustrialinput: ElementRef;
  @ViewChild('addIndustrialDate') IndustrialDateinput: ElementRef;

  @ViewChild('addTeljesitmenyTechnology') teljesitmenyTechnologyinput: ElementRef;
  @ViewChild('addPETechnology') PETechnologyinput: ElementRef;
  @ViewChild('addPBTechnology') PBTechnologyinput: ElementRef;
  @ViewChild('addTechnologyDate') TechnologyDateinput: ElementRef;

  @ViewChild('addTeljesitmenyConsumer') teljesitmenyConsumerinput: ElementRef;
  @ViewChild('addPEConsumer') PEConsumerinput: ElementRef;
  @ViewChild('addPBConsumer') PBConsumerinput: ElementRef;
  @ViewChild('addConsumerDate') ConsumerDateinput: ElementRef;

  @ViewChild('addTeljesitmenyCommunication') teljesitmenyCommunicationinput: ElementRef;
  @ViewChild('addPECommunication') PECommunicationinput: ElementRef;
  @ViewChild('addPBCommunication') PBCommunicationinput: ElementRef;
  @ViewChild('addCommunicationDate') CommunicationDateinput: ElementRef;

  // real estate

  @ViewChild('addTeljesitmenyReal') teljesitmenyRealinput: ElementRef;
  @ViewChild('addPEReal') PERealinput: ElementRef;
  @ViewChild('addPBReal') PBRealinput: ElementRef;
  @ViewChild('addRealDate') RealDateinput: ElementRef;

  // Health

  @ViewChild('addTeljesitmenyHealth') teljesitmenyHealthinput: ElementRef;
  @ViewChild('addPEHealth') PEHealthinput: ElementRef;
  @ViewChild('addPBHealth') PBHealthinput: ElementRef;
  @ViewChild('addHealthDate') HealthDateinput: ElementRef;

  // Utilities

  @ViewChild('addTeljesitmenyUtilities') teljesitmenyUtilitiesinput: ElementRef;
  @ViewChild('addPEUtilities') PEUtilitiesinput: ElementRef;
  @ViewChild('addPBUtilities') PBUtilitiesinput: ElementRef;
  @ViewChild('addUtilitiesDate') UtilitiesDateinput: ElementRef;

  // Financial

  @ViewChild('addTeljesitmenyFinancial') teljesitmenyFinancialinput: ElementRef;
  @ViewChild('addPEFinancial') PEFinancialinput: ElementRef;
  @ViewChild('addPBFinancial') PBFinancialinput: ElementRef;
  @ViewChild('addFinancialDate') FinancialDateinput: ElementRef;

  // Defensive

  @ViewChild('addTeljesitmenyDefensive') teljesitmenyDefensiveinput: ElementRef;
  @ViewChild('addPEDefensive') PEDefensiveinput: ElementRef;
  @ViewChild('addPBDefensive') PBDefensiveinput: ElementRef;
  @ViewChild('addDefensiveDate') DefensiveDateinput: ElementRef;

  @ViewChild('moreInfoStrategyBtn') moreStrategyInfoBtn: ElementRef;

  chartPMI: Chart;
  chartUzleti: Chart;
  chartIpari: Chart;
  chartKapacitas: Chart;
  chartGDP: Chart;

  chartPenzmennyiseg: Chart;
  chartFiskalis: Chart;
  chartKamatlab: Chart;

  chartAllam: Chart;
  chartLakossag: Chart;
  chartInflacio: Chart;
  chartMunkanelkuli: Chart;
  chartBernovekedes: Chart;
  chartFogyaszto: Chart;
  chartNyersolaj: Chart;


  chartBasicMaterial: Chart;
  chartEnergy: Chart;
  chartIndustrial: Chart;
  chartTechnology: Chart;
  chartConsumer: Chart;
  chartCommunication: Chart;
  chartReal: Chart;
  chartHealth: Chart;
  chartUtilities: Chart;
  chartFinancial: Chart;
  chartDefensive: Chart;


  strategiak: string[] = ['válság', 'normál', 'bőség', 'egyéb'];

  originalPMIArray: DataPMI[] = [];
  osszesitettPMIArray: DataPMI[] = [];
  eredmenyekPMI: number[] = [];
  datumokPMI: string[] = [];

  originalUzletiArray: DataPMI[] = [];
  osszesitettUzletiArray: DataPMI[] = [];
  eredmenyekUzleti: number[] = [];
  datumokUzleti: string[] = [];

  originalIpariArray: DataPMI[] = [];
  osszesitettIpariArray: DataPMI[] = [];
  eredmenyekIpari: number[] = [];
  datumokIpari: string[] = [];

  originalKapacitasArray: DataPMI[] = [];
  osszesitettKapacitasArray: DataPMI[] = [];
  eredmenyekKapacitas: number[] = [];
  datumokKapacitas: string[] = [];

  originalGDPArray: DataPMI[] = [];
  osszesitettGDPArray: DataPMI[] = [];
  eredmenyekGDP: number[] = [];
  datumokGDP: string[] = [];

  originalPenzmennyisegArray: DataPMI[] = [];
  osszesitettPenzmennyisegArray: DataPMI[] = [];
  eredmenyekPenzmennyiseg: number[] = [];
  datumokPenzmennyiseg: string[] = [];

  originalFiskalisArray: DataPMI[] = [];
  osszesitettFiskalisArray: DataPMI[] = [];
  eredmenyekFiskalis: number[] = [];
  datumokFiskalis: string[] = [];

  originalKamatlabArray: DataPMI[] = [];
  osszesitettKamatlabArray: DataPMI[] = [];
  eredmenyekKamatlab: number[] = [];
  datumokKamatlab: string[] = [];


  originalAllamArray: DataPMI[] = [];
  osszesitettAllamArray: DataPMI[] = [];
  eredmenyekAllam: number[] = [];
  datumokAllam: string[] = [];

  originalLakossagArray: DataPMI[] = [];
  osszesitettLakossagArray: DataPMI[] = [];
  eredmenyekLakossag: number[] = [];
  datumokLakossag: string[] = [];

  originalInflacioArray: DataPMI[] = [];
  osszesitettInflacioArray: DataPMI[] = [];
  eredmenyekInflacio: number[] = [];
  datumokInflacio: string[] = [];

  originalMunkanelkuliArray: DataPMI[] = [];
  osszesitettMunkanelkuliArray: DataPMI[] = [];
  eredmenyekMunkanelkuli: number[] = [];
  datumokMunkanelkuli: string[] = [];

  originalBernovekedesArray: DataPMI[] = [];
  osszesitettBernovekedesArray: DataPMI[] = [];
  eredmenyekBernovekedes: number[] = [];
  datumokBernovekedes: string[] = [];

  originalFogyasztoArray: DataPMI[] = [];
  osszesitettFogyasztoArray: DataPMI[] = [];
  eredmenyekFogyaszto: number[] = [];
  datumokFogyaszto: string[] = [];

  originalNyersolajArray: DataPMI[] = [];
  osszesitettNyersolajArray: DataPMI[] = [];
  eredmenyekNyersolaj: number[] = [];
  datumokNyersolaj: string[] = [];

  // ágazat
  originalBasicArray: DataAgazat[] = [];
  teljesitmenyBasicArray: number[] = [];
  PEBasicArray: number[] = [];
  PBBasicArray: number[] = [];
  dateBasicArray: string[] = [];

  originalEnergyArray: DataAgazat[] = [];
  teljesitmenyEnergyArray: number[] = [];
  PEEnergyArray: number[] = [];
  PBEnergyArray: number[] = [];
  dateEnergyArray: string[] = [];

  originalIndustrialArray: DataAgazat[] = [];
  teljesitmenyIndustrialArray: number[] = [];
  PEIndustrialArray: number[] = [];
  PBIndustrialArray: number[] = [];
  dateIndustrialArray: string[] = [];

  originalTechnologyArray: DataAgazat[] = [];
  teljesitmenyTechnologyArray: number[] = [];
  PETechnologyArray: number[] = [];
  PBTechnologyArray: number[] = [];
  dateTechnologyArray: string[] = [];

  originalConsumerArray: DataAgazat[] = [];
  teljesitmenyConsumerArray: number[] = [];
  PEConsumerArray: number[] = [];
  PBConsumerArray: number[] = [];
  dateConsumerArray: string[] = [];

  originalCommunicationArray: DataAgazat[] = [];
  teljesitmenyCommunicationArray: number[] = [];
  PECommunicationArray: number[] = [];
  PBCommunicationArray: number[] = [];
  dateCommunicationArray: string[] = [];

  // Real

  originalRealArray: DataAgazat[] = [];
  teljesitmenyRealArray: number[] = [];
  PERealArray: number[] = [];
  PBRealArray: number[] = [];
  dateRealArray: string[] = [];

  // Health

  originalHealthArray: DataAgazat[] = [];
  teljesitmenyHealthArray: number[] = [];
  PEHealthArray: number[] = [];
  PBHealthArray: number[] = [];
  dateHealthArray: string[] = [];

  // Utilities

  originalUtilitiesArray: DataAgazat[] = [];
  teljesitmenyUtilitiesArray: number[] = [];
  PEUtilitiesArray: number[] = [];
  PBUtilitiesArray: number[] = [];
  dateUtilitiesArray: string[] = [];

  // Financial
  originalFinancialArray: DataAgazat[] = [];
  teljesitmenyFinancialArray: number[] = [];
  PEFinancialArray: number[] = [];
  PBFinancialArray: number[] = [];
  dateFinancialArray: string[] = [];

  // Defensive
  originalDefensiveArray: DataAgazat[] = [];
  teljesitmenyDefensiveArray: number[] = [];
  PEDefensiveArray: number[] = [];
  PBDefensiveArray: number[] = [];
  dateDefensiveArray: string[] = [];

  // Ágazat
  osszesitettBasicMaterialArray: DataAgazat[] = [];
  osszesitettEnergyArray: DataAgazat[] = [];
  osszesitettIndustrialArray: DataAgazat[] = [];
  osszesitettTechnologyArray: DataAgazat[] = [];
  osszesitettConsumerArray: DataAgazat[] = [];
  osszesitettCommunicationArray: DataAgazat[] = [];
  osszesitettRealArray: DataAgazat[] = [];
  osszesitettHealthArray: DataAgazat[] = [];
  osszesitettUtilitiesArray: DataAgazat[] = [];
  osszesitettFinancialArray: DataAgazat[] = [];
  osszesitettDefensiveArray: DataAgazat[] = [];
  reszvenySzures: any;

  // Ágazati
  eredmenyekBasic: number[] = [];
  datumokBasic: string[] = [];

  eredmenyekEnergy: number[] = [];
  datumokEnergy: string[] = [];

  eredmenyekIndustrial: number[] = [];
  datumokIndustrial: string[] = [];

  eredmenyekTechnology: number[] = [];
  datumokTechnology: string[] = [];

  eredmenyekConsumer: number[] = [];
  datumokConsumer: string[] = [];

  eredmenyekCommmunication: number[] = [];
  datumokCommmunication: string[] = [];

  eredmenyekReal: number[] = [];
  datumokReal: string[] = [];

  eredmenyekHealth: number[] = [];
  datumokHealth: string[] = [];

  eredmenyekUtilities: number[] = [];
  datumokUtilities: string[] = [];

  eredmenyekFinancial: number[] = [];
  datumokFinancial: string[] = [];

  eredmenyekDefensive: number[] = [];
  datumokDefensive: string[] = [];

  // Filters values
  startFilterPMI: string;
  endFilterPMI: string;



  constructor(private fb: FormBuilder, private router: Router,
    private dialog: MatDialog) { }


  gazdElemzesFormGroup: FormGroup;
  stratMeghatarozasFormGroup: FormGroup;
  agazatiElemzesFormGroup: FormGroup;
  reszvenyKivalasztasFormGroup: FormGroup;


  ngOnInit(): void {

    this.createFormGroups();
  }

  ngAfterViewInit(): void {
    this.getPMIChart();
    this.getUzletiChart();
    this.getIpariChart();
    this.getKapacitasChart();
    this.getGDPChart();

    this.getPenzmennyisegChart();
    this.getFiskalisChart();
    this.getKamatlabChart();


    this.getAllamChart();
    this.getLakossagChart();
    this.getInflacioChart();
    this.getMunkanelkuliChart();
    this.getBernovekedesChart();
    this.getFogyasztoChart();
    this.getNyersolajChart();


    this.getBasicMaterialChart();
    this.getEnergyChart();
    this.getIndustrialChart();
    this.getTechnologyChart();
    this.getConsumerChart();
    this.getCommunicationChart();
    this.getRealChart();
    this.getHealthChart();
    this.getUtilitiesChart();
    this.getFinancialChart();
    this.getDefensiveChart();
  }


  createFormGroups() {
    this.createGazdElemzesFormGroup();
    this.creaUzletiratMeghatarozas();
    this.createAgazatiElemzes();
    this.createReszvenyKivalasztas();
  }

  createGazdElemzesFormGroup() {
    this.gazdElemzesFormGroup = this.fb.group({
      eredmenyPMICtrl: new FormControl('', Validators.required),
      datePMICtrl: new FormControl('', Validators.required),
      startPMIDateCtrl: new FormControl(''),
      endPMIDateCtrl: new FormControl(''),

      eredmenyUzletiCtrl: new FormControl('', Validators.required),
      dateUzletiCtrl: new FormControl('', Validators.required),
      startUzletiDateCtrl: new FormControl(''),
      endUzletiDateCtrl: new FormControl(''),

      eredmenyIpariCtrl: new FormControl('', Validators.required),
      dateIpariCtrl: new FormControl('', Validators.required),
      startIpariDateCtrl: new FormControl(''),
      endIpariDateCtrl: new FormControl(''),

      eredmenyKapacitasCtrl: new FormControl('', Validators.required),
      dateKapacitasCtrl: new FormControl('', Validators.required),
      startKapacitasDateCtrl: new FormControl(''),
      endKapacitasDateCtrl: new FormControl(''),

      eredmenyGDPCtrl: new FormControl('', Validators.required),
      dateGDPCtrl: new FormControl('', Validators.required),
      startGDPDateCtrl: new FormControl(''),
      endGDPDateCtrl: new FormControl(''),

      eredmenyPenzmennyisegCtrl: new FormControl('', Validators.required),
      datePenzmennyisegCtrl: new FormControl('', Validators.required),
      startPenzmennyisegDateCtrl: new FormControl(''),
      endPenzmennyisegDateCtrl: new FormControl(''),

      eredmenyFiskalisCtrl: new FormControl('', Validators.required),
      dateFiskalisCtrl: new FormControl('', Validators.required),
      startFiskalisDateCtrl: new FormControl(''),
      endFiskalisDateCtrl: new FormControl(''),

      eredmenyKamatlabCtrl: new FormControl('', Validators.required),
      dateKamatlabCtrl: new FormControl('', Validators.required),
      startKamatlabDateCtrl: new FormControl(''),
      endKamatlabDateCtrl: new FormControl(''),

      eredmenyAllamCtrl: new FormControl('', Validators.required),
      dateAllamCtrl: new FormControl('', Validators.required),
      startAllamDateCtrl: new FormControl(''),
      endAllamDateCtrl: new FormControl(''),

      eredmenyLakossagCtrl: new FormControl('', Validators.required),
      dateLakossagCtrl: new FormControl('', Validators.required),
      startLakossagDateCtrl: new FormControl(''),
      endLakossagDateCtrl: new FormControl(''),

      eredmenyInflacioCtrl: new FormControl('', Validators.required),
      dateInflacioCtrl: new FormControl('', Validators.required),
      startInflacioDateCtrl: new FormControl(''),
      endInflacioDateCtrl: new FormControl(''),

      eredmenyMunkanelkuliCtrl: new FormControl('', Validators.required),
      dateMunkanelkuliCtrl: new FormControl('', Validators.required),
      startMunkanelkuliDateCtrl: new FormControl(''),
      endMunkanelkuliDateCtrl: new FormControl(''),

      eredmenyBernovekedesCtrl: new FormControl('', Validators.required),
      dateBernovekedesCtrl: new FormControl('', Validators.required),
      startBernovekedesDateCtrl: new FormControl(''),
      endBernovekedesDateCtrl: new FormControl(''),

      eredmenyFogyasztoCtrl: new FormControl('', Validators.required),
      dateFogyasztoCtrl: new FormControl('', Validators.required),
      startFogyasztoDateCtrl: new FormControl(''),
      endFogyasztoDateCtrl: new FormControl(''),

      eredmenyNyersolajCtrl: new FormControl('', Validators.required),
      dateNyersolajCtrl: new FormControl('', Validators.required),
      startNyersolajDateCtrl: new FormControl(''),
      endNyersolajDateCtrl: new FormControl(''),



    });
  }



  initReszvenyKivalasztas() {
    return this.fb.group({
      vallalatNeveCtrl: new FormControl('', Validators.required),
      tickerCtrl: new FormControl('', Validators.required),
      utolsoHozamCtrl: new FormControl('', Validators.required),
      reszvenyCtrl: new FormControl('', Validators.required),
      epsCtrl: new FormControl('', Validators.required),
      agazatCtrl: new FormControl('', Validators.required),
      iparCtrl: new FormControl('', Validators.required),
      kapitalizacioCtrl: new FormControl('', Validators.required),
      orszagCtrl: new FormControl('', Validators.required),
      readyCtrl: new FormControl(false)
    });
  }

  getTableControlsReszvenyKivalasztas() {
    return (this.reszvenyKivalasztasFormGroup.get('tableRowsReszveny') as FormArray).controls;
  }

  selectedStrategy(selectChange: MatSelectChange) {
    console.log(selectChange.value);
    this.strategy = selectChange.value;
    //this.moreStrategyInfoBtn.nativeElement.disabled = false;
  }

  selectedReszvenySzures(selectChange: MatSelectChange) {
    this.reszvenySzures = selectChange.value;
  }

  redirectStrategy() {
    let url = "";
    if (this.strategy === 'válság') {
      url = `https://blog.sb-investing.com/valsag-strategia/`;
    }

    else if (this.strategy === 'normál') {
      url = `https://blog.sb-investing.com/normal-strategia/`;

    }

    else if (this.strategy === 'bőség') {
      url = `https://blog.sb-investing.com/boseg-strategia/`;

    }

    else if (this.strategy === "egyéb") {
      url = `https://blog.sb-investing.com/egyeb-strategia/`;

    }

    window.open(url, '_blank');

  }

  redirectReszvenySzures() {
    let url = "";
    if (this.reszvenySzures === 'válság') {
      url = `https://blog.sb-investing.com/valsag-strategia-reszveny-kivalasztas/`;
    }

    else if (this.reszvenySzures === 'normál') {
      url = `https://blog.sb-investing.com/normal-strategia-reszveny-kivalasztas/`;

    }

    else if (this.reszvenySzures === 'bőség') {
      url = `https://blog.sb-investing.com/boseg-strategia-reszveny-kivalasztas/`;

    }

    else if (this.reszvenySzures === "egyéb") {
      url = ``;
    }


    window.open(url, '_blank');
  }

  creaUzletiratMeghatarozas() {
    this.stratMeghatarozasFormGroup = this.fb.group({
      strategiaTipusaCtrl: new FormControl()
    });
  }

  createAgazatiElemzes() {
    this.agazatiElemzesFormGroup = this.fb.group({
      basicMaterialTeljesitmenyCtrl: new FormControl({ value: '', disabled: this.isBasicDisabled }, Validators.required),
      startBasicMaterialDateCtrl: new FormControl({ value: '', disabled: this.isBasicDisabled }),
      endBasicMaterialDateCtrl: new FormControl({ value: '', disabled: this.isBasicDisabled }),
      basicMaterialPECtrl: new FormControl({ value: '', disabled: this.isBasicDisabled }),
      basicMaterialPBCtrl: new FormControl({ value: '', disabled: this.isBasicDisabled }),
      basicDateCtrl: new FormControl({ value: '', disabled: this.isBasicDisabled }, Validators.required),

      energyTeljesitmenyCtrl: new FormControl('', Validators.required),
      startEnergyDateCtrl: new FormControl(''),
      endEnergyDateCtrl: new FormControl(''),
      energyPECtrl: new FormControl(''),
      energyPBCtrl: new FormControl(''),
      energyDateCtrl: new FormControl('', Validators.required),

      industrialTeljesitmenyCtrl: new FormControl('', Validators.required),
      startIndustrialDateCtrl: new FormControl(''),
      endIndustrialDateCtrl: new FormControl(''),
      industrialPECtrl: new FormControl(''),
      industrialPBCtrl: new FormControl(''),
      industrialDateCtrl: new FormControl('', Validators.required),

      technologyTeljesitmenyCtrl: new FormControl('', Validators.required),
      startTechnologyDateCtrl: new FormControl(''),
      endTechnologyDateCtrl: new FormControl(''),
      technologyPECtrl: new FormControl(''),
      technologyPBCtrl: new FormControl(''),
      technologyDateCtrl: new FormControl('', Validators.required),

      consumerTeljesitmenyCtrl: new FormControl('', Validators.required),
      startConsumerDateCtrl: new FormControl(''),
      endConsumerDateCtrl: new FormControl(''),
      consumerPECtrl: new FormControl(''),
      consumerPBCtrl: new FormControl(''),
      consumerDateCtrl: new FormControl('', Validators.required),

      communicationTeljesitmenyCtrl: new FormControl('', Validators.required),
      startCommunicationDateCtrl: new FormControl(''),
      endCommunicationDateCtrl: new FormControl(''),
      communicationPECtrl: new FormControl(''),
      communicationPBCtrl: new FormControl(''),
      communicationDateCtrl: new FormControl('', Validators.required),

      realTeljesitmenyCtrl: new FormControl('', Validators.required),
      startRealDateCtrl: new FormControl(''),
      endRealDateCtrl: new FormControl(''),
      realPECtrl: new FormControl(''),
      realPBCtrl: new FormControl(''),
      realDateCtrl: new FormControl('', Validators.required),

      healthTeljesitmenyCtrl: new FormControl('', Validators.required),
      startHealthDateCtrl: new FormControl(''),
      endHealthDateCtrl: new FormControl(''),
      healthPECtrl: new FormControl(''),
      healthPBCtrl: new FormControl(''),
      healthDateCtrl: new FormControl('', Validators.required),

      utilitiesTeljesitmenyCtrl: new FormControl('', Validators.required),
      startUtilitiesDateCtrl: new FormControl(''),
      endUtilitiesDateCtrl: new FormControl(''),
      utilitiesPECtrl: new FormControl(''),
      utilitiesPBCtrl: new FormControl(''),
      utilitiesDateCtrl: new FormControl('', Validators.required),

      financialTeljesitmenyCtrl: new FormControl('', Validators.required),
      startFinancialDateCtrl: new FormControl(''),
      endFinancialDateCtrl: new FormControl(''),
      financialPECtrl: new FormControl(''),
      financialPBCtrl: new FormControl(''),
      financialDateCtrl: new FormControl('', Validators.required),

      defensiveTeljesitmenyCtrl: new FormControl('', Validators.required),
      startDefensiveDateCtrl: new FormControl(''),
      endDefensiveDateCtrl: new FormControl(''),
      defensivePECtrl: new FormControl(''),
      defensivePBCtrl: new FormControl(''),
      defensiveDateCtrl: new FormControl('', Validators.required),


    });
  }

  createReszvenyKivalasztas() {
    this.reszvenyKivalasztasFormGroup = this.fb.group({
      reszvenySzuresCtrl: new FormControl(''),
      tableRowsReszveny: this.fb.array([this.initReszvenyKivalasztas()]),
    });
  }

  addPMI() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyPMICtrl').value,
      date: this.gazdElemzesFormGroup.get('datePMICtrl').value
    };

    this.osszesitettPMIArray.unshift(data);
    this.originalPMIArray.unshift(data);
    console.log(this.osszesitettPMIArray);
    this.eredmenyPMIinput.nativeElement.value = '';
    this.eredmenyPMIDateinput.nativeElement.value = '';

    this.eredmenyekPMI.push(data.eredmeny);
    this.datumokPMI.push(data.date);

    this.eredmenyekPMI = [];
    this.datumokPMI = [];

    for (let i = this.osszesitettPMIArray.length - 1; i >= 0; i--) {
      this.eredmenyekPMI.push(this.osszesitettPMIArray[i].eredmeny);
      this.datumokPMI.push(this.osszesitettPMIArray[i].date);
    }

    this.setPMIChart(this.datumokPMI, this.eredmenyekPMI);

    this.chartPMI.update();
  }

  addUzleti() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyUzletiCtrl').value,
      date: this.gazdElemzesFormGroup.get('dateUzletiCtrl').value
    };

    this.osszesitettUzletiArray.unshift(data);
    this.originalUzletiArray.unshift(data);
    this.eredmenyIparinput.nativeElement.value = '';
    this.eredmenyUzletiDateinput.nativeElement.value = '';

    this.eredmenyekUzleti.push(data.eredmeny);
    this.datumokUzleti.push(data.date);

    this.eredmenyekUzleti = [];
    this.datumokUzleti = [];

    for (let i = this.osszesitettUzletiArray.length - 1; i >= 0; i--) {
      this.eredmenyekUzleti.push(this.osszesitettUzletiArray[i].eredmeny);
      this.datumokUzleti.push(this.osszesitettUzletiArray[i].date);
    }

    this.setUzletiChart(this.datumokUzleti, this.eredmenyekUzleti);

    this.chartUzleti.update();
  }

  addIpari() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyIpariCtrl').value,
      date: this.gazdElemzesFormGroup.get('dateIpariCtrl').value
    };

    this.osszesitettIpariArray.unshift(data);
    this.originalIpariArray.unshift(data);
    this.eredmenyIpariinput.nativeElement.value = '';
    this.eredmenyIpariDateinput.nativeElement.value = '';

    this.eredmenyekIpari.push(data.eredmeny);
    this.datumokIpari.push(data.date);

    this.eredmenyekIpari = [];
    this.datumokIpari = [];

    for (let i = this.osszesitettIpariArray.length - 1; i >= 0; i--) {
      this.eredmenyekIpari.push(this.osszesitettIpariArray[i].eredmeny);
      this.datumokIpari.push(this.osszesitettIpariArray[i].date);
    }

    this.setIpariChart(this.datumokIpari, this.eredmenyekIpari);
    this.chartIpari.update();
  }

  addKapacitas() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyKapacitasCtrl').value,
      date: this.gazdElemzesFormGroup.get('dateKapacitasCtrl').value
    };

    this.osszesitettKapacitasArray.unshift(data);
    this.originalKapacitasArray.unshift(data);
    this.eredmenyKapacitasinput.nativeElement.value = '';
    this.eredmenyKapacitasDateinput.nativeElement.value = '';

    this.eredmenyekKapacitas.push(data.eredmeny);
    this.datumokKapacitas.push(data.date);

    this.eredmenyekKapacitas = [];
    this.datumokKapacitas = [];

    for (let i = this.osszesitettKapacitasArray.length - 1; i >= 0; i--) {
      this.eredmenyekKapacitas.push(this.osszesitettKapacitasArray[i].eredmeny);
      this.datumokKapacitas.push(this.osszesitettKapacitasArray[i].date);
    }

    this.setKapacitasChart(this.datumokKapacitas, this.eredmenyekKapacitas);

    this.chartKapacitas.update();
  }

  addGDP() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyGDPCtrl').value,
      date: this.gazdElemzesFormGroup.get('dateGDPCtrl').value
    };

    this.osszesitettGDPArray.unshift(data);
    this.originalGDPArray.unshift(data);
    this.eredmenyGDPinput.nativeElement.value = '';
    this.eredmenyGDPDateinput.nativeElement.value = '';

    this.eredmenyekGDP.push(data.eredmeny);
    this.datumokGDP.push(data.date);

    this.eredmenyekGDP = [];
    this.datumokGDP = [];

    for (let i = this.osszesitettGDPArray.length - 1; i >= 0; i--) {
      this.eredmenyekGDP.push(this.osszesitettGDPArray[i].eredmeny);
      this.datumokGDP.push(this.osszesitettGDPArray[i].date);
    }

    this.setGDPChart(this.datumokGDP, this.eredmenyekGDP);
    this.chartGDP.update();
  }

  addPenzmennyiseg() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyPenzmennyisegCtrl').value,
      date: this.gazdElemzesFormGroup.get('datePenzmennyisegCtrl').value
    };

    this.osszesitettPenzmennyisegArray.unshift(data);
    this.originalPenzmennyisegArray.unshift(data);
    this.eredmenyPenzmennyiseginput.nativeElement.value = '';
    this.eredmenyPenzmennyisegDateinput.nativeElement.value = '';

    this.eredmenyekPenzmennyiseg.push(data.eredmeny);
    this.datumokPenzmennyiseg.push(data.date);

    this.eredmenyekPenzmennyiseg = [];
    this.datumokPenzmennyiseg = [];

    for (let i = this.osszesitettPenzmennyisegArray.length - 1; i >= 0; i--) {
      this.eredmenyekPenzmennyiseg.push(this.osszesitettPenzmennyisegArray[i].eredmeny);
      this.datumokPenzmennyiseg.push(this.osszesitettPenzmennyisegArray[i].date);
    }

    this.setPenzmennyisegChart(this.datumokPenzmennyiseg, this.eredmenyekPenzmennyiseg);
    this.chartPenzmennyiseg.update();
  }

  addFiskalis() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyFiskalisCtrl').value,
      date: this.gazdElemzesFormGroup.get('dateFiskalisCtrl').value
    };

    this.osszesitettFiskalisArray.unshift(data);
    this.originalFiskalisArray.unshift(data);
    this.eredmenyFiskalisinput.nativeElement.value = '';
    this.eredmenyFiskalisDateinput.nativeElement.value = '';

    this.eredmenyekFiskalis.push(data.eredmeny);
    this.datumokFiskalis.push(data.date);

    this.eredmenyekFiskalis = [];
    this.datumokFiskalis = [];

    for (let i = this.osszesitettFiskalisArray.length - 1; i >= 0; i--) {
      this.eredmenyekFiskalis.push(this.osszesitettFiskalisArray[i].eredmeny);
      this.datumokFiskalis.push(this.osszesitettFiskalisArray[i].date);
    }

    this.setFiskalisChart(this.datumokFiskalis, this.eredmenyekFiskalis);
    this.chartFiskalis.update();
  }

  addKamatlab() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyKamatlabCtrl').value,
      date: this.gazdElemzesFormGroup.get('dateKamatlabCtrl').value
    };

    this.osszesitettKamatlabArray.unshift(data);
    this.originalKamatlabArray.unshift(data);
    this.eredmenyKamatlabinput.nativeElement.value = '';
    this.eredmenyKamatlabDateinput.nativeElement.value = '';

    this.eredmenyekKamatlab.push(data.eredmeny);
    this.datumokKamatlab.push(data.date);

    this.eredmenyekKamatlab = [];
    this.datumokKamatlab = [];

    for (let i = this.osszesitettKamatlabArray.length - 1; i >= 0; i--) {
      this.eredmenyekKamatlab.push(this.osszesitettKamatlabArray[i].eredmeny);
      this.datumokKamatlab.push(this.osszesitettKamatlabArray[i].date);
    }

    this.setKamatlabChart(this.datumokKamatlab, this.eredmenyekKamatlab);
    this.chartKamatlab.update();
  }

  addAllam() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyAllamCtrl').value,
      date: this.gazdElemzesFormGroup.get('dateAllamCtrl').value
    };

    this.osszesitettAllamArray.unshift(data);
    this.originalAllamArray.unshift(data);
    this.eredmenyAllaminput.nativeElement.value = '';
    this.eredmenyAllamDateinput.nativeElement.value = '';

    this.eredmenyekAllam.push(data.eredmeny);
    this.datumokAllam.push(data.date);

    this.eredmenyekAllam = [];
    this.datumokAllam = [];

    for (let i = this.osszesitettAllamArray.length - 1; i >= 0; i--) {
      this.eredmenyekAllam.push(this.osszesitettAllamArray[i].eredmeny);
      this.datumokAllam.push(this.osszesitettAllamArray[i].date);
    }

    this.setAllamChart(this.datumokAllam, this.eredmenyekAllam);
    this.chartAllam.update();
  }

  addLakossag() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyLakossagCtrl').value,
      date: this.gazdElemzesFormGroup.get('dateLakossagCtrl').value
    };

    this.osszesitettLakossagArray.unshift(data);
    this.originalLakossagArray.unshift(data);
    this.eredmenyLakossaginput.nativeElement.value = '';
    this.eredmenyLakossagDateinput.nativeElement.value = '';

    this.eredmenyekLakossag.push(data.eredmeny);
    this.datumokLakossag.push(data.date);

    this.eredmenyekLakossag = [];
    this.datumokLakossag = [];

    for (let i = this.osszesitettLakossagArray.length - 1; i >= 0; i--) {
      this.eredmenyekLakossag.push(this.osszesitettLakossagArray[i].eredmeny);
      this.datumokLakossag.push(this.osszesitettLakossagArray[i].date);
    }

    this.setLakossagChart(this.datumokLakossag, this.eredmenyekLakossag);
    this.chartLakossag.update();
  }

  addInflacio() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyInflacioCtrl').value,
      date: this.gazdElemzesFormGroup.get('dateInflacioCtrl').value
    };

    this.osszesitettInflacioArray.unshift(data);
    this.originalInflacioArray.unshift(data);
    this.eredmenyInflacioinput.nativeElement.value = '';
    this.eredmenyInflacioDateinput.nativeElement.value = '';

    this.eredmenyekInflacio.push(data.eredmeny);
    this.datumokInflacio.push(data.date);

    this.eredmenyekInflacio = [];
    this.datumokInflacio = [];

    for (let i = this.osszesitettInflacioArray.length - 1; i >= 0; i--) {
      this.eredmenyekInflacio.push(this.osszesitettInflacioArray[i].eredmeny);
      this.datumokInflacio.push(this.osszesitettInflacioArray[i].date);
    }

    this.setInflacioChart(this.datumokInflacio, this.eredmenyekInflacio);
    this.chartInflacio.update();
  }

  addMunkanelkuli() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyMunkanelkuliCtrl').value,
      date: this.gazdElemzesFormGroup.get('dateMunkanelkuliCtrl').value
    };

    this.osszesitettMunkanelkuliArray.unshift(data);
    this.originalMunkanelkuliArray.unshift(data);
    this.eredmenyMunkanelkuliinput.nativeElement.value = '';
    this.eredmenyMunkanelkuliDateinput.nativeElement.value = '';

    this.eredmenyekMunkanelkuli.push(data.eredmeny);
    this.datumokMunkanelkuli.push(data.date);

    this.eredmenyekMunkanelkuli = [];
    this.datumokMunkanelkuli = [];

    for (let i = this.osszesitettMunkanelkuliArray.length - 1; i >= 0; i--) {
      this.eredmenyekMunkanelkuli.push(this.osszesitettMunkanelkuliArray[i].eredmeny);
      this.datumokMunkanelkuli.push(this.osszesitettMunkanelkuliArray[i].date);
    }

    this.setMunkanelkuliChart(this.datumokMunkanelkuli, this.eredmenyekMunkanelkuli);
    this.chartMunkanelkuli.update();
  }

  addBernovekedes() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyBernovekedesCtrl').value,
      date: this.gazdElemzesFormGroup.get('dateBernovekedesCtrl').value
    };

    this.osszesitettBernovekedesArray.unshift(data);
    this.originalBernovekedesArray.unshift(data);
    this.eredmenyBernovekedesinput.nativeElement.value = '';
    this.eredmenyBernovekedesDateinput.nativeElement.value = '';

    this.eredmenyekBernovekedes.push(data.eredmeny);
    this.datumokBernovekedes.push(data.date);

    this.eredmenyekBernovekedes = [];
    this.datumokBernovekedes = [];

    for (let i = this.osszesitettBernovekedesArray.length - 1; i >= 0; i--) {
      this.eredmenyekBernovekedes.push(this.osszesitettBernovekedesArray[i].eredmeny);
      this.datumokBernovekedes.push(this.osszesitettBernovekedesArray[i].date);
    }

    this.setBernovekedesChart(this.datumokBernovekedes, this.eredmenyekBernovekedes);
    this.chartBernovekedes.update();
  }

  addFogyaszto() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyFogyasztoCtrl').value,
      date: this.gazdElemzesFormGroup.get('dateFogyasztoCtrl').value
    };

    this.osszesitettFogyasztoArray.unshift(data);
    this.originalFogyasztoArray.unshift(data);
    this.eredmenyFogyasztoinput.nativeElement.value = '';
    this.eredmenyFogyasztoDateinput.nativeElement.value = '';

    this.eredmenyekFogyaszto.push(data.eredmeny);
    this.datumokFogyaszto.push(data.date);

    this.eredmenyekFogyaszto = [];
    this.datumokFogyaszto = [];

    for (let i = this.osszesitettFogyasztoArray.length - 1; i >= 0; i--) {
      this.eredmenyekFogyaszto.push(this.osszesitettFogyasztoArray[i].eredmeny);
      this.datumokFogyaszto.push(this.osszesitettFogyasztoArray[i].date);
    }

    this.setFogyasztoChart(this.datumokFogyaszto, this.eredmenyekFogyaszto);
    this.chartFogyaszto.update();
  }

  addNyersolaj() {
    //const control = <FormArray>this.gazdElemzesFormGroup.controls['tableRowsPMI'];
    // control.unshift(this.initRowsPMI());
    const data: DataPMI = {
      eredmeny: this.gazdElemzesFormGroup.get('eredmenyNyersolajCtrl').value,
      date: this.gazdElemzesFormGroup.get('dateNyersolajCtrl').value
    };

    this.osszesitettNyersolajArray.unshift(data);
    this.originalNyersolajArray.unshift(data);
    this.eredmenyNyersolajinput.nativeElement.value = '';
    this.eredmenyNyersolajDateinput.nativeElement.value = '';

    this.eredmenyekNyersolaj.push(data.eredmeny);
    this.datumokNyersolaj.push(data.date);

    this.eredmenyekNyersolaj = [];
    this.datumokNyersolaj = [];

    for (let i = this.osszesitettNyersolajArray.length - 1; i >= 0; i--) {
      this.eredmenyekNyersolaj.push(this.osszesitettNyersolajArray[i].eredmeny);
      this.datumokNyersolaj.push(this.osszesitettNyersolajArray[i].date);
    }

    this.setNyersolajChart(this.datumokNyersolaj, this.eredmenyekNyersolaj);
    this.chartNyersolaj.update();
  }

  // ágazati
  addBasicMaterial() {
    const data: DataAgazat = {
      teljesitmeny: this.agazatiElemzesFormGroup.get('basicMaterialTeljesitmenyCtrl').value,
      PE: this.agazatiElemzesFormGroup.get('basicMaterialPECtrl').value,
      PB: this.agazatiElemzesFormGroup.get('basicMaterialPBCtrl').value,
      date: this.agazatiElemzesFormGroup.get('basicDateCtrl').value
    };

    this.originalBasicArray.unshift(data);
    this.osszesitettBasicMaterialArray.unshift(data);


    this.teljesitmenyBasicinput.nativeElement.value = '';
    this.PEBasicinput.nativeElement.value = '';
    this.PBBasicinput.nativeElement.value = '';
    this.BasicDateinput.nativeElement.value = '';

    this.teljesitmenyBasicArray.push(data.teljesitmeny);
    this.PEBasicArray.unshift(data.PE);
    this.PBBasicArray.unshift(data.PB);
    this.dateBasicArray.push(data.date);

    this.eredmenyekBasic = [];
    this.datumokBasic = [];

    for (let i = this.osszesitettBasicMaterialArray.length - 1; i >= 0; i--) {
      this.eredmenyekBasic.push(this.osszesitettBasicMaterialArray[i].teljesitmeny);
      this.datumokBasic.push(this.osszesitettBasicMaterialArray[i].date);
    }

    this.setBasicMaterialChart(this.datumokBasic, this.eredmenyekBasic);

    this.chartBasicMaterial.update();

    console.log("ÖSSZ: " + this.osszesitettBasicMaterialArray);
    console.log("ORIG: " + this.originalBasicArray);
  }

  addEnergy() {
    const data: DataAgazat = {
      teljesitmeny: this.agazatiElemzesFormGroup.get('energyTeljesitmenyCtrl').value,
      PE: this.agazatiElemzesFormGroup.get('energyPECtrl').value,
      PB: this.agazatiElemzesFormGroup.get('energyPBCtrl').value,
      date: this.agazatiElemzesFormGroup.get('energyDateCtrl').value
    };

    this.osszesitettEnergyArray.unshift(data);
    this.originalEnergyArray.unshift(data);
    this.teljesitmenyEnergyinput.nativeElement.value = '';
    this.PEEnergyinput.nativeElement.value = '';
    this.PBEnergyinput.nativeElement.value = '';
    this.EnergyDateinput.nativeElement.value = '';

    this.teljesitmenyEnergyArray.push(data.teljesitmeny);
    this.PEEnergyArray.unshift(data.PE);
    this.PBEnergyArray.unshift(data.PB);
    this.dateEnergyArray.push(data.date);

    this.eredmenyekEnergy = [];
    this.datumokEnergy = [];

    for (let i = this.osszesitettEnergyArray.length - 1; i >= 0; i--) {
      this.eredmenyekEnergy.push(this.osszesitettEnergyArray[i].teljesitmeny);
      this.datumokEnergy.push(this.osszesitettEnergyArray[i].date);
    }

    this.setEnergyChart(this.datumokEnergy, this.eredmenyekEnergy);

    this.chartEnergy.update();

  }

  addIndustrial() {
    const data: DataAgazat = {
      teljesitmeny: this.agazatiElemzesFormGroup.get('industrialTeljesitmenyCtrl').value,
      PE: this.agazatiElemzesFormGroup.get('industrialPECtrl').value,
      PB: this.agazatiElemzesFormGroup.get('industrialPBCtrl').value,
      date: this.agazatiElemzesFormGroup.get('industrialDateCtrl').value
    };

    this.osszesitettIndustrialArray.unshift(data);
    this.originalIndustrialArray.unshift(data);
    this.teljesitmenyIndustrialinput.nativeElement.value = '';
    this.PEIndustrialinput.nativeElement.value = '';
    this.PBIndustrialinput.nativeElement.value = '';
    this.IndustrialDateinput.nativeElement.value = '';

    this.teljesitmenyIndustrialArray.push(data.teljesitmeny);
    this.PEIndustrialArray.unshift(data.PE);
    this.PBIndustrialArray.unshift(data.PB);
    this.dateIndustrialArray.push(data.date);

    this.eredmenyekIndustrial = [];
    this.datumokIndustrial = [];

    for (let i = this.osszesitettIndustrialArray.length - 1; i >= 0; i--) {
      this.eredmenyekIndustrial.push(this.osszesitettIndustrialArray[i].teljesitmeny);
      this.datumokIndustrial.push(this.osszesitettIndustrialArray[i].date);
    }

    this.setIndustrialChart(this.datumokIndustrial, this.eredmenyekIndustrial);

    this.chartIndustrial.update();
  }


  addTechnology() {
    const data: DataAgazat = {
      teljesitmeny: this.agazatiElemzesFormGroup.get('technologyTeljesitmenyCtrl').value,
      PE: this.agazatiElemzesFormGroup.get('technologyPECtrl').value,
      PB: this.agazatiElemzesFormGroup.get('technologyPBCtrl').value,
      date: this.agazatiElemzesFormGroup.get('technologyDateCtrl').value
    };

    this.osszesitettTechnologyArray.unshift(data);
    this.originalTechnologyArray.unshift(data);
    this.teljesitmenyTechnologyinput.nativeElement.value = '';
    this.PETechnologyinput.nativeElement.value = '';
    this.PBTechnologyinput.nativeElement.value = '';
    this.TechnologyDateinput.nativeElement.value = '';

    this.teljesitmenyTechnologyArray.push(data.teljesitmeny);
    this.PETechnologyArray.unshift(data.PE);
    this.PBTechnologyArray.unshift(data.PB);
    this.dateTechnologyArray.push(data.date);

    this.eredmenyekTechnology = [];
    this.datumokTechnology = [];

    for (let i = this.osszesitettTechnologyArray.length - 1; i >= 0; i--) {
      this.eredmenyekTechnology.push(this.osszesitettTechnologyArray[i].teljesitmeny);
      this.datumokTechnology.push(this.osszesitettTechnologyArray[i].date);
    }

    this.setTechnologyChart(this.datumokTechnology, this.eredmenyekTechnology);

    this.chartTechnology.update();
  }

  addConsumer() {
    const data: DataAgazat = {
      teljesitmeny: this.agazatiElemzesFormGroup.get('consumerTeljesitmenyCtrl').value,
      PE: this.agazatiElemzesFormGroup.get('consumerPECtrl').value,
      PB: this.agazatiElemzesFormGroup.get('consumerPBCtrl').value,
      date: this.agazatiElemzesFormGroup.get('consumerDateCtrl').value
    };

    this.osszesitettConsumerArray.unshift(data);
    this.originalConsumerArray.unshift(data);
    this.teljesitmenyConsumerinput.nativeElement.value = '';
    this.PEConsumerinput.nativeElement.value = '';
    this.PBConsumerinput.nativeElement.value = '';
    this.ConsumerDateinput.nativeElement.value = '';

    this.teljesitmenyConsumerArray.push(data.teljesitmeny);
    this.PEConsumerArray.unshift(data.PE);
    this.PBConsumerArray.unshift(data.PB);
    this.dateConsumerArray.push(data.date);

    this.eredmenyekConsumer = [];
    this.datumokConsumer = [];

    for (let i = this.osszesitettConsumerArray.length - 1; i >= 0; i--) {
      this.eredmenyekConsumer.push(this.osszesitettConsumerArray[i].teljesitmeny);
      this.datumokConsumer.push(this.osszesitettConsumerArray[i].date);
    }

    this.setConsumerChart(this.datumokConsumer, this.eredmenyekConsumer);

    this.chartConsumer.update();
  }

  addCommunication() {
    const data: DataAgazat = {
      teljesitmeny: this.agazatiElemzesFormGroup.get('communicationTeljesitmenyCtrl').value,
      PE: this.agazatiElemzesFormGroup.get('communicationPECtrl').value,
      PB: this.agazatiElemzesFormGroup.get('communicationPBCtrl').value,
      date: this.agazatiElemzesFormGroup.get('communicationDateCtrl').value
    };

    this.osszesitettCommunicationArray.unshift(data);
    this.originalCommunicationArray.unshift(data);
    this.teljesitmenyCommunicationinput.nativeElement.value = '';
    this.PECommunicationinput.nativeElement.value = '';
    this.PBCommunicationinput.nativeElement.value = '';
    this.CommunicationDateinput.nativeElement.value = '';

    this.teljesitmenyCommunicationArray.push(data.teljesitmeny);
    this.PECommunicationArray.unshift(data.PE);
    this.PBCommunicationArray.unshift(data.PB);
    this.dateCommunicationArray.push(data.date);

    this.eredmenyekCommmunication = [];
    this.datumokCommmunication = [];

    for (let i = this.osszesitettCommunicationArray.length - 1; i >= 0; i--) {
      this.eredmenyekCommmunication.push(this.osszesitettCommunicationArray[i].teljesitmeny);
      this.datumokCommmunication.push(this.osszesitettCommunicationArray[i].date);
    }

    this.setCommunicationChart(this.datumokCommmunication, this.eredmenyekCommmunication);

    this.chartCommunication.update();
  }

  // Real method

  addReal() {
    const data: DataAgazat = {
      teljesitmeny: this.agazatiElemzesFormGroup.get('realTeljesitmenyCtrl').value,
      PE: this.agazatiElemzesFormGroup.get('realPECtrl').value,
      PB: this.agazatiElemzesFormGroup.get('realPBCtrl').value,
      date: this.agazatiElemzesFormGroup.get('realDateCtrl').value
    };

    this.osszesitettRealArray.unshift(data);
    this.originalRealArray.unshift(data);
    this.teljesitmenyRealinput.nativeElement.value = '';
    this.PERealinput.nativeElement.value = '';
    this.PBRealinput.nativeElement.value = '';
    this.RealDateinput.nativeElement.value = '';

    this.teljesitmenyRealArray.push(data.teljesitmeny);
    this.PERealArray.unshift(data.PE);
    this.PBRealArray.unshift(data.PB);
    this.dateRealArray.push(data.date);

    this.eredmenyekReal = [];
    this.datumokReal = [];

    for (let i = this.osszesitettRealArray.length - 1; i >= 0; i--) {
      this.eredmenyekReal.push(this.osszesitettRealArray[i].teljesitmeny);
      this.datumokReal.push(this.osszesitettRealArray[i].date);
    }

    this.setRealChart(this.datumokReal, this.eredmenyekReal);

    this.chartReal.update();
  }

  // Health method

  addHealth() {
    const data: DataAgazat = {
      teljesitmeny: this.agazatiElemzesFormGroup.get('healthTeljesitmenyCtrl').value,
      PE: this.agazatiElemzesFormGroup.get('healthPECtrl').value,
      PB: this.agazatiElemzesFormGroup.get('healthPBCtrl').value,
      date: this.agazatiElemzesFormGroup.get('healthDateCtrl').value
    };

    this.osszesitettHealthArray.unshift(data);
    this.originalHealthArray.unshift(data);
    this.teljesitmenyHealthinput.nativeElement.value = '';
    this.PEHealthinput.nativeElement.value = '';
    this.PBHealthinput.nativeElement.value = '';
    this.HealthDateinput.nativeElement.value = '';

    this.teljesitmenyHealthArray.push(data.teljesitmeny);
    this.PEHealthArray.unshift(data.PE);
    this.PBHealthArray.unshift(data.PB);
    this.dateHealthArray.push(data.date);

    this.eredmenyekHealth = [];
    this.datumokHealth = [];

    for (let i = this.osszesitettHealthArray.length - 1; i >= 0; i--) {
      this.eredmenyekHealth.push(this.osszesitettHealthArray[i].teljesitmeny);
      this.datumokHealth.push(this.osszesitettHealthArray[i].date);
    }

    this.setHealthChart(this.datumokHealth, this.eredmenyekHealth);

    this.chartHealth.update();
  }

  // Utilities method

  addUtilities() {
    const data: DataAgazat = {
      teljesitmeny: this.agazatiElemzesFormGroup.get('utilitiesTeljesitmenyCtrl').value,
      PE: this.agazatiElemzesFormGroup.get('utilitiesPECtrl').value,
      PB: this.agazatiElemzesFormGroup.get('utilitiesPBCtrl').value,
      date: this.agazatiElemzesFormGroup.get('utilitiesDateCtrl').value
    };

    this.osszesitettUtilitiesArray.unshift(data);
    this.originalUtilitiesArray.unshift(data);
    this.teljesitmenyUtilitiesinput.nativeElement.value = '';
    this.PEUtilitiesinput.nativeElement.value = '';
    this.PBUtilitiesinput.nativeElement.value = '';
    this.UtilitiesDateinput.nativeElement.value = '';

    this.teljesitmenyUtilitiesArray.push(data.teljesitmeny);
    this.PEUtilitiesArray.unshift(data.PE);
    this.PBUtilitiesArray.unshift(data.PB);
    this.dateUtilitiesArray.push(data.date);

    this.eredmenyekUtilities = [];
    this.datumokUtilities = [];

    for (let i = this.osszesitettUtilitiesArray.length - 1; i >= 0; i--) {
      this.eredmenyekUtilities.push(this.osszesitettUtilitiesArray[i].teljesitmeny);
      this.datumokUtilities.push(this.osszesitettUtilitiesArray[i].date);
    }

    this.setUtilitiesChart(this.datumokUtilities, this.eredmenyekUtilities);

    this.chartUtilities.update();
  }

  // Financial method

  addFinancial() {
    const data: DataAgazat = {
      teljesitmeny: this.agazatiElemzesFormGroup.get('financialTeljesitmenyCtrl').value,
      PE: this.agazatiElemzesFormGroup.get('financialPECtrl').value,
      PB: this.agazatiElemzesFormGroup.get('financialPBCtrl').value,
      date: this.agazatiElemzesFormGroup.get('financialDateCtrl').value
    };

    this.osszesitettFinancialArray.unshift(data);
    this.originalFinancialArray.unshift(data);
    this.teljesitmenyFinancialinput.nativeElement.value = '';
    this.PEFinancialinput.nativeElement.value = '';
    this.PBFinancialinput.nativeElement.value = '';
    this.FinancialDateinput.nativeElement.value = '';

    this.teljesitmenyFinancialArray.push(data.teljesitmeny);
    this.PEFinancialArray.unshift(data.PE);
    this.PBFinancialArray.unshift(data.PB);
    this.dateFinancialArray.push(data.date);

    this.eredmenyekFinancial = [];
    this.datumokFinancial = [];

    for (let i = this.osszesitettFinancialArray.length - 1; i >= 0; i--) {
      this.eredmenyekFinancial.push(this.osszesitettFinancialArray[i].teljesitmeny);
      this.datumokFinancial.push(this.osszesitettFinancialArray[i].date);
    }

    this.setFinancialChart(this.datumokFinancial, this.eredmenyekFinancial);

    this.chartFinancial.update();
  }

  // Defensive method

  addDefensive() {
    const data: DataAgazat = {
      teljesitmeny: this.agazatiElemzesFormGroup.get('defensiveTeljesitmenyCtrl').value,
      PE: this.agazatiElemzesFormGroup.get('defensivePECtrl').value,
      PB: this.agazatiElemzesFormGroup.get('defensivePBCtrl').value,
      date: this.agazatiElemzesFormGroup.get('defensiveDateCtrl').value
    };

    this.osszesitettDefensiveArray.unshift(data);
    this.originalDefensiveArray.unshift(data);
    this.teljesitmenyDefensiveinput.nativeElement.value = '';
    this.PEDefensiveinput.nativeElement.value = '';
    this.PBDefensiveinput.nativeElement.value = '';
    this.DefensiveDateinput.nativeElement.value = '';

    this.teljesitmenyDefensiveArray.push(data.teljesitmeny);
    this.PEDefensiveArray.unshift(data.PE);
    this.PBDefensiveArray.unshift(data.PB);
    this.dateDefensiveArray.push(data.date);

    this.eredmenyekDefensive = [];
    this.datumokDefensive = [];

    for (let i = this.osszesitettDefensiveArray.length - 1; i >= 0; i--) {
      this.eredmenyekDefensive.push(this.osszesitettDefensiveArray[i].teljesitmeny);
      this.datumokDefensive.push(this.osszesitettDefensiveArray[i].date);
    }

    this.setDefensiveChart(this.datumokDefensive, this.eredmenyekDefensive);

    this.chartDefensive.update();
  }

  addReszveny() {
    const control = <FormArray>this.reszvenyKivalasztasFormGroup.controls['tableRowsReszveny'];
    // control.unshift(this.initReszvenyKivalasztas());
    control.insert(0, this.initReszvenyKivalasztas());

  }

  getGazdAdatok() {
    console.log(this.gazdElemzesFormGroup.value);
  }


  // Diagrams

  setPMIChart(label: string[], eredmenyek: number[]) {
    this.chartPMI = new Chart(this.canvasPMI.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: 'Összesített PMI',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getPMIChart() {
    this.chartPMI = new Chart(this.canvasPMI.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokPMI,
        datasets: [{
          label: 'Összesített PMI',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekPMI,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }



  setUzletiChart(label: string[], eredmenyek: number[]) {
    this.chartUzleti = new Chart(this.canvasUzleti.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: 'Üzleti bizalmi index',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getUzletiChart() {
    this.chartUzleti = new Chart(this.canvasUzleti.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokUzleti,
        datasets: [{
          label: 'Üzleti bizalmi index',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekUzleti,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setIpariChart(label: string[], eredmenyek: number[]) {
    this.chartIpari = new Chart(this.canvasIpari.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: 'Ipari termelés',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getIpariChart() {
    this.chartIpari = new Chart(this.canvasIpari.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokIpari,
        datasets: [{
          label: 'Ipari termelés',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekIpari,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setKapacitasChart(label: string[], eredmenyek: number[]) {
    this.chartKapacitas = new Chart(this.canvasKapacitas.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: 'Kapacitáskihasználtság',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getKapacitasChart() {
    this.chartKapacitas = new Chart(this.canvasKapacitas.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokKapacitas,
        datasets: [{
          label: 'Kapacitáskihasználtság',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekKapacitas,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setGDPChart(label: string[], eredmenyek: number[]) {
    this.chartGDP = new Chart(this.canvasGDP.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: 'GDP éves növekedési ráta',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getGDPChart() {
    this.chartGDP = new Chart(this.canvasGDP.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokGDP,
        datasets: [{
          label: 'GDP éves növekedési ráta',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekGDP,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setPenzmennyisegChart(label: string[], eredmenyek: number[]) {
    this.chartPenzmennyiseg = new Chart(this.canvasPenzmennyiseg.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: 'M0 Pénzmennyiség',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getPenzmennyisegChart() {
    this.chartPenzmennyiseg = new Chart(this.canvasPenzmennyiseg.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokPenzmennyiseg,
        datasets: [{
          label: 'M0 Pénzmennyiség',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekPenzmennyiseg,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setFiskalisChart(label: string[], eredmenyek: number[]) {
    this.chartFiskalis = new Chart(this.canvasFiskalis.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: 'Fiskalis kiadások',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getFiskalisChart() {
    this.chartFiskalis = new Chart(this.canvasFiskalis.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokFiskalis,
        datasets: [{
          label: 'Fiskalis kiadások',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekFiskalis,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setKamatlabChart(label: string[], eredmenyek: number[]) {
    this.chartKamatlab = new Chart(this.canvasKamatlab.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: 'Kamatláb',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getKamatlabChart() {
    this.chartKamatlab = new Chart(this.canvasKamatlab.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokKamatlab,
        datasets: [{
          label: 'Kamatláb',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekKamatlab,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  // Gazd ciklus valt.
  setAllamChart(label: string[], eredmenyek: number[]) {
    this.chartAllam = new Chart(this.canvasAllam.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getAllamChart() {
    this.chartAllam = new Chart(this.canvasAllam.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokAllam,
        datasets: [{
          label: 'Kamatláb',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekAllam,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setLakossagChart(label: string[], eredmenyek: number[]) {
    this.chartLakossag = new Chart(this.canvasLakossag.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getLakossagChart() {
    this.chartLakossag = new Chart(this.canvasLakossag.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokLakossag,
        datasets: [{
          label: 'Kamatláb',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekLakossag,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setInflacioChart(label: string[], eredmenyek: number[]) {
    this.chartInflacio = new Chart(this.canvasInflacio.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getInflacioChart() {
    this.chartInflacio = new Chart(this.canvasInflacio.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokInflacio,
        datasets: [{
          label: 'Kamatláb',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekInflacio,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setMunkanelkuliChart(label: string[], eredmenyek: number[]) {
    this.chartMunkanelkuli = new Chart(this.canvasMunkanelkuli.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getMunkanelkuliChart() {
    this.chartMunkanelkuli = new Chart(this.canvasMunkanelkuli.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokMunkanelkuli,
        datasets: [{
          label: 'Kamatláb',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekMunkanelkuli,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setBernovekedesChart(label: string[], eredmenyek: number[]) {
    this.chartBernovekedes = new Chart(this.canvasBernovekedes.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getBernovekedesChart() {
    this.chartBernovekedes = new Chart(this.canvasBernovekedes.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokBernovekedes,
        datasets: [{
          label: 'Kamatláb',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekBernovekedes,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setFogyasztoChart(label: string[], eredmenyek: number[]) {
    this.chartFogyaszto = new Chart(this.canvasFogyaszto.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getFogyasztoChart() {
    this.chartFogyaszto = new Chart(this.canvasFogyaszto.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokFogyaszto,
        datasets: [{
          label: 'Kamatláb',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekFogyaszto,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setNyersolajChart(label: string[], eredmenyek: number[]) {
    this.chartNyersolaj = new Chart(this.canvasNyersolaj.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getNyersolajChart() {
    this.chartNyersolaj = new Chart(this.canvasNyersolaj.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.datumokNyersolaj,
        datasets: [{
          label: 'Kamatláb',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.eredmenyekNyersolaj,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getBasicMaterialChart() {
    this.chartBasicMaterial = new Chart(this.canvasBasicMaterial.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.dateBasicArray,
        datasets: [{
          label: 'Alapanyaggyártó cégek (Basic Material)',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.teljesitmenyBasicArray,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setBasicMaterialChart(label: string[], eredmenyek: number[]) {
    this.chartBasicMaterial = new Chart(this.canvasBasicMaterial.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }


  getEnergyChart() {
    this.chartEnergy = new Chart(this.canvasEnergy.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.dateEnergyArray,
        datasets: [{
          label: 'Energia szektor (Energy)',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.teljesitmenyEnergyArray,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setEnergyChart(label: string[], eredmenyek: number[]) {
    this.chartEnergy = new Chart(this.canvasEnergy.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }


  getIndustrialChart() {
    this.chartIndustrial = new Chart(this.canvasIndustrial.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.dateIndustrialArray,
        datasets: [{
          label: 'Ipari termelési szektor (Industrial goods)',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.teljesitmenyIndustrialArray,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setIndustrialChart(label: string[], eredmenyek: number[]) {
    this.chartIndustrial = new Chart(this.canvasIndustrial.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }


  getTechnologyChart() {
    this.chartTechnology = new Chart(this.canvasTechnology.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.dateTechnologyArray,
        datasets: [{
          label: 'Technológiai szektor (Technology)',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.teljesitmenyTechnologyArray,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setTechnologyChart(label: string[], eredmenyek: number[]) {
    this.chartTechnology = new Chart(this.canvasTechnology.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  getConsumerChart() {
    this.chartConsumer = new Chart(this.canvasConsumer.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.dateConsumerArray,
        datasets: [{
          label: 'Ciklikus fogyasztási javak (Consumer cyclical)',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.teljesitmenyConsumerArray,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setConsumerChart(label: string[], eredmenyek: number[]) {
    this.chartConsumer = new Chart(this.canvasConsumer.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }


  getCommunicationChart() {
    this.chartCommunication = new Chart(this.canvasCommunication.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.dateCommunicationArray,
        datasets: [{
          label: 'Kommunikációs szolgáltatások (Communication services)',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.teljesitmenyCommunicationArray,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setCommunicationChart(label: string[], eredmenyek: number[]) {
    this.chartCommunication = new Chart(this.canvasCommunication.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }


  // Real

  getRealChart() {
    this.chartReal = new Chart(this.canvasReal.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.dateRealArray,
        datasets: [{
          label: 'Ingatlan (Real estate)',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.teljesitmenyRealArray,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setRealChart(label: string[], eredmenyek: number[]) {
    this.chartReal = new Chart(this.canvasReal.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }


  // Health

  getHealthChart() {
    this.chartHealth = new Chart(this.canvasHealth.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.dateHealthArray,
        datasets: [{
          label: 'Egészségügyi szolgáltatás (Healthcare)',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.teljesitmenyHealthArray,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setHealthChart(label: string[], eredmenyek: number[]) {
    this.chartHealth = new Chart(this.canvasHealth.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }


  // Utilities

  getUtilitiesChart() {
    this.chartUtilities = new Chart(this.canvasUtilities.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.dateUtilitiesArray,
        datasets: [{
          label: 'Közszolgáltatás / Segédprogramok (Utilities)',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.teljesitmenyUtilitiesArray,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setUtilitiesChart(label: string[], eredmenyek: number[]) {
    this.chartUtilities = new Chart(this.canvasUtilities.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }


  // Financial

  getFinancialChart() {
    this.chartFinancial = new Chart(this.canvasFinancial.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.dateFinancialArray,
        datasets: [{
          label: 'Pénzügyi szolgáltatások (Financial services)',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.teljesitmenyFinancialArray,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setFinancialChart(label: string[], eredmenyek: number[]) {
    this.chartFinancial = new Chart(this.canvasFinancial.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }


  // Defensive

  getDefensiveChart() {
    this.chartDefensive = new Chart(this.canvasDefensive.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.dateDefensiveArray,
        datasets: [{
          label: 'Védekező fogyasztási javak  (Consumer Defensive)',
          backgroundColor: '#3F729B',
          fill: false,
          data: this.teljesitmenyDefensiveArray,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setDefensiveChart(label: string[], eredmenyek: number[]) {
    this.chartDefensive = new Chart(this.canvasDefensive.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: '',
          backgroundColor: '#3F729B',
          fill: false,
          data: eredmenyek,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true

          }]
        },
        events: []
      }
    });
  }

  setBasicFormsDisable() {
    this.isBasicDisabled = true;

    this.agazatiElemzesFormGroup.get('basicMaterialTeljesitmenyCtrl').disable();
    this.agazatiElemzesFormGroup.get('basicMaterialPECtrl').disable();
    this.agazatiElemzesFormGroup.get('basicMaterialPBCtrl').disable();
    this.agazatiElemzesFormGroup.get('basicDateCtrl').disable();
  }
  setBasicFormsEnable() {
    this.isBasicDisabled = false;

    this.agazatiElemzesFormGroup.get('basicMaterialTeljesitmenyCtrl').enable();
    this.agazatiElemzesFormGroup.get('basicMaterialPECtrl').enable();
    this.agazatiElemzesFormGroup.get('basicMaterialPBCtrl').enable();
    this.agazatiElemzesFormGroup.get('basicDateCtrl').enable();
  }

  setEnergyFormsDisable() {
    this.isEnergyDisabled = true;

    this.agazatiElemzesFormGroup.get('energyTeljesitmenyCtrl').disable();
    this.agazatiElemzesFormGroup.get('energyPECtrl').disable();
    this.agazatiElemzesFormGroup.get('energyPBCtrl').disable();
    this.agazatiElemzesFormGroup.get('energyDateCtrl').disable();
  }

  setEnergyFormsEnable() {
    this.isEnergyDisabled = false;

    this.agazatiElemzesFormGroup.get('energyTeljesitmenyCtrl').enable();
    this.agazatiElemzesFormGroup.get('energyPECtrl').enable();
    this.agazatiElemzesFormGroup.get('energyPBCtrl').enable();
    this.agazatiElemzesFormGroup.get('energyDateCtrl').enable();
  }

  setIndustrialFormsDisable() {
    this.isIndustrialDisabled = true;

    this.agazatiElemzesFormGroup.get('industrialTeljesitmenyCtrl').disable();
    this.agazatiElemzesFormGroup.get('industrialPECtrl').disable();
    this.agazatiElemzesFormGroup.get('industrialPBCtrl').disable();
    this.agazatiElemzesFormGroup.get('industrialDateCtrl').disable();

  }
  setIndustrialFormsEnable() {
    this.isIndustrialDisabled = false;

    this.agazatiElemzesFormGroup.get('industrialTeljesitmenyCtrl').enable();
    this.agazatiElemzesFormGroup.get('industrialPECtrl').enable();
    this.agazatiElemzesFormGroup.get('industrialPBCtrl').enable();
    this.agazatiElemzesFormGroup.get('industrialDateCtrl').enable();
  }

  setTechnologyFormsDisable() {
    this.isTechnologyDisabled = true;

    this.agazatiElemzesFormGroup.get('technologyTeljesitmenyCtrl').disable();
    this.agazatiElemzesFormGroup.get('technologyPECtrl').disable();
    this.agazatiElemzesFormGroup.get('technologyPBCtrl').disable();
    this.agazatiElemzesFormGroup.get('technologyDateCtrl').disable();
  }
  setTechnologyFormsEnable() {
    this.isTechnologyDisabled = false;

    this.agazatiElemzesFormGroup.get('technologyTeljesitmenyCtrl').enable();
    this.agazatiElemzesFormGroup.get('technologyPECtrl').enable();
    this.agazatiElemzesFormGroup.get('technologyPBCtrl').enable();
    this.agazatiElemzesFormGroup.get('technologyDateCtrl').enable();
  }

  setConsumerFormsDisable() {
    this.isConsumerDisabled = true;

    this.agazatiElemzesFormGroup.get('consumerTeljesitmenyCtrl').disable();
    this.agazatiElemzesFormGroup.get('consumerPECtrl').disable();
    this.agazatiElemzesFormGroup.get('consumerPBCtrl').disable();
    this.agazatiElemzesFormGroup.get('consumerDateCtrl').disable();
  }
  setConsumerFormsEnable() {
    this.isConsumerDisabled = false;

    this.agazatiElemzesFormGroup.get('consumerTeljesitmenyCtrl').enable();
    this.agazatiElemzesFormGroup.get('consumerPECtrl').enable();
    this.agazatiElemzesFormGroup.get('consumerPBCtrl').enable();
    this.agazatiElemzesFormGroup.get('consumerDateCtrl').enable();
  }

  setCommunicationFormsDisable() {
    this.isCommunicationDisabled = true;

    this.agazatiElemzesFormGroup.get('communicationTeljesitmenyCtrl').disable();
    this.agazatiElemzesFormGroup.get('communicationPECtrl').disable();
    this.agazatiElemzesFormGroup.get('communicationPBCtrl').disable();
    this.agazatiElemzesFormGroup.get('communicationDateCtrl').disable();
  }
  setCommunicationFormsEnable() {
    this.isCommunicationDisabled = false;

    this.agazatiElemzesFormGroup.get('communicationTeljesitmenyCtrl').enable();
    this.agazatiElemzesFormGroup.get('communicationPECtrl').enable();
    this.agazatiElemzesFormGroup.get('communicationPBCtrl').enable();
    this.agazatiElemzesFormGroup.get('communicationDateCtrl').enable();
  }

  setRealFormsDisable() {
    this.isRealDisabled = true;

    this.agazatiElemzesFormGroup.get('realTeljesitmenyCtrl').disable();
    this.agazatiElemzesFormGroup.get('realPECtrl').disable();
    this.agazatiElemzesFormGroup.get('realPBCtrl').disable();
    this.agazatiElemzesFormGroup.get('realDateCtrl').disable();
  }
  setRealFormsEnable() {
    this.isRealDisabled = false;

    this.agazatiElemzesFormGroup.get('realTeljesitmenyCtrl').enable();
    this.agazatiElemzesFormGroup.get('realPECtrl').enable();
    this.agazatiElemzesFormGroup.get('realPBCtrl').enable();
    this.agazatiElemzesFormGroup.get('realDateCtrl').enable();
  }

  setHealthFormsDisable() {
    this.isHealthDisabled = true;

    this.agazatiElemzesFormGroup.get('healthTeljesitmenyCtrl').disable();
    this.agazatiElemzesFormGroup.get('healthPECtrl').disable();
    this.agazatiElemzesFormGroup.get('healthPBCtrl').disable();
    this.agazatiElemzesFormGroup.get('healthDateCtrl').disable();
  }
  setHealthFormsEnable() {
    this.isHealthDisabled = false;

    this.agazatiElemzesFormGroup.get('healthTeljesitmenyCtrl').enable();
    this.agazatiElemzesFormGroup.get('healthPECtrl').enable();
    this.agazatiElemzesFormGroup.get('healthPBCtrl').enable();
    this.agazatiElemzesFormGroup.get('healthDateCtrl').enable();
  }

  setUtilitiesFormsDisable() {
    this.isUtilitiesDisabled = true;

    this.agazatiElemzesFormGroup.get('utilitiesTeljesitmenyCtrl').disable();
    this.agazatiElemzesFormGroup.get('utilitiesPECtrl').disable();
    this.agazatiElemzesFormGroup.get('utilitiesPBCtrl').disable();
    this.agazatiElemzesFormGroup.get('utilitiesDateCtrl').disable();
  }
  setUtilitiesFormsEnable() {
    this.isUtilitiesDisabled = false;

    this.agazatiElemzesFormGroup.get('utilitiesTeljesitmenyCtrl').enable();
    this.agazatiElemzesFormGroup.get('utilitiesPECtrl').enable();
    this.agazatiElemzesFormGroup.get('utilitiesPBCtrl').enable();
    this.agazatiElemzesFormGroup.get('utilitiesDateCtrl').enable();
  }

  setFinancialFormsDisable() {
    this.isFinancialDisabled = true;

    this.agazatiElemzesFormGroup.get('financialTeljesitmenyCtrl').disable();
    this.agazatiElemzesFormGroup.get('financialPECtrl').disable();
    this.agazatiElemzesFormGroup.get('financialPBCtrl').disable();
    this.agazatiElemzesFormGroup.get('financialDateCtrl').disable();
  }
  setFinancialFormsEnable() {
    this.isFinancialDisabled = false;

    this.agazatiElemzesFormGroup.get('financialTeljesitmenyCtrl').enable();
    this.agazatiElemzesFormGroup.get('financialPECtrl').enable();
    this.agazatiElemzesFormGroup.get('financialPBCtrl').enable();
    this.agazatiElemzesFormGroup.get('financialDateCtrl').enable();
  }

  setDefensiveFormsDisable() {
    this.isDefensiveDisabled = true;

    this.agazatiElemzesFormGroup.get('defensiveTeljesitmenyCtrl').disable();
    this.agazatiElemzesFormGroup.get('defensivePECtrl').disable();
    this.agazatiElemzesFormGroup.get('defensivePBCtrl').disable();
    this.agazatiElemzesFormGroup.get('defensiveDateCtrl').disable();
  }
  setDefensiveFormsEnable() {
    this.isDefensiveDisabled = false;

    this.agazatiElemzesFormGroup.get('defensiveTeljesitmenyCtrl').enable();
    this.agazatiElemzesFormGroup.get('defensivePECtrl').enable();
    this.agazatiElemzesFormGroup.get('defensivePBCtrl').enable();
    this.agazatiElemzesFormGroup.get('defensiveDateCtrl').enable();
  }

  setPMIFormsDisable() {
    this.isPMIDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyPMICtrl').disable();
    this.gazdElemzesFormGroup.get('datePMICtrl').disable();

  }
  setPMIFormsEnable() {
    this.isPMIDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyPMICtrl').enable();
    this.gazdElemzesFormGroup.get('datePMICtrl').enable();
  }

  setUzletiFormsDisable() {
    this.isUzletiDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyUzletiCtrl').disable();
    this.gazdElemzesFormGroup.get('dateUzletiCtrl').disable();
  }

  setUzletiFormsEnable() {
    this.isUzletiDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyUzletiCtrl').enable();
    this.gazdElemzesFormGroup.get('dateUzletiCtrl').enable();
  }

  setIpariFormsDisable() {
    this.isIpariDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyIpariCtrl').disable();
    this.gazdElemzesFormGroup.get('dateIpariCtrl').disable();
  }

  setIpariFormsEnable() {
    this.isIpariDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyIpariCtrl').enable();
    this.gazdElemzesFormGroup.get('dateIpariCtrl').enable();
  }

  setKapacitasFormsDisable() {
    this.isKapacitasDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyKapacitasCtrl').disable();
    this.gazdElemzesFormGroup.get('dateKapacitasCtrl').disable();
  }

  setKapacitasFormsEnable() {
    this.isKapacitasDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyKapacitasCtrl').enable();
    this.gazdElemzesFormGroup.get('dateKapacitasCtrl').enable();
  }

  setGDPFormsDisable() {
    this.isGDPDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyGDPCtrl').disable();
    this.gazdElemzesFormGroup.get('dateGDPCtrl').disable();
  }

  setGDPFormsEnable() {
    this.isGDPDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyGDPCtrl').enable();
    this.gazdElemzesFormGroup.get('dateGDPCtrl').enable();
  }

  setPenzmennyisegFormsDisable() {
    this.isPenzmennyisegDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyPenzmennyisegCtrl').disable();
    this.gazdElemzesFormGroup.get('datePenzmennyisegCtrl').disable();
  }

  setPenzmennyisegFormsEnable() {
    this.isPenzmennyisegDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyPenzmennyisegCtrl').enable();
    this.gazdElemzesFormGroup.get('datePenzmennyisegCtrl').enable();
  }

  setFiskalisFormsDisable() {
    this.isFiskalisDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyFiskalisCtrl').disable();
    this.gazdElemzesFormGroup.get('dateFiskalisCtrl').disable();
  }
  setFiskalisFormsEnable() {
    this.isFiskalisDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyFiskalisCtrl').enable();
    this.gazdElemzesFormGroup.get('dateFiskalisCtrl').enable();
  }

  setKamatlabFormsDisable() {
    this.isKamatlabDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyKamatlabCtrl').disable();
    this.gazdElemzesFormGroup.get('dateKamatlabCtrl').disable();

  }
  setKamatlabFormsEnable() {
    this.isKamatlabDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyKamatlabCtrl').enable();
    this.gazdElemzesFormGroup.get('dateKamatlabCtrl').enable();
  }

  setAllamFormsDisable() {
    this.isAllamDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyAllamCtrl').disable();
    this.gazdElemzesFormGroup.get('dateAllamCtrl').disable();
  }

  setAllamFormsEnable() {
    this.isAllamDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyAllamCtrl').enable();
    this.gazdElemzesFormGroup.get('dateAllamCtrl').enable();
  }

  setLakossagFormsDisable() {
    this.isLakossagDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyLakossagCtrl').disable();
    this.gazdElemzesFormGroup.get('dateLakossagCtrl').disable();

  }
  setLakossagFormsEnable() {
    this.isLakossagDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyLakossagCtrl').enable();
    this.gazdElemzesFormGroup.get('dateLakossagCtrl').enable();
  }

  setInflacioFormsDisable() {
    this.isInflacioDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyInflacioCtrl').disable();
    this.gazdElemzesFormGroup.get('dateInflacioCtrl').disable();

  }
  setInflacioFormsEnable() {
    this.isInflacioDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyInflacioCtrl').enable();
    this.gazdElemzesFormGroup.get('dateInflacioCtrl').enable();
  }

  setMunkanelkuliFormsDisable() {
    this.isMunkanelkuliDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyMunkanelkuliCtrl').disable();
    this.gazdElemzesFormGroup.get('dateMunkanelkuliCtrl').disable();
  }

  setMunkanelkuliFormsEnable() {
    this.isMunkanelkuliDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyMunkanelkuliCtrl').enable();
    this.gazdElemzesFormGroup.get('dateMunkanelkuliCtrl').enable();
  }

  setBernovekedesFormsDisable() {
    this.isBernovekedesDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyBernovekedesCtrl').disable();
    this.gazdElemzesFormGroup.get('dateBernovekedesCtrl').disable();

  }

  setBernovekedesFormsEnable() {
    this.isBernovekedesDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyBernovekedesCtrl').enable();
    this.gazdElemzesFormGroup.get('dateBernovekedesCtrl').enable();
  }

  setFogyasztoFormsDisable() {
    this.isFogyasztoDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyFogyasztoCtrl').disable();
    this.gazdElemzesFormGroup.get('dateFogyasztoCtrl').disable();
  }

  setFogyasztoFormsEnable() {
    this.isFogyasztoDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyFogyasztoCtrl').enable();
    this.gazdElemzesFormGroup.get('dateFogyasztoCtrl').enable();
  }

  setNyersolajFormsDisable() {
    this.isNyersolajDisabled = true;

    this.gazdElemzesFormGroup.get('eredmenyNyersolajCtrl').disable();
    this.gazdElemzesFormGroup.get('dateNyersolajCtrl').disable();
  }

  setNyersolajFormsEnable() {
    this.isNyersolajDisabled = false;

    this.gazdElemzesFormGroup.get('eredmenyNyersolajCtrl').enable();
    this.gazdElemzesFormGroup.get('dateNyersolajCtrl').enable();
  }


  filterEnergyList() {
    this.setEnergyFormsDisable();

    const startFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('startEnergyDateCtrl').value);
    const endFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('endEnergyDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettEnergyArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettEnergyArray = selectedEredmeny;
    this.eredmenyekEnergy = [];
    this.datumokEnergy = [];

    console.log(this.osszesitettEnergyArray);

    for (let i = this.osszesitettEnergyArray.length - 1; i >= 0; i--) {
      this.eredmenyekEnergy.push(this.osszesitettEnergyArray[i].teljesitmeny);
      this.datumokEnergy.push(this.osszesitettEnergyArray[i].date);
      console.log(i);
    }

    this.setEnergyChart(this.datumokEnergy, this.eredmenyekEnergy);

    this.chartEnergy.update();
  }

  filterBasicMaterialList() {
    // adatfelvitel set -> disabled
    this.setBasicFormsDisable();


    const startFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('startBasicMaterialDateCtrl').value);
    const endFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('endBasicMaterialDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettBasicMaterialArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettBasicMaterialArray = selectedEredmeny;
    this.eredmenyekBasic = [];
    this.datumokBasic = [];

    console.log(this.osszesitettBasicMaterialArray);

    for (let i = this.osszesitettBasicMaterialArray.length - 1; i >= 0; i--) {
      this.eredmenyekBasic.push(this.osszesitettBasicMaterialArray[i].teljesitmeny);
      this.datumokBasic.push(this.osszesitettBasicMaterialArray[i].date);
      console.log(i);
    }

    this.setBasicMaterialChart(this.datumokBasic, this.eredmenyekBasic);

    this.chartBasicMaterial.update();
    console.log("SZÜRÉS UTÁN össezsitett: " + this.osszesitettBasicMaterialArray);
    console.log("SZÜRÉS UTÁN original: " + this.originalBasicArray);

  }

  filterIndustrialList() {

    this.setIndustrialFormsDisable();

    const startFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('startIndustrialDateCtrl').value);
    const endFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('endIndustrialDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettIndustrialArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettIndustrialArray = selectedEredmeny;
    this.eredmenyekIndustrial = [];
    this.datumokIndustrial = [];

    for (let i = this.osszesitettIndustrialArray.length - 1; i >= 0; i--) {
      this.eredmenyekIndustrial.push(this.osszesitettIndustrialArray[i].teljesitmeny);
      this.datumokIndustrial.push(this.osszesitettIndustrialArray[i].date);
      console.log(i);
    }

    this.setIndustrialChart(this.datumokIndustrial, this.eredmenyekIndustrial);

    this.chartIndustrial.update();
  }

  filterTechnologyList() {

    this.setTechnologyFormsDisable();

    const startFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('startTechnologyDateCtrl').value);
    const endFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('endTechnologyDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettTechnologyArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettTechnologyArray = selectedEredmeny;
    this.eredmenyekTechnology = [];
    this.datumokTechnology = [];

    console.log(this.osszesitettTechnologyArray);

    for (let i = this.osszesitettTechnologyArray.length - 1; i >= 0; i--) {
      this.eredmenyekTechnology.push(this.osszesitettTechnologyArray[i].teljesitmeny);
      this.datumokTechnology.push(this.osszesitettTechnologyArray[i].date);
      console.log(i);
    }

    this.setTechnologyChart(this.datumokTechnology, this.eredmenyekTechnology);

    this.chartTechnology.update();
  }

  filterConsumerList() {
    this.setConsumerFormsDisable();

    const startFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('startConsumerDateCtrl').value);
    const endFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('endConsumerDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettConsumerArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettConsumerArray = selectedEredmeny;
    this.eredmenyekConsumer = [];
    this.datumokConsumer = [];

    console.log(this.osszesitettConsumerArray);

    for (let i = this.osszesitettConsumerArray.length - 1; i >= 0; i--) {
      this.eredmenyekConsumer.push(this.osszesitettConsumerArray[i].teljesitmeny);
      this.datumokConsumer.push(this.osszesitettConsumerArray[i].date);
      console.log(i);
    }

    this.setConsumerChart(this.datumokConsumer, this.eredmenyekConsumer);

    this.chartConsumer.update();
  }

  filterCommunicationList() {

    this.setCommunicationFormsDisable();

    const startFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('startCommunicationDateCtrl').value);
    const endFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('endCommunicationDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettCommunicationArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettCommunicationArray = selectedEredmeny;
    this.eredmenyekCommmunication = [];
    this.datumokCommmunication = [];

    console.log(this.osszesitettCommunicationArray);

    for (let i = this.osszesitettCommunicationArray.length - 1; i >= 0; i--) {
      this.eredmenyekCommmunication.push(this.osszesitettCommunicationArray[i].teljesitmeny);
      this.datumokCommmunication.push(this.osszesitettCommunicationArray[i].date);
      console.log(i);
    }

    this.setCommunicationChart(this.datumokCommmunication, this.eredmenyekCommmunication);

    this.chartCommunication.update();
  }

  filterRealList() {
    this.setRealFormsDisable();

    const startFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('startRealDateCtrl').value);
    const endFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('endRealDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettRealArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettRealArray = selectedEredmeny;
    this.eredmenyekReal = [];
    this.datumokReal = [];

    console.log(this.osszesitettRealArray);

    for (let i = this.osszesitettRealArray.length - 1; i >= 0; i--) {
      this.eredmenyekReal.push(this.osszesitettRealArray[i].teljesitmeny);
      this.datumokReal.push(this.osszesitettRealArray[i].date);
      console.log(i);
    }

    this.setRealChart(this.datumokReal, this.eredmenyekReal);

    this.chartReal.update();
  }

  filterHealthList() {
    this.setHealthFormsDisable();

    const startFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('startHealthDateCtrl').value);
    const endFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('endHealthDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettHealthArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettHealthArray = selectedEredmeny;
    this.eredmenyekHealth = [];
    this.datumokHealth = [];

    console.log(this.osszesitettHealthArray);

    for (let i = this.osszesitettHealthArray.length - 1; i >= 0; i--) {
      this.eredmenyekHealth.push(this.osszesitettHealthArray[i].teljesitmeny);
      this.datumokHealth.push(this.osszesitettHealthArray[i].date);
      console.log(i);
    }

    this.setHealthChart(this.datumokHealth, this.eredmenyekHealth);

    this.chartHealth.update();
  }

  filterUtilitiesList() {
    this.setUtilitiesFormsDisable();

    const startFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('startUtilitiesDateCtrl').value);
    const endFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('endUtilitiesDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettUtilitiesArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettUtilitiesArray = selectedEredmeny;
    this.eredmenyekUtilities = [];
    this.datumokUtilities = [];

    console.log(this.osszesitettUtilitiesArray);

    for (let i = this.osszesitettUtilitiesArray.length - 1; i >= 0; i--) {
      this.eredmenyekUtilities.push(this.osszesitettUtilitiesArray[i].teljesitmeny);
      this.datumokUtilities.push(this.osszesitettUtilitiesArray[i].date);
      console.log(i);
    }

    this.setUtilitiesChart(this.datumokUtilities, this.eredmenyekUtilities);

    this.chartUtilities.update();
  }

  filterFinancialList() {
    this.setFinancialFormsDisable();

    const startFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('startFinancialDateCtrl').value);
    const endFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('endFinancialDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettFinancialArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettFinancialArray = selectedEredmeny;
    this.eredmenyekFinancial = [];
    this.datumokFinancial = [];

    console.log(this.osszesitettFinancialArray);

    for (let i = this.osszesitettFinancialArray.length - 1; i >= 0; i--) {
      this.eredmenyekFinancial.push(this.osszesitettFinancialArray[i].teljesitmeny);
      this.datumokFinancial.push(this.osszesitettFinancialArray[i].date);
      console.log(i);
    }

    this.setFinancialChart(this.datumokFinancial, this.eredmenyekFinancial);

    this.chartFinancial.update();
  }

  filterDefensiveList() {
    this.setDefensiveFormsDisable();

    const startFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('startDefensiveDateCtrl').value);
    const endFilterDate: Date = new Date(this.agazatiElemzesFormGroup.get('endDefensiveDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettDefensiveArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettDefensiveArray = selectedEredmeny;
    this.eredmenyekDefensive = [];
    this.datumokDefensive = [];

    console.log(this.osszesitettDefensiveArray);

    for (let i = this.osszesitettDefensiveArray.length - 1; i >= 0; i--) {
      this.eredmenyekDefensive.push(this.osszesitettDefensiveArray[i].teljesitmeny);
      this.datumokDefensive.push(this.osszesitettDefensiveArray[i].date);
      console.log(i);
    }

    this.setDefensiveChart(this.datumokDefensive, this.eredmenyekDefensive);

    this.chartDefensive.update();
  }


  filterList() {
    this.setPMIFormsDisable();

    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startPMIDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endPMIDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettPMIArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettPMIArray = selectedEredmeny;
    this.eredmenyekPMI = [];
    this.datumokPMI = [];

    console.log(this.osszesitettPMIArray);

    for (let i = this.osszesitettPMIArray.length - 1; i >= 0; i--) {
      this.eredmenyekPMI.push(this.osszesitettPMIArray[i].eredmeny);
      this.datumokPMI.push(this.osszesitettPMIArray[i].date);
      console.log(i);
    }

    this.setPMIChart(this.datumokPMI, this.eredmenyekPMI);

    this.chartPMI.update();
  }

  filterUzletiList() {
    this.setUzletiFormsDisable();
    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startUzletiDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endUzletiDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettUzletiArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettUzletiArray = selectedEredmeny;
    this.eredmenyekUzleti = [];
    this.datumokUzleti = [];

    console.log(this.osszesitettUzletiArray);

    for (let i = this.osszesitettUzletiArray.length - 1; i >= 0; i--) {
      this.eredmenyekUzleti.push(this.osszesitettUzletiArray[i].eredmeny);
      this.datumokUzleti.push(this.osszesitettUzletiArray[i].date);
      console.log(i);
    }

    this.setUzletiChart(this.datumokUzleti, this.eredmenyekUzleti);

    this.chartUzleti.update();
  }

  filterIpariList() {
    this.setIpariFormsDisable();

    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startIpariDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endIpariDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettIpariArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettIpariArray = selectedEredmeny;
    this.eredmenyekIpari = [];
    this.datumokIpari = [];

    console.log(this.osszesitettIpariArray);

    for (let i = this.osszesitettIpariArray.length - 1; i >= 0; i--) {
      this.eredmenyekIpari.push(this.osszesitettIpariArray[i].eredmeny);
      this.datumokIpari.push(this.osszesitettIpariArray[i].date);
      console.log(i);
    }

    this.setIpariChart(this.datumokIpari, this.eredmenyekIpari);

    this.chartIpari.update();
  }

  filterKapacitasList() {
    this.setKapacitasFormsDisable();

    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startKapacitasDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endKapacitasDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettKapacitasArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettKapacitasArray = selectedEredmeny;
    this.eredmenyekKapacitas = [];
    this.datumokKapacitas = [];

    console.log(this.osszesitettKapacitasArray);

    for (let i = this.osszesitettKapacitasArray.length - 1; i >= 0; i--) {
      this.eredmenyekKapacitas.push(this.osszesitettKapacitasArray[i].eredmeny);
      this.datumokKapacitas.push(this.osszesitettKapacitasArray[i].date);
      console.log(i);
    }

    this.setKapacitasChart(this.datumokKapacitas, this.eredmenyekKapacitas);

    this.chartKapacitas.update();
  }

  filterGDPList() {
    this.setGDPFormsDisable();

    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startGDPDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endGDPDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettGDPArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettGDPArray = selectedEredmeny;
    this.eredmenyekGDP = [];
    this.datumokGDP = [];

    console.log(this.osszesitettGDPArray);

    for (let i = this.osszesitettGDPArray.length - 1; i >= 0; i--) {
      this.eredmenyekGDP.push(this.osszesitettGDPArray[i].eredmeny);
      this.datumokGDP.push(this.osszesitettGDPArray[i].date);
      console.log(i);
    }

    this.setGDPChart(this.datumokGDP, this.eredmenyekGDP);

    this.chartGDP.update();
  }

  filterPenzmennyisegList() {
    this.setPenzmennyisegFormsDisable();

    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startPenzmennyisegDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endPenzmennyisegDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettPenzmennyisegArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettPenzmennyisegArray = selectedEredmeny;
    this.eredmenyekPenzmennyiseg = [];
    this.datumokPenzmennyiseg = [];

    console.log(this.osszesitettPenzmennyisegArray);

    for (let i = this.osszesitettPenzmennyisegArray.length - 1; i >= 0; i--) {
      this.eredmenyekPenzmennyiseg.push(this.osszesitettPenzmennyisegArray[i].eredmeny);
      this.datumokPenzmennyiseg.push(this.osszesitettPenzmennyisegArray[i].date);
      console.log(i);
    }

    this.setPenzmennyisegChart(this.datumokPenzmennyiseg, this.eredmenyekPenzmennyiseg);

    this.chartPenzmennyiseg.update();
  }

  filterFiskalisList() {
    this.setFiskalisFormsDisable();

    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startFiskalisDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endFiskalisDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettFiskalisArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettFiskalisArray = selectedEredmeny;
    this.eredmenyekFiskalis = [];
    this.datumokFiskalis = [];

    console.log(this.osszesitettFiskalisArray);

    for (let i = this.osszesitettFiskalisArray.length - 1; i >= 0; i--) {
      this.eredmenyekFiskalis.push(this.osszesitettFiskalisArray[i].eredmeny);
      this.datumokFiskalis.push(this.osszesitettFiskalisArray[i].date);
      console.log(i);
    }

    this.setFiskalisChart(this.datumokFiskalis, this.eredmenyekFiskalis);

    this.chartFiskalis.update();
  }

  filterKamatlabList() {
    this.setKamatlabFormsDisable();

    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startKamatlabDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endKamatlabDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettKamatlabArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettKamatlabArray = selectedEredmeny;
    this.eredmenyekKamatlab = [];
    this.datumokKamatlab = [];

    console.log(this.osszesitettKamatlabArray);

    for (let i = this.osszesitettKamatlabArray.length - 1; i >= 0; i--) {
      this.eredmenyekKamatlab.push(this.osszesitettKamatlabArray[i].eredmeny);
      this.datumokKamatlab.push(this.osszesitettKamatlabArray[i].date);
      console.log(i);
    }

    this.setKamatlabChart(this.datumokKamatlab, this.eredmenyekKamatlab);

    this.chartKamatlab.update();
  }

  filterAllamList() {
    this.setAllamFormsDisable();

    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startAllamDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endAllamDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettAllamArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettAllamArray = selectedEredmeny;
    this.eredmenyekAllam = [];
    this.datumokAllam = [];

    console.log(this.osszesitettAllamArray);

    for (let i = this.osszesitettAllamArray.length - 1; i >= 0; i--) {
      this.eredmenyekAllam.push(this.osszesitettAllamArray[i].eredmeny);
      this.datumokAllam.push(this.osszesitettAllamArray[i].date);
      console.log(i);
    }

    this.setAllamChart(this.datumokAllam, this.eredmenyekAllam);

    this.chartAllam.update();
  }

  filterLakossagList() {
    this.setLakossagFormsDisable();

    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startLakossagDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endLakossagDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettLakossagArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettLakossagArray = selectedEredmeny;
    this.eredmenyekLakossag = [];
    this.datumokLakossag = [];

    console.log(this.osszesitettLakossagArray);

    for (let i = this.osszesitettLakossagArray.length - 1; i >= 0; i--) {
      this.eredmenyekLakossag.push(this.osszesitettLakossagArray[i].eredmeny);
      this.datumokLakossag.push(this.osszesitettLakossagArray[i].date);
      console.log(i);
    }

    this.setLakossagChart(this.datumokLakossag, this.eredmenyekLakossag);

    this.chartLakossag.update();
  }

  filterInflacioList() {
    this.setInflacioFormsDisable();

    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startInflacioDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endInflacioDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettInflacioArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettInflacioArray = selectedEredmeny;
    this.eredmenyekInflacio = [];
    this.datumokInflacio = [];

    console.log(this.osszesitettInflacioArray);

    for (let i = this.osszesitettInflacioArray.length - 1; i >= 0; i--) {
      this.eredmenyekInflacio.push(this.osszesitettInflacioArray[i].eredmeny);
      this.datumokInflacio.push(this.osszesitettInflacioArray[i].date);
      console.log(i);
    }

    this.setInflacioChart(this.datumokInflacio, this.eredmenyekInflacio);

    this.chartInflacio.update();
  }

  filterMunkanelkuliList() {
    this.setMunkanelkuliFormsDisable();

    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startMunkanelkuliDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endMunkanelkuliDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettMunkanelkuliArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettMunkanelkuliArray = selectedEredmeny;
    this.eredmenyekMunkanelkuli = [];
    this.datumokMunkanelkuli = [];

    console.log(this.osszesitettMunkanelkuliArray);

    for (let i = this.osszesitettMunkanelkuliArray.length - 1; i >= 0; i--) {
      this.eredmenyekMunkanelkuli.push(this.osszesitettMunkanelkuliArray[i].eredmeny);
      this.datumokMunkanelkuli.push(this.osszesitettMunkanelkuliArray[i].date);
      console.log(i);
    }

    this.setMunkanelkuliChart(this.datumokMunkanelkuli, this.eredmenyekMunkanelkuli);

    this.chartMunkanelkuli.update();
  }

  filterBernovekedesList() {
    this.setBernovekedesFormsDisable();

    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startBernovekedesDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endBernovekedesDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettBernovekedesArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettBernovekedesArray = selectedEredmeny;
    this.eredmenyekBernovekedes = [];
    this.datumokBernovekedes = [];

    console.log(this.osszesitettBernovekedesArray);

    for (let i = this.osszesitettBernovekedesArray.length - 1; i >= 0; i--) {
      this.eredmenyekBernovekedes.push(this.osszesitettBernovekedesArray[i].eredmeny);
      this.datumokBernovekedes.push(this.osszesitettBernovekedesArray[i].date);
      console.log(i);
    }

    this.setBernovekedesChart(this.datumokBernovekedes, this.eredmenyekBernovekedes);

    this.chartBernovekedes.update();
  }

  filterFogyasztoList() {
    this.setFogyasztoFormsDisable();

    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startFogyasztoDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endFogyasztoDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettFogyasztoArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettFogyasztoArray = selectedEredmeny;
    this.eredmenyekFogyaszto = [];
    this.datumokFogyaszto = [];

    console.log(this.osszesitettFogyasztoArray);

    for (let i = this.osszesitettFogyasztoArray.length - 1; i >= 0; i--) {
      this.eredmenyekFogyaszto.push(this.osszesitettFogyasztoArray[i].eredmeny);
      this.datumokFogyaszto.push(this.osszesitettFogyasztoArray[i].date);
      console.log(i);
    }

    this.setFogyasztoChart(this.datumokFogyaszto, this.eredmenyekFogyaszto);

    this.chartFogyaszto.update();
  }

  filterNyersolajList() {
    this.setNyersolajFormsDisable();

    const startFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('startNyersolajDateCtrl').value);
    const endFilterDate: Date = new Date(this.gazdElemzesFormGroup.get('endNyersolajDateCtrl').value);

    endFilterDate.setHours(23, 59, 59);

    const selectedEredmeny = this.osszesitettNyersolajArray.filter(m => {
      return new Date(m.date) >= startFilterDate
        && new Date(m.date) <= endFilterDate
    });

    this.osszesitettNyersolajArray = selectedEredmeny;
    this.eredmenyekNyersolaj = [];
    this.datumokNyersolaj = [];

    console.log(this.osszesitettNyersolajArray);

    for (let i = this.osszesitettNyersolajArray.length - 1; i >= 0; i--) {
      this.eredmenyekNyersolaj.push(this.osszesitettNyersolajArray[i].eredmeny);
      this.datumokNyersolaj.push(this.osszesitettNyersolajArray[i].date);
      console.log(i);
    }

    this.setNyersolajChart(this.datumokNyersolaj, this.eredmenyekNyersolaj);

    this.chartNyersolaj.update();
  }


  revertPMIArray() {
    this.setPMIFormsEnable();

    this.osszesitettPMIArray = Object.assign([], this.originalPMIArray);

    this.eredmenyekPMI = [];
    this.datumokPMI = [];

    for (let i = this.osszesitettPMIArray.length - 1; i >= 0; i--) {
      this.eredmenyekPMI.push(this.osszesitettPMIArray[i].eredmeny);
      this.datumokPMI.push(this.osszesitettPMIArray[i].date);
    }

    this.setPMIChart(this.datumokPMI, this.eredmenyekPMI);

    this.chartPMI.update();
  }

  revertUzletiArray() {
    this.setUzletiFormsEnable();

    this.osszesitettUzletiArray = Object.assign([], this.originalUzletiArray);

    this.eredmenyekUzleti = [];
    this.datumokUzleti = [];

    for (let i = this.osszesitettUzletiArray.length - 1; i >= 0; i--) {
      this.eredmenyekUzleti.push(this.osszesitettUzletiArray[i].eredmeny);
      this.datumokUzleti.push(this.osszesitettUzletiArray[i].date);
    }

    this.setUzletiChart(this.datumokUzleti, this.eredmenyekUzleti);

    this.chartUzleti.update();
  }

  revertIpariArray() {
    this.setIpariFormsEnable();

    this.osszesitettIpariArray = Object.assign([], this.originalIpariArray);

    this.eredmenyekIpari = [];
    this.datumokIpari = [];

    for (let i = this.osszesitettIpariArray.length - 1; i >= 0; i--) {
      this.eredmenyekIpari.push(this.osszesitettIpariArray[i].eredmeny);
      this.datumokIpari.push(this.osszesitettIpariArray[i].date);
    }

    this.setIpariChart(this.datumokIpari, this.eredmenyekIpari);

    this.chartIpari.update();
  }

  revertKapacitasArray() {
    this.setKapacitasFormsEnable();

    this.osszesitettKapacitasArray = Object.assign([], this.originalKapacitasArray);

    this.eredmenyekKapacitas = [];
    this.datumokKapacitas = [];

    for (let i = this.osszesitettKapacitasArray.length - 1; i >= 0; i--) {
      this.eredmenyekKapacitas.push(this.osszesitettKapacitasArray[i].eredmeny);
      this.datumokKapacitas.push(this.osszesitettKapacitasArray[i].date);
    }

    this.setKapacitasChart(this.datumokKapacitas, this.eredmenyekKapacitas);

    this.chartKapacitas.update();
  }

  revertGDPArray() {
    this.setGDPFormsEnable();

    this.osszesitettGDPArray = Object.assign([], this.originalGDPArray);

    this.eredmenyekGDP = [];
    this.datumokGDP = [];

    for (let i = this.osszesitettGDPArray.length - 1; i >= 0; i--) {
      this.eredmenyekGDP.push(this.osszesitettGDPArray[i].eredmeny);
      this.datumokGDP.push(this.osszesitettGDPArray[i].date);
    }

    this.setGDPChart(this.datumokGDP, this.eredmenyekGDP);

    this.chartGDP.update();
  }

  revertPenzmennyisegArray() {
    this.setPenzmennyisegFormsEnable();

    this.osszesitettPenzmennyisegArray = Object.assign([], this.originalPenzmennyisegArray);

    this.eredmenyekPenzmennyiseg = [];
    this.datumokPenzmennyiseg = [];

    for (let i = this.osszesitettPenzmennyisegArray.length - 1; i >= 0; i--) {
      this.eredmenyekPenzmennyiseg.push(this.osszesitettPenzmennyisegArray[i].eredmeny);
      this.datumokPenzmennyiseg.push(this.osszesitettPenzmennyisegArray[i].date);
    }

    this.setPenzmennyisegChart(this.datumokPenzmennyiseg, this.eredmenyekPenzmennyiseg);

    this.chartPenzmennyiseg.update();
  }

  revertFiskalisArray() {
    this.setFiskalisFormsEnable();

    this.osszesitettFiskalisArray = Object.assign([], this.originalFiskalisArray);

    this.eredmenyekFiskalis = [];
    this.datumokFiskalis = [];

    for (let i = this.osszesitettFiskalisArray.length - 1; i >= 0; i--) {
      this.eredmenyekFiskalis.push(this.osszesitettFiskalisArray[i].eredmeny);
      this.datumokFiskalis.push(this.osszesitettFiskalisArray[i].date);
    }

    this.setFiskalisChart(this.datumokFiskalis, this.eredmenyekFiskalis);

    this.chartFiskalis.update();
  }

  revertKamatlabArray() {
    this.setKamatlabFormsEnable();

    this.osszesitettKamatlabArray = Object.assign([], this.originalKamatlabArray);

    this.eredmenyekKamatlab = [];
    this.datumokKamatlab = [];

    for (let i = this.osszesitettKamatlabArray.length - 1; i >= 0; i--) {
      this.eredmenyekKamatlab.push(this.osszesitettKamatlabArray[i].eredmeny);
      this.datumokKamatlab.push(this.osszesitettKamatlabArray[i].date);
    }

    this.setKamatlabChart(this.datumokKamatlab, this.eredmenyekKamatlab);

    this.chartKamatlab.update();
  }

  revertAllamArray() {
    this.setAllamFormsEnable();

    this.osszesitettAllamArray = Object.assign([], this.originalAllamArray);

    this.eredmenyekAllam = [];
    this.datumokAllam = [];

    for (let i = this.osszesitettAllamArray.length - 1; i >= 0; i--) {
      this.eredmenyekAllam.push(this.osszesitettAllamArray[i].eredmeny);
      this.datumokAllam.push(this.osszesitettAllamArray[i].date);
    }

    this.setAllamChart(this.datumokAllam, this.eredmenyekAllam);

    this.chartAllam.update();
  }

  revertLakossagArray() {
    this.setLakossagFormsEnable();

    this.osszesitettLakossagArray = Object.assign([], this.originalLakossagArray);

    this.eredmenyekLakossag = [];
    this.datumokLakossag = [];

    for (let i = this.osszesitettLakossagArray.length - 1; i >= 0; i--) {
      this.eredmenyekLakossag.push(this.osszesitettLakossagArray[i].eredmeny);
      this.datumokLakossag.push(this.osszesitettLakossagArray[i].date);
    }

    this.setLakossagChart(this.datumokLakossag, this.eredmenyekLakossag);

    this.chartLakossag.update();
  }

  revertInflacioArray() {
    this.setInflacioFormsEnable();

    this.osszesitettInflacioArray = Object.assign([], this.originalInflacioArray);

    this.eredmenyekInflacio = [];
    this.datumokInflacio = [];

    for (let i = this.osszesitettInflacioArray.length - 1; i >= 0; i--) {
      this.eredmenyekInflacio.push(this.osszesitettInflacioArray[i].eredmeny);
      this.datumokInflacio.push(this.osszesitettInflacioArray[i].date);
    }

    this.setInflacioChart(this.datumokInflacio, this.eredmenyekInflacio);

    this.chartInflacio.update();
  }

  revertMunkanelkuliArray() {
    this.setMunkanelkuliFormsEnable();

    this.osszesitettMunkanelkuliArray = Object.assign([], this.originalMunkanelkuliArray);

    this.eredmenyekMunkanelkuli = [];
    this.datumokMunkanelkuli = [];

    for (let i = this.osszesitettMunkanelkuliArray.length - 1; i >= 0; i--) {
      this.eredmenyekMunkanelkuli.push(this.osszesitettMunkanelkuliArray[i].eredmeny);
      this.datumokMunkanelkuli.push(this.osszesitettMunkanelkuliArray[i].date);
    }

    this.setMunkanelkuliChart(this.datumokMunkanelkuli, this.eredmenyekMunkanelkuli);

    this.chartMunkanelkuli.update();
  }

  revertBernovekedesArray() {
    this.setBernovekedesFormsEnable();

    this.osszesitettBernovekedesArray = Object.assign([], this.originalBernovekedesArray);

    this.eredmenyekBernovekedes = [];
    this.datumokBernovekedes = [];

    for (let i = this.osszesitettBernovekedesArray.length - 1; i >= 0; i--) {
      this.eredmenyekBernovekedes.push(this.osszesitettBernovekedesArray[i].eredmeny);
      this.datumokBernovekedes.push(this.osszesitettBernovekedesArray[i].date);
    }

    this.setBernovekedesChart(this.datumokBernovekedes, this.eredmenyekBernovekedes);

    this.chartBernovekedes.update();
  }

  revertFogyasztoArray() {
    this.setFogyasztoFormsEnable();

    this.osszesitettFogyasztoArray = Object.assign([], this.originalFogyasztoArray);

    this.eredmenyekFogyaszto = [];
    this.datumokFogyaszto = [];

    for (let i = this.osszesitettFogyasztoArray.length - 1; i >= 0; i--) {
      this.eredmenyekFogyaszto.push(this.osszesitettFogyasztoArray[i].eredmeny);
      this.datumokFogyaszto.push(this.osszesitettFogyasztoArray[i].date);
    }

    this.setFogyasztoChart(this.datumokFogyaszto, this.eredmenyekFogyaszto);

    this.chartFogyaszto.update();
  }

  revertNyersolajArray() {
    this.setNyersolajFormsEnable();

    this.osszesitettNyersolajArray = Object.assign([], this.originalNyersolajArray);

    this.eredmenyekNyersolaj = [];
    this.datumokNyersolaj = [];

    for (let i = this.osszesitettNyersolajArray.length - 1; i >= 0; i--) {
      this.eredmenyekNyersolaj.push(this.osszesitettNyersolajArray[i].eredmeny);
      this.datumokNyersolaj.push(this.osszesitettNyersolajArray[i].date);
    }

    this.setNyersolajChart(this.datumokNyersolaj, this.eredmenyekNyersolaj);

    this.chartNyersolaj.update();
  }

  // ágazati
  revertBasicMaterialArray() {
    this.setBasicFormsEnable();

    this.osszesitettBasicMaterialArray = Object.assign([], this.originalBasicArray);   // Állitsuk vissz aaz oroginalt az aktuálisba

    this.eredmenyekBasic = [];
    this.datumokBasic = [];

    for (let i = this.osszesitettBasicMaterialArray.length - 1; i >= 0; i--) {
      this.eredmenyekBasic.push(this.osszesitettBasicMaterialArray[i].teljesitmeny);
      this.datumokBasic.push(this.osszesitettBasicMaterialArray[i].date);
    }

    this.setBasicMaterialChart(this.datumokBasic, this.eredmenyekBasic);

    this.chartBasicMaterial.update();

  }

  revertEnergyArray() {
    this.setEnergyFormsEnable();

    this.osszesitettEnergyArray = Object.assign([], this.originalEnergyArray);

    this.eredmenyekEnergy = [];
    this.datumokEnergy = [];

    for (let i = this.osszesitettEnergyArray.length - 1; i >= 0; i--) {
      this.eredmenyekEnergy.push(this.osszesitettEnergyArray[i].teljesitmeny);
      this.datumokEnergy.push(this.osszesitettEnergyArray[i].date);
    }

    this.setEnergyChart(this.datumokEnergy, this.eredmenyekEnergy);

    this.chartEnergy.update();
  }
  // BEFEJEZNI ... + törléskor duplikál + megoldani a filternél ne törölhessen
  revertIndustrialArray() {
    this.setIndustrialFormsEnable();

    this.osszesitettIndustrialArray = Object.assign([], this.originalIndustrialArray);

    this.eredmenyekIndustrial = [];
    this.datumokIndustrial = [];

    for (let i = this.osszesitettIndustrialArray.length - 1; i >= 0; i--) {
      this.eredmenyekIndustrial.push(this.osszesitettIndustrialArray[i].teljesitmeny);
      this.datumokIndustrial.push(this.osszesitettIndustrialArray[i].date);
    }

    this.setIndustrialChart(this.datumokIndustrial, this.eredmenyekIndustrial);

    this.chartIndustrial.update();
  }

  revertTechnologyArray() {

    this.setTechnologyFormsEnable();

    this.osszesitettTechnologyArray = Object.assign([], this.originalTechnologyArray);

    this.eredmenyekTechnology = [];
    this.datumokTechnology = [];

    for (let i = this.osszesitettTechnologyArray.length - 1; i >= 0; i--) {
      this.eredmenyekTechnology.push(this.osszesitettTechnologyArray[i].teljesitmeny);
      this.datumokTechnology.push(this.osszesitettTechnologyArray[i].date);
    }

    this.setTechnologyChart(this.datumokTechnology, this.eredmenyekTechnology);

    this.chartTechnology.update();
  }

  revertConsumerArray() {
    this.setConsumerFormsEnable();

    this.osszesitettConsumerArray = Object.assign([], this.originalConsumerArray);

    this.eredmenyekConsumer = [];
    this.datumokConsumer = [];

    for (let i = this.osszesitettConsumerArray.length - 1; i >= 0; i--) {
      this.eredmenyekConsumer.push(this.osszesitettConsumerArray[i].teljesitmeny);
      this.datumokConsumer.push(this.osszesitettConsumerArray[i].date);
    }

    this.setConsumerChart(this.datumokConsumer, this.eredmenyekConsumer);

    this.chartConsumer.update();
  }

  revertCommunicationArray() {

    this.setCommunicationFormsEnable();

    this.osszesitettCommunicationArray = Object.assign([], this.originalCommunicationArray);

    this.eredmenyekCommmunication = [];
    this.datumokCommmunication = [];

    for (let i = this.osszesitettCommunicationArray.length - 1; i >= 0; i--) {
      this.eredmenyekCommmunication.push(this.osszesitettCommunicationArray[i].teljesitmeny);
      this.datumokCommmunication.push(this.osszesitettCommunicationArray[i].date);
    }

    this.setCommunicationChart(this.datumokCommmunication, this.eredmenyekCommmunication);

    this.chartCommunication.update();
  }

  revertRealArray() {
    this.setRealFormsEnable();

    this.osszesitettRealArray = Object.assign([], this.originalRealArray);

    this.eredmenyekReal = [];
    this.datumokReal = [];

    for (let i = this.osszesitettRealArray.length - 1; i >= 0; i--) {
      this.eredmenyekReal.push(this.osszesitettRealArray[i].teljesitmeny);
      this.datumokReal.push(this.osszesitettRealArray[i].date);
    }

    this.setRealChart(this.datumokReal, this.eredmenyekReal);

    this.chartReal.update();
  }

  revertHealthArray() {
    this.setHealthFormsEnable();

    this.osszesitettHealthArray = Object.assign([], this.originalHealthArray);

    this.eredmenyekHealth = [];
    this.datumokHealth = [];

    for (let i = this.osszesitettHealthArray.length - 1; i >= 0; i--) {
      this.eredmenyekHealth.push(this.osszesitettHealthArray[i].teljesitmeny);
      this.datumokHealth.push(this.osszesitettHealthArray[i].date);
    }

    this.setHealthChart(this.datumokHealth, this.eredmenyekHealth);

    this.chartHealth.update();
  }

  revertUtilitiesArray() {
    this.setUtilitiesFormsEnable();

    this.osszesitettUtilitiesArray = Object.assign([], this.originalUtilitiesArray);

    this.eredmenyekUtilities = [];
    this.datumokUtilities = [];

    for (let i = this.osszesitettUtilitiesArray.length - 1; i >= 0; i--) {
      this.eredmenyekUtilities.push(this.osszesitettUtilitiesArray[i].teljesitmeny);
      this.datumokUtilities.push(this.osszesitettUtilitiesArray[i].date);
    }

    this.setUtilitiesChart(this.datumokUtilities, this.eredmenyekUtilities);

    this.chartUtilities.update();
  }

  revertFinancialArray() {
    this.setFinancialFormsEnable();

    this.osszesitettFinancialArray = Object.assign([], this.originalFinancialArray);

    this.eredmenyekFinancial = [];
    this.datumokFinancial = [];

    for (let i = this.osszesitettFinancialArray.length - 1; i >= 0; i--) {
      this.eredmenyekFinancial.push(this.osszesitettFinancialArray[i].teljesitmeny);
      this.datumokFinancial.push(this.osszesitettFinancialArray[i].date);
    }

    this.setFinancialChart(this.datumokFinancial, this.eredmenyekFinancial);

    this.chartFinancial.update();
  }

  revertDefensiveArray() {
    this.setDefensiveFormsEnable();

    this.osszesitettDefensiveArray = Object.assign([], this.originalDefensiveArray);

    this.eredmenyekDefensive = [];
    this.datumokDefensive = [];

    for (let i = this.osszesitettDefensiveArray.length - 1; i >= 0; i--) {
      this.eredmenyekDefensive.push(this.osszesitettDefensiveArray[i].teljesitmeny);
      this.datumokDefensive.push(this.osszesitettDefensiveArray[i].date);
    }

    this.setDefensiveChart(this.datumokDefensive, this.eredmenyekDefensive);

    this.chartDefensive.update();
  }


  // delete list items
  deletePmiListItem(removedItem) {

    this.openPMIConfirmDeleteListItemDialog(removedItem);

  }

  deleteUzletiListItem(removedItem) {
    this.openUzletiConfirmDeleteListItemDialog(removedItem);
  }

  deleteIpariListItem(removedItem) {
    this.openIpariConfirmDeleteListItemDialog(removedItem);
  }

  deleteKapacitasListItem(removedItem) {
    this.openKapacitasConfirmDeleteListItemDialog(removedItem);
  }

  deleteGDPListItem(removedItem) {
    this.openGDPConfirmDeleteListItemDialog(removedItem);
  }

  deletePenzmennyisegListItem(removedItem) {
    this.openPenzmennyisegConfirmDeleteListItemDialog(removedItem);
  }

  deleteFiskalisListItem(removedItem) {
    this.openFiskalisConfirmDeleteListItemDialog(removedItem);
  }

  deleteKamatlabListItem(removedItem) {
    this.openKamatlabConfirmDeleteListItemDialog(removedItem);
  }

  deleteAllamListItem(removedItem) {
    this.openAllamConfirmDeleteListItemDialog(removedItem);
  }

  deleteLakossagListItem(removedItem) {
    this.openLakossagConfirmDeleteListItemDialog(removedItem);
  }

  deleteInflacioListItem(removedItem) {
    this.openInflacioConfirmDeleteListItemDialog(removedItem);
  }

  deleteMunkanelkuliListItem(removedItem) {
    this.openMunkanelkuliConfirmDeleteListItemDialog(removedItem);
  }

  deleteBernovekedesListItem(removedItem) {
    this.openBernovekedesConfirmDeleteListItemDialog(removedItem);
  }

  deleteFogyasztoListItem(removedItem) {
    this.openFogyasztoConfirmDeleteListItemDialog(removedItem);
  }

  deleteNyersolajListItem(removedItem) {
    this.openNyersolajConfirmDeleteListItemDialog(removedItem);
  }

  openPMIConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettPMIArray.splice(this.osszesitettPMIArray.indexOf(removedItem), 1);

        this.datumokPMI = [];
        this.eredmenyekPMI = [];

        for (let i = this.osszesitettPMIArray.length - 1; i >= 0; i--) {
          this.eredmenyekPMI.push(this.osszesitettPMIArray[i].eredmeny);
          this.datumokPMI.push(this.osszesitettPMIArray[i].date);
        }

        this.setPMIChart(this.datumokPMI, this.eredmenyekPMI);

        this.chartPMI.update();

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalPMIArray.splice(this.originalPMIArray.indexOf(removedItem), 1);

      }
    });
  }

  openUzletiConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettUzletiArray.splice(this.osszesitettUzletiArray.indexOf(removedItem), 1);

        this.datumokUzleti = [];
        this.eredmenyekUzleti = [];

        for (let i = this.osszesitettUzletiArray.length - 1; i >= 0; i--) {
          this.eredmenyekUzleti.push(this.osszesitettUzletiArray[i].eredmeny);
          this.datumokUzleti.push(this.osszesitettUzletiArray[i].date);
        }

        this.setUzletiChart(this.datumokUzleti, this.eredmenyekUzleti);

        this.chartUzleti.update();

        this.originalUzletiArray.splice(this.originalUzletiArray.indexOf(removedItem), 1);

      }
    });
  }

  openIpariConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettIpariArray.splice(this.osszesitettIpariArray.indexOf(removedItem), 1);

        this.datumokIpari = [];
        this.eredmenyekIpari = [];

        for (let i = this.osszesitettIpariArray.length - 1; i >= 0; i--) {
          this.eredmenyekIpari.push(this.osszesitettIpariArray[i].eredmeny);
          this.datumokIpari.push(this.osszesitettIpariArray[i].date);
        }

        this.setIpariChart(this.datumokIpari, this.eredmenyekIpari);

        this.chartIpari.update();

        this.originalIpariArray.splice(this.originalIpariArray.indexOf(removedItem), 1);

      }
    });
  }

  openKapacitasConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettKapacitasArray.splice(this.osszesitettKapacitasArray.indexOf(removedItem), 1);

        this.datumokKapacitas = [];
        this.eredmenyekKapacitas = [];

        for (let i = this.osszesitettKapacitasArray.length - 1; i >= 0; i--) {
          this.eredmenyekKapacitas.push(this.osszesitettKapacitasArray[i].eredmeny);
          this.datumokKapacitas.push(this.osszesitettKapacitasArray[i].date);
        }

        this.setKapacitasChart(this.datumokKapacitas, this.eredmenyekKapacitas);

        this.chartKapacitas.update();

        this.originalKapacitasArray.splice(this.originalKapacitasArray.indexOf(removedItem), 1);

      }
    });
  }

  openGDPConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettGDPArray.splice(this.osszesitettGDPArray.indexOf(removedItem), 1);

        this.datumokGDP = [];
        this.eredmenyekGDP = [];

        for (let i = this.osszesitettGDPArray.length - 1; i >= 0; i--) {
          this.eredmenyekGDP.push(this.osszesitettGDPArray[i].eredmeny);
          this.datumokGDP.push(this.osszesitettGDPArray[i].date);
        }

        this.setGDPChart(this.datumokGDP, this.eredmenyekGDP);

        this.chartGDP.update();

        this.originalGDPArray.splice(this.originalGDPArray.indexOf(removedItem), 1);

      }
    });
  }

  openPenzmennyisegConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettPenzmennyisegArray.splice(this.osszesitettPenzmennyisegArray.indexOf(removedItem), 1);

        this.datumokPenzmennyiseg = [];
        this.eredmenyekPenzmennyiseg = [];

        for (let i = this.osszesitettPenzmennyisegArray.length - 1; i >= 0; i--) {
          this.eredmenyekPenzmennyiseg.push(this.osszesitettPenzmennyisegArray[i].eredmeny);
          this.datumokPenzmennyiseg.push(this.osszesitettPenzmennyisegArray[i].date);
        }

        this.setPenzmennyisegChart(this.datumokPenzmennyiseg, this.eredmenyekPenzmennyiseg);

        this.chartPenzmennyiseg.update();

        this.originalPenzmennyisegArray.splice(this.originalPenzmennyisegArray.indexOf(removedItem), 1);

      }
    });
  }

  openFiskalisConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettFiskalisArray.splice(this.osszesitettFiskalisArray.indexOf(removedItem), 1);

        this.datumokFiskalis = [];
        this.eredmenyekFiskalis = [];

        for (let i = this.osszesitettFiskalisArray.length - 1; i >= 0; i--) {
          this.eredmenyekFiskalis.push(this.osszesitettFiskalisArray[i].eredmeny);
          this.datumokFiskalis.push(this.osszesitettFiskalisArray[i].date);
        }

        this.setFiskalisChart(this.datumokFiskalis, this.eredmenyekFiskalis);

        this.chartFiskalis.update();

        this.originalFiskalisArray.splice(this.originalFiskalisArray.indexOf(removedItem), 1);

      }
    });
  }

  openKamatlabConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettKamatlabArray.splice(this.osszesitettKamatlabArray.indexOf(removedItem), 1);

        this.datumokKamatlab = [];
        this.eredmenyekKamatlab = [];

        for (let i = this.osszesitettKamatlabArray.length - 1; i >= 0; i--) {
          this.eredmenyekKamatlab.push(this.osszesitettKamatlabArray[i].eredmeny);
          this.datumokKamatlab.push(this.osszesitettKamatlabArray[i].date);
        }

        this.setKamatlabChart(this.datumokKamatlab, this.eredmenyekKamatlab);

        this.chartKamatlab.update();

        this.originalKamatlabArray.splice(this.originalKamatlabArray.indexOf(removedItem), 1);

      }
    });
  }

  openAllamConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettAllamArray.splice(this.osszesitettAllamArray.indexOf(removedItem), 1);

        this.datumokAllam = [];
        this.eredmenyekAllam = [];

        for (let i = this.osszesitettAllamArray.length - 1; i >= 0; i--) {
          this.eredmenyekAllam.push(this.osszesitettAllamArray[i].eredmeny);
          this.datumokAllam.push(this.osszesitettAllamArray[i].date);
        }

        this.setAllamChart(this.datumokAllam, this.eredmenyekAllam);

        this.chartAllam.update();

        this.originalAllamArray.splice(this.originalAllamArray.indexOf(removedItem), 1);

      }
    });
  }

  openLakossagConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettLakossagArray.splice(this.osszesitettLakossagArray.indexOf(removedItem), 1);

        this.datumokLakossag = [];
        this.eredmenyekLakossag = [];

        for (let i = this.osszesitettLakossagArray.length - 1; i >= 0; i--) {
          this.eredmenyekLakossag.push(this.osszesitettLakossagArray[i].eredmeny);
          this.datumokLakossag.push(this.osszesitettLakossagArray[i].date);
        }

        this.setLakossagChart(this.datumokLakossag, this.eredmenyekLakossag);

        this.chartLakossag.update();

        this.originalLakossagArray.splice(this.originalLakossagArray.indexOf(removedItem), 1);

      }
    });
  }

  openInflacioConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettInflacioArray.splice(this.osszesitettInflacioArray.indexOf(removedItem), 1);

        this.datumokInflacio = [];
        this.eredmenyekInflacio = [];

        for (let i = this.osszesitettInflacioArray.length - 1; i >= 0; i--) {
          this.eredmenyekInflacio.push(this.osszesitettInflacioArray[i].eredmeny);
          this.datumokInflacio.push(this.osszesitettInflacioArray[i].date);
        }

        this.setInflacioChart(this.datumokInflacio, this.eredmenyekInflacio);

        this.chartInflacio.update();

        this.originalInflacioArray.splice(this.originalInflacioArray.indexOf(removedItem), 1);

      }
    });
  }

  openMunkanelkuliConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettMunkanelkuliArray.splice(this.osszesitettMunkanelkuliArray.indexOf(removedItem), 1);

        this.datumokMunkanelkuli = [];
        this.eredmenyekMunkanelkuli = [];

        for (let i = this.osszesitettMunkanelkuliArray.length - 1; i >= 0; i--) {
          this.eredmenyekMunkanelkuli.push(this.osszesitettMunkanelkuliArray[i].eredmeny);
          this.datumokMunkanelkuli.push(this.osszesitettMunkanelkuliArray[i].date);
        }

        this.setMunkanelkuliChart(this.datumokMunkanelkuli, this.eredmenyekMunkanelkuli);

        this.chartMunkanelkuli.update();

        this.originalMunkanelkuliArray.splice(this.originalMunkanelkuliArray.indexOf(removedItem), 1);

      }
    });
  }

  openBernovekedesConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettBernovekedesArray.splice(this.osszesitettBernovekedesArray.indexOf(removedItem), 1);

        this.datumokBernovekedes = [];
        this.eredmenyekBernovekedes = [];

        for (let i = this.osszesitettBernovekedesArray.length - 1; i >= 0; i--) {
          this.eredmenyekBernovekedes.push(this.osszesitettBernovekedesArray[i].eredmeny);
          this.datumokBernovekedes.push(this.osszesitettBernovekedesArray[i].date);
        }

        this.setBernovekedesChart(this.datumokBernovekedes, this.eredmenyekBernovekedes);

        this.chartBernovekedes.update();

        this.originalBernovekedesArray.splice(this.originalBernovekedesArray.indexOf(removedItem), 1);

      }
    });
  }

  openFogyasztoConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettFogyasztoArray.splice(this.osszesitettFogyasztoArray.indexOf(removedItem), 1);

        this.datumokFogyaszto = [];
        this.eredmenyekFogyaszto = [];

        for (let i = this.osszesitettFogyasztoArray.length - 1; i >= 0; i--) {
          this.eredmenyekFogyaszto.push(this.osszesitettFogyasztoArray[i].eredmeny);
          this.datumokFogyaszto.push(this.osszesitettFogyasztoArray[i].date);
        }

        this.setFogyasztoChart(this.datumokFogyaszto, this.eredmenyekFogyaszto);

        this.chartFogyaszto.update();

        this.originalFogyasztoArray.splice(this.originalFogyasztoArray.indexOf(removedItem), 1);

      }
    });
  }

  openNyersolajConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettNyersolajArray.splice(this.osszesitettNyersolajArray.indexOf(removedItem), 1);

        this.datumokNyersolaj = [];
        this.eredmenyekNyersolaj = [];

        for (let i = this.osszesitettNyersolajArray.length - 1; i >= 0; i--) {
          this.eredmenyekNyersolaj.push(this.osszesitettNyersolajArray[i].eredmeny);
          this.datumokNyersolaj.push(this.osszesitettNyersolajArray[i].date);
        }

        this.setNyersolajChart(this.datumokNyersolaj, this.eredmenyekNyersolaj);

        this.chartNyersolaj.update();

        this.originalNyersolajArray.splice(this.originalNyersolajArray.indexOf(removedItem), 1);
      }
    });
  }

  // TODO: listakat bekötni
  openBasicMaterialConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettBasicMaterialArray.splice(this.osszesitettBasicMaterialArray.indexOf(removedItem), 1); // 1 2 3
        // osszesitetT: 1 3

        this.datumokBasic = [];
        this.eredmenyekBasic = [];

        for (let i = this.osszesitettBasicMaterialArray.length - 1; i >= 0; i--) {
          this.eredmenyekBasic.push(this.osszesitettBasicMaterialArray[i].teljesitmeny);
          this.datumokBasic.push(this.osszesitettBasicMaterialArray[i].date);
        }

        this.setBasicMaterialChart(this.datumokBasic, this.eredmenyekBasic);

        this.chartBasicMaterial.update();

        // originalbol is törölni kell
        this.originalBasicArray.splice(this.originalBasicArray.indexOf(removedItem), 1);
        // this.originalBasicArray = this.osszesitettBasicMaterialArray

      }
    });
  }

  openEnergyConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettEnergyArray.splice(this.osszesitettEnergyArray.indexOf(removedItem), 1);

        this.datumokEnergy = [];
        this.eredmenyekEnergy = [];

        for (let i = this.osszesitettEnergyArray.length - 1; i >= 0; i--) {
          this.eredmenyekEnergy.push(this.osszesitettEnergyArray[i].teljesitmeny);
          this.datumokEnergy.push(this.osszesitettEnergyArray[i].date);
        }

        this.setEnergyChart(this.datumokEnergy, this.eredmenyekEnergy);

        this.chartEnergy.update();

        this.originalEnergyArray.splice(this.originalEnergyArray.indexOf(removedItem), 1);


      }
    });
  }

  openIndustrialConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettIndustrialArray.splice(this.osszesitettIndustrialArray.indexOf(removedItem), 1);

        this.datumokIndustrial = [];
        this.eredmenyekIndustrial = [];

        for (let i = this.osszesitettIndustrialArray.length - 1; i >= 0; i--) {
          this.eredmenyekIndustrial.push(this.osszesitettIndustrialArray[i].teljesitmeny);
          this.datumokIndustrial.push(this.osszesitettIndustrialArray[i].date);
        }

        this.setIndustrialChart(this.datumokIndustrial, this.eredmenyekIndustrial);

        this.chartIndustrial.update();

        this.originalIndustrialArray.splice(this.originalIndustrialArray.indexOf(removedItem), 1);

      }
    });
  }

  openTechnologyConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettTechnologyArray.splice(this.osszesitettTechnologyArray.indexOf(removedItem), 1);

        this.datumokTechnology = [];
        this.eredmenyekTechnology = [];

        for (let i = this.osszesitettTechnologyArray.length - 1; i >= 0; i--) {
          this.eredmenyekTechnology.push(this.osszesitettTechnologyArray[i].teljesitmeny);
          this.datumokTechnology.push(this.osszesitettTechnologyArray[i].date);
        }

        this.setTechnologyChart(this.datumokTechnology, this.eredmenyekTechnology);

        this.chartTechnology.update();

        this.originalTechnologyArray.splice(this.originalTechnologyArray.indexOf(removedItem), 1);

      }
    });
  }

  openConsumerConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettConsumerArray.splice(this.osszesitettConsumerArray.indexOf(removedItem), 1);

        this.datumokConsumer = [];
        this.eredmenyekConsumer = [];

        for (let i = this.osszesitettConsumerArray.length - 1; i >= 0; i--) {
          this.eredmenyekConsumer.push(this.osszesitettConsumerArray[i].teljesitmeny);
          this.datumokConsumer.push(this.osszesitettConsumerArray[i].date);
        }

        this.setConsumerChart(this.datumokConsumer, this.eredmenyekConsumer);

        this.chartConsumer.update();

        this.originalConsumerArray.splice(this.originalConsumerArray.indexOf(removedItem), 1);

      }
    });
  }

  openCommunicationConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettCommunicationArray.splice(this.osszesitettCommunicationArray.indexOf(removedItem), 1);

        this.datumokCommmunication = [];
        this.eredmenyekCommmunication = [];

        for (let i = this.osszesitettCommunicationArray.length - 1; i >= 0; i--) {
          this.eredmenyekCommmunication.push(this.osszesitettCommunicationArray[i].teljesitmeny);
          this.datumokCommmunication.push(this.osszesitettCommunicationArray[i].date);
        }

        this.setCommunicationChart(this.datumokCommmunication, this.eredmenyekCommmunication);

        this.chartCommunication.update();

        this.originalCommunicationArray.splice(this.originalCommunicationArray.indexOf(removedItem), 1);


      }
    });
  }

  openRealConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettRealArray.splice(this.osszesitettRealArray.indexOf(removedItem), 1);

        this.datumokReal = [];
        this.eredmenyekReal = [];

        for (let i = this.osszesitettRealArray.length - 1; i >= 0; i--) {
          this.eredmenyekReal.push(this.osszesitettRealArray[i].teljesitmeny);
          this.datumokReal.push(this.osszesitettRealArray[i].date);
        }

        this.setRealChart(this.datumokReal, this.eredmenyekReal);

        this.chartReal.update();

        this.originalRealArray.splice(this.originalRealArray.indexOf(removedItem), 1);


      }
    });
  }

  openHealthConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettHealthArray.splice(this.osszesitettHealthArray.indexOf(removedItem), 1);

        this.datumokHealth = [];
        this.eredmenyekHealth = [];

        for (let i = this.osszesitettHealthArray.length - 1; i >= 0; i--) {
          this.eredmenyekHealth.push(this.osszesitettHealthArray[i].teljesitmeny);
          this.datumokHealth.push(this.osszesitettHealthArray[i].date);
        }

        this.setHealthChart(this.datumokHealth, this.eredmenyekHealth);

        this.chartHealth.update();

        this.originalHealthArray.splice(this.originalHealthArray.indexOf(removedItem), 1);

      }
    });
  }

  openUtilitiesConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettUtilitiesArray.splice(this.osszesitettUtilitiesArray.indexOf(removedItem), 1);

        this.datumokUtilities = [];
        this.eredmenyekUtilities = [];

        for (let i = this.osszesitettUtilitiesArray.length - 1; i >= 0; i--) {
          this.eredmenyekUtilities.push(this.osszesitettUtilitiesArray[i].teljesitmeny);
          this.datumokUtilities.push(this.osszesitettUtilitiesArray[i].date);
        }

        this.setUtilitiesChart(this.datumokUtilities, this.eredmenyekUtilities);

        this.chartUtilities.update();

        this.originalUtilitiesArray.splice(this.originalUtilitiesArray.indexOf(removedItem), 1);

      }
    });
  }

  openFinancialConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettFinancialArray.splice(this.osszesitettFinancialArray.indexOf(removedItem), 1);

        this.datumokFinancial = [];
        this.eredmenyekFinancial = [];

        for (let i = this.osszesitettFinancialArray.length - 1; i >= 0; i--) {
          this.eredmenyekFinancial.push(this.osszesitettFinancialArray[i].teljesitmeny);
          this.datumokFinancial.push(this.osszesitettFinancialArray[i].date);
        }

        this.setFinancialChart(this.datumokFinancial, this.eredmenyekFinancial);

        this.chartFinancial.update();

        this.originalFinancialArray.splice(this.originalFinancialArray.indexOf(removedItem), 1);

      }
    });
  }

  openDefensiveConfirmDeleteListItemDialog(removedItem) {
    const dialogRef = this.dialog.open(ConfirmDeleteCalendarDialogComponent, {
      width: '40%',
      //data: { eredmeny: this.gazdIngadozas, megnevezes: "Túl nagy gazdasági ingadozás" }
    });
    dialogRef.afterClosed().subscribe(result => {
      // ha ok: tehát törölni akarom
      if (result) {
        this.osszesitettDefensiveArray.splice(this.osszesitettDefensiveArray.indexOf(removedItem), 1);

        this.datumokDefensive = [];
        this.eredmenyekDefensive = [];

        for (let i = this.osszesitettDefensiveArray.length - 1; i >= 0; i--) {
          this.eredmenyekDefensive.push(this.osszesitettDefensiveArray[i].teljesitmeny);
          this.datumokDefensive.push(this.osszesitettDefensiveArray[i].date);
        }

        this.setDefensiveChart(this.datumokDefensive, this.eredmenyekDefensive);

        this.chartDefensive.update();

        this.originalDefensiveArray.splice(this.originalDefensiveArray.indexOf(removedItem), 1);

      }
    });
  }




  deleteBasicMaterialItem(removedItem) {
    this.openBasicMaterialConfirmDeleteListItemDialog(removedItem);
  }

  deleteEnergyItem(removedItem) {
    this.openEnergyConfirmDeleteListItemDialog(removedItem);
  }

  deleteIndustrialItem(removedItem) {
    this.openIndustrialConfirmDeleteListItemDialog(removedItem);
  }

  deleteTechnologyItem(removedItem) {
    this.openTechnologyConfirmDeleteListItemDialog(removedItem);
  }

  deleteConsumerItem(removedItem) {
    this.openConsumerConfirmDeleteListItemDialog(removedItem);
  }

  deleteCommunicationItem(removedItem) {
    this.openCommunicationConfirmDeleteListItemDialog(removedItem);
  }

  deleteRealItem(removedItem) {
    this.openRealConfirmDeleteListItemDialog(removedItem);
  }

  deleteHealthItem(removedItem) {
    this.openHealthConfirmDeleteListItemDialog(removedItem);
  }

  deleteUtilitiesItem(removedItem) {
    this.openUtilitiesConfirmDeleteListItemDialog(removedItem);
  }

  deleteFinancialItem(removedItem) {
    this.openFinancialConfirmDeleteListItemDialog(removedItem);
  }

  deleteDefensiveItem(removedItem) {
    this.openDefensiveConfirmDeleteListItemDialog(removedItem);
  }
}

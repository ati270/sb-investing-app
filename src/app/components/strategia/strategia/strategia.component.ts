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

  @ViewChild('addIndustrialIndustrial') teljesitmenyIndustrialinput: ElementRef;
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

  teljesitmenyBasicArray: number[] = [];
  PEBasicArray: number[] = [];
  PBBasicArray: number[] = [];
  dateBasicArray: string[] = [];

  teljesitmenyEnergyArray: number[] = [];
  PEEnergyArray: number[] = [];
  PBEnergyArray: number[] = [];
  dateEnergyArray: string[] = [];

  teljesitmenyIndustrialArray: number[] = [];
  PEIndustrialArray: number[] = [];
  PBIndustrialArray: number[] = [];
  dateIndustrialArray: string[] = [];

  teljesitmenyTechnologyArray: number[] = [];
  PETechnologyArray: number[] = [];
  PBTechnologyArray: number[] = [];
  dateTechnologyArray: string[] = [];

  teljesitmenyConsumerArray: number[] = [];
  PEConsumerArray: number[] = [];
  PBConsumerArray: number[] = [];
  dateConsumerArray: string[] = [];

  teljesitmenyCommunicationArray: number[] = [];
  PECommunicationArray: number[] = [];
  PBCommunicationArray: number[] = [];
  dateCommunicationArray: string[] = [];

  // Real

  teljesitmenyRealArray: number[] = [];
  PERealArray: number[] = [];
  PBRealArray: number[] = [];
  dateRealArray: string[] = [];

  // Health

  teljesitmenyHealthArray: number[] = [];
  PEHealthArray: number[] = [];
  PBHealthArray: number[] = [];
  dateHealthArray: string[] = [];

  // Utilities

  teljesitmenyUtilitiesArray: number[] = [];
  PEUtilitiesArray: number[] = [];
  PBUtilitiesArray: number[] = [];
  dateUtilitiesArray: string[] = [];

  // Financial

  teljesitmenyFinancialArray: number[] = [];
  PEFinancialArray: number[] = [];
  PBFinancialArray: number[] = [];
  dateFinancialArray: string[] = [];

  // Defensive

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
      basicMaterialTeljesitmenyCtrl: new FormControl('', Validators.required),
      basicMaterialPECtrl: new FormControl(''),
      basicMaterialPBCtrl: new FormControl(''),
      basicDateCtrl: new FormControl('', Validators.required),

      energyTeljesitmenyCtrl: new FormControl('', Validators.required),
      energyPECtrl: new FormControl(''),
      energyPBCtrl: new FormControl(''),
      energyDateCtrl: new FormControl('', Validators.required),

      industrialTeljesitmenyCtrl: new FormControl('', Validators.required),
      industrialPECtrl: new FormControl(''),
      industrialPBCtrl: new FormControl(''),
      industrialDateCtrl: new FormControl('', Validators.required),

      technologyTeljesitmenyCtrl: new FormControl('', Validators.required),
      technologyPECtrl: new FormControl(''),
      technologyPBCtrl: new FormControl(''),
      technologyDateCtrl: new FormControl('', Validators.required),

      consumerTeljesitmenyCtrl: new FormControl('', Validators.required),
      consumerPECtrl: new FormControl(''),
      consumerPBCtrl: new FormControl(''),
      consumerDateCtrl: new FormControl('', Validators.required),

      communicationTeljesitmenyCtrl: new FormControl('', Validators.required),
      communicationPECtrl: new FormControl(''),
      communicationPBCtrl: new FormControl(''),
      communicationDateCtrl: new FormControl('', Validators.required),

      realTeljesitmenyCtrl: new FormControl('', Validators.required),
      realPECtrl: new FormControl(''),
      realPBCtrl: new FormControl(''),
      realDateCtrl: new FormControl('', Validators.required),

      healthTeljesitmenyCtrl: new FormControl('', Validators.required),
      healthPECtrl: new FormControl(''),
      healthPBCtrl: new FormControl(''),
      healthDateCtrl: new FormControl('', Validators.required),

      utilitiesTeljesitmenyCtrl: new FormControl('', Validators.required),
      utilitiesPECtrl: new FormControl(''),
      utilitiesPBCtrl: new FormControl(''),
      utilitiesDateCtrl: new FormControl('', Validators.required),

      financialTeljesitmenyCtrl: new FormControl('', Validators.required),
      financialPECtrl: new FormControl(''),
      financialPBCtrl: new FormControl(''),
      financialDateCtrl: new FormControl('', Validators.required),

      defensiveTeljesitmenyCtrl: new FormControl('', Validators.required),
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

    this.osszesitettBasicMaterialArray.unshift(data);
    this.teljesitmenyBasicinput.nativeElement.value = '';
    this.PEBasicinput.nativeElement.value = '';
    this.PBBasicinput.nativeElement.value = '';
    this.BasicDateinput.nativeElement.value = '';

    this.teljesitmenyBasicArray.push(data.teljesitmeny);
    this.PEBasicArray.unshift(data.PE);
    this.PBBasicArray.unshift(data.PB);
    this.dateBasicArray.push(data.date);

    this.chartBasicMaterial.update();
  }

  addEnergy() {
    const data: DataAgazat = {
      teljesitmeny: this.agazatiElemzesFormGroup.get('energyTeljesitmenyCtrl').value,
      PE: this.agazatiElemzesFormGroup.get('energyPECtrl').value,
      PB: this.agazatiElemzesFormGroup.get('energyPBCtrl').value,
      date: this.agazatiElemzesFormGroup.get('energyDateCtrl').value
    };

    this.osszesitettEnergyArray.unshift(data);
    this.teljesitmenyEnergyinput.nativeElement.value = '';
    this.PEEnergyinput.nativeElement.value = '';
    this.PBEnergyinput.nativeElement.value = '';
    this.EnergyDateinput.nativeElement.value = '';

    this.teljesitmenyEnergyArray.push(data.teljesitmeny);
    this.PEEnergyArray.unshift(data.PE);
    this.PBEnergyArray.unshift(data.PB);
    this.dateEnergyArray.push(data.date);

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
    this.teljesitmenyIndustrialinput.nativeElement.value = '';
    this.PEIndustrialinput.nativeElement.value = '';
    this.PBIndustrialinput.nativeElement.value = '';
    this.IndustrialDateinput.nativeElement.value = '';

    this.teljesitmenyIndustrialArray.push(data.teljesitmeny);
    this.PEIndustrialArray.unshift(data.PE);
    this.PBIndustrialArray.unshift(data.PB);
    this.dateIndustrialArray.push(data.date);

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
    this.teljesitmenyTechnologyinput.nativeElement.value = '';
    this.PETechnologyinput.nativeElement.value = '';
    this.PBTechnologyinput.nativeElement.value = '';
    this.TechnologyDateinput.nativeElement.value = '';

    this.teljesitmenyTechnologyArray.push(data.teljesitmeny);
    this.PETechnologyArray.unshift(data.PE);
    this.PBTechnologyArray.unshift(data.PB);
    this.dateTechnologyArray.push(data.date);

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
    this.teljesitmenyConsumerinput.nativeElement.value = '';
    this.PEConsumerinput.nativeElement.value = '';
    this.PBConsumerinput.nativeElement.value = '';
    this.ConsumerDateinput.nativeElement.value = '';

    this.teljesitmenyConsumerArray.push(data.teljesitmeny);
    this.PEConsumerArray.unshift(data.PE);
    this.PBConsumerArray.unshift(data.PB);
    this.dateConsumerArray.push(data.date);

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
    this.teljesitmenyCommunicationinput.nativeElement.value = '';
    this.PECommunicationinput.nativeElement.value = '';
    this.PBCommunicationinput.nativeElement.value = '';
    this.CommunicationDateinput.nativeElement.value = '';

    this.teljesitmenyCommunicationArray.push(data.teljesitmeny);
    this.PECommunicationArray.unshift(data.PE);
    this.PBCommunicationArray.unshift(data.PB);
    this.dateCommunicationArray.push(data.date);

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
    this.teljesitmenyRealinput.nativeElement.value = '';
    this.PERealinput.nativeElement.value = '';
    this.PBRealinput.nativeElement.value = '';
    this.RealDateinput.nativeElement.value = '';

    this.teljesitmenyRealArray.push(data.teljesitmeny);
    this.PERealArray.unshift(data.PE);
    this.PBRealArray.unshift(data.PB);
    this.dateRealArray.push(data.date);

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
    this.teljesitmenyHealthinput.nativeElement.value = '';
    this.PEHealthinput.nativeElement.value = '';
    this.PBHealthinput.nativeElement.value = '';
    this.HealthDateinput.nativeElement.value = '';

    this.teljesitmenyHealthArray.push(data.teljesitmeny);
    this.PEHealthArray.unshift(data.PE);
    this.PBHealthArray.unshift(data.PB);
    this.dateHealthArray.push(data.date);

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
    this.teljesitmenyUtilitiesinput.nativeElement.value = '';
    this.PEUtilitiesinput.nativeElement.value = '';
    this.PBUtilitiesinput.nativeElement.value = '';
    this.UtilitiesDateinput.nativeElement.value = '';

    this.teljesitmenyUtilitiesArray.push(data.teljesitmeny);
    this.PEUtilitiesArray.unshift(data.PE);
    this.PBUtilitiesArray.unshift(data.PB);
    this.dateUtilitiesArray.push(data.date);

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
    this.teljesitmenyFinancialinput.nativeElement.value = '';
    this.PEFinancialinput.nativeElement.value = '';
    this.PBFinancialinput.nativeElement.value = '';
    this.FinancialDateinput.nativeElement.value = '';

    this.teljesitmenyFinancialArray.push(data.teljesitmeny);
    this.PEFinancialArray.unshift(data.PE);
    this.PBFinancialArray.unshift(data.PB);
    this.dateFinancialArray.push(data.date);

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
    this.teljesitmenyDefensiveinput.nativeElement.value = '';
    this.PEDefensiveinput.nativeElement.value = '';
    this.PBDefensiveinput.nativeElement.value = '';
    this.DefensiveDateinput.nativeElement.value = '';

    this.teljesitmenyDefensiveArray.push(data.teljesitmeny);
    this.PEDefensiveArray.unshift(data.PE);
    this.PBDefensiveArray.unshift(data.PB);
    this.dateDefensiveArray.push(data.date);

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

  filterList() {
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
    this.osszesitettPMIArray = this.originalPMIArray;

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
    this.osszesitettUzletiArray = this.originalUzletiArray;

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
    this.osszesitettIpariArray = this.originalIpariArray;

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
    this.osszesitettKapacitasArray = this.originalKapacitasArray;

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
    this.osszesitettGDPArray = this.originalGDPArray;

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
    this.osszesitettPenzmennyisegArray = this.originalPenzmennyisegArray;

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
    this.osszesitettFiskalisArray = this.originalFiskalisArray;

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
    this.osszesitettKamatlabArray = this.originalKamatlabArray;

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
    this.osszesitettAllamArray = this.originalAllamArray;

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
    this.osszesitettLakossagArray = this.originalLakossagArray;

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
    this.osszesitettInflacioArray = this.originalInflacioArray;

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
    this.osszesitettMunkanelkuliArray = this.originalMunkanelkuliArray;

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
    this.osszesitettBernovekedesArray = this.originalBernovekedesArray;

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
    this.osszesitettFogyasztoArray = this.originalFogyasztoArray;

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
    this.osszesitettNyersolajArray = this.originalNyersolajArray;

    this.eredmenyekNyersolaj = [];
    this.datumokNyersolaj = [];

    for (let i = this.osszesitettNyersolajArray.length - 1; i >= 0; i--) {
      this.eredmenyekNyersolaj.push(this.osszesitettNyersolajArray[i].eredmeny);
      this.datumokNyersolaj.push(this.osszesitettNyersolajArray[i].date);
    }

    this.setNyersolajChart(this.datumokNyersolaj, this.eredmenyekNyersolaj);

    this.chartNyersolaj.update();
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
        this.originalPMIArray = this.osszesitettPMIArray;

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

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalUzletiArray = this.osszesitettUzletiArray;

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

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalIpariArray = this.osszesitettIpariArray;

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

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalKapacitasArray = this.osszesitettKapacitasArray;

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

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalGDPArray = this.osszesitettGDPArray;

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

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalPenzmennyisegArray = this.osszesitettPenzmennyisegArray;

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

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalFiskalisArray = this.osszesitettFiskalisArray;

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

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalKamatlabArray = this.osszesitettKamatlabArray;

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

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalAllamArray = this.osszesitettAllamArray;

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

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalLakossagArray = this.osszesitettLakossagArray;

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

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalInflacioArray = this.osszesitettInflacioArray;

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

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalMunkanelkuliArray = this.osszesitettMunkanelkuliArray;

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

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalBernovekedesArray = this.osszesitettBernovekedesArray;

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

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalFogyasztoArray = this.osszesitettFogyasztoArray;

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

        // a probléma: a szürt listat nézi és nem a teljeset
        this.originalNyersolajArray = this.osszesitettNyersolajArray;

      }
    });
  }
}

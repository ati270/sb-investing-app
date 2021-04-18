import { PenzugyekService } from './../../../services/penzugyek/penzugyek.service';
import { UjCel } from './../../../models/celok/uj-cel.model';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { PenzugyekNewMonthAddDialogComponent } from '../../dialogs/penzugyek-new-month-add-dialog/penzugyek-new-month-add-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { PenzugyekNewYearAddDialogComponent } from '../../dialogs/penzugyek-new-year-add-dialog/penzugyek-new-year-add-dialog.component';
import * as Chart from 'chart.js';
import { MatSelectChange } from '@angular/material/select';
import { ConfirmUjCelDialogComponent } from '../../dialogs/confirm-uj-cel-dialog/confirm-uj-cel-dialog.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-penzugyek',
  templateUrl: './penzugyek.component.html',
  styleUrls: ['./penzugyek.component.scss']
})
export class PenzugyekComponent implements OnInit, AfterViewInit {

  constructor(
    private dialog: MatDialog, private elementRef: ElementRef,
    public datepipe: DatePipe, private penzugyekService: PenzugyekService) {
  }

  /**
   * Setter $selectedYear
   * @param {string} value
   */
  public set $selectedYear(value: string) {
    this.selectedYear = value;
  }

  @ViewChild('canvasKivalasztott') canvasKivasztott: ElementRef;

  @ViewChild('canvasminiOsszMegtakaritas') canvasOsszMegt: ElementRef;
  @ViewChild('canvasminiOsszBevetel') canvasminiOsszBevetel: ElementRef;
  @ViewChild('canvasminiOsszKiadas') canvasminiOsszKiadas: ElementRef;
  @ViewChild('canvasminiRezsi') canvasminiRezsi: ElementRef;
  @ViewChild('canvasminiElvCikkek') canvasminiElvCikkek: ElementRef;
  @ViewChild('canvasminiUtazasiKoltsegek') canvasminiUtKtg: ElementRef;
  @ViewChild('canvasminiFogyCikkek') canvasminiFogyCikkek: ElementRef;
  @ViewChild('canvasminiRuhazkodas') canvasminiRuhazkodas: ElementRef;
  @ViewChild('canvasminiEgyeb') canvasminiEgyeb: ElementRef;
  @ViewChild('yearPanel') yearPanel: ElementRef;
  @ViewChild('canvasminiCel') canvasminiCel: ElementRef;
  @ViewChild('filterSelect') filterSelect: ElementRef;


  honapok: string[] = ['január', 'február', 'március', 'április',
    'május', 'június', 'július', 'augusztus', 'szeptember',
    'október', 'november', 'december'];
  honapokSzammal: number[];

  rezsiDateStr: string;
  rezsi: Date;
  rezsik: Date[];
  tempOneYearRezsik: Date[];


  // Charts
  chartMain: Chart;
  chartMiniOsszMegtakaritas: Chart;
  chartMiniRezsi: Chart;
  chartMiniOsszBevetel: Chart;
  chartMiniOsszKiadas: Chart;
  chartMiniElvCikkek: Chart;
  chartMiniUtazasiKtg: Chart;
  chartMiniFogyCikkek: Chart;
  chartMiniRuhazkodas: Chart;
  chartMiniEgyeb: Chart;
  chartJelenlegiCel: Chart;

  chart = [];

  // tempLabels
  tempChartBetetelLabels: any[];

  // Évek
  yearList: Array<string>[];

  // Fő lista
  mapList: any[];
  mapHonapokList: any[];
  kivalasztottLabel: string;

  bevetelKiadasByEvList: any[];
  // Hónapok
  bevetelKiadasHonapInEvList: any[];
  xpandStatus: boolean;
  panelOpenState = false;
  newYear = '';
  clicked: boolean;
  hoClicked: boolean;
  addedYearsList: Array<string>;
  chartOsszMegtData: any[] = new Array();
  chartOsszMegtLabels: any[] = new Array();
  chartRezsiData: any[] = new Array();
  chartRezsiLabels: any[] = new Array();
  chartOsszBevetelData: any[] = new Array();
  chartOsszBevetelLabels: any[] = new Array();
  chartOsszKiadasData: any[] = new Array();
  chartOsszKiadasLabels: any[] = new Array();
  chartElvCikkekData: any[] = new Array();
  chartElvCikkekLabels: any[] = new Array();
  chartUtazasiKtgData: any[] = new Array();
  chartUtazasiKtgLabels: any[] = new Array();
  chartFogyCikkekData: any[] = new Array();
  chartFogyCikkekLabels: any[] = new Array();
  chartRuhazkodasData: any[] = new Array();
  chartRuhazkodasLabels: any[] = new Array();
  chartEgyebData: any[] = new Array();
  chartEgyebLabels: any[] = new Array();
  chartCelData: any[] = new Array();
  chartCelLabels: any[] = new Array();

  osszBevetelMap: Map<string, number>;
  osszMegtakaritasMap: Map<string, number>;
  osszKiadasMap: Map<string, number>;
  osszRezsiMap: Map<string, number>;
  osszElvCikkekMap: Map<string, number>;
  osszUtKoltsMap: Map<string, number>;
  osszFogyCikkekMap: Map<string, number>;
  osszRuhazkodasMap: Map<string, number>;
  osszEgyebMap: Map<string, number>;

  selectedHonap: string;
  isNoClosedMonth: boolean;

  rezsiColors: string[];
  isHonapZarva: boolean;
  osszesMegtakaritas: number;
  jelenlegiCelKezdoDatum: Date;
  years: number[] = [];

  // TODO: ezekből is lista kell ----ami tartalmazza a különböző évek kiválasztott honapjait már

  addedMonthsList: Array<string>;


  private selectedYear: string;

  aktualisCel: UjCel;

  /*   ********/
  public chartTypes: string[] = ['Vonaldiagram', 'Oszlopdiagram', 'Kördiagram', 'Pontdiagram'];
  selectedChartMain = 'line';
  selectedChartOsszMegt = 'line';
  selectedChartOsszBevetel = 'line';
  selectedChartOsszKiadas = 'line';
  selectedChartRezsi = 'line';
  selectedChartFogyCikkek = 'line';
  selectedChartUtKtg = 'line';
  selectedChartElvCikkek = 'line';
  selectedChartRuhazkodas = 'line';
  selectedChartEgyeb = 'line';


  // Itt fognak átjönni az adatok a bevétel-kiadásbol: pl: 2019.06
  public chartLabels: Array<any> = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Szept.', 'Okt.', 'Nov.', 'Dec'];


  ngOnInit(): void {
    this.clicked = true;
    this.hoClicked = true;
    this.addedYearsList = new Array<string>();
    this.addedMonthsList = new Array<string>();
    this.mapList = new Array();
    this.mapHonapokList = new Array();
    this.aktualisCel = new UjCel();
    this.bevetelKiadasByEvList = new Array<any>();
    this.bevetelKiadasHonapInEvList = new Array<any>();
    this.xpandStatus = this.panelOpenState;
    this.kivalasztottLabel = 'Össz. megtakarítás';
    this.generateHonapokSzammal();
    this.rezsik = new Array();
    this.osszesMegtakaritas = 0;
    this.isNoClosedMonth = false;

    // Diagramhoz
    this.osszBevetelMap = new Map<string, number>();
    this.osszMegtakaritasMap = new Map<string, number>();
    this.osszKiadasMap = new Map<string, number>();
    this.osszRezsiMap = new Map<string, number>();
    this.osszElvCikkekMap = new Map<string, number>();
    this.osszUtKoltsMap = new Map<string, number>();
    this.osszFogyCikkekMap = new Map<string, number>();
    this.osszRuhazkodasMap = new Map<string, number>();
    this.osszEgyebMap = new Map<string, number>();


    this.penzugyekService.$osszBevetelMap = this.osszBevetelMap;
    this.penzugyekService.$osszMegtakaritasMap = this.osszMegtakaritasMap;
    this.penzugyekService.$osszKiadasMap = this.osszKiadasMap;
    this.penzugyekService.$osszRezsiMap = this.osszRezsiMap;
    this.penzugyekService.$osszElvCikkekMap = this.osszElvCikkekMap;
    this.penzugyekService.$osszUtKoltsMap = this.osszUtKoltsMap;
    this.penzugyekService.$osszFogyCikkekMap = this.osszFogyCikkekMap;
    this.penzugyekService.$osszRuhazkodasMap = this.osszRuhazkodasMap;
    this.penzugyekService.$osszEgyebMap = this.osszEgyebMap;
  }

  generateHonapokSzammal() {
    // Adott hónapok
    this.honapokSzammal = [];
    for (let i = 1; i <= 12; i++) {
      this.honapokSzammal.push(i);
    }
  }

  ngAfterViewInit(): void {
    this.getChart();
  }

  openAddNew() {
    this.clicked = false;
  }


  getPanelId(ev) {
    this.selectedYear = ev;
    console.log(this.selectedYear);


  }
  getSelectedMonth(honap) {
    let index = 0;
    let megtalalt = false;
    let year = 0;
    const month = '';
    //this.rezsik = [];
    megtalalt = this.honapok.includes(honap);

    console.log("Kiválasztott hónap: " + index);
  }

  saveAddedMonth(honap: string) {
    let index = 0;
    let megtalalt = false;
    let year = 0;
    const month = '';
    megtalalt = this.honapok.includes(honap);

    if (megtalalt) {
      index = this.honapok.indexOf(honap);
      console.log("index: " + index);
      this.rezsiDateStr = this.selectedYear + '-' + this.honapokSzammal[index];
      console.log("Akutális: " + this.rezsiDateStr);
      // Lista amibe bele rakoma rezsiket
      // Külön kell szedni: év + hónap
      // rezsi --> rendes dátum formátum kell
      this.rezsi = new Date(this.rezsiDateStr);
      //this.rezsi = this.datepipe.transform(this.rezsi, 'yyyy-MM-dd');
      console.log("REZSIIII: " + this.rezsi);
      this.rezsik.push(this.rezsi);
      console.log("REZSIIIIKKKKK: " + this.rezsik);
      if (this.rezsik.length > 0) {
        this.compareDates(this.rezsik);
        console.log("Dátumok:" + this.rezsik);
        // itt mindig kinullázzuk és a friss dátum sorrendet rakjuk bele
        /*this.chartOsszBevetelLabels = [];
        this.chartOsszMegtLabels = [];
        this.chartOsszKiadasLabels = [];
        this.chartRezsiLabels = [];
        this.chartElvCikkekLabels = [];
        this.chartUtazasiKtgLabels = [];
        this.chartFogyCikkekLabels = [];
        this.chartRuhazkodasLabels = [];
        this.chartEgyebLabels = [];*/

        /*  for (let i = 0; i < this.rezsik.length; i++) {
            // Dátumozás megadása
            this.chartOsszBevetelLabels.push(this.rezsik[i].getFullYear() + "-" + (this.rezsik[i].getMonth() + 1));
            console.log("labels...: "  + this.chartOsszBevetelLabels);
            this.chartOsszMegtLabels.push(this.rezsik[i].getFullYear() + "-" + (this.rezsik[i].getMonth() + 1));
            this.chartOsszKiadasLabels.push(this.rezsik[i].getFullYear() + "-" + (this.rezsik[i].getMonth() + 1));
            this.chartRezsiLabels.push(this.rezsik[i].getFullYear() + "-" + (this.rezsik[i].getMonth() + 1));
            this.chartElvCikkekLabels.push(this.rezsik[i].getFullYear() + "-" + (this.rezsik[i].getMonth() + 1));
            this.chartUtazasiKtgLabels.push(this.rezsik[i].getFullYear() + "-" + (this.rezsik[i].getMonth() + 1));
            this.chartFogyCikkekLabels.push(this.rezsik[i].getFullYear() + "-" + (this.rezsik[i].getMonth() + 1));
            this.chartRuhazkodasLabels.push(this.rezsik[i].getFullYear() + "-" + (this.rezsik[i].getMonth() + 1));
            this.chartEgyebLabels.push(this.rezsik[i].getFullYear() + "-" + (this.rezsik[i].getMonth() + 1));

            /*if((this.rezsik[i].getMonth()+ 1) > (this.jelenlegiCelKezdoDatum.getMonth() +1)){
                this.chartCelLabels.push(this.rezsik[i].getFullYear() + "-" + (this.rezsik[i].getMonth() +1));
              }*
          }*/
      }
    }
  }
  // Amikor kattintunk egy adott hónapra, léttehozunk egy temp honapot ,
  // hogy tudjuk melyikről van épp szó, ha zárni akarunk
  getMonthPanel(honap) {
    this.selectedHonap = honap;
    if (this.isHonapZarva) {
      this.isHonapZarva = false;
    }
    else {
      this.isHonapZarva = false;
      console.log('Nyitva: ' + this.isHonapZarva);
      this.getSelectedMonth(honap);

    }
  }

  compareDates(dates: Date[]) {
    let temp = new Date();
    temp = dates[0];
    console.log("legelso dátum: " + temp);
    for (let i = 1; i <= dates.length; i++) {
      // Ha aktuális dátum kisebb mint az előző --> csere
      if (dates[i] < dates[i - 1]) {
        temp = dates[i];
        dates[i] = dates[i - 1];
        dates[i - 1] = temp;
      }

    }
    console.log('compareee..\n');
    console.log(dates);
  }

  openAddHoNew() {
    this.hoClicked = false;
  }

  openNewYearDialog() {

    // Új év ltrehozása
    this.yearList = new Array();
    this.addedMonthsList = new Array();
    const yearMap = new Map();
    const hoMap = new Map();

    const dialogRef = this.dialog.open(PenzugyekNewYearAddDialogComponent, {
      width: '40%',
      data: this.addedYearsList
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.addedYearsList.push(result);
        this.years.push(result);
        // Létrehozunk 1 uj év listát és hozzáadtuk az évet
        yearMap.set(result, this.yearList);
        this.mapList.push(yearMap);

        // létrehozzuk az adott év hó map-jét
        hoMap.set(result, this.addedMonthsList);

        this.mapHonapokList.push(hoMap);
      }
    });
  }

  openNewMonthDialog(value): void {
    this.selectedYear = value;
    this.isHonapZarva = false;

    for (const hoItem of this.mapHonapokList) {
      for (const key of hoItem.keys()) {
        // Adott éven belül nézem a hónapot is
        if (key == this.selectedYear) {
          this.addedMonthsList = hoItem.get(key);
        }
      }
    }

    if (this.addedMonthsList.length === 12) {
      // alert

    }
    else {
      const dialogRef = this.dialog.open(PenzugyekNewMonthAddDialogComponent, {
        width: '40%',
        data: this.addedMonthsList
      });
      dialogRef.afterClosed().subscribe(result => {
        // if (result) {
          this.isNoClosedMonth = true;
        console.log(result);
        console.log("************RESULT********");
        this.saveAddedMonth(result);
        for (const item of this.mapList) {
          for (const key of item.keys()) {
            // Adott éven belül nézem a hónapot is
            if (key == this.selectedYear) {
              const list = item.get(key);
              list.push(result);
              // válasszuk ki melyik kizárt hónap lista kell
              for (const hoItem of this.mapHonapokList) {
                for (const key of hoItem.keys()) {
                  // Adott éven belül nézem a hónapot is
                  if (key == this.selectedYear) {
                    this.addedMonthsList = hoItem.get(key);
                    this.addedMonthsList.push(result);
                  }
                }
              }
            }
          }
        }
        //}
      });
    }
  }

  showJelenlegiCelDiagram() {
    this.chartJelenlegiCel = new Chart(this.canvasminiCel.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.chartCelLabels,
        datasets: [{
          label: 'Jelenlegi cél',
          backgroundColor: '#3F729B',
          data: this.chartCelData,
          fill: false,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false

          }]
        }
      }
    });

    this.getMainChart('Jelenlegi cél', this.chartCelLabels, this.chartCelData);
  }

  createMegtakaritasFilter(year: any) {
    let dates: string[] = [...this.osszMegtakaritasMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszMegtakaritasMap.values()];
    this.chartOsszMegtLabels = [];
    this.chartOsszMegtData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
      if (osszDate[j].getFullYear() == year.value) {
        console.log("bejött" + year.value);
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartOsszMegtLabels.push(dateStr);
        this.chartOsszMegtData.push(datas[j]);
      }
    }
  }

  createOsszBevetelFilter(year: any) {
    let dates: string[] = [...this.osszBevetelMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszBevetelMap.values()];
    this.chartOsszBevetelLabels = [];
    this.chartOsszBevetelData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
      if (osszDate[j].getFullYear() == year.value) {
        console.log("bejött" + year.value);
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartOsszBevetelLabels.push(dateStr);
        this.chartOsszBevetelData.push(datas[j]);
      }
    }
  }

  createOsszKiadasFilter(year: any) {
    let dates: string[] = [...this.osszKiadasMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszKiadasMap.values()];
    this.chartOsszKiadasLabels = [];
    this.chartOsszKiadasData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
      if (osszDate[j].getFullYear() == year.value) {
        console.log("bejött" + year.value);
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartOsszKiadasLabels.push(dateStr);
        this.chartOsszKiadasData.push(datas[j]);
      }
    }
  }

  createOsszRezsiFilter(year: any) {
    let dates: string[] = [...this.osszRezsiMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszRezsiMap.values()];
    this.chartRezsiLabels = [];
    this.chartRezsiData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
      if (osszDate[j].getFullYear() == year.value) {
        console.log("bejött" + year.value);
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartRezsiLabels.push(dateStr);
        this.chartRezsiData.push(datas[j]);
      }
    }
  }

  createosszElvCikkekFilter(year: any) {
    let dates: string[] = [...this.osszElvCikkekMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszElvCikkekMap.values()];
    this.chartElvCikkekLabels = [];
    this.chartElvCikkekData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
      if (osszDate[j].getFullYear() == year.value) {
        console.log("bejött" + year.value);
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartElvCikkekLabels.push(dateStr);
        this.chartElvCikkekData.push(datas[j]);
      }
    }
  }

  createosszUtKoltsFilter(year: any) {
    let dates: string[] = [...this.osszUtKoltsMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszUtKoltsMap.values()];
    this.chartUtazasiKtgLabels = [];
    this.chartUtazasiKtgData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
      if (osszDate[j].getFullYear() == year.value) {
        console.log("bejött" + year.value);
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartUtazasiKtgLabels.push(dateStr);
        this.chartUtazasiKtgData.push(datas[j]);
      }
    }
  }

  createosszFogyCikkekFilter(year: any) {
    let dates: string[] = [...this.osszFogyCikkekMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszFogyCikkekMap.values()];
    this.chartFogyCikkekLabels = [];
    this.chartFogyCikkekData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
      if (osszDate[j].getFullYear() == year.value) {
        console.log("bejött" + year.value);
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartFogyCikkekLabels.push(dateStr);
        this.chartFogyCikkekData.push(datas[j]);
      }
    }
  }

  createosszRuhazkodasFilter(year: any) {
    let dates: string[] = [...this.osszRuhazkodasMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszRuhazkodasMap.values()];
    this.chartRuhazkodasLabels = [];
    this.chartRuhazkodasData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
      if (osszDate[j].getFullYear() == year.value) {
        console.log("bejött" + year.value);
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartRuhazkodasLabels.push(dateStr);
        this.chartRuhazkodasData.push(datas[j]);
      }
    }
  }

  createosszEgyebFilter(year: any) {
    let dates: string[] = [...this.osszEgyebMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszEgyebMap.values()];
    this.chartEgyebLabels = [];
    this.chartEgyebData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
      if (osszDate[j].getFullYear() == year.value) {
        console.log("bejött" + year.value);
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartEgyebLabels.push(dateStr);
        this.chartEgyebData.push(datas[j]);
      }
    }
  }


  // Full diagrams after filter
  createMegtakaritas() {
    let dates: string[] = [...this.osszMegtakaritasMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszMegtakaritasMap.values()];
    this.chartOsszMegtLabels = [];
    this.chartOsszMegtData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartOsszMegtLabels.push(dateStr);
        this.chartOsszMegtData.push(datas[j]);
    }
  }

  createOsszBevetel() {
    let dates: string[] = [...this.osszBevetelMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszBevetelMap.values()];
    this.chartOsszBevetelLabels = [];
    this.chartOsszBevetelData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartOsszBevetelLabels.push(dateStr);
        this.chartOsszBevetelData.push(datas[j]);

    }
  }

  createOsszKiadas() {
    let dates: string[] = [...this.osszKiadasMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszKiadasMap.values()];
    this.chartOsszKiadasLabels = [];
    this.chartOsszKiadasData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartOsszKiadasLabels.push(dateStr);
        this.chartOsszKiadasData.push(datas[j]);

    }
  }

  createOsszRezsi() {
    let dates: string[] = [...this.osszRezsiMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszRezsiMap.values()];
    this.chartRezsiLabels = [];
    this.chartRezsiData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartRezsiLabels.push(dateStr);
        this.chartRezsiData.push(datas[j]);
    }
  }

  createosszElvCikkek() {
    let dates: string[] = [...this.osszElvCikkekMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszElvCikkekMap.values()];
    this.chartElvCikkekLabels = [];
    this.chartElvCikkekData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartElvCikkekLabels.push(dateStr);
        this.chartElvCikkekData.push(datas[j]);

    }
  }

  createosszUtKolts() {
    let dates: string[] = [...this.osszUtKoltsMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszUtKoltsMap.values()];
    this.chartUtazasiKtgLabels = [];
    this.chartUtazasiKtgData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartUtazasiKtgLabels.push(dateStr);
        this.chartUtazasiKtgData.push(datas[j]);
    }
  }

  createosszFogyCikkek() {
    let dates: string[] = [...this.osszFogyCikkekMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszFogyCikkekMap.values()];
    this.chartFogyCikkekLabels = [];
    this.chartFogyCikkekData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartFogyCikkekLabels.push(dateStr);
        this.chartFogyCikkekData.push(datas[j]);

    }
  }

  createosszRuhazkodas() {
    let dates: string[] = [...this.osszRuhazkodasMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszRuhazkodasMap.values()];
    this.chartRuhazkodasLabels = [];
    this.chartRuhazkodasData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartRuhazkodasLabels.push(dateStr);
        this.chartRuhazkodasData.push(datas[j]);
    }
  }

  createosszEgyeb() {
    let dates: string[] = [...this.osszEgyebMap.keys()];
    console.log("-------" + dates);
    let datas: number[] = [...this.osszEgyebMap.values()];
    this.chartEgyebLabels = [];
    this.chartEgyebData = [];

    // IDe kellenek a dátum formátumok
    let osszDate: Date[] = [];
    for (let i = 0; i < dates.length; i++) {
      osszDate.push(new Date(dates[i]));
    }

    for (let j = 0; j < dates.length; j++) {
        const dateStr = osszDate[j].getFullYear() + "-" + (osszDate[j].getMonth() + 1);
        this.chartEgyebLabels.push(dateStr);
        this.chartEgyebData.push(datas[j]);

    }
  }

  // szürt diagram
  getYearForFilteredDiagram(year: any) {
    this.createMegtakaritasFilter(year);
    this.createOsszBevetelFilter(year);
    this.createOsszKiadasFilter(year);
    this.createOsszRezsiFilter(year);
    this.createosszElvCikkekFilter(year);
    this.createosszUtKoltsFilter(year);
    this.createosszFogyCikkekFilter(year);
    this.createosszRuhazkodasFilter(year);
    this.createosszEgyebFilter(year);
  }

  // Teljes diagram visszatöltése
  getFullDiagram(){
    this.createMegtakaritas();
    this.createOsszBevetel();
    this.createOsszKiadas();
    this.createOsszRezsi();
    this.createosszElvCikkek();
    this.createosszUtKolts();
    this.createosszFogyCikkek();
    this.createosszRuhazkodas();
    this.createosszEgyeb();

    // remove last data from select -> option
  }


  // ************** CHART.JS TEST ********
  updateChartType(chart: Chart, selectedChartType) {
    chart.config.type = selectedChartType;
    console.log(chart.config.type);
    chart.update();
  }

  updateChartColor(chart: Chart, colors: string[]) {
  }

  getChartType(val: MatSelectChange) {
    console.log(val.value);
    switch (val.value) {
      case this.chartTypes[0]: {
        this.selectedChartMain = 'line';
        this.selectedChartOsszMegt = 'line';
        this.selectedChartOsszBevetel = 'line';
        this.selectedChartOsszKiadas = 'line';
        this.selectedChartRezsi = 'line';
        this.selectedChartFogyCikkek = 'line';
        this.selectedChartUtKtg = 'line';
        this.selectedChartElvCikkek = 'line';
        this.selectedChartRuhazkodas = 'line';
        this.selectedChartEgyeb = 'line';
        break;
      }
      case this.chartTypes[1]: {
        this.selectedChartMain = 'bar';

        this.selectedChartOsszMegt = 'bar';
        this.selectedChartOsszBevetel = 'bar';
        this.selectedChartOsszKiadas = 'bar';
        this.selectedChartRezsi = 'bar';
        this.selectedChartFogyCikkek = 'bar';
        this.selectedChartUtKtg = 'bar';
        this.selectedChartElvCikkek = 'bar';
        this.selectedChartRuhazkodas = 'bar';
        this.selectedChartEgyeb = 'bar';
        break;
      } case this.chartTypes[2]: {
        this.selectedChartMain = 'doughnut';

        this.selectedChartOsszMegt = 'doughnut';
        this.selectedChartOsszBevetel = 'doughnut';
        this.selectedChartOsszKiadas = 'doughnut';
        this.selectedChartRezsi = 'doughnut';
        this.selectedChartFogyCikkek = 'doughnut';
        this.selectedChartUtKtg = 'doughnut';
        this.selectedChartElvCikkek = 'doughnut';
        this.selectedChartRuhazkodas = 'doughnut';
        this.selectedChartEgyeb = 'doughnut';
        break;
      } case this.chartTypes[3]: {
        this.selectedChartMain = 'bubble';

        this.selectedChartOsszMegt = 'bubble';
        this.selectedChartOsszBevetel = 'bubble';
        this.selectedChartOsszKiadas = 'bubble';
        this.selectedChartRezsi = 'bubble';
        this.selectedChartFogyCikkek = 'bubble';
        this.selectedChartUtKtg = 'bubble';
        this.selectedChartElvCikkek = 'bubble';
        this.selectedChartRuhazkodas = 'bubble';
        this.selectedChartEgyeb = 'bubble';

        break;
      }
    }
    this.updateChartType(this.chartMain, this.selectedChartMain);
    this.updateChartType(this.chartMiniRezsi, this.selectedChartRezsi);
    this.updateChartType(this.chartMiniOsszMegtakaritas, this.selectedChartOsszMegt);
    this.updateChartType(this.chartMiniOsszBevetel, this.selectedChartOsszBevetel);
    this.updateChartType(this.chartMiniOsszKiadas, this.selectedChartOsszKiadas);
    this.updateChartType(this.chartMiniElvCikkek, this.selectedChartElvCikkek);
    this.updateChartType(this.chartMiniUtazasiKtg, this.selectedChartUtKtg);
    this.updateChartType(this.chartMiniFogyCikkek, this.selectedChartFogyCikkek);
    this.updateChartType(this.chartMiniRuhazkodas, this.selectedChartRuhazkodas);
    this.updateChartType(this.chartMiniEgyeb, this.selectedChartEgyeb);

    // TODO: other charts

  }

  // HOnap zárás: dátum fix, osszegek tombben
  getBevetelekKiadasok(value) {
    // Itt kapod meg az adatokat a gyerektől (bev-kiadás)
    this.isNoClosedMonth = value.isNoClosedMonth;
    this.getOsszRezsi(value.datum, value.osszeg[0]);
    this.getOsszMegtakaritas(value.datum, value.osszeg[1]);
    this.getOsszBevetel(value.datum, value.osszeg[2]);
    this.getElvezetiCikkek(value.datum, value.osszeg[3]);
    this.getUtazasiKtg(value.datum, value.osszeg[4]);
    this.getFogyCikkek(value.datum, value.osszeg[5]);
    this.getRuhazkodas(value.datum, value.osszeg[6]);
    this.getEgyeb(value.datum, value.osszeg[7]);
    this.getOsszKiadas(value.datum, value.osszeg[8]);

    // Adott honap zárva-e
    this.isHonapZarva = value.zarva;
    console.log('Zárva:' + this.isHonapZarva);

  }

  // Adatok a céloktól
  getCelAdatok(value: UjCel) {
    let kezdoDatum: Date;
    this.jelenlegiCelKezdoDatum = kezdoDatum;
    let vegdatum: Date;
    let tempKezdoDatum: Date;
    let kezdoDatumStr = '';
    let vegDatumStr = '';

    this.aktualisCel = new UjCel();
    this.aktualisCel = value;

    kezdoDatum = new Date(this.aktualisCel.$megtakaritasKezdete);
    tempKezdoDatum = new Date(kezdoDatum);
    vegdatum = new Date(tempKezdoDatum);

    vegdatum.setMonth(vegdatum.getMonth() + this.aktualisCel.$celFutamido);

    kezdoDatumStr = this.datepipe.transform(kezdoDatum, 'yyyy.MM');

    vegDatumStr = this.datepipe.transform(vegdatum, 'yyyy.MM');

    this.chartCelData = [];
    this.chartCelLabels = [];

    this.chartCelData.push(0);

    // TODO: itt akkor jöhet be az adat:
    // HA kezdő dátumnál nagyobb és az ottani megtakaritas értéke kell
    // this.chartCelData.push(this.aktualisCel.$celOsszeg);


    this.chartCelLabels.push(kezdoDatumStr);
    this.chartCelLabels.push(vegDatumStr);

    this.chartJelenlegiCel.update();
    this.chartMain.update();
    this.getMainChart('Jelenlegi cél', this.chartCelLabels, this.chartCelData);

  }

  createMap(date: string, osszeg: number, map: Map<string, number>, labels: any[], datas: any[]) {
    const bevDate = this.datepipe.transform(date, 'yyyy-MM');
    map.set(bevDate, osszeg);

    console.log("bevdate: " + bevDate);
    labels.push(bevDate);
    datas.push(osszeg);
  }

  // get values from bevetel-kiadas

  // OK
  getOsszMegtakaritas(date: string, osszeg: number) {
    this.createMap(date, osszeg, this.osszMegtakaritasMap, this.chartOsszMegtLabels, this.chartOsszMegtData);

    this.chartMain.update();
    this.chartMiniOsszMegtakaritas.update();
    this.panelOpenState = false;
    this.xpandStatus = this.panelOpenState;
  }

  // OK
  getOsszRezsi(date: string, osszeg: number) {
    this.createMap(date, osszeg, this.osszRezsiMap, this.chartRezsiLabels, this.chartRezsiData);

    // Rendezés
    this.chartMain.update();
    this.chartMiniRezsi.update();
    this.panelOpenState = false;
    this.xpandStatus = this.panelOpenState;
    console.log(this.panelOpenState);
  }

  // OK
  getOsszBevetel(date: string, osszeg: number) {
    this.createMap(date, osszeg, this.osszBevetelMap, this.chartOsszBevetelLabels, this.chartOsszBevetelData);
    // Rendezés
    this.chartMain.update();
    this.chartMiniOsszBevetel.update();
    this.panelOpenState = false;
    this.xpandStatus = this.panelOpenState;
    console.log(this.panelOpenState);
  }

  // OK
  getOsszKiadas(date: string, osszeg: number) {
    this.createMap(date, osszeg, this.osszKiadasMap, this.chartOsszKiadasLabels, this.chartOsszKiadasData);

    // Rendezés
    this.chartMain.update();
    this.chartMiniOsszKiadas.update();
    this.panelOpenState = false;
    this.xpandStatus = this.panelOpenState;
    console.log(this.panelOpenState);

  }

  // OK
  getElvezetiCikkek(date: string, osszeg: number) {
    this.createMap(date, osszeg, this.osszElvCikkekMap, this.chartElvCikkekLabels, this.chartElvCikkekData);

    // Rendezés
    this.chartMain.update();
    this.chartMiniElvCikkek.update();
    this.panelOpenState = false;
    this.xpandStatus = this.panelOpenState;
    console.log(this.panelOpenState);
  }

  // OK
  getUtazasiKtg(date: string, osszeg: number) {
    this.createMap(date, osszeg, this.osszUtKoltsMap, this.chartUtazasiKtgLabels, this.chartUtazasiKtgData);

    // Rendezés
    this.chartMain.update();
    this.chartMiniUtazasiKtg.update();
    this.panelOpenState = false;
    this.xpandStatus = this.panelOpenState;
    console.log(this.panelOpenState);
  }

  // OK
  getFogyCikkek(date: string, osszeg: number) {
    this.createMap(date, osszeg, this.osszFogyCikkekMap, this.chartFogyCikkekLabels, this.chartFogyCikkekData);

    // Rendezés
    this.chartMain.update();
    this.chartMiniFogyCikkek.update();
    this.panelOpenState = false;
    this.xpandStatus = this.panelOpenState;
    console.log(this.panelOpenState);
  }

  // OK
  getRuhazkodas(date: string, osszeg: number) {
    this.createMap(date, osszeg, this.osszRuhazkodasMap, this.chartRuhazkodasLabels, this.chartRuhazkodasData);

    // Rendezés
    this.chartMain.update();
    this.chartMiniRuhazkodas.update();
    this.panelOpenState = false;
    this.xpandStatus = this.panelOpenState;
    console.log(this.panelOpenState);
  }

  // OK
  getEgyeb(date: string, osszeg: number) {
    this.createMap(date, osszeg, this.osszEgyebMap, this.chartEgyebLabels, this.chartEgyebData);

    // Rendezés
    this.chartMain.update();
    this.chartMiniEgyeb.update();
    this.panelOpenState = false;
    this.xpandStatus = this.panelOpenState;
    console.log(this.panelOpenState);
  }

  // Kiválasztások
  selectMegtakaritas() {
    this.getMainChart('Össz. megtakarítás', this.chartOsszMegtLabels, this.chartOsszMegtData);

  }

  selectMiniRezsi() {
    console.log('Rezsi chart');
    this.getMainChart('Rezsi', this.chartRezsiLabels, this.chartRezsiData);
  }

  //Össszbevétel
  selectOsszBevetel() {
    this.getMainChart('Össz. bevétel', this.chartOsszBevetelLabels, this.chartOsszBevetelData);
  }

  selectOsszKiadas() {
    this.getMainChart('Ossz. kiadás', this.chartOsszKiadasLabels, this.chartOsszKiadasData);
  }

  selectElvCikkek() {
    this.getMainChart('Élvezeti cikkek', this.chartElvCikkekLabels, this.chartElvCikkekData);
  }

  selectUtazasiKtg() {
    this.getMainChart('Utazási költségek', this.chartUtazasiKtgLabels, this.chartUtazasiKtgData);
  }

  selectFogyCikkek() {
    this.getMainChart('Fogyasztási cikkek', this.chartFogyCikkekLabels, this.chartFogyCikkekData);
  }

  selectRuhazkodas() {
    this.getMainChart('Ruházkodás', this.chartRuhazkodasLabels, this.chartRuhazkodasData);

  }

  selectEgyeb() {
    this.getMainChart('Egyéb', this.chartEgyebLabels, this.chartEgyebData);

  }





  getMainChart(title: string, chartLabels: any[], chartData: any[]): Chart {
    return this.chartMain = new Chart(this.canvasKivasztott.nativeElement.getContext('2d'), {
      type: this.selectedChartMain,
      data: {
        // labels: adott év + hónap
        // : 2019.06; 2020: 01 ....
        labels: chartLabels,
        datasets: [{
          label: title,
          // Pl. ossz rezsi:
          // 2019.06 : 15000 ; 2020.01: 200000
          backgroundColor: '#3F729B',
          // "#3F729B",
          borderColor: '#3F729B',
          data: chartData,
          fill: false,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true,

            ticks: {
              beginAtZero: false,
              maxRotation: 45,
              minRotation: 45,
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: false,

            }

          }]
        },
        events: []
      }
    });

  }

  getChart() {

    // Main chart: first with osszmegtakaritas -- OK
    // Feltétel kell
    this.getMainChart('Össz. megtakarítás', this.chartOsszMegtLabels, this.chartOsszMegtData);

    // Össz. megtakaritás - mini -- OK
    this.chartMiniOsszMegtakaritas = new Chart(this.canvasOsszMegt.nativeElement.getContext('2d'), {
      type: this.selectedChartOsszMegt,

      data: {
        labels: this.chartOsszMegtLabels,
        datasets: [{
          label: 'Össz. megtakarítás',
          backgroundColor: '#3F729B',
          data: this.chartOsszMegtData,
          fill: false,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false

          }]
        },
        events: []
      }
    });

    // Össz bevétel - mini --- OK
    this.chartMiniOsszBevetel = new Chart(this.canvasminiOsszBevetel.nativeElement.getContext('2d'), {
      type: this.selectedChartOsszBevetel,
      data: {
        labels: this.chartOsszBevetelLabels,
        datasets: [{
          label: 'Össz. bevétel',
          backgroundColor: '#3F729B',
          data: this.chartOsszBevetelData,
          fill: false,
          lineTension: 0,

          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false

          }]
        },
        events: []
      }
    });

    // Össz kiadás - mini - OK
    this.chartMiniOsszKiadas = new Chart(this.canvasminiOsszKiadas.nativeElement.getContext('2d'), {
      type: this.selectedChartOsszKiadas,
      data: {
        labels: this.chartOsszKiadasLabels,
        datasets: [{
          label: 'Össz. kiadás',
          backgroundColor: '#3F729B',
          data: this.chartOsszKiadasData,
          fill: false,
          lineTension: 0,

          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false

          }]
        },
        events: []
      }
    });

    // Rezsi -- OK
    this.chartMiniRezsi = new Chart(this.canvasminiRezsi.nativeElement.getContext('2d'), {
      type: this.selectedChartRezsi,
      data: {
        labels: this.chartRezsiLabels,
        datasets: [{
          label: 'Rezsi',
          backgroundColor: '#3F729B',
          data: this.chartRezsiData,
          fill: false,
          lineTension: 0,

          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false

          }]
        },
        events: []
      }
    });

    // Élv. cikkek-- OK
    this.chartMiniElvCikkek = new Chart(this.canvasminiElvCikkek.nativeElement.getContext('2d'), {
      type: this.selectedChartElvCikkek,
      data: {
        labels: this.chartElvCikkekLabels,
        datasets: [{
          label: 'Élvezeti cikkek',
          backgroundColor: '#3F729B',
          data: this.chartElvCikkekData,
          fill: false,
          lineTension: 0,

          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false

          }]
        },
        events: []
      }
    });

    // Ut. költségek
    this.chartMiniUtazasiKtg = new Chart(this.canvasminiUtKtg.nativeElement.getContext('2d'), {
      type: this.selectedChartUtKtg,
      data: {
        labels: this.chartUtazasiKtgLabels,
        datasets: [{
          label: 'Utazási költségek',
          backgroundColor: '#3F729B',
          data: this.chartUtazasiKtgData,
          fill: false,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false

          }]
        },
        events: []
      }
    });

    // Fogy. cikkek -- OK
    this.chartMiniFogyCikkek = new Chart(this.canvasminiFogyCikkek.nativeElement.getContext('2d'), {
      type: this.selectedChartFogyCikkek,
      data: {
        labels: this.chartFogyCikkekLabels,
        datasets: [{
          label: 'Fogyasztási cikkek',
          backgroundColor: '#3F729B',
          data: this.chartFogyCikkekData,
          fill: false,
          lineTension: 0,

          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false

          }]
        },
        events: []
      }
    });

    // Ruházkodás -- OK
    this.chartMiniRuhazkodas = new Chart(this.canvasminiRuhazkodas.nativeElement.getContext('2d'), {
      type: this.selectedChartRuhazkodas,
      data: {
        labels: this.chartRuhazkodasLabels,
        datasets: [{
          label: 'Ruházkodás',
          backgroundColor: '#3F729B',
          data: this.chartRuhazkodasData,
          fill: false,
          lineTension: 0,

          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false

          }]
        },
        events: []
      }
    });

    // Egyéb -- OK
    this.chartMiniEgyeb = new Chart(this.canvasminiEgyeb.nativeElement.getContext('2d'), {
      type: this.selectedChartEgyeb,
      data: {
        labels: this.chartEgyebLabels,
        datasets: [{
          label: 'Egyéb',
          backgroundColor: '#3F729B',
          data: this.chartEgyebData,
          fill: false,
          lineTension: 0,

          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false

          }]
        },
        events: []
      }
    });

  }



}

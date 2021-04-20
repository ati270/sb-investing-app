import { Component, OnInit, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEredmenyDialogComponent } from 'src/app/components/dialogs/add-eredmeny-dialog/add-eredmeny-dialog.component';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { VallalatKockazatElemzes } from 'src/app/models/uj-befektetes-models/vallalat-vizsg-kriteriumok/vallalat-vizsg-kriteriumok.model';
import { VallalatVizsgKriteriumokService } from 'src/app/services/befektetesek/uj-befektetes-services/vallalat-vizsg-kriteriumok/vallalat-vizsg-kriteriumok.service';
import { MessageService } from 'primeng/api';


export interface VizsgalatKriterium {
  eredmeny: string;
  riziko: number;
}

export interface dataArguments {
  filled: boolean;
  vallalatKockazatElemzes: VallalatKockazatElemzes;
}


@Component({
  selector: 'app-vallalat-vizsg-kriteriumok',
  templateUrl: './vallalat-vizsg-kriteriumok.component.html',
  styleUrls: ['./vallalat-vizsg-kriteriumok.component.scss'],
  providers: [MessageService]

})
export class VallalatVizsgKriteriumokComponent implements OnInit, AfterViewInit {

  @Output() filledSaveKockEmitter: EventEmitter<VallalatKockazatElemzes> = new EventEmitter();
  allFilled: boolean;

  vallalatKockazatelemzes: VallalatKockazatElemzes;

  @ViewChild('inputReszveny')
  inputReszvenyValue: ElementRef;

  @ViewChild('inputKonyv')
  inputKonyv: ElementRef;

  @ViewChild('inputEPS')
  inputEPS: ElementRef;

  @ViewChild('inputPiaci')
  inputPiaci: ElementRef;

  @ViewChild('inputHitel')
  inputHitel: ElementRef;

  @ViewChild('inputTobbseg')
  inputTobbseg: ElementRef;

  @ViewChild('inputCegInfo')
  inputCegInfo: ElementRef;

  @ViewChild('inputTermekInfo')
  inputTermekInfo: ElementRef;

  @ViewChild('inputKF')
  inputKF: ElementRef;

  @ViewChild('inputImm')
  inputImm: ElementRef;

  @ViewChild('inputEgyeb')
  inputEgyeb: ElementRef;

  @ViewChild('inputSzukseges')
  inputSzukseges: ElementRef;

  @ViewChild('inputElerheto')
  inputElerheto: ElementRef;

  @ViewChild('inputOsztalek')
  inputOsztalek: ElementRef;

  @ViewChild('inputTozsde')
  inputTozsde: ElementRef;

  @ViewChild('inputFontos')
  inputFontos: ElementRef;

  @ViewChild('inputCsucs')
  inputCsucs: ElementRef;

  @ViewChild('inputFuzio')
  inputFuzio: ElementRef;

  @ViewChild('inputBeta')
  inputBeta: ElementRef;

  @ViewChild('inputVezeto')
  inputVezeto: ElementRef;

  @ViewChild('inputUjReszveny')
  inputUjReszveny: ElementRef;

  private reszveny: string = "";
  private konyv: string = "";
  private eps: string = "";
  private piaci: string = "";
  private hitel: string = "";
  private tobbseg: string = "";
  private cegInfo: string = "";
  private termekInfo: string = "";
  private kf: string = "";
  private imm: string = "";
  private egyeb: string = "";
  private szukseges: string = "";
  private elerheto: string = "";
  private osztalek: string = "";
  private tozsde: string = "";
  private fontos: string = "";
  private csucs: string = "";
  private fuzio: string = "";
  private beta: string = "";
  private vezeto: string = "";
  private ujReszveny: string = "";

  vallVizsgKritGroup: FormGroup;
  Kriteriumok: VizsgalatKriterium[];

  private reszvenyEredmeny: string;
  private reszvenyRiziko: number;
  private konyvEredmeny: string;
  private konyvRiziko: number;
  private epsEredmeny: string;
  private epsRiziko: number;
  private piaciKapEredmeny: string;
  private piaciKapRiziko: number;
  private hitelBesorolasEredmeny: string;
  private hitelBesorolasRiziko: number;
  private tobbsegiTulajEredmeny: string;
  private tobbsegiTulajRiziko: number;
  private cegInfoEredmeny: string;
  private cegInfoRiziko: number;
  private termekInfoEredmeny: string;
  private termekInfoRiziko: number;
  private kutatasFejlesztesEredmeny: string;
  private kutatasFejlesztesRiziko: number;
  private immaterialisEredmeny: string;
  private immaterialisRiziko: number;
  private egyebEredmeny: string;
  private egyebRiziko: number;
  private szuksegesAllomanyEredmeny: string;
  private szuksegesAllomanyRiziko: number;
  private elerhetoInfoEredmeny: string;
  private elerhetoInfoRiziko: number;
  private osztalekEredmeny: string;
  private osztalekRiziko: number;
  private vallalatTozsdeEredmeny: string;
  private vallalatTozsdeRiziko: number;
  private fontosTechEredmeny: string;
  private fontosTechRiziko: number;
  private voltCsucsonEredmeny: string;
  private voltCsucsonRiziko: number;
  private fuzioEredmeny: string;
  private fuzioRiziko: number;
  private betaEredmeny: string;
  private betaRiziko: number;
  private vezMeEredmeny: string;
  private vezMeRiziko: number;
  private ujReszvenyKiEredmeny: string;
  private ujReszvenyKiRiziko: number;

  /**
   * Getter $reszvenyEredmeny
   * @return {string}
   */
  public get $reszvenyEredmeny(): string {

    this.reszvenyEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('reszvenyEredmenyCtrl').value;

    return this.reszvenyEredmeny;
  }

  /**
   * Getter $reszvenyRiziko
   * @return {number}
   */
  public get $reszvenyRiziko(): number {

    this.reszvenyRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('reszvenyRizikoCtrl').value;

    return this.reszvenyRiziko;
  }

  /**
   * Getter $konyvEredmeny
   * @return {string}
   */
  public get $konyvEredmeny(): string {

    this.konyvEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('konyvEredmenyCtrl').value;

    return this.konyvEredmeny;
  }

  /**
   * Getter $konyvRiziko
   * @return {number}
   */
  public get $konyvRiziko(): number {

    this.konyvRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('konyvRizikoCtrl').value;

    return this.konyvRiziko;
  }

  /**
   * Getter $epsEredmeny
   * @return {string}
   */
  public get $epsEredmeny(): string {

    this.epsEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('epsEredmenyCtrl').value;

    return this.epsEredmeny;
  }

  /**
   * Getter $epsRiziko
   * @return {number}
   */
  public get $epsRiziko(): number {

    this.epsRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('epsRizikoCtrl').value;

    return this.epsRiziko;
  }

  /**
   * Getter $piaciKapEredmeny
   * @return {string}
   */
  public get $piaciKapEredmeny(): string {

    this.piaciKapEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('piaciKapEredmenyCtrl').value;

    return this.piaciKapEredmeny;
  }

  /**
   * Getter $piaciKapRiziko
   * @return {number}
   */
  public get $piaciKapRiziko(): number {

    this.piaciKapRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('piaciKapRizikoCtrl').value;

    return this.piaciKapRiziko;
  }

  /**
   * Getter $hitelBesorolasEredmeny
   * @return {string}
   */
  public get $hitelBesorolasEredmeny(): string {

    this.hitelBesorolasEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('hitelBesorolasEredmenyCtrl').value;

    return this.hitelBesorolasEredmeny;
  }

  /**
   * Getter $hitelBesorolasRiziko
   * @return {number}
   */
  public get $hitelBesorolasRiziko(): number {

    this.hitelBesorolasRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('hitelBesorolasRizikoCtrl').value;

    return this.hitelBesorolasRiziko;
  }

  /**
   * Getter $tobbsegiTulajEredmeny
   * @return {string}
   */
  public get $tobbsegiTulajEredmeny(): string {

    this.tobbsegiTulajEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('tobbsegiTulajEredmenyCtrl').value;

    return this.tobbsegiTulajEredmeny;
  }

  /**
   * Getter $tobbsegiTulajRiziko
   * @return {number}
   */
  public get $tobbsegiTulajRiziko(): number {

    this.tobbsegiTulajRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('tobbsegiTulajRizikoCtrl').value;

    return this.tobbsegiTulajRiziko;
  }

  /**
   * Getter $cegInfoEredmeny
   * @return {string}
   */
  public get $cegInfoEredmeny(): string {

    this.cegInfoEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('cegInfoEredmenyCtrl').value;

    return this.cegInfoEredmeny;
  }

  /**
   * Getter $cegInfoRiziko
   * @return {number}
   */
  public get $cegInfoRiziko(): number {

    this.cegInfoRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('cegInfoRizikoCtrl').value;

    return this.cegInfoRiziko;
  }

  /**
   * Getter $termekInfoEredmeny
   * @return {string}
   */
  public get $termekInfoEredmeny(): string {

    this.termekInfoEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('termekInfoEredmenyCtrl').value;

    return this.termekInfoEredmeny;
  }

  /**
   * Getter $termekInfoRiziko
   * @return {number}
   */
  public get $termekInfoRiziko(): number {

    this.termekInfoRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('termekInfoRizikoCtrl').value;

    return this.termekInfoRiziko;
  }

  /**
   * Getter $kutatasFejlesztesEredmeny
   * @return {string}
   */
  public get $kutatasFejlesztesEredmeny(): string {

    this.kutatasFejlesztesEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('kutFejEredmenyCtrl').value;

    return this.kutatasFejlesztesEredmeny;
  }

  /**
   * Getter $kutatasFejlesztesRiziko
   * @return {number}
   */
  public get $kutatasFejlesztesRiziko(): number {

    this.kutatasFejlesztesRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('kutFejRizikoCtrl').value;

    return this.kutatasFejlesztesRiziko;
  }

  /**
   * Getter $immaterialisEredmeny
   * @return {string}
   */
  public get $immaterialisEredmeny(): string {

    this.immaterialisEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('immaterialisEredmenyCtrl').value;

    return this.immaterialisEredmeny;
  }

  /**
   * Getter $immaterialisRiziko
   * @return {number}
   */
  public get $immaterialisRiziko(): number {

    this.immaterialisRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('immaterialisRizikoCtrl').value;

    return this.immaterialisRiziko;
  }

  /**
   * Getter $egyebEredmeny
   * @return {string}
   */
  public get $egyebEredmeny(): string {

    this.egyebEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('egyebEredmenyCtrl').value;

    return this.egyebEredmeny;
  }

  /**
   * Getter $egyebRiziko
   * @return {number}
   */
  public get $egyebRiziko(): number {

    this.egyebRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('egyebRizikoCtrl').value;

    return this.egyebRiziko;
  }

  /**
   * Getter $szuksegesAllomanyEredmeny
   * @return {string}
   */
  public get $szuksegesAllomanyEredmeny(): string {

    this.szuksegesAllomanyEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('szuksegesAllEredmenyCtrl').value;

    return this.szuksegesAllomanyEredmeny;
  }

  /**
   * Getter $szuksegesAllomanyRiziko
   * @return {number}
   */
  public get $szuksegesAllomanyRiziko(): number {

    this.szuksegesAllomanyRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('szuksegesAllRizikoCtrl').value;

    return this.szuksegesAllomanyRiziko;
  }

  /**
   * Getter $elerhetoInfoEredmeny
   * @return {string}
   */
  public get $elerhetoInfoEredmeny(): string {

    this.elerhetoInfoEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('elerhetoInfoEredmenyCtrl').value;

    return this.elerhetoInfoEredmeny;
  }

  /**
   * Getter $elerhetoInfoRiziko
   * @return {number}
   */
  public get $elerhetoInfoRiziko(): number {

    this.elerhetoInfoRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('elerhetoInfoRizikoCtrl').value;

    return this.elerhetoInfoRiziko;
  }

  /**
   * Getter $osztalekEredmeny
   * @return {string}
   */
  public get $osztalekEredmeny(): string {

    this.osztalekEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('osztalekEredmenyCtrl').value;

    return this.osztalekEredmeny;
  }

  /**
   * Getter $osztalekRiziko
   * @return {number}
   */
  public get $osztalekRiziko(): number {

    this.osztalekRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('osztalekRizikoCtrl').value;

    return this.osztalekRiziko;
  }

  /**
   * Getter $vallalatTozsdeEredmeny
   * @return {string}
   */
  public get $vallalatTozsdeEredmeny(): string {

    this.vallalatTozsdeEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('vallTozsdeEredmenyCtrl').value;

    return this.vallalatTozsdeEredmeny;
  }

  /**
   * Getter $vallalatTozsdeRiziko
   * @return {number}
   */
  public get $vallalatTozsdeRiziko(): number {

    this.vallalatTozsdeRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('vallTozsdeRizikoCtrl').value;

    return this.vallalatTozsdeRiziko;
  }

  /**
   * Getter $fontosTechEredmeny
   * @return {string}
   */
  public get $fontosTechEredmeny(): string {

    this.fontosTechEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('fontosTechEredmenyCtrl').value;

    return this.fontosTechEredmeny;
  }

  /**
   * Getter $fontosTechRiziko
   * @return {number}
   */
  public get $fontosTechRiziko(): number {

    this.fontosTechRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('fontosTechRizikoCtrl').value;

    return this.fontosTechRiziko;
  }

  /**
   * Getter $voltCsucsonEredmeny
   * @return {string}
   */
  public get $voltCsucsonEredmeny(): string {

    this.voltCsucsonEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('voltCsucsonEredmenyCtrl').value;

    return this.voltCsucsonEredmeny;
  }

  /**
   * Getter $voltCsucsonRiziko
   * @return {number}
   */
  public get $voltCsucsonRiziko(): number {

    this.voltCsucsonRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('voltCsucsonRizikoCtrl').value;

    return this.voltCsucsonRiziko;
  }

  /**
   * Getter $fuzioEredmeny
   * @return {string}
   */
  public get $fuzioEredmeny(): string {

    this.fuzioEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('fuzioEredmenyCtrl').value;

    return this.fuzioEredmeny;
  }

  /**
   * Getter $fuzioRiziko
   * @return {number}
   */
  public get $fuzioRiziko(): number {

    this.fuzioRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('fuzioRizikoCtrl').value;

    return this.fuzioRiziko;
  }

  /**
   * Getter $betaEredmeny
   * @return {string}
   */
  public get $betaEredmeny(): string {

    this.betaEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('betaEredmenyCtrl').value;

    return this.betaEredmeny;
  }

  /**
   * Getter $betaRiziko
   * @return {number}
   */
  public get $betaRiziko(): number {

    this.betaRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('betaRizikoCtrl').value;

    return this.betaRiziko;
  }

  /**
   * Getter $vezMeEredmeny
   * @return {string}
   */
  public get $vezMeEredmeny(): string {
    this.vezMeEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('vezMeEredmenyCtrl').value;

    return this.vezMeEredmeny;
  }

  /**
   * Getter $vezMeRiziko
   * @return {number}
   */
  public get $vezMeRiziko(): number {

    this.vezMeRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('vezMeRizikoCtrl').value;

    return this.vezMeRiziko;
  }

  /**
   * Getter $voltReszvenyKiEredmeny
   * @return {string}
   */
  public get $ujReszvenyKiEredmeny(): string {

    this.ujReszvenyKiEredmeny = this.vallVizsgKritGroup.get('kriteriumok').get('ujReszvenyKiEredmenyCtrl').value;

    return this.ujReszvenyKiEredmeny;
  }

  /**
   * Getter $voltReszvenyKiRiziko
   * @return {number}
   */
  public get $ujReszvenyKiRiziko(): number {

    this.ujReszvenyKiRiziko = this.vallVizsgKritGroup.get('kriteriumok').get('ujReszvenyKiRizikoCtrl').value;

    return this.ujReszvenyKiRiziko;
  }


  /**
   * Setter $reszvenyEredmeny
   * @param {string} value
   */
  public set $reszvenyEredmeny(value: string) {

    this.reszvenyEredmeny = value;
  }

  /**
   * Setter $reszvenyRiziko
   * @param {number} value
   */
  public set $reszvenyRiziko(value: number) {

    this.reszvenyRiziko = value;
  }

  /**
   * Setter $konyvEredmeny
   * @param {string} value
   */
  public set $konyvEredmeny(value: string) {
    this.konyvEredmeny = value;
  }

  /**
   * Setter $konyvRiziko
   * @param {number} value
   */
  public set $konyvRiziko(value: number) {
    this.konyvRiziko = value;
  }

  /**
   * Setter $epsEredmeny
   * @param {string} value
   */
  public set $epsEredmeny(value: string) {
    this.epsEredmeny = value;
  }

  /**
   * Setter $epsRiziko
   * @param {number} value
   */
  public set $epsRiziko(value: number) {
    this.epsRiziko = value;
  }

  /**
   * Setter $piaciKapEredmeny
   * @param {string} value
   */
  public set $piaciKapEredmeny(value: string) {
    this.piaciKapEredmeny = value;
  }

  /**
   * Setter $piaciKapRiziko
   * @param {number} value
   */
  public set $piaciKapRiziko(value: number) {
    this.piaciKapRiziko = value;
  }

  /**
   * Setter $hitelBesorolasEredmeny
   * @param {string} value
   */
  public set $hitelBesorolasEredmeny(value: string) {
    this.hitelBesorolasEredmeny = value;
  }

  /**
   * Setter $hitelBesorolasRiziko
   * @param {number} value
   */
  public set $hitelBesorolasRiziko(value: number) {
    this.hitelBesorolasRiziko = value;
  }

  /**
   * Setter $tobbsegiTulajEredmeny
   * @param {string} value
   */
  public set $tobbsegiTulajEredmeny(value: string) {
    this.tobbsegiTulajEredmeny = value;
  }

  /**
   * Setter $tobbsegiTulajRiziko
   * @param {number} value
   */
  public set $tobbsegiTulajRiziko(value: number) {
    this.tobbsegiTulajRiziko = value;
  }

  /**
   * Setter $cegInfoEredmeny
   * @param {string} value
   */
  public set $cegInfoEredmeny(value: string) {
    this.cegInfoEredmeny = value;
  }

  /**
   * Setter $cegInfoRiziko
   * @param {number} value
   */
  public set $cegInfoRiziko(value: number) {
    this.cegInfoRiziko = value;
  }

  /**
   * Setter $termekInfoEredmeny
   * @param {string} value
   */
  public set $termekInfoEredmeny(value: string) {
    this.termekInfoEredmeny = value;
  }

  /**
   * Setter $termekInfoRiziko
   * @param {number} value
   */
  public set $termekInfoRiziko(value: number) {
    this.termekInfoRiziko = value;
  }

  /**
   * Setter $kutatasFejlesztesEredmeny
   * @param {string} value
   */
  public set $kutatasFejlesztesEredmeny(value: string) {
    this.kutatasFejlesztesEredmeny = value;
  }

  /**
   * Setter $kutatasFejlesztesRiziko
   * @param {number} value
   */
  public set $kutatasFejlesztesRiziko(value: number) {
    this.kutatasFejlesztesRiziko = value;
  }

  /**
   * Setter $immaterialisEredmeny
   * @param {string} value
   */
  public set $immaterialisEredmeny(value: string) {
    this.immaterialisEredmeny = value;
  }

  /**
   * Setter $immaterialisRiziko
   * @param {number} value
   */
  public set $immaterialisRiziko(value: number) {
    this.immaterialisRiziko = value;
  }

  /**
   * Setter $egyebEredmeny
   * @param {string} value
   */
  public set $egyebEredmeny(value: string) {
    this.egyebEredmeny = value;
  }

  /**
   * Setter $egyebRiziko
   * @param {number} value
   */
  public set $egyebRiziko(value: number) {
    this.egyebRiziko = value;
  }

  /**
   * Setter $szuksegesAllomanyEredmeny
   * @param {string} value
   */
  public set $szuksegesAllomanyEredmeny(value: string) {
    this.szuksegesAllomanyEredmeny = value;
  }

  /**
   * Setter $szuksegesAllomanyRiziko
   * @param {number} value
   */
  public set $szuksegesAllomanyRiziko(value: number) {
    this.szuksegesAllomanyRiziko = value;
  }

  /**
   * Setter $elerhetoInfoEredmeny
   * @param {string} value
   */
  public set $elerhetoInfoEredmeny(value: string) {
    this.elerhetoInfoEredmeny = value;
  }

  /**
   * Setter $elerhetoInfoRiziko
   * @param {number} value
   */
  public set $elerhetoInfoRiziko(value: number) {
    this.elerhetoInfoRiziko = value;
  }

  /**
   * Setter $osztalekEredmeny
   * @param {string} value
   */
  public set $osztalekEredmeny(value: string) {
    this.osztalekEredmeny = value;
  }

  /**
   * Setter $osztalekRiziko
   * @param {number} value
   */
  public set $osztalekRiziko(value: number) {
    this.osztalekRiziko = value;
  }

  /**
   * Setter $vallalatTozsdeEredmeny
   * @param {string} value
   */
  public set $vallalatTozsdeEredmeny(value: string) {
    this.vallalatTozsdeEredmeny = value;
  }

  /**
   * Setter $vallalatTozsdeRiziko
   * @param {number} value
   */
  public set $vallalatTozsdeRiziko(value: number) {
    this.vallalatTozsdeRiziko = value;
  }

  /**
   * Setter $fontosTechEredmeny
   * @param {string} value
   */
  public set $fontosTechEredmeny(value: string) {
    this.fontosTechEredmeny = value;
  }

  /**
   * Setter $fontosTechRiziko
   * @param {number} value
   */
  public set $fontosTechRiziko(value: number) {
    this.fontosTechRiziko = value;
  }

  /**
   * Setter $voltCsucsonEredmeny
   * @param {string} value
   */
  public set $voltCsucsonEredmeny(value: string) {
    this.voltCsucsonEredmeny = value;
  }

  /**
   * Setter $voltCsucsonRiziko
   * @param {number} value
   */
  public set $voltCsucsonRiziko(value: number) {
    this.voltCsucsonRiziko = value;
  }

  /**
   * Setter $fuzioEredmeny
   * @param {string} value
   */
  public set $fuzioEredmeny(value: string) {
    this.fuzioEredmeny = value;
  }

  /**
   * Setter $fuzioRiziko
   * @param {number} value
   */
  public set $fuzioRiziko(value: number) {
    this.fuzioRiziko = value;
  }

  /**
   * Setter $betaEredmeny
   * @param {string} value
   */
  public set $betaEredmeny(value: string) {
    this.betaEredmeny = value;
  }

  /**
   * Setter $betaRiziko
   * @param {number} value
   */
  public set $betaRiziko(value: number) {
    this.betaRiziko = value;
  }

  /**
   * Setter $vezMeEredmeny
   * @param {string} value
   */
  public set $vezMeEredmeny(value: string) {
    this.vezMeEredmeny = value;
  }

  /**
   * Setter $vezMeRiziko
   * @param {number} value
   */
  public set $vezMeRiziko(value: number) {
    this.vezMeRiziko = value;
  }

  /**
   * Setter $voltReszvenyKiEredmeny
   * @param {string} value
   */
  public set $ujReszvenyKiEredmeny(value: string) {
    this.ujReszvenyKiEredmeny = value;
  }

  /**
   * Setter $voltReszvenyKiRiziko
   * @param {number} value
   */
  public set $ujReszvenyKiRiziko(value: number) {
    this.ujReszvenyKiRiziko = value;
  }




  constructor(public dialog: MatDialog, private _fb: FormBuilder,
    private vallalatVizsgKritService: VallalatVizsgKriteriumokService,
    private messageService: MessageService) { }

  eredmeny: string;

  ngOnInit(): void {
    this.createFormGroup();
    this.onChanges();
  }

  ngAfterViewInit(): void {
    this.loadVallKock();
  }

  loadVallKock() {
    let vallKock = this.vallalatVizsgKritService.$updatedAdatok;

    this.patchFormGroup(vallKock);

  }

  patchFormGroup(valallatKrit: VallalatKockazatElemzes) {
    this.vallVizsgKritGroup.patchValue(
      {
        kriteriumok: {
          reszvenyEredmenyCtrl: valallatKrit.$reszvenyEredmeny,
          reszvenyRizikoCtrl: valallatKrit.$reszvenyRiziko,

          konyvEredmenyCtrl: valallatKrit.$konyvEredmeny,
          konyvRizikoCtrl: valallatKrit.$konyvRiziko,

          epsEredmenyCtrl: valallatKrit.$epsEredmeny,
          epsRizikoCtrl: valallatKrit.$epsRiziko,

          piaciKapEredmenyCtrl: valallatKrit.$piaciKapEredmeny,
          piaciKapRizikoCtrl: valallatKrit.$piaciKapRiziko,

          hitelBesorolasEredmenyCtrl: valallatKrit.$hitelBesorolasEredmeny,
          hitelBesorolasRizikoCtrl: valallatKrit.$hitelBesorolasRiziko,

          tobbsegiTulajEredmenyCtrl: valallatKrit.$tobbsegiTulajEredmeny,
          tobbsegiTulajRizikoCtrl: valallatKrit.$tobbsegiTulajRiziko,

          cegInfoEredmenyCtrl: valallatKrit.$cegInfoEredmeny,
          cegInfoRizikoCtrl: valallatKrit.$cegInfoRiziko,

          termekInfoEredmenyCtrl: valallatKrit.$termekInfoEredmeny,
          termekInfoRizikoCtrl: valallatKrit.$termekInfoRiziko,

          kutFejEredmenyCtrl: valallatKrit.$kutatasFejlesztesEredmeny,
          kutFejRizikoCtrl: valallatKrit.$kutatasFejlesztesRiziko,

          immaterialisEredmenyCtrl: valallatKrit.$immaterialisEredmeny,
          immaterialisRizikoCtrl: valallatKrit.$immaterialisRiziko,

          egyebEredmenyCtrl: valallatKrit.$egyebEredmeny,
          egyebRizikoCtrl: valallatKrit.$egyebRiziko,

          szuksegesAllEredmenyCtrl: valallatKrit.$szuksegesAllomanyEredmeny,
          szuksegesAllRizikoCtrl: valallatKrit.$szuksegesAllomanyRiziko,

          elerhetoInfoEredmenyCtrl: valallatKrit.$elerhetoInfoEredmeny,
          elerhetoInfoRizikoCtrl: valallatKrit.$elerhetoInfoRiziko,

          osztalekEredmenyCtrl: valallatKrit.$osztalekEredmeny,
          osztalekRizikoCtrl: valallatKrit.$osztalekRiziko,

          vallTozsdeEredmenyCtrl: valallatKrit.$vallalatTozsdeEredmeny,
          vallTozsdeRizikoCtrl: valallatKrit.$vallalatTozsdeRiziko,

          fontosTechEredmenyCtrl: valallatKrit.$fontosTechEredmeny,
          fontosTechRizikoCtrl: valallatKrit.$fontosTechRiziko,

          voltCsucsonEredmenyCtrl: valallatKrit.$voltCsucsonEredmeny,
          voltCsucsonRizikoCtrl: valallatKrit.$voltCsucsonRiziko,

          fuzioEredmenyCtrl: valallatKrit.$fuzioEredmeny,
          fuzioRizikoCtrl: valallatKrit.$fuzioRiziko,

          betaEredmenyCtrl: valallatKrit.$betaEredmeny,
          betaRizikoCtrl: valallatKrit.$betaRiziko,

          vezMeEredmenyCtrl: valallatKrit.$vezMeEredmeny,
          vezMeRizikoCtrl: valallatKrit.$vezMeRiziko,

          ujReszvenyKiEredmenyCtrl: valallatKrit.$ujReszvenyKiEredmeny,
          ujReszvenyKiRizikoCtrl: valallatKrit.$ujReszvenyKiRiziko
        }
      }
    )

  }

  createFormGroup() {
    this.vallVizsgKritGroup = this._fb.group({
      kriteriumok: this._fb.group({

        reszvenyEredmenyCtrl: new FormControl(''),
        reszvenyRizikoCtrl: new FormControl(this.reszveny, [Validators.required, Validators.max(5), Validators.min(1)]),

        konyvEredmenyCtrl: new FormControl(''),
        konyvRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        epsEredmenyCtrl: new FormControl(''),
        epsRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        piaciKapEredmenyCtrl: new FormControl(''),
        piaciKapRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        hitelBesorolasEredmenyCtrl: new FormControl(''),
        hitelBesorolasRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        tobbsegiTulajEredmenyCtrl: new FormControl(''),
        tobbsegiTulajRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        cegInfoEredmenyCtrl: new FormControl(''),
        cegInfoRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        termekInfoEredmenyCtrl: new FormControl(''),
        termekInfoRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        kutFejEredmenyCtrl: new FormControl(''),
        kutFejRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        immaterialisEredmenyCtrl: new FormControl(''),
        immaterialisRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        egyebEredmenyCtrl: new FormControl(''),
        egyebRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        szuksegesAllEredmenyCtrl: new FormControl(''),
        szuksegesAllRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        elerhetoInfoEredmenyCtrl: new FormControl(''),
        elerhetoInfoRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        osztalekEredmenyCtrl: new FormControl(''),
        osztalekRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        vallTozsdeEredmenyCtrl: new FormControl(''),
        vallTozsdeRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        fontosTechEredmenyCtrl: new FormControl(''),
        fontosTechRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        voltCsucsonEredmenyCtrl: new FormControl(''),
        voltCsucsonRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        fuzioEredmenyCtrl: new FormControl(''),
        fuzioRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        betaEredmenyCtrl: new FormControl(''),
        betaRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        vezMeEredmenyCtrl: new FormControl(''),
        vezMeRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),

        ujReszvenyKiEredmenyCtrl: new FormControl(''),
        ujReszvenyKiRizikoCtrl: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)]),
      }),
      alias: this._fb.array([])
    })

  }

  onChanges() {
    // Részvény
    this.vallVizsgKritGroup.get('kriteriumok').get('reszvenyEredmenyCtrl').valueChanges.subscribe(val => {
      this.reszveny = val;
    });


    // Könyv
    this.vallVizsgKritGroup.get('kriteriumok').get('konyvEredmenyCtrl').valueChanges.subscribe(val => {
      this.konyv = val;
    });

    // EPS
    this.vallVizsgKritGroup.get('kriteriumok').get('epsEredmenyCtrl').valueChanges.subscribe(val => {
      this.eps = val;
    });

    // Piaci kapi.
    this.vallVizsgKritGroup.get('kriteriumok').get('piaciKapEredmenyCtrl').valueChanges.subscribe(val => {
      this.piaci = val;
    });

    //Hitel
    this.vallVizsgKritGroup.get('kriteriumok').get('hitelBesorolasEredmenyCtrl').valueChanges.subscribe(val => {
      this.hitel = val;
    });


    // Többség
    this.vallVizsgKritGroup.get('kriteriumok').get('tobbsegiTulajEredmenyCtrl').valueChanges.subscribe(val => {
      this.tobbseg = val;
    });

    // Céginfo
    this.vallVizsgKritGroup.get('kriteriumok').get('cegInfoEredmenyCtrl').valueChanges.subscribe(val => {
      this.cegInfo = val;
    });
    // Termékinfo
    this.vallVizsgKritGroup.get('kriteriumok').get('termekInfoEredmenyCtrl').valueChanges.subscribe(val => {
      this.termekInfo = val;
    });

    // KF
    this.vallVizsgKritGroup.get('kriteriumok').get('kutFejEredmenyCtrl').valueChanges.subscribe(val => {
      this.kf = val;
    });

    // Imm.
    this.vallVizsgKritGroup.get('kriteriumok').get('immaterialisEredmenyCtrl').valueChanges.subscribe(val => {
      this.imm = val;
    });

    // Egyéb
    this.vallVizsgKritGroup.get('kriteriumok').get('egyebEredmenyCtrl').valueChanges.subscribe(val => {
      this.egyeb = val;
    });

    // Szükséges
    this.vallVizsgKritGroup.get('kriteriumok').get('szuksegesAllEredmenyCtrl').valueChanges.subscribe(val => {
      this.szukseges = val;
    });


    this.vallVizsgKritGroup.get('kriteriumok').get('elerhetoInfoEredmenyCtrl').valueChanges.subscribe(val => {
      this.elerheto = val;
    });


    this.vallVizsgKritGroup.get('kriteriumok').get('osztalekEredmenyCtrl').valueChanges.subscribe(val => {
      this.osztalek = val;
    });


    this.vallVizsgKritGroup.get('kriteriumok').get('vallTozsdeEredmenyCtrl').valueChanges.subscribe(val => {
      this.tozsde = val;
    });


    this.vallVizsgKritGroup.get('kriteriumok').get('fontosTechEredmenyCtrl').valueChanges.subscribe(val => {
      this.fontos = val;
    });


    this.vallVizsgKritGroup.get('kriteriumok').get('voltCsucsonEredmenyCtrl').valueChanges.subscribe(val => {
      this.csucs = val;
    });


    this.vallVizsgKritGroup.get('kriteriumok').get('fuzioEredmenyCtrl').valueChanges.subscribe(val => {
      this.fuzio = val;
    });


    this.vallVizsgKritGroup.get('kriteriumok').get('betaEredmenyCtrl').valueChanges.subscribe(val => {
      this.beta = val;
    });


    this.vallVizsgKritGroup.get('kriteriumok').get('vezMeEredmenyCtrl').valueChanges.subscribe(val => {
      this.vezeto = val;
    });


    this.vallVizsgKritGroup.get('kriteriumok').get('ujReszvenyKiEredmenyCtrl').valueChanges.subscribe(val => {
      this.ujReszveny = val;
    });


  }

  // open dialogs

  openReszvenyDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',
      data: { eredmeny: this.reszveny, megnevezes: "Részvény diagramm" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reszveny = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('reszvenyEredmenyCtrl').setValue(this.reszveny);
        this.inputReszvenyValue.nativeElement.value = this.reszveny;
      }
    });
  }

  openKonyvDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',
      data: { eredmeny: this.konyv, megnevezes: "Könyv szerinti érték / árfolyam" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.konyv = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('konyvEredmenyCtrl').setValue(this.konyv);
        this.inputKonyv.nativeElement.value = result;
      }
    });
  }

  openEPSDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.eps, megnevezes: "Egy részvényre jutó eredmény (EPS)" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.eps = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('epsEredmenyCtrl').setValue(this.eps);
        this.inputEPS.nativeElement.value = result;
      }
    });
  }

  openPiaciDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.piaci, megnevezes: "Piaci kapitalizáció" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.piaci = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('piaciKapEredmenyCtrl').setValue(this.piaci);
        this.inputPiaci.nativeElement.value = result;
      }

    });
  }

  openHitelDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',
      data: { eredmeny: this.hitel, megnevezes: "Hitelbesorolás" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.hitel = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('hitelBesorolasEredmenyCtrl').setValue(this.hitel);
        this.inputHitel.nativeElement.value = result;
      }
    });
  }

  openTobbsegDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.tobbseg, megnevezes: "Többségi tulajdonosok" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tobbseg = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('tobbsegiTulajEredmenyCtrl').setValue(this.tobbseg);
        this.inputTobbseg.nativeElement.value = result;
      }
    });
  }

  openCegInfoDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.cegInfo, megnevezes: "Céginformáció" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cegInfo = result;
        this.inputCegInfo.nativeElement.value = result;
      }
      this.vallVizsgKritGroup.get('kriteriumok').get('cegInfoEredmenyCtrl').setValue(this.cegInfo);
    });
  }

  openTermekInfoDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.termekInfo, megnevezes: "Termékinformáció" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.termekInfo = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('termekInfoEredmenyCtrl').setValue(this.termekInfo);
        this.inputTermekInfo.nativeElement.value = result;
      }

      console.log(result);
    });
  }

  openKFDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.kf, megnevezes: "Kutatás / Fejlesztés" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.kf = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('kutFejEredmenyCtrl').setValue(this.kf);
        this.inputKF.nativeElement.value = result;
      }
    });
  }

  openImmDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.imm, megnevezes: "Immateriális javak" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.imm = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('immaterialisEredmenyCtrl').setValue(this.imm);
        this.inputImm.nativeElement.value = result;
      }
    });
  }

  openEgyebDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.egyeb, megnevezes: "Egyéb bevétel / kiadás" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.egyeb = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('egyebEredmenyCtrl').setValue(this.egyeb);
        this.inputEgyeb.nativeElement.value = result;
      }
    });
  }

  openSzuksegesDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.szukseges, megnevezes: "Szükséges munkerőállomány" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.szukseges = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('szuksegesAllEredmenyCtrl').setValue(this.szukseges);
        this.inputSzukseges.nativeElement.value = result;
      }
    });
  }

  openElerhetoDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.elerheto, megnevezes: "Elérhető információk" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.elerheto = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('elerhetoInfoEredmenyCtrl').setValue(this.elerheto);
        this.inputElerheto.nativeElement.value = result;
      }

      console.log(result);
    });
  }

  openOsztalekDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.osztalek, megnevezes: "Osztalékfizetés" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.osztalek = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('osztalekEredmenyCtrl').setValue(this.osztalek);
        this.inputOsztalek.nativeElement.value = result;
      }
    });
  }

  openTozsdeDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.tozsde, megnevezes: "Vállallat a tőzsdén(éve)" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tozsde = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('vallTozsdeEredmenyCtrl').setValue(this.tozsde);
        this.inputTozsde.nativeElement.value = result;
      }

      console.log(result);
    });
  }

  openFontosDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.fontos, megnevezes: "Fontos technikai szint" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fontos = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('fontosTechEredmenyCtrl').setValue(this.fontos);
        this.inputFontos.nativeElement.value = result;
      }

    });
  }

  openCsucsDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.csucs, megnevezes: "Volt-e már csúcson és mélyponton előzőleg" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.csucs = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('voltCsucsonEredmenyCtrl').setValue(this.csucs);
        this.inputCsucs.nativeElement.value = result;
      }
    });
  }

  openFuzioDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.fuzio, megnevezes: "Fúzió" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fuzio = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('fuzioEredmenyCtrl').setValue(this.fuzio);
        this.inputFuzio.nativeElement.value = result;
      }

    });
  }

  openBetaDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.beta, megnevezes: "BÉTA" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.beta = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('betaEredmenyCtrl').setValue(this.beta);
        this.inputBeta.nativeElement.value = result;
      }
    });
  }

  openVezetoDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.vezeto, megnevezes: "Vezetőség/Menedzsment" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.vezeto = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('vezMeEredmenyCtrl').setValue(this.vezeto);
        this.inputVezeto.nativeElement.value = result;
      }
    });
  }

  openUjReszvenyDialog(): void {
    const dialogRef = this.dialog.open(AddEredmenyDialogComponent, {
      width: '40%',

      data: { eredmeny: this.ujReszveny, megnevezes: "Új részvény kibocsátások" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ujReszveny = result;
        this.vallVizsgKritGroup.get('kriteriumok').get('ujReszvenyKiEredmenyCtrl').setValue(this.ujReszveny);
        this.inputUjReszveny.nativeElement.value = result;
      }
    });
  }
  // GETTERS

  /**
   * Getter $reszveny
   * @return {string }
   */
  public get $reszveny(): string {
    return this.reszveny;
  }

  /**
   * Getter $konyv
   * @return {string }
   */
  public get $konyv(): string {
    return this.konyv;
  }

  /**
   * Getter $eps
   * @return {string }
   */
  public get $eps(): string {
    return this.eps;
  }

  /**
   * Getter $piaci
   * @return {string }
   */
  public get $piaci(): string {
    return this.piaci;
  }

  /**
   * Getter $hitel
   * @return {string }
   */
  public get $hitel(): string {
    return this.hitel;
  }

  /**
   * Getter $tobbseg
   * @return {string }
   */
  public get $tobbseg(): string {
    return this.tobbseg;
  }

  /**
   * Getter $cegInfo
   * @return {string }
   */
  public get $cegInfo(): string {
    return this.cegInfo;
  }

  /**
   * Getter $termekInfo
   * @return {string }
   */
  public get $termekInfo(): string {
    return this.termekInfo;
  }

  /**
   * Getter $kf
   * @return {string }
   */
  public get $kf(): string {
    return this.kf;
  }

  /**
   * Getter $imm
   * @return {string }
   */
  public get $imm(): string {
    return this.imm;
  }

  /**
   * Getter $egyeb
   * @return {string }
   */
  public get $egyeb(): string {
    return this.egyeb;
  }

  /**
   * Getter $szukseges
   * @return {string }
   */
  public get $szukseges(): string {
    return this.szukseges;
  }

  /**
   * Getter $elehreto
   * @return {string }
   */
  public get $elerheto(): string {
    return this.elerheto;
  }

  /**
   * Getter $osztalek
   * @return {string }
   */
  public get $osztalek(): string {
    return this.osztalek;
  }

  /**
   * Getter $tozsde
   * @return {string }
   */
  public get $tozsde(): string {
    return this.tozsde;
  }

  /**
   * Getter $fontos
   * @return {string }
   */
  public get $fontos(): string {
    return this.fontos;
  }

  /**
   * Getter $csucs
   * @return {string }
   */
  public get $csucs(): string {
    return this.csucs;
  }

  /**
   * Getter $fuzio
   * @return {string }
   */
  public get $fuzio(): string {
    return this.fuzio;
  }

  /**
   * Getter $beta
   * @return {string }
   */
  public get $beta(): string {
    return this.beta;
  }

  /**
   * Getter $vezeto
   * @return {string }
   */
  public get $vezeto(): string {
    return this.vezeto;
  }

  /**
   * Getter $ujReszveny
   * @return {string }
   */
  public get $ujReszveny(): string {
    return this.ujReszveny;
  }


  // SETTERS

  /**
   * Setter $reszveny
   * @param {string } value
   */
  public set $reszveny(value: string) {
    this.reszveny = value;
  }

  /**
   * Setter $konyv
   * @param {string } value
   */
  public set $konyv(value: string) {
    this.konyv = value;
  }

  /**
   * Setter $eps
   * @param {string } value
   */
  public set $eps(value: string) {
    this.eps = value;
  }

  /**
   * Setter $piaci
   * @param {string } value
   */
  public set $piaci(value: string) {
    this.piaci = value;
  }

  /**
   * Setter $hitel
   * @param {string } value
   */
  public set $hitel(value: string) {
    this.hitel = value;
  }

  /**
   * Setter $tobbseg
   * @param {string } value
   */
  public set $tobbseg(value: string) {
    this.tobbseg = value;
  }

  /**
   * Setter $cegInfo
   * @param {string } value
   */
  public set $cegInfo(value: string) {
    this.cegInfo = value;
  }

  /**
   * Setter $termekInfo
   * @param {string } value
   */
  public set $termekInfo(value: string) {
    this.termekInfo = value;
  }

  /**
   * Setter $kf
   * @param {string } value
   */
  public set $kf(value: string) {
    this.kf = value;
  }

  /**
   * Setter $imm
   * @param {string } value
   */
  public set $imm(value: string) {
    this.imm = value;
  }

  /**
   * Setter $egyeb
   * @param {string } value
   */
  public set $egyeb(value: string) {
    this.egyeb = value;
  }

  /**
   * Setter $szukseges
   * @param {string } value
   */
  public set $szukseges(value: string) {
    this.szukseges = value;
  }

  /**
   * Setter $elehreto
   * @param {string } value
   */
  public set $elerheto(value: string) {
    this.elerheto = value;
  }

  /**
   * Setter $osztalek
   * @param {string } value
   */
  public set $osztalek(value: string) {
    this.osztalek = value;
  }

  /**
   * Setter $tozsde
   * @param {string } value
   */
  public set $tozsde(value: string) {
    this.tozsde = value;
  }

  /**
   * Setter $fontos
   * @param {string } value
   */
  public set $fontos(value: string) {
    this.fontos = value;
  }

  /**
   * Setter $csucs
   * @param {string } value
   */
  public set $csucs(value: string) {
    this.csucs = value;
  }

  /**
   * Setter $fuzio
   * @param {string } value
   */
  public set $fuzio(value: string) {
    this.fuzio = value;
  }

  /**
   * Setter $beta
   * @param {string } value
   */
  public set $beta(value: string) {
    this.beta = value;
  }

  /**
   * Setter $vezeto
   * @param {string } value
   */
  public set $vezeto(value: string) {
    this.vezeto = value;
  }

  /**
   * Setter $ujReszveny
   * @param {string } value
   */
  public set $ujReszveny(value: string) {
    this.ujReszveny = value;
  }

  createVallKockazatElemzes() {

    this.vallalatVizsgKritService.createVallalatKockazatElemzes(
      this.$reszvenyEredmeny, this.$reszvenyRiziko, this.$konyvEredmeny, this.$konyvRiziko,
      this.$epsEredmeny, this.$epsRiziko, this.$piaciKapEredmeny, this.$piaciKapRiziko,
      this.$hitelBesorolasEredmeny, this.$hitelBesorolasRiziko,
      this.$tobbsegiTulajEredmeny, this.$tobbsegiTulajRiziko, this.$cegInfoEredmeny,
      this.$cegInfoRiziko, this.$termekInfoEredmeny, this.$termekInfoRiziko,
      this.$kutatasFejlesztesEredmeny, this.$kutatasFejlesztesRiziko,
      this.$immaterialisEredmeny, this.$immaterialisRiziko, this.$egyebEredmeny, this.$egyebRiziko,
      this.$szuksegesAllomanyEredmeny, this.$szuksegesAllomanyRiziko,
      this.$elerhetoInfoEredmeny, this.$elerhetoInfoRiziko, this.$osztalekEredmeny,
      this.$osztalekRiziko, this.$vallalatTozsdeEredmeny, this.$vallalatTozsdeRiziko,
      this.$fontosTechEredmeny, this.$fontosTechRiziko, this.$voltCsucsonEredmeny, this.$voltCsucsonRiziko,
      this.$fuzioEredmeny, this.$fuzioRiziko, this.$betaEredmeny, this.$betaRiziko,
      this.$vezMeEredmeny, this.$vezMeRiziko, this.$ujReszvenyKiEredmeny, this.$ujReszvenyKiRiziko
    )
  }

  getVallalatKockazatelemzes() {
    this.vallalatVizsgKritService.getVallalatiKockazatElemzes().subscribe(
      adatok => {
        this.vallalatKockazatelemzes = adatok;
      }
    )
  }

  redirectToBlog() {
    let url = "https://blog.sb-investing.com/vallalatok-elemzese/";
    window.open(url, "_blank");
  }

  public vallVizsgKritSubmit() {
    this.createVallKockazatElemzes();
    this.getVallalatKockazatelemzes();
    this.filledSaveKockEmitter.emit(this.vallalatKockazatelemzes);

    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Vállalati kockázat elemzés sikeresen hozzáadva!' });

    console.log(this.vallalatKockazatelemzes);

  }
}

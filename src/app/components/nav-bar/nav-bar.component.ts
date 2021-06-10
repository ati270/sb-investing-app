import { AppUserState } from './../store/reszveny/state';
import { Component, OnInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoreInfoDialogComponent } from '../dialogs/more-info-dialog/more-info-dialog.component';
import { interval, Observable, Subscription } from 'rxjs';
import { Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user/user.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  //@select() logined_user;

  @Input() mainPanel: ElementRef;
  private userObs: Observable<User>;
  userName: Observable<String>;
  name: string;

  constructor(public dialog: MatDialog, private router: Router, private store: Store<AppUserState>) { }

  ngOnInit(): void {
    /*this.user = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));*/


    //this.name = this.user.username;
    //console.log(this.logined_user);
    this.userName = this.store.select(store => store.user.$firstName);
  }

  goToReszvenyek(){
    document.getElementById('smooth').scrollIntoView({behavior:"smooth"});
  }

  /*goToJumbotron(){
    document.getElementById('logo').scrollIntoView({behavior:"smooth"});

  }*/

  redirectToBlogChallenge(){
    let url = "https://blog.sb-investing.com/befektetesi-challange-2/";
    window.open(url, "_blank");
  }

  redirectToBlogAlapok(){
    let url = "https://blog.sb-investing.com/alapok/";
    window.open(url, "_blank");
  }

  redirectToBlogStrategia(){
    let url = "https://blog.sb-investing.com/segedanyag-a-weboldalhoz/";
    window.open(url, "_blank");
  }

  redirectToBlogRolunk(){
    let url = "https://blog.sb-investing.com/rolam/";
    window.open(url, "_blank");
  }

  sub() {
    console.log(this.mainPanel);
    this.mainPanel.nativeElement.scrollIntoView();


  }

  openKezddIttPage() {
    let url = "http://blog.sb-investing.com/kezdj-itt";
    window.open(url, "_blank");
  }

}

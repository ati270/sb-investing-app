import { Component, OnInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoreInfoDialogComponent } from '../dialogs/more-info-dialog/more-info-dialog.component';
import { interval, Subscription } from 'rxjs';
import { Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  //@select() logined_user;

  @Input() mainPanel: ElementRef;
  user: User;
  name: string;

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    /*this.user = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));*/


    //this.name = this.user.username;
    //console.log(this.logined_user);
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MoreInfoDialogComponent } from './components/dialogs/more-info-dialog/more-info-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  title = 'investment-gui';

  constructor(private router: Router) {}
  
  ngOnInit(){

  }

 
  
}

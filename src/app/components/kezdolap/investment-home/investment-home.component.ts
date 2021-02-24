import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-investment-home',
  templateUrl: './investment-home.component.html',
  styleUrls: ['./investment-home.component.scss']
})
export class InvestmentHomeComponent implements OnInit {

  loginFormGroup: FormGroup;
  user: User = new User();
  invalid: boolean;


  constructor(private _fb: FormBuilder, private router: Router,
    private http: HttpClient,
    ) { }
    //private redux: NgRedux<IAppState>

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.loginFormGroup = this._fb.group({
      loginNameCtrl: new FormControl('', Validators.required),
      loginPasswCtrl: new FormControl('', Validators.required)
    })
  }

  loginSubmit() {
    this.router.navigateByUrl('/befektetes');

    /*const username = this.loginFormGroup.get('loginNameCtrl').value;
    let psw = this.loginFormGroup.get('loginPasswCtrl').value;
    console.log("username:" + username);
    console.log("psw: " + psw);

    const url = 'http://localhost:7000/api/users/' + username;

    this.http.get<User>(url).subscribe(data => {
      this.user = data;


      if (this.user.username == username) {
        console.log("SAJAT PSW: " + psw);
        console.log("PASSWORD:: " + this.user.password);
        if (this.user.password === psw) {
          console.log('login success');
          this.router.navigateByUrl('/befektetes', {
            state: {user: this.user}
          });
          this.invalid = false;

          // store user in redux
        }

        else {
          console.log('hibas jelszo');
          this.invalid = true;
        }
      }
      else {
        console.log("hibás felhasznalonev");
        this.invalid = true;
      }

    });*/
  }

}

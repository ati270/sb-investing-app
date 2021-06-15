import { LoaderService } from './../loader/loader-service.service';
import { AddUserAction } from './../../store/reszveny/actions';
import { Store } from '@ngrx/store';
import { sha1 } from '@angular/compiler/src/i18n/digest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { catchError, map, subscribeOn, tap, timeout } from 'rxjs/operators';
import CryptoJS from 'crypto-js';
import { AppUserState } from '../../store/reszveny/state';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-investment-home',
  templateUrl: './investment-home.component.html',
  styleUrls: ['./investment-home.component.scss']
})
export class InvestmentHomeComponent implements OnInit {

  loginFormGroup: FormGroup;
  regFormGroup: FormGroup;
  user: User = new User();
  invalid: boolean;
  registralt: boolean;
  activetabIndex: number;

  constructor(private _fb: FormBuilder, private router: Router,
    private http: HttpClient, private store: Store<AppUserState>, public loaderService: LoaderService
  ) { }
  //private redux: NgRedux<IAppState>

  ngOnInit(): void {
    this.createFormGroup();
    this.createRegFormGroup();
    this.registralt = false;
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }

  createFormGroup() {
    this.loginFormGroup = this._fb.group({
      loginNameCtrl: new FormControl('', [Validators.required, Validators.email]),
      loginPasswCtrl: new FormControl('', Validators.required)
    })
  }

  createRegFormGroup() {
    this.regFormGroup = this._fb.group({
      regEmailCtrl: new FormControl('', [Validators.required, Validators.email]),
      regPasswCtrl: new FormControl('', Validators.required),
      regFirstNameCtrl: new FormControl('', Validators.required),
      regLastNameCtrl: new FormControl('', Validators.required),
      regBirthDateCtrl: new FormControl('', Validators.required)

    })
  }

  // GET
  loginSubmit() {
    //this.router.navigateByUrl('/befektetes');

    const email = this.loginFormGroup.get('loginNameCtrl').value;
    let formPsw = this.loginFormGroup.get('loginPasswCtrl').value;
    const url = 'http://localhost:8080/users/user/' + email;
    let user: User = new User();
    const datepipe: DatePipe = new DatePipe('en-US')

    this.http.get(url)
      .pipe(
        timeout(3000)
      )
      .subscribe(value => {


        console.log(value);
        user.$id = value['id'];
        user.$firstName = value['firstName'];
        user.$lastName = value['lastName'];
        user.$birthDate = value['birthDate'];
        datepipe.transform(user.$birthDate, 'yyyy.MM.dd');
        user.$email = value['email'];
        user.$passw = value['passw'];
        user.$reszvenyek = value['reszvenyek'];

        let cryptoPsw = CryptoJS.SHA1(formPsw);

        let resultCryptoPsw = CryptoJS.enc.Hex.stringify(cryptoPsw);
        console.log(resultCryptoPsw);

        if (user.$passw === resultCryptoPsw) {
          this.store.dispatch(
            new AddUserAction(user)
          );
          this.router.navigateByUrl('/befektetes');
        }
        else {
          // error message
          console.log("hibás jelszó");
        }

        console.log(user)
        this.registralt = false;

      })



  }

  // POST
  regSubmit() {
    let postUser: User = new User();
    postUser.$email = this.regFormGroup.get('regEmailCtrl').value;
    postUser.$passw = this.regFormGroup.get('regPasswCtrl').value;
    postUser.$firstName = this.regFormGroup.get('regFirstNameCtrl').value;
    postUser.$lastName = this.regFormGroup.get('regLastNameCtrl').value;
    postUser.$birthDate = this.regFormGroup.get('regBirthDateCtrl').value;

    let cryptoPsw = CryptoJS.SHA1(postUser.$passw);

    let resultCryptoPsw = CryptoJS.enc.Hex.stringify(cryptoPsw);

    postUser.$passw = resultCryptoPsw;

    console.log(postUser);
    let postUrl = "http://localhost:8080/users/addUser";
    const body = JSON.stringify(postUser);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    this.http.post<User>(postUrl, body, httpOptions)
    .subscribe(data => {
        this.activetabIndex = 0;
        this.regFormGroup.reset();
        this.registralt = true;
    })
  }
}

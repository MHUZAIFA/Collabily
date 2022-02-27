import { StepperOrientation, StepperSelectionEvent, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from './CustomValidators';
import { Location } from '@angular/common';

export class Currency {
  cc: string;
  symbol: string;
  name: string;

  constructor(cc: string, symbol: string, name: string) {
    this.cc = cc;
    this.symbol = symbol;
    this.name = name;
  }
}

export class User {
  id: string;
  profilePic: string;
  username: string;
  email: string;
  password: string;
  currency: Currency;
  monthlyBudget: number;
  alertOn: number;
  notify: boolean;

  constructor(
    id: string,
    profilePic: string,
    username: string,
    email: string,
    password: string,
    currency: Currency,
    monthlyBudget: number,
    alertOn: number,
    notify: boolean
  ) {
    this.id = id;
    this.profilePic = profilePic;
    this.username = username;
    this.email = email;
    this.password = password;
    this.currency = currency;
    this.monthlyBudget = monthlyBudget;
    this.alertOn = alertOn;
    this.notify = notify;
  }
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.sass'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class RegistrationFormComponent implements OnInit {

  designations: any[] = [
    {
      value: 0,
      title: 'Associate / Trainee',
      description:
        'Entry-level software developers that assist the development team with all aspects of software design and coding.',
    },
    {
      value: 1,
      title: 'Software Engineer',
      description:
        'A software developer, a programmer or more recently a coder, is a person who creates computer software.',
    }
  ];


  private _hasUppercase: boolean = false;
  private _hasLowercase: boolean = false;
  private _hasNumber: boolean = false;
  private _has8Chars: boolean = false;

  get hasUppercase(): boolean {
    return this._hasUppercase;
  }
  get hasLowercase(): boolean {
    return this._hasLowercase;
  }
  get hasNumber(): boolean {
    return this._hasNumber;
  }
  get has8Chars(): boolean {
    return this._has8Chars;
  }
  get orientation(): StepperOrientation { return 'horizontal'; }

  isLinear = true;
  // currencies: Currency[] = CURRENCIES;
  hide = true;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  showPasswordReviewStep: boolean = false;
  showPasswordStrengthIndicator = false;
  profilePic: any;

  userDetailsFormGroup: FormGroup = this._formBuilder.group(
    {
      profilePic: ['', Validators.required],
      username: [
        '',
        [Validators.required, Validators.maxLength(30)],
      ],
      email: [
        '',
        [Validators.required, Validators.email],
      ],
      password: [
        '',
        [Validators.required, CustomValidators.InvalidPassword],
      ],
      confirmPassword: [
        '',
        [Validators.required, Validators.minLength(8)],
      ],
    },
    { validator: this.pwdConfirming('password', 'confirmPassword') }
  );

  AdditionalDetails: FormGroup = this._formBuilder.group(
  {
    brand: ['', [Validators.required]],
    brandUrl: ['', Validators.required],
    phone: ['', [Validators.required]],
    office: ['', [Validators.required]],
    instagram: ['']
  }
  );

  user: User | null = null;

  // sets mat-select's display/default/selected value as in formcontrol
  compareObjects(o1: Currency, o2: Currency): boolean {
    return o1.name === o2.name && o1.cc === o2.cc && o1.symbol === o2.symbol;
  }



  constructor(private _formBuilder: FormBuilder, private _router: Router, private _location: Location) { }

  ngOnInit() {
    // this._stateService.redirectToDashboard();
    // this._stateService.setTheme('#fff');
    this.userDetailsFormGroup
      .get('password')
      ?.valueChanges.subscribe((_) => this.computePasswordIndicator());
    this.computePasswordIndicator();
  }

  // utility
  getSplit(string: string | undefined) {
    return string ? string.split('').map((a) => a) : [];
  }

  //stepper
  selectionChange(event: StepperSelectionEvent) {
    if (event.selectedIndex === 3) { this.prepareReviewStep(); }
  }

  onFileChanged(event: any) {
    const files = event.target.files;
    if (files.length === 0) return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      alert('Only images are supported.');
      return;
    }

    const reader = new FileReader();
    const imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.profilePic = reader.result;
      this.userDetailsFormGroup.get('profilePic')?.setValue(this.profilePic);
    };
  }

  submit() {
    const users = !!localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users') as string) as User[] : [];
    users.push(this.user as User);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('loggedInUser', JSON.stringify(this.user));
    this._router.navigate(['dashboard']);
  }

  back() {
    this._location.back();
  }

  // private functions
  private prepareReviewStep() {
    this.assignFormToObject();
  }

  private assignFormToObject() {
    const userId = 'this._utilitiesService.generateGuid()';
    const profilePic = this.userDetailsFormGroup
      .get('profilePic')
      ?.value?.trim();
    const username = this.userDetailsFormGroup.get('username')?.value?.trim();
    const email = this.userDetailsFormGroup.get('email')?.value?.trim();
    const password = this.userDetailsFormGroup.get('password')?.value?.trim();
    // const currency = this.financeFormGroup.get('currency')?.value as Currency;
    // const monthlyBudget = this.financeFormGroup.get('monthlyBudget')
    //   ?.value as number;
    // const alertOn = this.financeFormGroup.get('alertOn')?.value as number;
    // this.user = new User(
    //   userId,
    //   profilePic,
    //   username,
    //   email,
    //   password,
    //   currency,
    //   monthlyBudget,
    //   alertOn,
    //   false
    // );
  }

  private computePasswordIndicator() {
    this._hasUppercase = false;
    this._hasLowercase = false;
    this._hasNumber = false;
    this._has8Chars = false;
    const password = this.userDetailsFormGroup.get('password')?.value;
    this._has8Chars = password.length >= 8;
    let i = 0;
    while (i < password.length) {
      const character = password.charAt(i);
      if (!isNaN(character)) {
        this._hasNumber = true;
      } else {
        if (character == character.toUpperCase()) {
          this._hasUppercase = true;
        }
        if (character == character.toLowerCase()) {
          this._hasLowercase = true;
        }
      }
      i++;
    }
  }

  private pwdConfirming(key: string, confirmationKey: string) {
    return (group: FormGroup) => {
      const input = group.controls[key];
      const confirmationInput = group.controls[confirmationKey];
      return confirmationInput.setErrors(
        input.value !== confirmationInput.value ? { notEquivalent: true } : null
      );
    };
  }

}

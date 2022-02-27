import { Injectable } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CATEGORIES } from '../mock/Categories';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  opportunityFormGroup: FormGroup;
  validityFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  async createForms() {
    this.validityFormGroup = this._formBuilder.group({
      start: new FormControl('', Validators.required),
      end: new FormControl('', Validators.required),
    });
    this.opportunityFormGroup = this._formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(250)]],
      validity: this.validityFormGroup,
      categories: [[], [Validators.required, Validators.maxLength(50)]],
      region: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }

  async setMockValues() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.opportunityFormGroup
      .get('title')
      .setValue('Promo for Air Force 1 sneakers');
    this.opportunityFormGroup
      .get('description')
      .setValue(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex, praesentium fugit, excepturi suscipitoptio vel, nostrum enim nobis veritatis magni. Harum vero architecto ea. Impedit voluptatum rerum magni cum.'
      );
    this.opportunityFormGroup
      .get('validity')
      .get('start')
      .setValue(new Date(year, month, 13));
    this.opportunityFormGroup
      .get('validity')
      .get('end')
      .setValue(new Date(year, month, 25));
    this.opportunityFormGroup.get('categories').setValue(CATEGORIES);
    this.opportunityFormGroup.get('region').setValue('Navi Mumbai, India');
  }
}

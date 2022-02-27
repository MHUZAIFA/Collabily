import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { CATEGORIES } from '../mock/Categories';
import { DateObj } from '../models/DateObj';
import { Opportunity } from '../models/Opportunity';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-opportunity-modal',
  templateUrl: './opportunity-modal.component.html',
  styleUrls: ['./opportunity-modal.component.css'],
})
export class OpportunityModalComponent implements OnInit {

  categories: string[] = CATEGORIES;

  opportunity: Opportunity = new Opportunity(
    '',
    '',
    '',
    new DateObj(new Date(), new Date()),
    [],
    ''
  );

  constructor(
    private _authService: AuthService,
    public _formService: FormService,
    public dialogRef: MatDialogRef<OpportunityModalComponent>
  ) {}
  ngOnInit(): void {
    this._formService.createForms();
    this._formService.setMockValues();
  }

  close() {
    this.dialogRef.close();
  }

  prepareReviewStep() {
    Object.assign(this.opportunity, this._formService.opportunityFormGroup.getRawValue());
    const loggedInUser = this._authService.getLoggedInUser();
    this.opportunity.user = loggedInUser;
  }

  submit() {
    console.log('Object sent to server', this.opportunity);
    this.close();
  }
}

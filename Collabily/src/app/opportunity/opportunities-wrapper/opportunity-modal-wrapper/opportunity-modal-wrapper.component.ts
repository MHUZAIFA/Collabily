import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OpportunityResponseCardComponent } from '../components/opportunity-response-card/opportunity-response-card.component';
import { OpportunityModalComponent } from './opportunity-modal/opportunity-modal.component';

export interface DialogData {
  id: string;
  redirectUri: string;
}

@Component({
  selector: 'app-opportunity-modal-wrapper',
  template: ``,
  styleUrls: [],
})
export class OpportunityModalWrapperComponent implements OnInit {
  private sub: any;

  constructor(
    public _dialog: MatDialog,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.sub = this._route.params.subscribe((params) => {
      const id = params['id'];
      this.openDialog(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private openDialog(id: string): void {
    const dialogRef = this._dialog.open(OpportunityModalComponent, {
      width: '600px',
      data: { id },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result) => {
      const redirectUri = !!result ? `../explore/${result}` : '../opportunities';
      this._router.navigate([redirectUri]);
    });
  }
}

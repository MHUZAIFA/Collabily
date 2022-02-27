import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar-wrapper',
  templateUrl: './sidebar-wrapper.component.html',
  styleUrls: ['./sidebar-wrapper.component.css']
})
export class SidebarWrapperComponent implements OnInit {

  private routeSub?: Subscription;
  private _id?: string;
  displayContent: boolean = false;

  @Input() title: string = 'Details';
  @Input() loading: boolean = true;
  @Input() redirectUri: string = '';

  constructor(private _route: ActivatedRoute, private _sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.demoSetup();
    this.displayContent = false;
    this.routeSub = this._route.params.subscribe(params => { this._id = params['id']; });
    this._sidebarService.openNav();
    setTimeout(() => {
      this.displayContent = true;
    }, 500);
  }

  closeNav() {
    this.displayContent = false;
    this._sidebarService.closeNav(this.redirectUri);
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  private demoSetup() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

}

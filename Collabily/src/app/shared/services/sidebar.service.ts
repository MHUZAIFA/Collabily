import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  private _sidebarWidth = '500px';
  get sidebarWidth(): string { return this._sidebarWidth; }
  set sidebarWidth(width: string) { this._sidebarWidth = !!width ? width : '500px' }

  constructor(private _router: Router, public breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 768px)']).subscribe((result) => {
      if (result.matches) {
        this.sidebarWidth = '100%';
      } else {
        this.sidebarWidth = this.sidebarWidth;
      }
      this.openNav();
    });
  }

  openNav() {
    setTimeout(() => {
      const _sidebar = document.getElementById('mySidenav');
      _sidebar ? (_sidebar.style.width = this.sidebarWidth) : '';
    }, 50);
  }

  closeNav(redirectUri: string) {
    const _sidebar = document.getElementById('mySidenav');
    _sidebar ? (_sidebar.style.width = '0') : '';
    setTimeout(() => {
      this._router.navigateByUrl(redirectUri);
    }, 300);
  }
}

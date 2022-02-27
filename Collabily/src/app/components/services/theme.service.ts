import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  get selectedTheme(): string {
    return localStorage.getItem('theme-color') as string;
  }
  get selectedImage(): string {
    return localStorage.getItem('theme-image') as string;
  }

  get is_mobile_device(): boolean {
    return this._is_mobile_device;
  }

  private _is_mobile_device = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this._is_mobile_device = true;
        } else {
          this._is_mobile_device = false;
        }
      });
  }

  changeTheme(new_color: string) {
    let $sidebar = $('.sidebar');
    let $sidebar_responsive = $('body > .navbar-collapse');
    if ($sidebar.length !== 0) {
      $sidebar.attr('data-color', new_color);
    }

    if ($sidebar_responsive.length != 0) {
      $sidebar_responsive.attr('data-color', new_color);
    }
    localStorage.setItem('theme-color', new_color);
  }

  changeImage(new_image: string) {
    let $sidebar = $('.sidebar');
    let $sidebar_img_container = $sidebar.find('.sidebar-background');
    let $full_page_background = $('.full-page-background');
    let $sidebar_responsive = $('body > .navbar-collapse');

    if ($sidebar_img_container.length != 0) {
      $sidebar_img_container.fadeOut('fast', function () {
        $sidebar_img_container.css(
          'background-image',
          'url("' + new_image + '")'
        );
        $sidebar_img_container.fadeIn('fast');
      });
    }

    if ($full_page_background.length != 0) {
      $full_page_background.fadeOut('fast', function () {
        $full_page_background.css(
          'background-image',
          'url("' + new_image + '")'
        );
        $full_page_background.fadeIn('fast');
      });
    }

    if ($sidebar_responsive.length != 0) {
      $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
    }

    localStorage.setItem('theme-image', new_image);
  }

  InitializeTheme() {
    if (!localStorage.getItem('theme-color')) {
      localStorage.setItem('theme-color', 'darkblue');
    }
    if (!localStorage.getItem('theme-image')) {
      localStorage.setItem('theme-image', './assets/img/sidebar-4.jpg');
    }
    this.changeTheme(this.selectedTheme);
    this.changeImage(this.selectedImage);
  }
}

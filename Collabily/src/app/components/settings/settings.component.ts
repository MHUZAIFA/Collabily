import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  get selectedTheme(): string {
    return this._themeService.selectedTheme;
  }
  get selectedImage(): string {
    return this._themeService.selectedImage;
  }

  loading: boolean = false;
  redirectUri: string = '';

  Themes = [
    { class: 'badge filter badge-darkblue', theme: 'darkblue' },
    { class: 'badge filter badge-purple', theme: 'purple' },
    { class: 'badge filter badge-azure', theme: 'azure' },
    { class: 'badge filter badge-green', theme: 'green' },
    { class: 'badge filter badge-orange', theme: 'orange' },
    { class: 'badge filter badge-danger', theme: 'danger' },
  ];

  Images = [
    { displayName: 'img-1', src: './assets/img/sidebar-1.jpg' },
    { displayName: 'img-2', src: './assets/img/sidebar-2.jpg' },
    { displayName: 'img-3', src: './assets/img/sidebar-3.jpg' },
    { displayName: 'img-4', src: './assets/img/sidebar-4.jpg' },
  ];

  constructor(private _router: Router, private _themeService: ThemeService) {}

  ngOnInit(): void {
    this.redirectUri = this._router.url
      .toString()
      .replace('(sidebar:settings)', '');
  }

  changeTheme(new_color: string) {
    this._themeService.changeTheme(new_color);
  }

  changeImage(new_image: string) {
    this._themeService.changeImage(new_image);
  }

}

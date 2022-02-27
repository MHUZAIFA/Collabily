import { Component, OnInit } from '@angular/core';
import { faFacebook, faFacebookF, faInstagram, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  facebook = faFacebookF;
  instagram = faInstagram;
  twitter = faTwitter;

  // constructor(private _stateService: StateService) { }

  ngOnInit(): void {
    // this._stateService.redirectToDashboard();
    // this._stateService.setTheme('#000');
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { faYoutube, faFacebookF, faInstagram, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-influencer-card',
  templateUrl: './influencer-card.component.html',
  styleUrls: ['./influencer-card.component.css']
})
export class InfluencerCardComponent implements OnInit {

  @Input() influencer: any;

  facebook = faFacebookF;
  instagram = faInstagram;
  twitter = faTwitter;
  youtube = faYoutube;

  constructor() { }

  ngOnInit(): void {
  }

}

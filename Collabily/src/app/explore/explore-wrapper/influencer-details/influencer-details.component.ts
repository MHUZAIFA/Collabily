import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-influencer-details',
  templateUrl: './influencer-details.component.html',
  styleUrls: ['./influencer-details.component.css']
})
export class InfluencerDetailsComponent implements OnInit {

  facebook = faFacebookF;
  instagram = faInstagram;
  twitter = faTwitter;
  youTube = faYoutube;

  constructor() { }

  ngOnInit(): void {
  }

  public map_ChartOptions = {};

  public map_ChartData = [
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
];


}

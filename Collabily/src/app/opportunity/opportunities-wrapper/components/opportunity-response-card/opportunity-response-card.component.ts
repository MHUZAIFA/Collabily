import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { DialogData } from '../../opportunity-modal-wrapper/opportunity-modal-wrapper.component';

@Component({
  selector: 'app-opportunity-response-card',
  templateUrl: './opportunity-response-card.component.html',
  styleUrls: ['./opportunity-response-card.component.css']
})
export class OpportunityResponseCardComponent implements OnInit {
  @Input() panelOpenState = false;

  facebook = faFacebookF;
  instagram = faInstagram;
  twitter = faTwitter;
  youtube = faYoutube;

  responders = [
    {
      name: 'Marques Brownlee',
      image: '../../../../assets/img/faces/mkbhd.jpg',
      categories: ['Technology', 'Youtuber'],
      followers: {
        insta: '3.3M',
        facebook: '600K',
        twitter: '5.2M',
        youtube: '15.3M',
      },
    },
    {
      name: 'Selena Gomez',
      image: '../../../../assets/img/faces/selena.jfif',
      categories: ['Music', 'Fashion'],
      followers: {
        insta: '296M',
        facebook: '86M',
        twitter: '65.5M',
        youtube: '29M',
      },
    },
    {
      name: 'Elon Musk',
      image: '../../../../assets/img/faces/elon.jpg',
      categories: ['Space', 'Technology', 'Automobile'],
      followers: { insta: '0', facebook: '0', twitter: '73.1M', youtube: '0' },
    },
    {
      name: 'Vineeta Singh',
      image: '../../../../assets/img/faces/vineeta.jpg',
      categories: ['Cosmetics', 'Business'],
      followers: {
        insta: '320K',
        facebook: '2.35K',
        twitter: '47K',
        youtube: '0',
      },
    },
    {
      name: 'Neymar Jr',
      image: '../../../../assets/img/faces/neymar.jpg',
      categories: ['Music', 'Fashion'],
      followers: {
        insta: '296M',
        facebook: '86M',
        twitter: '65.5M',
        youtube: '29M',
      }
    },
    {
      name: 'Marques Brownlee',
      image: '../../../../assets/img/faces/mkbhd.jpg',
      categories: ['Technology', 'Youtuber'],
      followers: {
        insta: '3.3M',
        facebook: '600K',
        twitter: '5.2M',
        youtube: '15.3M',
      },
    },
    {
      name: 'Selena Gomez',
      image: '../../../../assets/img/faces/selena.jfif',
      categories: ['Music', 'Fashion'],
      followers: {
        insta: '296M',
        facebook: '86M',
        twitter: '65.5M',
        youtube: '29M',
      },
    },
    {
      name: 'Elon Musk',
      image: '../../../../assets/img/faces/elon.jpg',
      categories: ['Space', 'Technology', 'Automobile'],
      followers: { insta: '0', facebook: '0', twitter: '73.1M', youtube: '0' },
    },
    {
      name: 'Vineeta Singh',
      image: '../../../../assets/img/faces/vineeta.jpg',
      categories: ['Cosmetics', 'Business'],
      followers: {
        insta: '320K',
        facebook: '2.35K',
        twitter: '47K',
        youtube: '0',
      },
    },
    {
      name: 'Neymar Jr',
      image: '../../../../assets/img/faces/neymar.jpg',
      categories: ['Music', 'Fashion'],
      followers: {
        insta: '296M',
        facebook: '86M',
        twitter: '65.5M',
        youtube: '29M',
      }
    }
  ];

  constructor(private _router: Router) {}

  // constructor(private _router: Router,public dialogRef: MatDialogRef<OpportunityResponseCardComponent>,
  //   @Inject(MAT_DIALOG_DATA)
  //   private _data: DialogData) { }

  ngOnInit(): void {
  }

  viewResponderDetails() {
    this._router.navigate(['../../explore', 'b3351ae3-e4cf-4834-9dc7-adc14c3e31a7']);
  }

  // close() {
  //   this.dialogRef.close();
  // }

}

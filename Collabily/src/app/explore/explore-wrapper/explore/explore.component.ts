import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {

  influencers = [
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
  ];

  sports = [
    {
      name: 'Cristiano Ronaldo',
      image: '../../../../assets/img/faces/cr7.jpg',
      categories: ['Sports', 'Fitness', 'Lifestyle'],
      followers: {
        insta: '401M',
        facebook: '150M',
        twitter: '97.2M',
        youtube: '2M',
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
      },
    },
    {
      name: 'Virat Kohli',
      image: '../../../../assets/img/faces/kohli.jpg',
      categories: ['Space', 'Technology', 'Automobile'],
      followers: {
        insta: '120M',
        facebook: '85M',
        twitter: '73.1M',
        youtube: '1M',
      },
    },
    {
      name: 'Ronda Rousey',
      image: '../../../../assets/img/faces/Rousey.jpg',
      categories: ['Cosmetics', 'Business'],
      followers: {
        insta: '320K',
        facebook: '2.35K',
        twitter: '47K',
        youtube: '0',
      },
    },
  ];

  Music = [
    {
      name: 'Selena Gomez',
      image: '../../../../assets/img/faces/selena.jfif',
      categories: ['Sports', 'Fitness', 'Lifestyle'],
      followers: {
        insta: '401M',
        facebook: '150M',
        twitter: '97.2M',
        youtube: '2M',
      },
    },
    {
      name: 'The Weeknd',
      image: '../../../../assets/img/faces/weeknd.jpeg',
      categories: ['Music', 'Fashion'],
      followers: {
        insta: '296M',
        facebook: '86M',
        twitter: '65.5M',
        youtube: '29M',
      },
    },
    {
      name: 'Taylor Swift',
      image: '../../../../assets/img/faces/taylor.jpeg',
      categories: ['Space', 'Technology', 'Automobile'],
      followers: {
        insta: '120M',
        facebook: '85M',
        twitter: '73.1M',
        youtube: '1M',
      },
    },
    {
      name: 'Arijit Singh',
      image: '../../../../assets/img/faces/arijit.jpg',
      categories: ['Cosmetics', 'Business'],
      followers: {
        insta: '320K',
        facebook: '2.35K',
        twitter: '47K',
        youtube: '0',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  showFilter() {
    // will open popup to select filters
  }
}

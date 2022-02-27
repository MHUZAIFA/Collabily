import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunity-details',
  templateUrl: './opportunity-details.component.html',
  styleUrls: ['./opportunity-details.component.css'],
})
export class OpportunityDetailsComponent implements OnInit {
  loading = false;
  redirectUri = 'opportunities';
  panelOpenState = false;

  item = {
    logo: '../../../../../assets/img/brands/nike.jpg',
    brand: 'Nike',
    title: 'Promo for Air Force 1 sneakers',
    status: 'open',
    opportunity_id: '2c816d02-4aa8-4987-b5da-ac6180899c69',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit autem deserunt eum nesciunt, quis doloremque? Doloremque eaque impedit dolores esse, incidunt rerum laboriosam neque numquam, delectus ratione aut pariatur?',
    categories: ['Fitness', 'T-Shirt'],
    postedBy: 'Khan, Azhar',
    region: 'Mumbai, India',
    postedOn: '12 January, 2022',
  };

  constructor() {}

  ngOnInit(): void {}
}

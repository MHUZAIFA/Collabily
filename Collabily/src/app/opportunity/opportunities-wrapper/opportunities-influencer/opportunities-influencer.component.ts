import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-opportunities-influencer',
  templateUrl: './opportunities-influencer.component.html',
  styleUrls: ['./opportunities-influencer.component.css'],
})
export class OpportunitiesInfluencerComponent implements OnInit {
  recommended = [
    {
      logo: '../../../../assets/img/brands/nike.jpg',
      brand: 'Nike',
      opportunity_id: 'cc7bce13-8b4a-4834-a617-4afcf0a95d9f',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit autem deserunt eum nesciunt, quis doloremque? Doloremque eaque impedit dolores esse, incidunt rerum laboriosam neque numquam, delectus ratione aut pariatur?',
      categories: ['Fitness', 'Shoes', 'Mercurial'],
      postedBy: 'Huzaifa, Mohammed',
      region: 'Mumbai, India',
      postedOn: '02 January, 2022',
    },
    {
      logo: '../../../../assets/img/brands/adidas.jpg',
      brand: 'Adidas',
      opportunity_id: '56f1a184-5c2e-4a2d-8c1e-cbacf3eb7aeb',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit autem deserunt eum nesciunt, quis doloremque? Doloremque eaque impedit dolores esse, incidunt rerum laboriosam neque numquam, delectus ratione aut pariatur?',
      categories: ['Fitness', 'T-Shirt'],
      postedBy: 'Khan, Azhar',
      region: 'Mumbai, India',
      postedOn: '12 January, 2022',
    },
    {
      logo: '../../../../assets/img/brands/nike.jpg',
      brand: 'Nike',
      opportunity_id: 'a848c6d9-2adf-451d-82e6-9df9507f97cf',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit autem deserunt eum nesciunt, quis doloremque? Doloremque eaque impedit dolores esse, incidunt rerum laboriosam neque numquam, delectus ratione aut pariatur?',
      categories: ['Casual', 'Shorts', 'Lifestyle'],
      postedBy: 'Mukkat, Geo',
      region: 'Mumbai, India',
      postedOn: '02 January, 2022',
    },
  ];

  all = [
    {
      logo: '../../../../assets/img/brands/adidas.jpg',
      brand: 'Adidas',
      opportunity_id: 'ed918935-ee7d-4894-9a23-1374d5ce0c57',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit autem deserunt eum nesciunt, quis doloremque? Doloremque eaque impedit dolores esse, incidunt rerum laboriosam neque numquam, delectus ratione aut pariatur?',
      categories: ['Fitness', 'T-Shirt'],
      postedBy: 'Khan, Azhar',
      region: 'Mumbai, India',
      postedOn: '12 January, 2022',
    },
    {
      logo: '../../../../assets/img/brands/nike.jpg',
      brand: 'Nike',
      opportunity_id: '8741fbde-f89a-4a9f-81d2-373a0c2099bc',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit autem deserunt eum nesciunt, quis doloremque? Doloremque eaque impedit dolores esse, incidunt rerum laboriosam neque numquam, delectus ratione aut pariatur?',
      categories: ['Fitness', 'Shoes', 'Mercurial'],
      postedBy: 'Huzaifa, Mohammed',
      region: 'Mumbai, India',
      postedOn: '02 January, 2022',
    },
    {
      logo: '../../../../assets/img/brands/nike.jpg',
      brand: 'Nike',
      opportunity_id: '63419fe2-f5f5-4e43-9737-ad215b70807c',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit autem deserunt eum nesciunt, quis doloremque? Doloremque eaque impedit dolores esse, incidunt rerum laboriosam neque numquam, delectus ratione aut pariatur?',
      categories: ['Casual', 'Shorts', 'Lifestyle'],
      postedBy: 'Mukkat, Geo',
      region: 'Mumbai, India',
      postedOn: '02 January, 2022',
    },
  ];

  searchTerm = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}

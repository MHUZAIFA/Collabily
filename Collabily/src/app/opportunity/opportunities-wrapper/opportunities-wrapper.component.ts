import { Component, OnInit } from '@angular/core';

export enum Experience {
  BrandManager,
  Influencer
}

@Component({
  selector: 'app-opportunities-wrapper',
  templateUrl: './opportunities-wrapper.component.html',
  styleUrls: ['./opportunities-wrapper.component.css']
})
export class OpportunitiesWrapperComponent implements OnInit {

  Experience = Experience;
  experience: Experience = Experience.BrandManager;

  constructor() { }

  ngOnInit(): void {
    this.setExperience();
  }

  private setExperience() {
    this.experience = Experience.BrandManager;
  }

}

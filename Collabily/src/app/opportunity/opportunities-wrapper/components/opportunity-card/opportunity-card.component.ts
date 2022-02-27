import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experience } from '../../opportunities-wrapper.component';
import { OpportunityResponseCardComponent } from '../opportunity-response-card/opportunity-response-card.component';

@Component({
  selector: 'app-opportunity-card',
  templateUrl: './opportunity-card.component.html',
  styleUrls: ['./opportunity-card.component.css']
})
export class OpportunityCardComponent {

  @Input() item: any;
  @Input() experience: Experience = Experience.BrandManager;
  @Input() is_mobile_device: boolean = false;

  get canBookmark(): boolean { return this.experience === Experience.Influencer; }
  get canRespondToOpportunity(): boolean { return this.experience === Experience.Influencer; }
  get canViewResults(): boolean { return this.experience === Experience.BrandManager; }
  get canEdit(): boolean { return this.experience === Experience.BrandManager; }

  bookmarked: boolean = false;


}

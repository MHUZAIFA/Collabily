import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesInfluencerComponent } from './opportunities-influencer.component';

describe('OpportunitiesInfluencerComponent', () => {
  let component: OpportunitiesInfluencerComponent;
  let fixture: ComponentFixture<OpportunitiesInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunitiesInfluencerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

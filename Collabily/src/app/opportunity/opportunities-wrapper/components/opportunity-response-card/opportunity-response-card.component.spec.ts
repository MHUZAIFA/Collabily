import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityResponseCardComponent } from './opportunity-response-card.component';

describe('OpportunityResponseCardComponent', () => {
  let component: OpportunityResponseCardComponent;
  let fixture: ComponentFixture<OpportunityResponseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityResponseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityResponseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

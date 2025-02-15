import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityCardComponent } from './opportunity-card.component';

describe('OpportunityCardComponent', () => {
  let component: OpportunityCardComponent;
  let fixture: ComponentFixture<OpportunityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

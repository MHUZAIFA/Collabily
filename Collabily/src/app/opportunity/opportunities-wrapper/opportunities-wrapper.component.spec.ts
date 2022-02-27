import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesWrapperComponent } from './opportunities-wrapper.component';

describe('OpportunitiesWrapperComponent', () => {
  let component: OpportunitiesWrapperComponent;
  let fixture: ComponentFixture<OpportunitiesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunitiesWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

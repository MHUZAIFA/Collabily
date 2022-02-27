import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreWrapperComponent } from './explore-wrapper.component';

describe('ExploreWrapperComponent', () => {
  let component: ExploreWrapperComponent;
  let fixture: ComponentFixture<ExploreWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesBrandManagerComponent } from './opportunities-brand-manager.component';

describe('OpportunitiesBrandManagerComponent', () => {
  let component: OpportunitiesBrandManagerComponent;
  let fixture: ComponentFixture<OpportunitiesBrandManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunitiesBrandManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesBrandManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

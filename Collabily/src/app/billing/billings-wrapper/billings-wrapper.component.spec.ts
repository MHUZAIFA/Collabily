import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingsWrapperComponent } from './billings-wrapper.component';

describe('BillingsWrapperComponent', () => {
  let component: BillingsWrapperComponent;
  let fixture: ComponentFixture<BillingsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

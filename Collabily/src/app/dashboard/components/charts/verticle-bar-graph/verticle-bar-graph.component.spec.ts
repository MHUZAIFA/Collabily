import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticleBarGraphComponent } from './verticle-bar-graph.component';

describe('VerticleBarGraphComponent', () => {
  let component: VerticleBarGraphComponent;
  let fixture: ComponentFixture<VerticleBarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticleBarGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticleBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

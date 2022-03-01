import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedVerticleBarGraphComponent } from './grouped-verticle-bar-graph.component';

describe('GroupedVerticleBarGraphComponent', () => {
  let component: GroupedVerticleBarGraphComponent;
  let fixture: ComponentFixture<GroupedVerticleBarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupedVerticleBarGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedVerticleBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

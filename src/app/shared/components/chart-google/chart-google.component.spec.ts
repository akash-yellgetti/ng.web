import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGoogleComponent } from './chart-google.component';

describe('ChartGoogleComponent', () => {
  let component: ChartGoogleComponent;
  let fixture: ComponentFixture<ChartGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartGoogleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWeatherReportComponent } from './get-weather-report.component';

describe('GetWeatherReportComponent', () => {
  let component: GetWeatherReportComponent;
  let fixture: ComponentFixture<GetWeatherReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetWeatherReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from 'src/app/components/services/theme.service';

@Component({
  selector: 'app-dashboard-wrapper',
  templateUrl: './dashboard-wrapper.component.html',
  styleUrls: ['./dashboard-wrapper.component.css']
})
export class DashboardWrapperComponent implements OnInit {

  @ViewChild('gaugeContainer') gaugeChartContainer: ElementRef;
  @ViewChild('areaContainer') areaChartContainer: ElementRef;
  @ViewChild('groupedBarGraph') groupedBarGraphContainer: ElementRef;
  @ViewChild('multipleAreaChart') multipleAreaChartContainer: ElementRef;
  @ViewChild('lineChart') lineChartContainer: ElementRef;
  @ViewChild('mapChart') mapChartContainer: ElementRef;


  constructor(public _themeService: ThemeService) { }

  ngOnInit(): void {
  }

}

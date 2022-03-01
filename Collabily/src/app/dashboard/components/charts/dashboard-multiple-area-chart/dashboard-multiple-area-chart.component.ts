import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MultipleAreaChartMockData } from '../mock/multiple-area-chartmock';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-dashboard-multiple-area-chart',
  templateUrl: './dashboard-multiple-area-chart.component.html',
  styleUrls: ['./dashboard-multiple-area-chart.component.css']
})
export class DashboardMultipleAreaChartComponent implements OnInit {

  @Input() container: ElementRef = undefined;
  curve = shape.curveCardinal.tension(0.6);

  data: any[];
  view: [number, number] = [undefined, undefined];

  // options
  legend: boolean = true;
  legendTitle: string = ''
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  timeline: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;
  colorScheme: Color = {
    name: 'Custom_pie_color_scheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#000061', '#3065ab', '#9c25a7'],
  };


  ngOnInit(): void {
    this.data = MultipleAreaChartMockData;
  }

  ngAfterViewInit(): void {
    setTimeout(() => { this.onResize(); }, 100);
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onResize() {
    const containerHeight = this.container.nativeElement.clientHeight;
    const containerWidth = this.container.nativeElement.clientWidth;
    this.view = [containerWidth - 0, containerHeight - 150];
  }

}

import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { opportunityByStatus } from './mock/opened-closed-opportunities.mock.data';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-stacked-area-chart',
  templateUrl: './stacked-area-chart.component.html',
  styleUrls: ['./stacked-area-chart.component.css'],
})
export class StackedAreaChartComponent implements OnInit {
  @Input() containerHeight: number = undefined;
  @Input() containerWidth: number = undefined;
  @Input() container: ElementRef = undefined;
  curve = shape.curveCardinal.tension(0.4);

  opportunityByStatus = opportunityByStatus;
  view: [number, number] = [undefined, undefined];

  // options
  legend: boolean = true;
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
    domain: ['#000061', '#676767'],
  };

  constructor() {
    Object.assign(this, { opportunityByStatus });
  }

  ngOnInit(): void {
    this.onResize();
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onResize() {
    const height = this.container.nativeElement.clientHeight - 70;
    const width = this.container.nativeElement.clientWidth;
    if (this.container) {
      this.view = [width, height];
    }
  }
}

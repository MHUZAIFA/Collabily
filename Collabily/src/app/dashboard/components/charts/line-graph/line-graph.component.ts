import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { LineChartMockData } from '../mock/line-graph.mock';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit, AfterViewInit {

  @Input() container: ElementRef = undefined;
  curve = shape.curveCardinal.tension(0.7);

  multi: any[];
  view: [number, number] = [undefined, undefined];

  // options
  animations: boolean = false;
  showXAxis: boolean = false;
  showYAxis: boolean = false;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = false;
  yAxisLabel: string = '';
  legendTitle: string = '';
  legendPosition: LegendPosition = LegendPosition.Below;
  xAxis: boolean = true;
  yAxis: boolean = true;
  timeline: boolean = true;
  legend: boolean = true;

  colorScheme: Color = {
    name: 'Custom_line_color_scheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#833AB4', '#3b5998', '#FF0000', '#1DA1F2'],
  };

  constructor() { }

  ngOnInit(): void {
    this.multi = LineChartMockData;
    const single = [...this.multi];
    const max = single.sort((a, b) => { return b.value - a.value })[0].value;
  }

  ngAfterViewInit(): void {
    setTimeout(() => { this.onResize(); }, 100);
  }

 onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onResize() {
    const containerHeight = this.container.nativeElement.clientHeight;
    const containerWidth = this.container.nativeElement.clientWidth;
    this.view = [containerWidth - 10, containerHeight - 210];
  }
}

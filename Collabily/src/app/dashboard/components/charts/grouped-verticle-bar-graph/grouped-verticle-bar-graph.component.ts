import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { GroupedVerticleBarChartMockData } from '../mock/grouped-verticle-bar-chart.mock';

@Component({
  selector: 'app-grouped-verticle-bar-graph',
  templateUrl: './grouped-verticle-bar-graph.component.html',
  styleUrls: ['./grouped-verticle-bar-graph.component.css']
})
export class GroupedVerticleBarGraphComponent implements OnInit, AfterViewInit {

  @Input() container: ElementRef = undefined;

  multi: any[];
  view: [number, number] = [undefined, undefined];

  // options
  animations: boolean = false;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = false;
  yAxisLabel: string = '';
  legendTitle: string = '';
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme: Color = {
    name: 'Custom_vbc_color_scheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#000061', '#676767']
  };

  constructor() { }

  ngOnInit(): void {
    this.multi = GroupedVerticleBarChartMockData;
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
    this.view = [containerWidth, containerHeight + 15];
  }

}

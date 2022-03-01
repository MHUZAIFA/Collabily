import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { GaugeChartMockData } from '../mock/gauge-chart.mock';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css'],
})
export class GaugeChartComponent implements OnInit, AfterViewInit {
  @Input() container: ElementRef = undefined;

  single: any[];
  view: [number, number] = [undefined, undefined];
  legend: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;
  max = 0;

  colorScheme: Color = {
    name: 'Custom_gauge_color_scheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#833AB4', '#3b5998', '#FF0000', '#1DA1F2'],
  };

  constructor() {}

  ngOnInit(): void {
    this.single = GaugeChartMockData;
    const single = [...this.single];
    const max = single.sort((a, b) => { return b.value - a.value })[0].value;
    this.max = max + 7;
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
    this.view = [containerWidth + 80, containerHeight + 80];
  }
}

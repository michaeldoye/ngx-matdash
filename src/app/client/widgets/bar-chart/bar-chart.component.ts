import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngxtemplate-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  @Input() data: any;
  @Input() cardTitle: string;

  onSelect(event) {
    console.log(event);
  }

}

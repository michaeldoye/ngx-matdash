import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngxtemplate-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent {

  @Input() data: any; 

  onSelect(event) {
    console.log(event);
  }

}

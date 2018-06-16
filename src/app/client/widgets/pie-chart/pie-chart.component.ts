import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngxtemplate-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  @Input() data: any; 

  onSelect(event) {
    console.log(event);
  }

}

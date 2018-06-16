import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngxtemplate-advanced-pie-chart',
  templateUrl: './advanced-pie-chart.component.html',
  styleUrls: ['./advanced-pie-chart.component.scss']
})
export class AdvancedPieChartComponent {

  @Input() data: any; 

  onSelect(event) {
    console.log(event);
  }

}

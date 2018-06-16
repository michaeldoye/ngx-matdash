import { Component } from '@angular/core';
import { flyInOut } from '@core/utils/route.animation';

@Component({
  selector: 'ngxtemplate-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [flyInOut]
})
export class DashboardComponent {

  chardata = {
    data: chartData,
    options: {
      view: [550, 300],
      showXAxis: false,
      showYAxis: true,
      gradient: false,
      showLegend: false,
      showXAxisLabel: true,
      xAxisLabel: 'Country',
      showYAxisLabel: false,
      yAxisLabel: 'Population',
      colorScheme: {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
      }
    },
    gaugeOptons: {
      gaugeMin: 0,
      gaugeMax: 100,
      gaugeLargeSegments: 10,
      gaugeSmallSegments: 5,
      gaugeTextValue: '',
      gaugeUnits: 'alerts',
      gaugeAngleSpan: 240,
      gaugeStartAngle: -120,
      gaugeShowAxis:  true,
      gaugeValue: 50, // linear gauge value
      gaugePreviousValue: 70,
    }
  };

}


export const chartData = [
  {
    "name": "Germany",
    "value": 89400
  },
  {
    "name": "USA",
    "value": 50000
  },
  {
    "name": "France",
    "value": 72000
  },
  {
    "name": "South Africa",
    "value": 24000
  },
  {
    "name": "UK",
    "value": 94000
  },
  {
    "name": "Spain",
    "value": 41000
  }
];
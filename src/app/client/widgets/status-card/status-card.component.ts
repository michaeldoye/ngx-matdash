import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngxtemplate-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent {

  @Input() data;; 

  onSelect(event) {
    console.log(event);
  }

  statusValueFormat(c): string {
    switch(c.data.extra ? c.data.extra.format : '') {
      case 'currency':
        return `\$${Math.round(c.value).toLocaleString()}`;
      case 'time':
        return this.multiFormat(c.value);
      case 'percent':
        return `${Math.round(c.value * 100)}%`;
      default:
        return c.value.toLocaleString();
    }
  }

  statusLabelFormat(c): string {
    return `${c.label}<br/><small class="number-card-label">This week</small>`;
  }

  multiFormat(value) {
    if (value < 1000) return `${value.toFixed(2)}ms`;
    value /= 1000;
    if (value < 60) return `${value.toFixed(2)}s`;
    value /= 60;
    if (value < 60) return `${value.toFixed(2)}mins`;
    value /= 60;
    return `${value.toFixed(2)}hrs`;
  }
}

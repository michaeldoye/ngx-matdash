import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from '@widget/bar-chart/bar-chart.component';
import { DashboardComponent } from '@widget/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StatusCardComponent } from '@widget/status-card/status-card.component';
import { AdvancedPieChartComponent } from '@widget/advanced-pie-chart/advanced-pie-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    NgxChartsModule,
    FlexLayoutModule
  ],
  declarations: [
    DashboardComponent,
    BarChartComponent,
    StatusCardComponent,
    AdvancedPieChartComponent,
    PieChartComponent,
    GaugeChartComponent
  ],
  exports: [
    DashboardComponent,
  ]
})
export class WidgetsModule { }

import {Component, Input, OnChanges} from '@angular/core';
import {Position} from '../../../../../core/models/Position';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  ChartOptions,
  ChartType,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

@Component({
  selector: 'app-portfolio-position-chart',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './portfolio-position-chart-component.html',
  styleUrl: './portfolio-position-chart-component.css',
  standalone: true
})
export class PortfolioPositionChartComponent implements OnChanges {

  @Input() positions!: Position[];

  public chartLabels: string[] = [];
  public chartData: number[] = [];
  public chartType: ChartType = 'bar';
  public chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {display: false},
      tooltip: {enabled: true}
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  ngOnChanges() {
    if (this.positions && this.positions.length) {
      this.chartLabels = this.positions.map(p => p.symbol);
      this.chartData = this.positions.map(p => p.quantity * p.averagePrice);
    }
  }
}

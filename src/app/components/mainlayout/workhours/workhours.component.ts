import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-workhours',
  templateUrl: './workhours.component.html',
  styleUrls: ['./workhours.component.css']
})
export class WorkhoursComponent implements AfterViewInit {
 pieChart: Chart | undefined;
  barChart: Chart | undefined;
  showChart = true;
Chart: any;
// show: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    // Load charts if toggle is active
    if (this.showChart) {
      this.createCharts();
    }
  }

  showAndSpinChart() {
    this.showChart = !this.showChart;
    if (this.showChart) {
      this.createCharts();
    } else {
      this.destroyCharts();
    }
  }

  createCharts() {
    setTimeout(() => {
      this.createPieChart();
      this.createBarChart();
    }, 0);
  }

  destroyCharts() {
    if (this.pieChart) {
      this.pieChart.destroy();
      this.pieChart = undefined;
    }
    if (this.barChart) {
      this.barChart.destroy();
      this.barChart = undefined;
    }
  }

  createPieChart() {
    const canvas = document.getElementById('attendancePieChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (this.pieChart) {
      this.pieChart.destroy();
    }

    let rotation = 0;

    // Custom plugin to spin the pie chart
    const rotationPlugin = {
      id: 'rotationPlugin',
      beforeDraw: (chart: any) => {
        rotation += 0.01;
        chart.options.rotation = rotation;
      }
    };

    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Present', 'WFH', 'Break', 'Absent', 'Week Off', 'Holiday'],
        datasets: [{
          data: [5, 3, 1, 0, 0, 0],
          backgroundColor: ['#4caf50', '#9c27b0', '#ffeb3b', '#f44336', '#9e9e9e', '#2196f3']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          animateRotate: true,
          duration: 1000
        },
        plugins: {
          legend: {
            position: 'right'
          }
        },
        rotation: rotation
      },
      plugins: [rotationPlugin]
    });
  }

  createBarChart() {
    const canvas = document.getElementById('attendanceBarChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (this.barChart) {
      this.barChart.destroy();
    }

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Present', 'Absent', 'WFH', 'Holiday', 'Present'],
        datasets: [{
          label: 'Work Hours',
          data: [8, 0, 6, 0, 9],
          backgroundColor: [
            '#4caf50', // Present
            '#f44336', // Absent
            '#9c27b0', // WFH
            '#9e9e9e', // Holiday
            '#4caf50'  // Present again
          ],
          barThickness: 20,
          maxBarThickness: 25
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false, // Disable animation for bar chart
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            max: 10
          }
        }
      }
    });
  }

}

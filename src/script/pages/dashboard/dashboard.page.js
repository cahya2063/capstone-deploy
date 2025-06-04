import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
export default class DashboardPage {
  async render() {
    return `
        <div class="dash-card">
          <div class="dash-item">Wisata</div>
          <div class="dash-item">Pengguna</div>
          <div class="dash-item">Data</div>
          <div class="dash-item">Total</div>
        </div>
        <div class="chart-container">
            <canvas id="barChart" class="chart-item-1"></canvas>
            <canvas id="doughnutChart" class="chart-item-2"></canvas>
        </div>
        `;
  }
  async afterRender() {
    const ctx = document.getElementById('doughnutChart').getContext('2d');

    const doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const ctx1 = document.getElementById('barChart').getContext('2d');

    const barChart = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
        datasets: [
          {
            label: 'Jumlah Pengunjung',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

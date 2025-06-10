import { Chart, registerables } from 'chart.js';
import { getSaveScan } from '../../data/indexed_db';
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
        <div class="scan-list-container">
          <h3>Scan History</h3>
          <ul id="scanList" class="scan-list"></ul>
        </div>
        `;
  }
  async afterRender() {
    this.initChart();
    this.displayScanData();
  }

  async initChart() {
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

  async displayScanData() {
    const data = await getSaveScan();
    const listContainer = document.getElementById('scanList');

    if (!data.length) {
      listContainer.innerHTML = '<li>Belum ada hasil scan yang tersimpan.</li>';
      return;
    }

    listContainer.innerHTML = data
      .map(
        (item) => `
  <li style="display: flex; align-items: center; justify-content: space-between; padding: 8px; border-bottom: 1px solid #ddd;">
    <div>
      <strong>Nama:</strong> ${item.label_output || 'Tidak ada nama'}
    </div>
    <button class="save-btn" data-id="${item.id}" title="Simpan data ini">
      💾
    </button>
  </li>
`,
      )
      .join('');
  }
}

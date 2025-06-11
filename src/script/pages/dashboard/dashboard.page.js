import { Chart, registerables } from 'chart.js';
import DashboardPresenter from './dashboard-presenter';

Chart.register(...registerables);

export default class DashboardPage {
  constructor() {
    this.presenter = new DashboardPresenter(this); // inject view
  }

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
    this.presenter.loadScanHistory();
  }

  async initChart() {
    const ctx = document.getElementById('doughnutChart').getContext('2d');
    const ctx1 = document.getElementById('barChart').getContext('2d');

    new Chart(ctx, {
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
          y: { beginAtZero: true },
        },
      },
    });

    new Chart(ctx1, {
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
          y: { beginAtZero: true },
        },
      },
    });
  }

  showScanList(unSavedData, allData) {
    const listContainer = document.querySelector('.scan-list-container');

    if (!unSavedData.length) {
      listContainer.innerHTML = '<p>Belum ada history scan.</p>';
      return;
    }

    const maxDisplay = 5;
    const recentData = unSavedData.slice(-maxDisplay);

    listContainer.innerHTML = recentData
      .map(
        (item) => `
      <div class="save-scan-item">
        <strong>Scan :</strong> ${item.label_output || 'Tidak ada nama'}
        <button class="save-btn btn" data-id="${item.id}" title="Simpan data ini">
          save scan
        </button>
      </div>
    `,
      )
      .join('');

    document.querySelectorAll('.save-btn').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        this.presenter.saveScanData(id, allData);
      });
    });
  }
}
